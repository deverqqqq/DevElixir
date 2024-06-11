"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3668],{7316:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>t});var r=i(7624),s=i(2172);const o={title:"Docker \u5f9e\u4f55\u800c\u4f86",sidebar_label:"Docker \u5f9e\u4f55\u800c\u4f86",keywords:["docker"],description:"Docker \u5f9e\u4f55\u800c\u4f86",sidebar_position:1,tags:["docker"]},d=void 0,c={id:"dev-ops/docker/intro",title:"Docker \u5f9e\u4f55\u800c\u4f86",description:"Docker \u5f9e\u4f55\u800c\u4f86",source:"@site/docs/dev-ops/docker/01_intro.md",sourceDirName:"dev-ops/docker",slug:"/dev-ops/docker/intro",permalink:"/dev-ops/docker/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/deverqqqq/DevElixir/tree/main/docs/dev-ops/docker/01_intro.md",tags:[{inline:!0,label:"docker",permalink:"/tags/docker"}],version:"current",sidebarPosition:1,frontMatter:{title:"Docker \u5f9e\u4f55\u800c\u4f86",sidebar_label:"Docker \u5f9e\u4f55\u800c\u4f86",keywords:["docker"],description:"Docker \u5f9e\u4f55\u800c\u4f86",sidebar_position:1,tags:["docker"]},sidebar:"devOpsSidebar",previous:{title:"Docker \u5b78\u7fd2\u8cc7\u6e90",permalink:"/dev-ops/docker/learning-resource"},next:{title:"Docker Overview",permalink:"/dev-ops/docker/overview"}},l={},t=[{value:"\u8d77\u6e90",id:"\u8d77\u6e90",level:2},{value:"Virtual Machine",id:"virtual-machine",level:2},{value:"Container",id:"container",level:2},{value:"Docker",id:"docker",level:2},{value:"Docker on Windows",id:"docker-on-windows",level:2},{value:"WebAssembly",id:"webassembly",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u8d77\u6e90",children:"\u8d77\u6e90"}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u7576\u4f01\u696d\u9700\u8981\u4e00\u500b\u65b0\u61c9\u7528\u7a0b\u5e8f\u6642\uff0c\u5c31\u5fc5\u9808\u8cfc\u8cb7\u4e00\u53f0\u65b0\u4f3a\u670d\u5668\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u6211\u5011\u4e0d\u64c5\u9577\u9810\u6e2c\u65b0\u61c9\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u9700\u6c42\uff0c\u53ea\u80fd\u731c\u6e2c\u672a\u4f86\u53ef\u80fd\u7684\u4f7f\u7528\u91cf\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9019\u5c0e\u81f4\u4f01\u696d\u50be\u5411\u8cfc\u8cb7\u975e\u5e38\u6602\u8cb4\u7684\u4f3a\u670d\u5668\uff0c\u6027\u80fd\u9060\u8d85\u61c9\u7528\u7a0b\u5e8f\u7684\u9700\u6c42\u3002\u7562\u7adf\uff0c\u6c92\u6709\u4eba\u5e0c\u671b\u4f3a\u670d\u5668\u6027\u80fd\u4e0d\u8db3\uff0c\u7121\u6cd5\u8655\u7406\u61c9\u7528\u7a0b\u5e8f\uff0c\u5f9e\u800c\u5c0e\u81f4\u5ba2\u6236\u4e0d\u6eff\u548c\u6536\u5165\u640d\u5931\u3002\u56e0\u6b64\uff0c\u4f01\u696d\u6700\u7d42\u64c1\u6709\u8a31\u591a\u6027\u80fd\u904e\u5269\u7684\u4f3a\u670d\u5668\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u76f4\u5230\u865b\u64ec\u5316\u6280\u8853\u51fa\u73fe\u5f8c\uff0c\u89e3\u6c7a\u4e86\u9019\u500b\u554f\u984c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"virtual-machine",children:"Virtual Machine"}),"\n",(0,r.jsx)(n.p,{children:"VMware\u7684\u51fa\u73fe\uff0c\u7d42\u65bc\u6709\u4e86\u4e00\u7a2e\u6280\u8853\uff0c\u5141\u8a31\u6211\u5011\u5728\u4e00\u500b\u4f3a\u670d\u5668\u4e0a\u5b89\u5168\u5730\u904b\u884c\u591a\u500b\u61c9\u7528\u7a0b\u5f0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9019\u662f\u4e00\u500b\u6539\u8b8a\u904a\u6232\u898f\u5247\u7684\u6280\u8853\u3002\u4f01\u696d\u53ef\u4ee5\u5728\u73fe\u6709\u4f3a\u670d\u5668\u7684\u9592\u7f6e\u8cc7\u6e90\u4e0a\u904b\u884c\u61c9\u7528\uff0c\u9019\u6380\u8d77\u4e86\u4e00\u500b\u6700\u5927\u5316\u73fe\u6709\u8cc7\u7522\u50f9\u503c\u7684\u9ec3\u91d1\u6642\u4ee3\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7279\u9ede","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6bcf\u500b\u865b\u64ec\u6a5f\u90fd\u6709\u5b8c\u6574\u7684 OS \u548c\u914d\u7f6e\u7684\u786c\u9ad4\u8cc7\u6e90 (CPU, RAM)\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6bcf\u500b\u865b\u64ec\u6a5f\u90fd\u76f8\u7576\u65bc\u662f\u7368\u7acb\u7684\u4f5c\u696d\u7cfb\u7d71\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u7f3a\u9ede","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6bcf\u500b\u865b\u64ec\u6a5f\u90fd\u5305\u542b\u5b8c\u6574\u7684\u7cfb\u7d71\uff0c\u555f\u52d5\u7684\u8cc7\u6e90\u9700\u8981\u6bd4\u8f03\u591a\uff0c"}),"\n",(0,r.jsx)(n.li,{children:"\u56e0\u70ba\u662f\u5b8c\u6574\u7684\u7cfb\u7d71\uff0c\u6240\u4ee5\u555f\u52d5\u7684\u901f\u5ea6\u4e5f\u6bd4\u8f03\u6162\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6bcf\u500b\u865b\u64ec\u6a5f\u90fd\u9700\u8981\u5b9a\u6642\u76e3\u63a7\u548c\u66f4\u65b0\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"container",children:"Container"}),"\n",(0,r.jsx)(n.p,{children:"\u5bb9\u5668\u5171\u4eab\u5176\u904b\u884c\u7684\u4e3b\u6a5f\u7684 OS\uff0c\u9019\u610f\u5473\u8457\u55ae\u500b\u4e3b\u6a5f\u53ef\u4ee5\u904b\u884c\u66f4\u591a\u7684\u5bb9\u5668\uff0c\u540c\u6642\u6bcf\u500b\u5bb9\u5668\u4e26\u975e\u7368\u7acb\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u53ef\u4ee5\u66f4\u9ad8\u6548\u7684\u4f7f\u7528\u4f3a\u670d\u5668\u8cc7\u6e90\uff0c\u555f\u52d5\u66f4\u5feb\u901f\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Linux Container\n\u73fe\u4ee3\u5bb9\u5668\u6280\u8853\u59cb\u65bc Linux\uff0c\u662f\u773e\u591a\u4eba\u591a\u5e74\u4f86\u5171\u540c\u52aa\u529b\u7684\u6210\u679c\u3002\u4f8b\u5982\uff0cGoogle\u70baLinux\u5167\u6838\u8ca2\u737b\u4e86\u8a31\u591a\u8207\u5bb9\u5668\u76f8\u95dc\u7684\u6280\u8853\u3002\u6b63\u662f\u7531\u65bc\u9019\u4e9b\u8ca2\u737b\uff0c\u6211\u5011\u624d\u6709\u4e86\u4eca\u5929\u7684\u5bb9\u5668\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(4032).c+"",width:"694",height:"404"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u8a31\u591a\u985e\u4f3c\u65bc\u5bb9\u5668\u7684\u6280\u8853\u65e9\u65bc Docker \u548c\u73fe\u4ee3\u5bb9\u5668\u3002\u7136\u800c\uff0c\u6c92\u6709\u4efb\u4f55\u4e00\u500b\u50cf Docker \u4e00\u6a23\uff0c\u8b93\u4f7f\u7528\u5bb9\u5668\u8b8a\u5f97\u5f88\u5bb9\u6613\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(n.p,{children:"Docker \u662f\u4f7f Linux Container \u6613\u65bc\u4f7f\u7528\u7684\u5de5\u5177\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"docker-on-windows",children:"Docker on Windows"}),"\n",(0,r.jsxs)(n.p,{children:["\u5fae\u8edf\u7684 WSL \uff0c\u900f\u904e\u5167\u5efa Linux \u6838\u5fc3\u7684\u65b9\u5f0f\uff0c\u4f7f\u5f97\u5728 Windows \u4e0a\u9762\u57f7\u884c Linux Container \u8b8a\u5f97\u5f88\u5bb9\u6613\u3002",(0,r.jsx)(n.br,{}),"\n","\u96d6\u7136 Windows \u672c\u8eab\u4e5f\u6709\u81ea\u5df1\u7684\u5bb9\u5668\u6280\u8853(Windows Container)\uff0c\u4f46\u6700\u4e3b\u6d41\u7684\u9084\u662f Linux Container\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"webassembly",children:"WebAssembly"}),"\n",(0,r.jsxs)(n.p,{children:["WebAssembly(Wasm) \u662f\u4e00\u7a2e\u73fe\u4ee3\u4e8c\u9032\u5236\u6307\u4ee4\u96c6\uff0c\u7528\u65bc\u69cb\u5efa\u6bd4\u5bb9\u5668\u66f4\u5c0f\u3001\u66f4\u5feb\u3001\u66f4\u5b89\u5168\u3001\u66f4\u4fbf\u651c\u7684\u61c9\u7528\u7a0b\u5f0f\u3002",(0,r.jsx)(n.br,{}),"\n","\u53ef\u4ee5\u7528\u81ea\u5df1\u559c\u6b61\u7684\u7a0b\u5f0f\u8a9e\u8a00\u5efa\u7f6e\uff0c\u4e26\u5c07\u5176\u7de8\u8b6f\u70ba WASM binary\uff0c\u5c31\u53ef\u4ee5\u5728\u4efb\u4f55\u6709 Wasm-Runtime \u7684\u5730\u65b9\u57f7\u884c\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u76ee\u524d WASM\u9084\u6709\u8a31\u591a\u9650\u5236\uff0c\u8a31\u591a\u6a19\u6e96\u90fd\u9084\u5728\u958b\u767c\u8a02\u88fd\u3002",(0,r.jsx)(n.br,{}),"\n","\u5bb9\u5668\u751f\u614b\u4e5f\u6bd4 WASM \u751f\u614b\u66f4\u8c50\u5bcc\u3001\u66f4\u6210\u719f\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsx)(n.p,{children:"Kubernetes \u662f\u90e8\u7f72\u548c\u7ba1\u7406\u5bb9\u5668\u5316\u61c9\u7528\u7684\u6a19\u6e96\u5e73\u53f0\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Kubernetes \u96d6\u7136\u4e0d\u662f\u7ba1\u7406\u5bb9\u5668\u7684\u552f\u4e00\u9078\u64c7\uff0c\u4f46\u76ee\u524d\u4e3b\u6d41\u5e7e\u4e4e\u90fd\u4ee5 Kubernetes \u4f5c\u70ba\u7ba1\u7406\u7684\u5de5\u5177\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leanpub.com/dockerdeepdive",children:"https://leanpub.com/dockerdeepdive"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4032:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/2024-06-11-12-25-26-45ef395beab03fdfac5c2eee966b0519.png"},2172:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>d});var r=i(1504);const s={},o=r.createContext(s);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);