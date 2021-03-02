module.exports = {
  docs: [
    {
      type: 'category',
      label: 'eBPF',
      items: [
	'ebpf1', 'ebpf2', 'xdp1', 'af_xdp1', 'af_xdp2'
      ]
    },
    {
      type: 'category',
      label: 'Cilium',
      items: [
	'k8s-net2', 'cilium1',
      ]
    },
    {
      type: 'category',
      label: 'Kubernetes',
      items: [
        {
          type: 'category',
          label: '入门',
          items: ['k8s1', 'k8s2', 'k8s3'],
        },
        {
          type: 'category',
          label: '网络',
          items: ['k8s-net1', 'k8s-net2', 'k8s-sriov1'],
        },
      ]
    },
  ],
};
