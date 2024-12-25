"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6666],{57073:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"dev-ops/k8s/overview","title":"Overview","description":"Kubernetes","source":"@site/docs/dev-ops/k8s/02_overview.md","sourceDirName":"dev-ops/k8s","slug":"/dev-ops/k8s/overview","permalink":"/dev-ops/k8s/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/dev-ops/k8s/02_overview.md","tags":[{"inline":true,"label":"k8s","permalink":"/tags/k-8-s"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Overview","sidebar_label":"Overview","keywords":["k8s","Kubernetes"],"description":"Kubernetes","sidebar_position":2,"tags":["k8s"]},"sidebar":"devOpsSidebar","previous":{"title":"Intro","permalink":"/dev-ops/k8s/intro"}}');var i=r(74848),l=r(28453);const d={title:"Overview",sidebar_label:"Overview",keywords:["k8s","Kubernetes"],description:"Kubernetes",sidebar_position:2,tags:["k8s"]},o=void 0,t={},c=[{value:"Overview",id:"overview",level:2},{value:"Cluster",id:"cluster",level:3},{value:"Nodes",id:"nodes",level:3},{value:"Control Plane",id:"control-plane",level:2},{value:"API Server",id:"api-server",level:3},{value:"Cluster Store",id:"cluster-store",level:3},{value:"Controllers &amp; Controller Manager",id:"controllers--controller-manager",level:3},{value:"Scheduler",id:"scheduler",level:3},{value:"Worker Nodes",id:"worker-nodes",level:2},{value:"Kubelet",id:"kubelet",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Kube-proxy",id:"kube-proxy",level:3},{value:"Packaging For K8s",id:"packaging-for-k8s",level:2},{value:"Pods",id:"pods",level:3},{value:"Pod Lifecycle",id:"pod-lifecycle",level:3},{value:"Pod immutability",id:"pod-immutability",level:3},{value:"Declarative Model",id:"declarative-model",level:3},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Kubernetes \u5305\u542b\u4e0b\u9762\u5169\u7a2e\u5167\u5bb9\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u53e2\u96c6 (cluster)"}),"\n",(0,i.jsx)(n.li,{children:"\u5354\u8abf\u5668 (orchestrator)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cluster",children:"Cluster"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u55ae\u500b\u6216\u662f\u591a\u500b\u7bc0\u9ede (Nodes) \u7d44\u6210\uff0c\u63d0\u4f9b CPU\u3001\u8a18\u61b6\u9ad4\u3001\u548c\u5176\u4ed6\u904b\u7b97\u8cc7\u6e90\u7d66\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"nodes",children:"Nodes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Control plane",(0,i.jsx)(n.br,{}),"\n","\u6bcf\u500b Cluster \u81f3\u5c11\u9700\u8981\u4e00\u500b\uff0c\u5efa\u8b70\u8a2d\u7f6e\u591a\u500b\u4f86\u9054\u5230 HA \u7684\u6548\u679c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u76f8\u7576\u65bc\u5927\u8166\uff0c\u8ca0\u8cac\u63a7\u5236\u6240\u6709\u7684\u6838\u5fc3\u670d\u52d9\u57f7\u884c\u548c\u5bb9\u5668\u8abf\u5ea6\u3002"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Worker:",(0,i.jsx)(n.br,{}),"\n","\u57f7\u884c\u5bb9\u5668\u5316\u61c9\u7528\u7684\u5730\u65b9"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(93138).A+"",width:"733",height:"234"})}),"\n",(0,i.jsx)(n.h2,{id:"control-plane",children:"Control Plane"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(76636).A+"",width:"426",height:"348"})}),"\n",(0,i.jsx)(n.h3,{id:"api-server",children:"API Server"}),"\n",(0,i.jsxs)(n.p,{children:["Kubernetes \u7684\u524d\u7aef\uff0c\u6240\u6709\u7684\u8acb\u6c42\uff0c\u4e0d\u7ba1\u662f\u66f4\u6539/\u67e5\u8a62\u53e2\u96c6\u72c0\u614b\uff0c\u6216\u662f\u5167\u90e8\u670d\u52d9\u6e9d\u901a\uff0c\u252c\u90fd\u6703\u900f\u904e",(0,i.jsx)(n.code,{children:"API Server"}),"\u8655\u7406\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"API Server"}),"\u63d0\u4f9b RESTful API \u548c Https\uff0c\u6240\u6709\u7684\u8acb\u6c42\u90fd\u6703\u8981\u901a\u904e\u9a57\u8b49 + \u6388\u6b0a\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"cluster-store",children:"Cluster Store"}),"\n",(0,i.jsxs)(n.p,{children:["\u5132\u5b58\u6240\u6709\u61c9\u7528\u548c\u53e2\u96c6\u5143\u4ef6\u7684\u671f\u671b\u72c0\u614b\uff0c\u662f",(0,i.jsx)(n.code,{children:"Control Plane"}),"\u4e2d\u552f\u4e00\u6709\u72c0\u614b\u7684\u90e8\u5206\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"controllers--controller-manager",children:"Controllers & Controller Manager"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(32117).A+"",width:"662",height:"408"})}),"\n",(0,i.jsx)(n.h3,{id:"scheduler",children:"Scheduler"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u76e3\u63a7",(0,i.jsx)(n.code,{children:"API Server"}),"\u78ba\u8a8d\u662f\u5426\u6709\u65b0\u4efb\u52d9\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u78ba\u8a8d\u53ef\u4ee5\u6307\u6d3e\u7684\u7bc0\u9ede\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6307\u6d3e\u4efb\u52d9\u5230\u7d50\u9ede\u4e0a\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"worker-nodes",children:"Worker Nodes"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(68403).A+"",width:"419",height:"340"})}),"\n",(0,i.jsx)(n.h3,{id:"kubelet",children:"Kubelet"}),"\n",(0,i.jsx)(n.p,{children:"Kubernetes agent\uff0c\u8ca0\u8cac\u8207\u53e2\u96c6\u7684\u6240\u6709\u6e9d\u901a\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u76e3\u63a7",(0,i.jsx)(n.code,{children:"API Server"}),"\u78ba\u8a8d\u662f\u5426\u6709\u65b0\u4efb\u52d9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u56de\u5831",(0,i.jsx)(n.code,{children:"API Server"}),"\u4efb\u52d9\u57f7\u884c\u7d50\u679c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u4e00\u500b\u5de5\u4f5c\u7bc0\u9ede (Worker) \u90fd\u53ef\u4ee5\u6709\u55ae\u500b\u6216\u662f\u591a\u500b",(0,i.jsx)(n.code,{children:"Runtime"}),"\u4f86\u57f7\u884c\u4efb\u52d9\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"kube-proxy",children:"Kube-proxy"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u4e00\u500b\u5de5\u4f5c\u7bc0\u9ede (Worker) \u90fd\u6709\u4e00\u500b",(0,i.jsx)(n.code,{children:"Kube-proxy"}),"\u4f86\u8655\u7406\u53e2\u96c6\u7db2\u8def\u548c\u7bc0\u9ede\u5167\u7684\u4efb\u52d9\u8ca0\u8f09\u5e73\u8861\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"packaging-for-k8s",children:"Packaging For K8s"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(53807).A+"",width:"727",height:"347"})}),"\n",(0,i.jsx)(n.h3,{id:"pods",children:"Pods"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(85590).A+"",width:"391",height:"347"})}),"\n",(0,i.jsxs)(n.p,{children:["Pod \u662f K8s \u7684\u6700\u5c0f\u55ae\u4f4d\uff0c\u4e00\u500b Pod \u53ef\u4ee5\u6709\u591a\u500b Container\uff0c\u540c\u4e00\u500b Pod \u5167\u7684\u5bb9\u5668\uff0c\u5f7c\u6b64\u5171\u4eab\u57f7\u884c\u74b0\u5883 (",(0,i.jsx)(n.code,{children:"execution environment"}),")\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"pod-lifecycle",children:"Pod Lifecycle"}),"\n",(0,i.jsx)(n.p,{children:"Pods \u662f\u6709\u751f\u547d\u9031\u671f\u7684\uff0c\u5b83\u5011\u88ab\u5efa\u7acb\u3001\u4f7f\u7528\uff0c\u7136\u5f8c\u56de\u6536\u3002\u6bcf\u7576\u4e00\u500b Pod \u56de\u6536\uff0cKubernetes \u6703\u7528\u4e00\u500b\u65b0\u7684\u66ff\u4ee3\u5b83\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"pod-immutability",children:"Pod immutability"}),"\n",(0,i.jsx)(n.p,{children:"\u61c9\u8a72\u59cb\u7d42\u4f7f\u7528\u65b0\u7684 Pod \u4f86\u66ff\u63db\u820a Pod\uff0c\u800c\u4e0d\u662f\u900f\u904e\u767b\u9304\u5230 Pod \u4e0a\u9762\u505a\u66f4\u6539\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"declarative-model",children:"Declarative Model"}),"\n",(0,i.jsx)(n.p,{children:"Kubernetes \u4f7f\u7528\u8072\u660e\u5f0f\u6a21\u578b\u4f86\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f\uff0c\u610f\u5473\u8457\u53ea\u9700\u63cf\u8ff0\u597d\u7684\u61c9\u7528\u7a0b\u5f0f\u72c0\u614b\uff0c\u800c Kubernetes \u6703\u8ca0\u8cac\u5be6\u73fe\u5b83\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leanpub.com/thekubernetesbook",children:"https://leanpub.com/thekubernetesbook"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},93138:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/2024-12-25-12-17-06-a68f5be479f1734ea536bd7483707745.png"},76636:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/2024-12-25-16-02-20-7b495acf6ff4d3f2cc89b10b9959e359.png"},68403:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/2024-12-25-16-04-07-719289d30838f5484f001843767cbc50.png"},53807:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/2024-12-25-16-16-31-848f719235c7f1c0683efd3c442ca9c7.png"},85590:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/2024-12-25-16-32-32-cdbeb79dd3daa5eb97121067fd0e8ee3.png"},32117:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/2024-12-25-17-08-00-5feadfed58d20714832c2bb1c69a4b37.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var s=r(96540);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);