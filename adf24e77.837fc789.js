(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return b}));var t=r(0),p=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function _(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=p.a.createContext({}),o=function(e){var n=p.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},i=function(e){var n=o(e.components);return p.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return p.a.createElement(p.a.Fragment,{},n)}},s=p.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,l=_(e,["components","mdxType","originalType","parentName"]),i=o(r),s=t,b=i["".concat(d,".").concat(s)]||i[s]||u[s]||a;return r?p.a.createElement(b,c(c({ref:n},l),{},{components:r})):p.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,d=new Array(a);d[0]=s;var c={};for(var _ in n)hasOwnProperty.call(n,_)&&(c[_]=n[_]);c.originalType=e,c.mdxType="string"==typeof e?e:t,d[1]=c;for(var l=2;l<a;l++)d[l]=r[l];return p.a.createElement.apply(null,d)}return p.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},156:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/1613889918890-9c2b29af7b3e7e8d13adfbd163638068.png"},85:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return d})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return _})),r.d(n,"default",(function(){return o}));var t=r(3),p=r(7),a=(r(0),r(105)),d={id:"xdp1",title:"XDP\u6280\u672f\u7b80\u4ecb"},c={unversionedId:"xdp1",id:"xdp1",isDocsHomePage:!1,title:"XDP\u6280\u672f\u7b80\u4ecb",description:"1. XDP\u7a0b\u5e8f\u7684\u8fd0\u884c\u4f4d\u7f6e",source:"@site/docs/xdp1.md",slug:"/xdp1",permalink:"/docs/xdp1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/xdp1.md",version:"current",sidebar:"docs",previous:{title:"Run ebpf with tc",permalink:"/docs/ebpf2"},next:{title:"AF_XDP\u6280\u672f\u8be6\u89e3",permalink:"/docs/af_xdp1"}},_=[{value:"1. XDP\u7a0b\u5e8f\u7684\u8fd0\u884c\u4f4d\u7f6e",id:"1-xdp\u7a0b\u5e8f\u7684\u8fd0\u884c\u4f4d\u7f6e",children:[]},{value:"2. XDP\u7684\u4e09\u79cd\u5de5\u4f5c\u6a21\u5f0f",id:"2-xdp\u7684\u4e09\u79cd\u5de5\u4f5c\u6a21\u5f0f",children:[]},{value:"3. XDP\u7a0b\u5e8f\u7684\u8fd4\u56de\u7801",id:"3-xdp\u7a0b\u5e8f\u7684\u8fd4\u56de\u7801",children:[]}],l={toc:_};function o(e){var n=e.components,d=Object(p.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,d,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-xdp\u7a0b\u5e8f\u7684\u8fd0\u884c\u4f4d\u7f6e"},"1. XDP\u7a0b\u5e8f\u7684\u8fd0\u884c\u4f4d\u7f6e"),Object(a.b)("p",null,"XDP\uff08eXpress Data Path\uff09\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u6838\u6001\u3001\u9ad8\u6027\u80fd\u3001\u53ef\u7f16\u7a0b BPF \u5305\u5904\u7406\u6846\u67b6\u3002\u8fd9\u4e2a\u6846\u67b6\u5728\u8f6f\u4ef6\u4e2d\u6700\u65e9\u53ef\u4ee5\u5904\u7406\u5305\u7684\u4f4d\u7f6e\uff08\u5373\u7f51\u5361\u9a71\u52a8\u6536\u5230\u5305\u7684 \u65f6\u523b\uff09\u8fd0\u884c BPF \u7a0b\u5e8f\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(a.b)("p",null,Object(a.b)("img",{alt:"XDP\u7a0b\u5e8f\u8fd0\u884c\u7684\u4f4d\u7f6e",src:r(156).default})),Object(a.b)("p",null,"NAPI poll \u673a\u5236\u4e0d\u65ad\u8c03\u7528\u9a71\u52a8\u5b9e\u73b0\u7684 poll \u65b9\u6cd5\uff0c\u540e\u8005\u5904\u7406 RX \u961f\u5217\u5185\u7684\u5305\uff0c\u5e76\u6700\u7ec8\u5c06\u5305\u9001\u5230\u6b63\u786e\u7684\u7a0b\u5e8f\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u6240\u8bf4\u7684 XDP \u7a0b\u5e8f\u3002\u6240\u4ee5\u5f88\u660e\u663e\u8fd9\u9700\u8981\u7f51\u5361\u9a71\u52a8\u7684\u652f\u6301\uff0c\u5982\u679c\u9a71\u52a8\u652f\u6301 XDP \uff0c\u90a3 XDP \u7a0b\u5e8f\u5c06\u5728 poll \u673a\u5236\u5185\u6267\u884c\u3002\u5982\u679c\u4e0d\u652f\u6301\uff0c\u90a3 XDP \u7a0b\u5e8f\u5c06\u53ea\u80fd\u5728\u66f4\u540e\u9762\u7684\u4f4d\u7f6e\u88ab\u6267\u884c\uff0c\u5373\u4e0a\u56fe\u4e2d\u7684receive_skb\u4e2d\u3002\u8fd9\u5176\u4e2d\u7ecf\u5386\u4e86\u54ea\u4e9b\u6b65\u9aa4\u5462\uff1f"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u521b\u5efaskb\uff0c\u5982\u679c\u4e0d\u652f\u6301XDP\uff0cpoll\u673a\u5236\u4f1a\u5c06\u62a5\u6587\u9001\u7ed9 clean_rx()\uff0c\u8be5\u51fd\u6570\u4f1a\u521b\u5efa\u4e00\u4e2askb\uff0c\u5e76skb\u8fdb\u884c\u4e00\u4e9b\u786c\u4ef6\u6821\u9a8c\u4f55\u68c0\u67e5\uff0c\u7136\u540e\u8f83\u7ed9 gro_receive() \u51fd\u6570\uff1b"),Object(a.b)("li",{parentName:"ol"},"\u5206\u7247\u91cd\u7ec4\uff0cGRO\u53ef\u4ee5\u7406\u89e3\u4e3aLRO\u7684\u8f6f\u4ef6\u5b9e\u73b0\uff0c\u76f8\u6bd4LRO\u53ea\u9488\u5bf9TCP\u62a5\u6587\uff0cGRO\u53ef\u4ee5\u5904\u7406\u66f4\u591a\u5176\u4ed6\u7c7b\u578b\u7684\u62a5\u6587\uff0c\u603b\u4e4b\u5728 gro_receive() \u51fd\u6570\u4e2d\uff0c\u5982\u679c\u662f\u5206\u7247\u62a5\u6587\u5219\u8fdb\u884c\u5206\u7247\u91cd\u7ec4\u7136\u540e\u4ea4\u7ed9 receive_skb() \u51fd\u6570\uff0c\u5982\u679c\u4e0d\u662f\u5206\u7247\u62a5\u6587\uff0c\u5219\u76f4\u63a5\u4ea4\u7ed9 receive_skn() \u51fd\u6570\u8fdb\u884c\u5904\u7406\uff1b")),Object(a.b)("h2",{id:"2-xdp\u7684\u4e09\u79cd\u5de5\u4f5c\u6a21\u5f0f"},"2. XDP\u7684\u4e09\u79cd\u5de5\u4f5c\u6a21\u5f0f"),Object(a.b)("p",null,"\u4e0a\u9762\u63d0\u5230XDP\u7a0b\u5e8f\u53ef\u4ee5\u8fd0\u884c\u5728\u4e0d\u540c\u4f4d\u7f6e\uff0c\u6bcf\u4e2a\u4f4d\u7f6e\u5373\u5bf9\u5e94XDP\u7684\u4e00\u79cd\u5de5\u4f5c\u6a21\u5f0f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Native XDP\uff0c\u5373\u8fd0\u884c\u5728\u7f51\u5361\u9a71\u52a8\u5b9e\u73b0\u7684\u7684 poll() \u51fd\u6570\u4e2d\uff0c\u9700\u8981\u7f51\u5361\u9a71\u52a8\u7684\u652f\u6301\uff1b"),Object(a.b)("li",{parentName:"ul"},"Generic XDP\uff0c\u5373\u4e0a\u9762\u63d0\u5230\u7684\u5982\u679c\u7f51\u5361\u9a71\u52a8\u4e0d\u652f\u6301XDP\uff0c\u5219\u53ef\u4ee5\u8fd0\u884c\u5728 receive_skb() \u51fd\u6570\u4e2d\uff1b"),Object(a.b)("li",{parentName:"ul"},"Offloaded XDP\uff0c\u8fd9\u79cd\u6a21\u5f0f\u662f\u6307\u5c06XDP\u7a0b\u5e8foffload\u5230\u7f51\u5361\u4e2d\uff0c\u8fd9\u9700\u8981\u7f51\u5361\u786c\u4ef6\u7684\u652f\u6301\uff0cJIT\u7f16\u8bd1\u5668\u5c06BPF\u4ee3\u7801\u7ffb\u8bd1\u6210\u7f51\u5361\u539f\u751f\u6307\u4ee4\u5e76\u5728\u7f51\u5361\u4e0a\u8fd0\u884c\u3002")),Object(a.b)("h2",{id:"3-xdp\u7a0b\u5e8f\u7684\u8fd4\u56de\u7801"},"3. XDP\u7a0b\u5e8f\u7684\u8fd4\u56de\u7801"),Object(a.b)("p",null,"XDP\u7a0b\u5e8f\u6267\u884c\u7ed3\u675f\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\uff0c\u544a\u8bc9\u8c03\u7528\u8005\u63a5\u4e0b\u6765\u5982\u4f55\u5904\u7406\u8fd9\u4e2a\u5305\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"XDP_DROP\uff0c\u4e22\u5f03\u8fd9\u4e2a\u5305\uff0c\u4e3b\u8981\u7528\u4e8e\u62a5\u6587\u8fc7\u6ee4\u7684\u5b89\u5168\u573a\u666f\uff1b"),Object(a.b)("li",{parentName:"ul"},"XDP_PASS\uff0c\u5c06\u8fd9\u4e2a\u5305\u201c\u4ea4\u7ed9/\u8fd8\u7ed9\u201d\u5185\u6838\uff0c\u7ee7\u7eed\u8d70\u6b63\u5e38\u7684\u5185\u6838\u5904\u7406\u6d41\u7a0b\uff1b"),Object(a.b)("li",{parentName:"ul"},"XDP_TX\uff0c\u4ece\u6536\u5230\u5305\u7684\u7f51\u5361\u4e0a\u518d\u5c06\u8fd9\u4e2a\u5305\u53d1\u51fa\u53bb\uff08\u5373hairpin\u6a21\u5f0f\uff09\uff0c\u4e3b\u8981\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\u573a\u666f\uff1b"),Object(a.b)("li",{parentName:"ul"},"XDP_REDIRECT\uff0c\u4f55XDP_TX\u7c7b\u4f3c\uff0c\u4f46\u662f\u662f\u901a\u8fc7\u53e6\u5916\u4e00\u4e2a\u7f51\u5361\u5c06\u5305\u53d1\u51fa\u53bb\u3002\u9664\u6b64\u4e4b\u5916\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u5c06\u62a5\u6587\u91cd\u5b9a\u5411\u5230\u5176\u4ed6\u7684CPU\u5904\u7406\uff0c\u7c7b\u4f3c\u4e8eXDP_PASS\u7ee7\u7eed\u8d70\u5185\u6838\u5904\u7406\u6d41\u7a0b\uff0c\u4f46\u662f\u7531\u5176\u4ed6\u7684CPU\u5904\u7406\uff0c\u5f53\u524dCPU\u7ee7\u7eed\u5904\u7406\u540e\u7eed\u7684\u62a5\u6587\u63a5\u6536\uff1b"),Object(a.b)("li",{parentName:"ul"},"XDP_ABORTED\uff0c\u8868\u793a\u7a0b\u5e8f\u4ea7\u751f\u5f02\u5e38\uff0c\u884c\u4e3a\u7c7b\u4f3cXDP_DROP\uff0c\u4f46\u662f\u4f1a\u901a\u8fc7\u4e00\u4e2atracepoint\u6253\u5370\u65e5\u5fd7\u4e49\u5de5\u8ffd\u8e2a\uff1b")),Object(a.b)("p",null,"\u4e0b\u9762\u662f Mellanox mlx5 \u9a71\u52a8\u4e2d\u5173\u4e8eXDP\u7684\u5904\u7406\uff0c\u5982\u679c\u8be5\u51fd\u6570\u8fd4\u56de true\uff0c\u5219\u8bf4\u660e\u62a5\u6587\u88abXDP\u5904\u7406\u4e86\uff0c\u4e0d\u7528\u518d\u8d70\u5185\u6838\u534f\u8bae\u6808\u4e86\uff0c\u5982\u679c\u8fd4\u56de false \u5219\u521b\u5efaSKB\u7136\u540e\u7ee7\u7eed\u8d70\u5185\u6838\u534f\u8bae\u6808\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/* returns true if packet was consumed by xdp */\nbool mlx5e_xdp_handle(struct mlx5e_rq *rq, struct mlx5e_dma_info *di,\n                      u32 *len, struct xdp_buff *xdp)\n{\n        struct bpf_prog *prog = rcu_dereference(rq->xdp_prog);\n        u32 act;\n        int err;\n\n        if (!prog)\n                return false;\n\n        act = bpf_prog_run_xdp(prog, xdp);\n        switch (act) {\n        case XDP_PASS:\n                *len = xdp->data_end - xdp->data;\n                return false;\n        case XDP_TX:\n                if (unlikely(!mlx5e_xmit_xdp_buff(rq->xdpsq, rq, di, xdp)))\n                        goto xdp_abort;\n                __set_bit(MLX5E_RQ_FLAG_XDP_XMIT, rq->flags); /* non-atomic */\n                return true;\n        case XDP_REDIRECT:\n                if (xdp->rxq->mem.type != MEM_TYPE_XSK_BUFF_POOL) {\n                        page_ref_sub(di->page, di->refcnt_bias);\n                        di->refcnt_bias = 0;\n                }\n                /* When XDP enabled then page-refcnt==1 here */\n                err = xdp_do_redirect(rq->netdev, xdp, prog);\n                if (unlikely(err))\n                        goto xdp_abort;\n                __set_bit(MLX5E_RQ_FLAG_XDP_XMIT, rq->flags);\n                __set_bit(MLX5E_RQ_FLAG_XDP_REDIRECT, rq->flags);\n                if (xdp->rxq->mem.type != MEM_TYPE_XSK_BUFF_POOL)\n                        mlx5e_page_dma_unmap(rq, di);\n                rq->stats->xdp_redirect++;\n                return true;\n        default:\n                bpf_warn_invalid_xdp_action(act);\n                fallthrough;\n        case XDP_ABORTED:\nxdp_abort:\n                trace_xdp_exception(rq->netdev, prog, act);\n                fallthrough;\n        case XDP_DROP:\n                rq->stats->xdp_drop++;\n                return true;\n        }\n}\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u7591\u95ee\uff1f"),"\n\u5982\u679c\u6211\u4eec\u76f8\u5bf9\u62a5\u6587\u6267\u884c redirect\uff0c\u90a3\u4e48\u6211\u4eec\u5728BPF\u7a0b\u5e8f\u4e2d\u9700\u8981\u6267\u884c bpf_redirect() / bpf_redirect_map()\uff0c\u4f46\u662f\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u770b\uff0c\u4ece\u6211\u4eec\u7684BPF\u7a0b\u5e8f\u8fd4\u56de\u540e\uff0c\u9a71\u52a8\u7a0b\u5e8f\u4e5f\u8c03\u7528\u4e86\u4e00\u4e2a\u53eb\u505a xdp_do_redirect() \u7684\u51fd\u6570\u3002\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u62a5\u6587\u7684 redirect \u5230\u5e95\u662f\u5728\u4ec0\u4e48\u65f6\u5019\u6267\u884c\u7684\u5462\uff1f\u7b54\u6848\u540e\u9762\u63ed\u6653\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u63a5\u7740\u5206\u6790\uff1a")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-drivers/net/ethernet/mellanox/mlx5/core/en/xdp.c:mlx5e_xdp_handle"},"        case XDP_REDIRECT:\n                /* When XDP enabled then page-refcnt==1 here */\n                err = xdp_do_redirect(rq->netdev, &xdp, prog);\n                if (unlikely(err))\n                        goto xdp_abort;\n                __set_bit(MLX5E_RQ_FLAG_XDP_XMIT, rq->flags);\n                __set_bit(MLX5E_RQ_FLAG_XDP_REDIRECT, rq->flags);\n                if (!xsk)\n                        mlx5e_page_dma_unmap(rq, di);\n                rq->stats->xdp_redirect++;\n                return true;\n")),Object(a.b)("p",null,"XDP\u7a0b\u5e8f\u8fd4\u56de\u540e\uff0c\u9a71\u52a8\u4f1a\u6839\u636eXDP\u7a0b\u5e8f\u7684\u8fd4\u56de\u7801\u53bb\u771f\u6b63\u6267\u884c action\u3002\u6211\u4eec\u4ee5 XDP_REDIRECT \u4e3a\u4f8b\uff0c\u7ee7\u7eed\u8ddf\u8e2a xdp_do_redirect() \u51fd\u6570\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// >> net/core/filter.c\nxdp_do_redirect(netdev, xdp_buff, xdp_prog) =>\nxdp_do_redirect_map(netdev, xdp_buff, xdp_prog, bpf_map, bpf_redirect_info) =>\n__bpf_tx_xdp_map(netdev, fwd, bpf_map, xdp_buff, index) =>\n// fwd\u5373xdp_sock\uff1b\n\n// >> kernel/bpf/xskmap.c\n__xsk_map_redirect(bpf_map, xdp_buff, xdp_sock) =>\n\n// >> net/xdp/xsk.c\nxsk_rcv(xdp_sock, xdp_buff)\n__xsk_rcv(xdp_sock, xdp_buff, len)\n")),Object(a.b)("p",null,"\u6211\u4eec\u4e3b\u8981\u770b\u4e0b xsk_rck() \u548c __xsk_rcv() \u4e24\u4e2a\u51fd\u6570\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xl"},"int xsk_rcv(struct xdp_sock *xs, struct xdp_buff *xdp)\n{\n        u32 len;\n\n        if (!xsk_is_bound(xs))\n                return -EINVAL;\n        // AF_XDP\u6280\u672f\u8be6\u89e3\u4e2d\u66fe\u4ecb\u7ecd\u8fc7\uff0cAF_XDP socket\u662f\u8ddf\u5177\u4f53\u7684\u7f51\u5361RX\u961f\u5217\u7ed1\u5b9a\u7684\uff0c\u8fd9\u91cc\u518d\u771f\u6b63\u6267\u884c\n        // \u6536\u5305\u524d\u505a\u4e86\u4f9d\u6b21\u5224\u65ad(\u867d\u7136XDP\u7a0b\u5e8f\u4e2d\u4e5f\u6709\u5224\u65ad\uff0c\u4f46\u6bd5\u7adf\u4e0d\u662f\u5f3a\u5236\u7684)\n        if (xs->dev != xdp->rxq->dev || xs->queue_id != xdp->rxq->queue_index)\n                return -EINVAL;\n\n        len = xdp->data_end - xdp->data;\n\n        return (xdp->rxq->mem.type == MEM_TYPE_ZERO_COPY) ?\n                __xsk_rcv_zc(xs, xdp, len) : __xsk_rcv(xs, xdp, len);\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"static int __xsk_rcv(struct xdp_sock *xs, struct xdp_buff *xdp, u32 len)\n{\n        u64 offset = xs->umem->headroom;\n        u64 addr, memcpy_addr;\n        void *from_buf;\n        u32 metalen;\n        int err;\n\n        // \u4ece FILL RING\u4e2d\u83b7\u53d6\u53ef\u4ee5\u627f\u8f7d\u62a5\u6587\u6570\u636e\u7684desc\n        if (!xskq_peek_addr(xs->umem->fq, &addr, xs->umem) ||\n            len > xs->umem->chunk_size_nohr - XDP_PACKET_HEADROOM) {\n                xs->rx_dropped++;\n                return -ENOSPC;\n        }\n\n        if (unlikely(xdp_data_meta_unsupported(xdp))) {\n                from_buf = xdp->data;\n                metalen = 0;\n        } else {\n                from_buf = xdp->data_meta;\n                metalen = xdp->data - xdp->data_meta;\n        }\n        // \u6267\u884c\u62a5\u6587\u6570\u636e\u7684copy\uff0c\u8be5\u51fd\u6570\u65f6\u975ezero copy\u6a21\u5f0f\u4e0b\u7684\u6267\u884c\u51fd\u6570\n        memcpy_addr = xsk_umem_adjust_offset(xs->umem, addr, offset);\n        __xsk_rcv_memcpy(xs->umem, memcpy_addr, from_buf, len, metalen);\n\n        offset += metalen;\n        addr = xsk_umem_adjust_offset(xs->umem, addr, offset);\n        // \u63d2\u5165\u5230 RX RING\u4e2d\n        err = xskq_produce_batch_desc(xs->rx, addr, len);\n        if (!err) {\n                xskq_discard_addr(xs->umem->fq);\n                xdp_return_buff(xdp);\n                return 0;\n        }\n\n        xs->rx_dropped++;\n        return err;\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u7ed3\u8bba\uff1a"),"\nbpf_redirect() \u548c bpf_redirect_map() \u5e94\u8be5\u53ea\u662f\u586b\u5145bpf_redirect_info\u7ed3\u6784\uff08\u5373redirect\u7684target\u76f8\u5173\u7684\u6570\u636e\uff09\uff0c\u771f\u6b63\u7684redirect\u64cd\u4f5c\u4ecd\u7531\u9a71\u52a8\u5728 XDP\u7a0b\u5e8f\u8fd4\u56de\u540e\u6267\u884c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"// >> include/linux/filter.h\nstruct bpf_redirect_info {\n        u32 flags;\n        u32 tgt_index;\n        void *tgt_value;\n        struct bpf_map *map;\n        struct bpf_map *map_to_flush;\n        u32 kern_flags;\n};\n// >> net/core/filter.c:\nint xdp_do_redirect(struct net_device *dev, struct xdp_buff *xdp,\n                    struct bpf_prog *xdp_prog)\n{\n        struct bpf_redirect_info *ri = this_cpu_ptr(&bpf_redirect_info);\n        struct bpf_map *map = READ_ONCE(ri->map);\n\n        if (likely(map))\n                return xdp_do_redirect_map(dev, xdp, xdp_prog, map, ri);\n\n        return xdp_do_redirect_slow(dev, xdp, xdp_prog, ri);\n}\n")))}o.isMDXComponent=!0}}]);