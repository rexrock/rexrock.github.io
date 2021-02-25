(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||i[d]||a;return r?c.a.createElement(m,b(b({ref:t},u),{},{components:r})):c.a.createElement(m,b({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var u=2;u<a;u++)o[u]=r[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),c=r(7),a=(r(0),r(103)),o={id:"k8s1",title:"\u4f7f\u7528kubeadm\u642d\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4"},b={unversionedId:"k8s1",id:"k8s1",isDocsHomePage:!1,title:"\u4f7f\u7528kubeadm\u642d\u5efa\u4e00\u4e2ak8s\u96c6\u7fa4",description:"\u5b98\u65b9\u6587\u6863\uff1a",source:"@site/docs/k8s1.md",slug:"/k8s1",permalink:"/docs/k8s1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/k8s1.md",version:"current",sidebar:"docs",previous:{title:"Cilium datapath\u68b3\u7406",permalink:"/docs/cilium1"},next:{title:"\u4f7f\u7528kubebuilder\u521b\u5efaCRD\u53caController",permalink:"/docs/k8s2"}},l=[{value:"1. \u5b89\u88c5docker",id:"1-\u5b89\u88c5docker",children:[]},{value:"2. \u5b89\u88c5kubeadm\u3001kubelet\u3001kubectl",id:"2-\u5b89\u88c5kubeadm\u3001kubelet\u3001kubectl",children:[]},{value:"3. \u521d\u59cb\u5316master\u8282\u70b9",id:"3-\u521d\u59cb\u5316master\u8282\u70b9",children:[]},{value:"4. \u4e3a\u4e86\u53ef\u4ee5\u6267\u884ckubectl",id:"4-\u4e3a\u4e86\u53ef\u4ee5\u6267\u884ckubectl",children:[]},{value:"5. \u5b89\u88c5pod network",id:"5-\u5b89\u88c5pod-network",children:[]},{value:"6. \u6dfb\u52a0worker\u8282\u70b9",id:"6-\u6dfb\u52a0worker\u8282\u70b9",children:[]},{value:"7. \u5220\u9664worker\u8282\u70b9",id:"7-\u5220\u9664worker\u8282\u70b9",children:[]},{value:"8. \u5220\u9664master\u8282\u70b9",id:"8-\u5220\u9664master\u8282\u70b9",children:[]},{value:"9. \u5f00\u542f\u5173\u95eddns",id:"9-\u5f00\u542f\u5173\u95eddns",children:[]},{value:"10. \u8ba9master\u8282\u70b9\u4e5f\u53ef\u4ee5\u8c03\u5ea6pod",id:"10-\u8ba9master\u8282\u70b9\u4e5f\u53ef\u4ee5\u8c03\u5ea6pod",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"},"Installing kubeadm")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"Creating a cluster with kubeadm")),Object(a.b)("p",null,"\u53c2\u8003\uff1a"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/40931670"},"\u4f7f\u7528kubeadm\u5b89\u88c5Kubernetes 1.11")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://docs.kubernetes.org.cn/468.html"},"Kubernetes kubectl run \u547d\u4ee4\u8be6\u89e3")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://godoc.org/k8s.io/api/core/v1#PodStatus"},"k8s\u7684API\u624b\u518c")),Object(a.b)("h2",{id:"1-\u5b89\u88c5docker"},"1","."," \u5b89\u88c5docker"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'curl -sSL https://get.docker.com | sh\ncat > /etc/docker/daemon.json <\n{\n"registry-mirrors": ["https://dic5s40p.mirror.aliyuncs.com"]\n}\nEOF\n')),Object(a.b)("p",null,"\u7136\u540e\u5728/etc/default/docker\u4e2d\u6dfb\u52a0:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'DOCKER\\_OPTS="--registry-mirror=https://dic5s40p.mirror.aliyuncs.com"\n')),Object(a.b)("p",null,"\u7136\u540e\u6267\u884c\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"systemctl restart docker\n")),Object(a.b)("h2",{id:"2-\u5b89\u88c5kubeadm\u3001kubelet\u3001kubectl"},"2","."," \u5b89\u88c5kubeadm\u3001kubelet\u3001kubectl"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"},"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'#!/bin/bash\nset -e\napt-get -y install apt-transport-https ca-certificates curl software-properties-common\ncurl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add -\nadd-apt-repository \\\n"deb http://mirrors.ustc.edu.cn/kubernetes/apt \\\nkubernetes-xenial \\\nmain"\napt-get update\napt-get install -y kubelet kubeadm kubectl\nsystemctl enable kubelet && systemctl start kubelet\n')),Object(a.b)("h2",{id:"3-\u521d\u59cb\u5316master\u8282\u70b9"},"3","."," \u521d\u59cb\u5316master\u8282\u70b9"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubeadm init --pod-network-cidr=10.17.0.0/16 --service-cidr=10.18.200.0/24 --kubernetes-version=v1.18.5 --image-repository registry.cn-hangzhou.aliyuncs.com/google\\_containers\n")),Object(a.b)("p",null,"\u6210\u529f\u4f1a\u663e\u793a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubeadm join 192.168.100.12:6443 --token yskexa.twu83wmh7n64oczk \\\n    --discovery-token-ca-cert-hash sha256:d6dcfecc04d8452875155de28dc229eb4f7842eb55e8f998cade89cc625a679e\n")),Object(a.b)("h2",{id:"4-\u4e3a\u4e86\u53ef\u4ee5\u6267\u884ckubectl"},"4","."," \u4e3a\u4e86\u53ef\u4ee5\u6267\u884ckubectl"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"rm -rf $HOME/.kube\nmkdir -p $HOME/.kube\ncp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nchown $(id -u):$(id -g) $HOME/.kube/config\n")),Object(a.b)("h2",{id:"5-\u5b89\u88c5pod-network"},"5","."," \u5b89\u88c5pod network"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"wget https://docs.projectcalico.org/v3.14/manifests/calico.yaml\n# \u4ec0\u4e48\u90fd\u4e0d\u8981\u6539\uff0c\u4f1a\u81ea\u52a8\u68c0\u6d4b\u51fapod ip\u7684\u8303\u56f4\nkubectl create -f calico.yaml\n")),Object(a.b)("h2",{id:"6-\u6dfb\u52a0worker\u8282\u70b9"},"6","."," \u6dfb\u52a0worker\u8282\u70b9"),Object(a.b)("p",null,"\u5728worker\u8282\u70b9\u4e0a\u6267\u884ckubeadm init\u6210\u529f\u540e\u8fd4\u56de\u7684\u547d\u4ee4\uff0c\u5373"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubeadm join 192.168.100.12:6443 --token 7u1jah.da6w4tilh0j5097w \\\n    --discovery-token-ca-cert-hash sha256:bcd0ce4354f2e8b794b830d7a14389b6a06e46e225486ece8218424a1744583f\n")),Object(a.b)("p",null,"\u6ce8\u610f\uff1atoken\u7684\u6709\u6548\u671f\u53ea\u670924\u5c0f\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u53ef\u7528\u7684token"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubeadm token list\n")),Object(a.b)("p",null,"\u5982\u679c\u4e3a\u7a7a\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u521b\u5efatoken"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubeadm token create\n")),Object(a.b)("p",null,"\u5982\u679c\u4f60\u8fdecert-hash\u4e5f\u5fd8\u4e86\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | \\\n   openssl dgst -sha256 -hex | sed 's/^.* //'\n")),Object(a.b)("h2",{id:"7-\u5220\u9664worker\u8282\u70b9"},"7","."," \u5220\u9664worker\u8282\u70b9"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl drain <node name> --delete-local-data --force --ignore-daemonsets\n# \u4e0b\u9762\u4e09\u6761\u547d\u4ee4\u5728worker\u8282\u70b9\u4e0a\u8fd0\u884c\nkubeadm reset\niptables -F && iptables -t nat -F && iptables -t mangle -F && iptables -X\nipvsadm -C # \u5982\u679c\u4f7f\u7528\u4e86ipvs\nkubectl delete node <node name>\n")),Object(a.b)("h2",{id:"8-\u5220\u9664master\u8282\u70b9"},"8","."," \u5220\u9664master\u8282\u70b9"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"# \u5728master\u8282\u70b9\u4e0a\u8fd0\u884c\nkubeadm reset\n")),Object(a.b)("h2",{id:"9-\u5f00\u542f\u5173\u95eddns"},"9","."," \u5f00\u542f\u5173\u95eddns"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl -n kube-system scale --replicas=0 deployment/coredns\nkubectl -n kube-system scale --replicas=1 deployment/coredns\n")),Object(a.b)("h2",{id:"10-\u8ba9master\u8282\u70b9\u4e5f\u53ef\u4ee5\u8c03\u5ea6pod"},"10","."," \u8ba9master\u8282\u70b9\u4e5f\u53ef\u4ee5\u8c03\u5ea6pod"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl taint nodes --all node-role.kubernetes.io/master-\n")))}s.isMDXComponent=!0}}]);