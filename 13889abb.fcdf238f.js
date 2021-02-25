(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(t),m=r,s=b["".concat(o,".").concat(m)]||b[m]||f[m]||c;return t?a.a.createElement(s,p(p({ref:n},l),{},{components:t})):a.a.createElement(s,p({ref:n},l))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),c=(t(0),t(103)),o={id:"ebpf1",title:"eBPF\u7684\u4f7f\u7528\u9650\u5236",slug:"/"},p={unversionedId:"ebpf1",id:"ebpf1",isDocsHomePage:!1,title:"eBPF\u7684\u4f7f\u7528\u9650\u5236",description:"1. \u4e0d\u80fd\u4f7f\u7528\u5faa\u73af\u8bed\u53e5",source:"@site/docs/ebpf1.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ebpf1.md",version:"current",sidebar:"docs",next:{title:"XDP\u6280\u672f\u7b80\u4ecb",permalink:"/docs/xdp1"}},i=[{value:"1. \u4e0d\u80fd\u4f7f\u7528\u5faa\u73af\u8bed\u53e5",id:"1-\u4e0d\u80fd\u4f7f\u7528\u5faa\u73af\u8bed\u53e5",children:[]},{value:"2. map\u64cd\u4f5c\u7684\u539f\u5b50\u6027",id:"2-map\u64cd\u4f5c\u7684\u539f\u5b50\u6027",children:[]}],l={toc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1-\u4e0d\u80fd\u4f7f\u7528\u5faa\u73af\u8bed\u53e5"},"1. \u4e0d\u80fd\u4f7f\u7528\u5faa\u73af\u8bed\u53e5"),Object(c.b)("p",null,"eBPF\u7a0b\u5e8f\u4e2d\u4e0d\u80fd\u4f7f\u7528\u5faa\u73af\u8bed\u53e5\uff0c\u5982\u679c\u975e\u8981\u4f7f\u7528\u5faa\u73af\uff0c\u5219\u5fc5\u987b\u901a\u8fc7\u7f16\u8bd1\u9009\u9879\u201c",Object(c.b)("inlineCode",{parentName:"p"},"#pragma clang loop unroll(full)"),"\u201d\u8ba9\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5c06\u5faa\u73af\u5c55\u5f00\u3002"),Object(c.b)("p",null,"\u6b64\u5916\u5fc5\u987b\u8981\u6ce8\u610f\u7684\u4e00\u70b9\u662f\uff0c\u5faa\u73af\u4e2d\u7684\u8bed\u53e5\u5fc5\u987b\u662f\u5355\u4e00\u4e14\u72ec\u7acb\u7684\u5757\uff0c\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"static __always_inline int search_service_ip(int i, __u32 ip) {\n    ...\n    return 0;\n}\n\nstatic __always_inline int is_service_ip(__u32 ip) {\n#pragma clang loop unroll(full)\n    for(int i = 0; i < 32; i++) {\n        switch(search_service_ip(i, ip)) {\n            case 0:\n                continue;\n            case 1:\n                return 1;\n            default:\n                break;\n        }\n    }\n    return 0;\n}\n")),Object(c.b)("h2",{id:"2-map\u64cd\u4f5c\u7684\u539f\u5b50\u6027"},"2. map\u64cd\u4f5c\u7684\u539f\u5b50\u6027"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ebpf\u63d0\u4f9b\u51fd\u6570map","_","update","_","elem()\u5bf9ebpf map\u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u66f4\u65b0\uff0c\u8be5\u51fd\u6570\u5728\u5bf9BPF","_","HASH\u8868\u8fdb\u884c\u64cd\u4f5c\u65f6\u662f\u539f\u5b50\u64cd\u4f5c\uff0c\u5bf9BPF","_","ARRAY\u64cd\u4f5c\u65f6\u662f\u975e\u539f\u5b50\u7684\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5373\u4f7fmap","_","update","_","elem(\uff09\u5168\u90e8\u662f\u539f\u5b50\u64cd\u4f5c\uff0c\u6211\u4eec\u6267\u884c\u7d2f\u52a0\u7684\u6d41\u7a0b\u662f\u201c lookup elem -> elem++ -> update elem\u201d\uff0c\u8fd9\u4e00\u4e32\u64cd\u4f5c\u4e5f\u6ca1\u529e\u6cd5\u4fdd\u8bc1\u539f\u5b50\u6027\u3002")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5bf9ebpf map\u8fdb\u884c\u539f\u5b50\u66f4\u65b0\u6211\u4eec\u5206\u5185\u6838\u6001\u548c\u7528\u6237\u6001\u4e24\u79cd\u573a\u666f\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728\u5185\u6838\u6001\u8fd0\u884c\u7684ebpf\u7a0b\u5e8f\u53ef\u76f4\u63a5\u5bf9ebpf map\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u52a0\u4e0abpf","_","map","_","lookup","_","elem()\u8fd4\u56de\u7684\u662fmap\u4e2d\u6570\u636e\u7684\u6307\u9488\u3002\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u7f16\u8bd1\u5668\u539f\u8bed\uff08","_","_","sync","_","fetch","_","and","_","add\uff09\u5728LLVM\u751f\u6210eBPF\u6307\u4ee4\u65f6\uff0c\u4ee5\u539f\u5b50\u65b9\u5f0f\u5bf9bpf","_","map","_","lookup","_","elem()\u8fd4\u56de\u7684\u6570\u636e\u6307\u9488\u76f4\u63a5\u8fdb\u884c\u52a0\u51cf\u4ee5\u6b64\u5b9e\u73b0\u539f\u5b50\u64cd\u4f5c\u3002\uff08bcc\u7684llvm\u7f16\u8bd1\u5668\u662f\u5185\u7f6e\u7684\uff0c\u6240\u4ee5\u5df2\u5c06\u8be5\u539f\u8bed\u5c01\u88c5\u6210lock","_","xadd()\u51fd\u6570\uff09"),Object(c.b)("li",{parentName:"ul"},"\u76ee\u524d\u7528\u6237\u6001\u7a0b\u5e8f\u5bf9ebpf map\u8fdb\u884c\u7d2f\u52a0\u4fee\u6539\uff0c\u8fd8\u6ca1\u6709\u529e\u6cd5\u4fdd\u8bc1\u539f\u5b50\u6027\uff0c\u6240\u4ee5\u5728\u7a0b\u5e8f\u8bbe\u8ba1\u9636\u6bb5\uff0c\u52a1\u5fc5\u4fdd\u8bc1\u4e0d\u8981\u8ba9\u7528\u6237\u6001\u7a0b\u5e8f\u548c\u5185\u6838\u6001\u7a0b\u5e8f\u540c\u65f6\u5bf9ebpf map\u8fdb\u884c\u7c7b\u4f3c\u7d2f\u52a0\u4fee\u6539\u7684\u64cd\u4f5c\u3002")))}u.isMDXComponent=!0}}]);