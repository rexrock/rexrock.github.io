(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||s[d]||l;return n?i.a.createElement(m,c(c({ref:t},o),{},{components:n})):i.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var o=2;o<l;o++)a[o]=n[o];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1614300041226-437669208dc6d48cf197ab113bfbb02e.png"},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1614300092938-47d2cb1279ecd99e8c419f889af67d5b.png"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1614300139319-dbca789e6934b69470afee70198bf925.png"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),l=(n(0),n(105)),a={id:"k8s-net2",title:"Cilium\u7b80\u4ecb"},c={unversionedId:"k8s-net2",id:"k8s-net2",isDocsHomePage:!1,title:"Cilium\u7b80\u4ecb",description:"1. Cilium\u5de5\u4f5c\u6a21\u5f0f",source:"@site/docs/k8s-net2.md",slug:"/k8s-net2",permalink:"/docs/k8s-net2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/k8s-net2.md",version:"current",sidebar:"docs",previous:{title:"AF_XDP\u6280\u672f\u8be6\u89e3",permalink:"/docs/af_xdp1"},next:{title:"Cilium datapath\u68b3\u7406",permalink:"/docs/cilium1"}},u=[{value:"1. Cilium\u5de5\u4f5c\u6a21\u5f0f",id:"1-cilium\u5de5\u4f5c\u6a21\u5f0f",children:[]},{value:"2. \u8def\u7531\u6a21\u5f0f",id:"2-\u8def\u7531\u6a21\u5f0f",children:[{value:"2.1 Cilium\u90e8\u7f72",id:"21-cilium\u90e8\u7f72",children:[]},{value:"2.2 kube-router\u90e8\u7f72",id:"22-kube-router\u90e8\u7f72",children:[]}]},{value:"3. VXLAN\u6a21\u5f0f",id:"3-vxlan\u6a21\u5f0f",children:[]}],o={toc:u};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"1-cilium\u5de5\u4f5c\u6a21\u5f0f"},"1. Cilium\u5de5\u4f5c\u6a21\u5f0f"),Object(l.b)("p",null,"\u5b98\u7f51\uff1a\n",Object(l.b)("a",{parentName:"p",href:"https://docs.cilium.io/en/v1.8/concepts/networking/routing/"},"https://docs.cilium.io/en/v1.8/concepts/networking/routing/")),Object(l.b)("p",null,"Cilium\u4e5f\u5206\u4e3aoverlay\u548cunderlay\u4e24\u79cd\u5de5\u4f5c\u6a21\u5f0f\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"overlay\uff0c\u76ee\u524d\u652f\u6301vxlan\u548cgeneve\u4e24\u79cd\u865a\u62df\u5316\u7f51\u7edc\u534f\u8bae\uff1b")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"underlay\uff0c\u8be5\u6a21\u5f0f\u4e0bcilium\u9700\u8981\u80fd\u591f\u5bf9\u5206\u914d\u5230\u5176\u4ed6node\u4e0a\u7684ip\u6bb5\u8fdb\u884c\u8def\u7531\uff0c\u4f46\u9057\u61be\u5f97\u662f\uff0ccilium\u65e2\u4e0d\u80fd\u50cfflannel\u90a3\u6837\u901a\u8fc7\u81ea\u8eab\u7684\u5b88\u62a4\u8fdb\u7a0b\u4e0b\u53d1\u8def\u7531\u914d\u7f6e\uff0c\u4e5f\u4e0d\u80fd\u50cfcalico\u90a3\u6837\u76f4\u63a5\u96c6\u6210bird\u4ee5\u63d0\u4f9bBGP\u529f\u80fd\uff1b\u6240\u4ee5\u8981\u5b9e\u73b0cilium\u8def\u7531\u6a21\u5f0f\u7684\u90e8\u7f72\uff0c\u6211\u4eec\u9700\u8981\u81ea\u5df1\u63d0\u4f9bBGP\u529f\u80fd\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"}," \u65b9\u5f0f\u4e00\uff1a\u8282\u70b9\u672c\u8eab\u77e5\u9053\u5982\u4f55\u8def\u7531\u6240\u6709POD IP\uff0c\u4f46\u662f\u7f51\u7edc\u4e2d\u5b58\u5728\u4e00\u4e2a\u8def\u7531\u5668\uff0c\u8be5\u8def\u7531\u5668\u77e5\u9053\u5982\u4f55\u5230\u8fbe\u6bcf\u4e2aPOD IP\uff0c\u6bcf\u4e2a\u8282\u70b9\u9700\u914d\u7f6e\u4e00\u6761\u9ed8\u8ba4\u8def\u7531\u6307\u5411\u8be5\u8def\u7531\u5668\uff0c\u8be5\u65b9\u5f0f\u4e3b\u8981\u5e38\u89c1\u4e8e\u4e91\u63d0\u4f9b\u5546\u7684\u7f51\u7edc\u96c6\u6210\u573a\u666f\u3002\n \u65b9\u5f0f\u4e8c\uff1a\u6bcf\u4e2a\u8282\u70b9\u90fd\u77e5\u9053\u6240\u6709\u7684POD IP\uff0c\u5e76\u5c06\u8def\u7531\u63d2\u5165\u5230\u672c\u5730\u5185\u6838\u7684\u8def\u7531\u8868\u4e2d\u3002\u548cflannel\u548ccalico\u4e00\u6837\uff0c\u8fd9\u9700\u8981\u6240\u6709\u8282\u70b9\u4e8c\u5c42\u4e92\u901a\u3002\u8fd9\u9700\u8981\u6211\u4eec\u81ea\u5df1\u90e8\u7f72BGP\u529f\u80fd\uff08\u53ef\u4ee5\u901a\u8fc7kube-router\u6765\u90e8\u7f72BGP\u529f\u80fd\uff09\u3002\n")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")),Object(l.b)("p",null,"Geneve\uff08Generic Network Virtualization Encapsulation-\u7edf\u7528\u7f51\u7edc\u865a\u62df\u5316\u5c01\u88c5\uff09\uff0c\u53c2\u8003\uff1a",Object(l.b)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/35790366"},"https://zhuanlan.zhihu.com/p/35790366")),Object(l.b)("h2",{id:"2-\u8def\u7531\u6a21\u5f0f"},"2. \u8def\u7531\u6a21\u5f0f"),Object(l.b)("h3",{id:"21-cilium\u90e8\u7f72"},"2.1 Cilium\u90e8\u7f72"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"git clone https://github.com/cilium/cilium.git\n#kubectl create -f cilium/install/kubernetes/quick-install.yaml\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),Object(l.b)("p",null,"cilium\u9ed8\u8ba4\u662f\u91c7\u7528vxlan\u65b9\u5f0f\u90e8\u7f72\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5148\u4fee\u6539quick-install.yaml\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"--- cilium-vxlan.yaml   2020-10-26 14:36:13.449026862 +0800\n+++ cilium-route.yaml   2020-10-26 14:28:08.458113851 +0800\n@@ -95,7 +95,9 @@\n   #   - disabled\n   #   - vxlan (default)\n   #   - geneve\n-  tunnel: vxlan\n+  tunnel: disabled\n+  native-routing-cidr: 10.17.0.0/16\n+  #auto-direct-node-routes: true\n\n   # Name of the cluster. Only relevant when building a mesh of clusters.\n   cluster-name: default\n")),Object(l.b)("p",null,"\u5b98\u65b9\u6587\u6863\u4e2d\u8bf4\uff0c\u5982\u679c\u5404\u8282\u70b9\u4e8c\u5c42\u4e92\u901a\uff0c\u90a3\u4e48\u76f4\u63a5\u901a\u8fc7\u53c2\u6570auto-direct-node-routes: true\n\u5373\u53ef\u5b9e\u73b0\u5404\u8282\u70b9\u8def\u7531\u914d\u7f6e\u7684\u540c\u6b65\u548c\u4e0b\u53d1\uff0c\u73af\u5883\u6240\u9650\u5e76\u672a\u9a8c\u8bc1\u3002"),Object(l.b)("p",null,Object(l.b)("img",{alt:"enter description here",src:n(158).default})),Object(l.b)("p",null,"\u6211\u4eec\u770b\u5230\uff0c\u53ea\u90e8\u7f72cilium\uff0c\u90a3\u4e48\u8be5\u8282\u70b9\u4e0a\u662f\u6ca1\u6709\u5176\u4ed6\u8282\u70b9POD IP\u7684\u8def\u7531\u7684\u3002\u8fd9\u65f6\u5019\u5982\u679c\u9ed8\u8ba4\u8def\u7531\u6307\u5411\u7684\u7f51\u5173\u53ef\u4ee5\u63d0\u4f9b\u5176\u4ed6\u8282\u70b9POD IP\u7684\u8def\u7531\uff08\u5bf9\u5e94underlay\u65b9\u5f0f\u4e00\u7684\u90e8\u7f72\uff09\uff0c\u90a3\u4e48\u6574\u4e2a\u96c6\u7fa4POD\u5df2\u7ecf\u53ef\u4ee5\u76f4\u63a5\u4e92\u901a\u3002"),Object(l.b)("h3",{id:"22-kube-router\u90e8\u7f72"},"2.2 kube-router\u90e8\u7f72"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/cloudnativelabs/kube-router/v0.4.0/daemonset/generic-kuberouter-only-advertise-routes.yaml\n")),Object(l.b)("p",null,"\u6309\u7167\u6587\u6863\u8bf4\u660e\uff0c\u9700\u8981\u5148\u4fee\u6539\u4e00\u4e9b\u5185\u5bb9\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'root@k8s-99-12:~# diff -rNua kube-router.orig.yaml kube-router.yaml\n--- kube-router.orig.yaml       2020-10-26 14:45:03.716777078 +0800\n+++ kube-router.yaml    2020-10-26 11:08:40.467744916 +0800\n@@ -29,11 +29,9 @@\n         - "--run-firewall=false"\n         - "--run-service-proxy=false"\n         - "--enable-cni=false"\n-        - "--enable-ibgp=false"\n-        - "--enable-overlay=false"\n-        - "--peer-router-ips=<CHANGE ME>"\n-        - "--peer-router-asns=<CHANGE ME>"\n-        - "--cluster-asn=<CHANGE ME>"\n+        - "--enable-pod-egress=false"\n+        - "--enable-ibgp=true"\n+        - "--enable-overlay=true"\n         - "--advertise-cluster-ip=true"\n         - "--advertise-external-ip=true"\n         - "--advertise-loadbalancer-ip=true"\n')),Object(l.b)("p",null,"\u6d4b\u8bd5\u73af\u5883\u4f7f\u7528ibgp\u5373\u53ef\uff0c\u65e0\u9700\u914d\u7f6eebpf\uff0c\u6240\u4ee5peer-router-ips\u3001peer-router-asns\u3001cluster-asn\u65e0\u9700\u914d\u7f6e\u3002"),Object(l.b)("p",null,Object(l.b)("img",{alt:"enter description here",src:n(159).default})),Object(l.b)("p",null,"kube-router\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u4ed6\u8282\u70b9\u7684POD IP\u5df2\u7ecf\u88ab\u52a0\u5165\u672c\u5730\u8def\u7531\u3002"),Object(l.b)("h2",{id:"3-vxlan\u6a21\u5f0f"},"3. VXLAN\u6a21\u5f0f"),Object(l.b)("p",null,"Cilium\u9ed8\u8ba4\u5c31\u662f\u4ee5vxlan\u65b9\u5f0f\u90e8\u7f72\uff0c\u4f46\u662fcilium\u5e76\u4e0d\u4f1a\u81ea\u52a8\u8bfb\u53d6\u4ee5\u914d\u7f6e\u7684pod-cidr\uff0c\u9700\u8981\u6211\u4eec\u901a\u8fc7\u53c2\u6570native-routing-cidr: 10.17.0.0/16\u81ea\u5df1\u6307\u5b9a\u3002"),Object(l.b)("p",null,Object(l.b)("img",{alt:"enter description here",src:n(160).default})),Object(l.b)("p",null,"\u53ef\u4ee5\u770b\u5230vxlan\u90e8\u7f72\u540e\uff0c\u8de8\u754c\u70b9\u8bbf\u95ee\u90fd\u5bfc\u5411\u4e86cilium","_","host\u3002\u7531\u4e8ecilium\u5927\u91cf\u4f7f\u7528ebpf\u529f\u80fd\uff0c\u7a7f\u900f\u5185\u6838\u534f\u8bae\u6808\u90e8\u5206\u529f\u80fd\uff0c\u6240\u4ee5\u76ee\u524d\u6ca1\u529e\u6cd5\u753b\u51fa\u5b8c\u6574\u7684\u6d41\u91cf\u8d70\u5411\u56fe\uff0c\u540e\u7eed\u6301\u7eed\u66f4\u65b0\u3002"))}b.isMDXComponent=!0}}]);