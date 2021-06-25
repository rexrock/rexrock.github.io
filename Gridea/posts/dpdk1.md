---
title: '使用testpmd验证CX5网卡rte_flow功能'
date: 2019-11-07 17:31:00
tags: [DPDK]
published: true
hideInList: false
feature: 
isTop: false
---

## 1. 测试环境说明

网卡：Mellanox cx4/cx5
驱动：OFED 4.3/4.5/5.3
DPDK： 18.05、18.11
拓扑：
![enter description here](https://rexrock.github.io/post-images/1624620266777.png)

## 2. 初始化配置网络
由于是使用VF测试，所以不依赖外部环境，也不依赖物理网口的link状态，只要你有CX4/CX5的网卡就行：

```
# 修改网卡名称
netdev=eth2
# 创建VF
echo 4 > /sys/class/net/${netdev}/device/sriov_numvfs
# 获取VF-iD
vf_num=`cat /sys/class/net/${netdev}/device/sriov_numvfs`
vf1_idx=$((vf_num-4))
vf2_idx=$((vf_num-3))
vf3_idx=$((vf_num-2))
vf4_idx=$((vf_num-1))
# 获取每个VF对应的以太网的网口名称
vf1_dev=`ls /sys/class/net/${netdev}/device/virtfn${vf1_idx}/net/`
vf2_dev=`ls /sys/class/net/${netdev}/device/virtfn${vf2_idx}/net/`
vf3_dev=`ls /sys/class/net/${netdev}/device/virtfn${vf3_idx}/net/`
vf4_dev=`ls /sys/class/net/${netdev}/device/virtfn${vf4_idx}/net/`
# 获取每个VF对应的PCI
vf1_pci=`ls /sys/class/net/${netdev}/device/virtfn${vf1_idx} -l | awk -F '/' '{print $NF}'`
vf2_pci=`ls /sys/class/net/${netdev}/device/virtfn${vf2_idx} -l | awk -F '/' '{print $NF}'`
vf3_pci=`ls /sys/class/net/${netdev}/device/virtfn${vf3_idx} -l | awk -F '/' '{print $NF}'`
vf4_pci=`ls /sys/class/net/${netdev}/device/virtfn${vf4_idx} -l | awk -F '/' '{print $NF}'`
# 列出上面获取到的数据
echo " >> init netdev"
echo "    $netdev vf $vf1_idx : $vf1_pci : $vf1_dev"
echo "    $netdev vf $vf2_idx : $vf2_pci : $vf2_dev"
echo "    $netdev vf $vf3_idx : $vf3_pci : $vf3_dev"
echo "    $netdev vf $vf4_idx : $vf4_pci : $vf4_dev"
# 设置VF link state为enable，这样不管物理网口link状态，VF总是UP的
ip link set $netdev vf $vf1_idx state enable
ip link set $netdev vf $vf2_idx state enable
ip link set $netdev vf $vf3_idx state enable
ip link set $netdev vf $vf4_idx state enable
# 设置VF1的vlan、mac、限速
ip link set ${netdev} vf ${vf1_idx} vlan 3001
ip link set ${netdev} vf ${vf1_idx} mac fa:65:a1:a6:75:01
ip link set ${netdev} vf ${vf1_idx} rate 1000
echo -n "${vf1_pci}" > /sys/bus/pci/drivers/mlx5_core/unbind
echo -n "${vf1_pci}" > /sys/bus/pci/drivers/mlx5_core/bind
# 设置VF2的vlan、mac、限速
ip link set ${netdev} vf ${vf2_idx} vlan 0
ip link set ${netdev} vf ${vf2_idx} mac fa:65:a1:a6:75:02
ip link set ${netdev} vf ${vf2_idx} rate 1000
echo -n "${vf2_pci}" > /sys/bus/pci/drivers/mlx5_core/unbind
echo -n "${vf2_pci}" > /sys/bus/pci/drivers/mlx5_core/bind
# 设置VF3的vlan、mac、限速
ip link set ${netdev} vf ${vf3_idx} vlan 0
ip link set ${netdev} vf ${vf3_idx} mac fa:65:a1:a6:75:03
ip link set ${netdev} vf ${vf3_idx} rate 1000
echo -n "${vf3_pci}" > /sys/bus/pci/drivers/mlx5_core/unbind
echo -n "${vf3_pci}" > /sys/bus/pci/drivers/mlx5_core/bind
# 设置VF4的vlan、mac、限速
ip link set ${netdev} vf ${vf4_idx} vlan 3333
ip link set ${netdev} vf ${vf4_idx} mac fa:65:a1:a6:75:04
ip link set ${netdev} vf ${vf4_idx} rate 1000
echo -n "${vf4_pci}" > /sys/bus/pci/drivers/mlx5_core/unbind
echo -n "${vf4_pci}" > /sys/bus/pci/drivers/mlx5_core/bind
# 创建network namespace，并将对应的VF添加到netns中并设置ip、srp等
ip netns add net1
ip link set $vf1_dev netns net1
ip netns exec net1 ifconfig $vf1_dev 1.1.1.1/24 up
ip netns exec net1 arp -s 1.1.1.2 fa:65:a1:a6:75:02
ip netns add net2
ip link set $vf4_dev netns net2
ip netns exec net2 ifconfig $vf4_dev 1.1.1.2/24 up
ip netns exec net2 arp -s 1.1.1.1 fa:65:a1:a6:75:03
```
## 3. 编译testpmd
编译前先看下需要修改的地方

```
diff --git a/app/test-pmd/Makefile b/app/test-pmd/Makefile
index d5258eae4..0e12d9189 100644
--- a/app/test-pmd/Makefile
+++ b/app/test-pmd/Makefile
@@ -70,6 +70,8 @@ ifeq ($(CONFIG_RTE_LIBRTE_PMD_SOFTNIC),y)
LDLIBS += -lrte_pmd_softnic
endif
+LDLIBS += -lrte_pmd_mlx5
+
endif
include $(RTE_SDK)/mk/rte.app.mk
diff --git a/app/test-pmd/config.c b/app/test-pmd/config.c
index b9e5dd923..d8d66deac 100644
--- a/app/test-pmd/config.c
+++ b/app/test-pmd/config.c
@@ -2976,7 +2976,7 @@ tx_vlan_set(portid_t port_id, uint16_t vlan_id)
       }
       tx_vlan_reset(port_id);
-       ports[port_id].dev_conf.txmode.offloads |= DEV_TX_OFFLOAD_VLAN_INSERT;
+       //ports[port_id].dev_conf.txmode.offloads |= DEV_TX_OFFLOAD_VLAN_INSERT;
       ports[port_id].tx_vlan_id = vlan_id;
}
diff --git a/app/test-pmd/macfwd.c b/app/test-pmd/macfwd.c
index 7cac757a0..13fd8ea6d 100644
--- a/app/test-pmd/macfwd.c
+++ b/app/test-pmd/macfwd.c
@@ -91,6 +91,7 @@ pkt_burst_mac_forward(struct fwd_stream *fs)
                       rte_prefetch0(rte_pktmbuf_mtod(pkts_burst[i + 1],
                                                      void *));
               mb = pkts_burst[i];
+        rte_vlan_strip(mb);
               eth_hdr = rte_pktmbuf_mtod(mb, struct ether_hdr *);
               ether_addr_copy(&peer_eth_addrs[fs->peer_addr],
                               &eth_hdr->d_addr);
@@ -102,6 +103,7 @@ pkt_burst_mac_forward(struct fwd_stream *fs)
               mb->l3_len = sizeof(struct ipv4_hdr);
               mb->vlan_tci = txp->tx_vlan_id;
               mb->vlan_tci_outer = txp->tx_vlan_id_outer;
+        rte_vlan_insert(&mb);
       }
       nb_tx = rte_eth_tx_burst(fs->tx_port, fs->tx_queue, pkts_burst, nb_rx);
       /*
```
编译脚本：

```
#export EXTRA_CFLAGS='-O3 -fno-strict-aliasing'
export EXTRA_CFLAGS='-O0 -g'
#taskset -c 0-32 make config T=x86_64-native-linuxapp-gcc EXTRA_CFLAGS='-O3 -fno-strict-aliasing'
taskset -c 0-32 make config T=x86_64-native-linuxapp-gcc EXTRA_CFLAGS='-O0 -g'
taskset -c 0-32 make -j32
```
## 4. 启动testpmd并配置转发

### 4.1 启动命令

```
./build/app/testpmd -c f -n 4 -w 0000:06:00.3 -w 0000:06:00.4 -- --rxq=4 --txq=4  --disable-rss -i
```
因为要通过将指定报文重定向到指定队列，为了便于观察结果，所以禁用了rss

### 4.2 转发配置

```
vlan set filter on 0
rx_vlan add 3001 0
set promisc 0 on
set allmulti 0 on
set eth-peer 0 fa:65:a1:a6:75:01
port stop 0
tx_vlan set 0 3001
port start 0
vlan set filter on 1
rx_vlan add 3333 1
set promisc 1 on
set allmulti 1 on
set eth-peer 1 fa:65:a1:a6:75:04
port stop 1
tx_vlan set 1 3333
port start 1
set fwd mac
start
```
这个时候可以测试net1和net2的联通性了

```
ip netns exec net2 ping 1.1.1.1
```

## 5. 创建RTE_FLOW规则并验证
命令如下：

```
flow create 0 priority 0 ingress pattern eth / ipv4 / udp / vxlan / eth / ipv4 / tcp dst is 1001 / end actions queue index 2 / end
flow create 0 priority 1 ingress pattern eth / ipv4 / udp / vxlan / eth / ipv4 / tcp dst is 1002 / end actions queue index 3 / end
```
使用scapy构造报文：

```
p1 = Ether(src="fa:65:a1:a6:75:04",dst="fa:65:a1:a6:75:03")/IP(src="1.1.1.2",dst="1.1.1.1")/UDP()/VXLAN(vni=100)/Ether(src="fa:65:a1:a6:77:14",dst="fa:65:a1:a6:77:01")/IP(src="172.16.1.254",dst="172.16.1.210") / TCP(sport=8001, dport=1001) / "netease"    
p2 = Ether(src="fa:65:a1:a6:75:04",dst="fa:65:a1:a6:75:03")/IP(src="1.1.1.2",dst="1.1.1.1")/UDP()/VXLAN(vni=100)/Ether(src="fa:65:a1:a6:77:14",dst="fa:65:a1:a6:77:01")/IP(src="192.168.1.10",dst="192.168.1.210") / TCP(sport=8001, dport=1002) / "netease"    
```
观察结果：
![enter description here](https://rexrock.github.io/post-images/1624621436702.png)

