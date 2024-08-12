"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5687],{2953:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=i(4848),t=i(8453);const r={title:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",sidebar_label:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",keywords:["design pattern","Liskov Substitution Principle","LSP"],description:"\u8aaa\u660e\u91cc\u6c0f\u66ff\u63db\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",sidebar_position:2,tags:["design pattern"]},l=void 0,d={id:"design-pattern/SOLID/lsp",title:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",description:"\u8aaa\u660e\u91cc\u6c0f\u66ff\u63db\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",source:"@site/docs/design-pattern/SOLID/02_lsp.md",sourceDirName:"design-pattern/SOLID",slug:"/design-pattern/SOLID/lsp",permalink:"/design-pattern/SOLID/lsp",draft:!1,unlisted:!1,editUrl:"https://github.com/deverqqqq/DevElixir/tree/main/docs/design-pattern/SOLID/02_lsp.md",tags:[{inline:!0,label:"design pattern",permalink:"/tags/design-pattern"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",sidebar_label:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",keywords:["design pattern","Liskov Substitution Principle","LSP"],description:"\u8aaa\u660e\u91cc\u6c0f\u66ff\u63db\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",sidebar_position:2,tags:["design pattern"]},sidebar:"patternSidebar",previous:{title:"\u55ae\u4e00\u8077\u8cac\u539f\u5247",permalink:"/design-pattern/SOLID/srp"},next:{title:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",permalink:"/design-pattern/SOLID/dip"}},o={},c=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u5be6\u4f5c\u5efa\u8b70",id:"\u5be6\u4f5c\u5efa\u8b70",level:2},{value:"\u5be6\u4f8b",id:"\u5be6\u4f8b",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u8a2d\u8a08",id:"\u8a2d\u8a08",level:3},{value:"\u6548\u76ca &amp; \u6ce8\u610f\u4e8b\u9805",id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",level:2},{value:"\u6548\u76ca",id:"\u6548\u76ca",level:3},{value:"\u6ce8\u610f\u4e8b\u9805",id:"\u6ce8\u610f\u4e8b\u9805",level:3},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9a\u7fa9 1"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when ol is substituted for o2 then S is a subtype of T.",(0,s.jsx)(n.br,{}),"\n","\u4e00\u500b\u985e\u5225\u61c9\u8a72\u53ea\u6709\u4e00\u500b\u53ef\u4ee5\u53bb\u7570\u52d5\u7684\u539f\u56e0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5b9a\u7fa9 2"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.",(0,s.jsx)(n.br,{}),"\n","\u6240\u6709\u5f15\u7528\u7236\u985e\u7684\u5730\u65b9\u5fc5\u987b\u80fd\u76f4\u63a5\u4f7f\u7528\u5176\u5b50\u985e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8aaa\u660e",children:"\u8aaa\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u7236\u985e\u5225\u51fa\u73fe\u7684\u5730\u65b9\u90fd\u53ef\u4ee5\u7528\u5b50\u985e\u5225\u66ff\u4ee3\uff0c\u800c\u4e14\u4e0d\u6703\u6709\u4efb\u4f55\u7684\u932f\u8aa4\u767c\u751f\uff0c\u4f7f\u7528\u8005\u4e0d\u9700\u8981\u77e5\u9053\u662f\u7236\u985e\u9084\u662f\u5b50\u985e\u3002",(0,s.jsx)(n.br,{}),"\n","\u4e0d\u904e\u53cd\u904e\u4f86\u5c31\u4e0d\u884c\uff0c\u4f7f\u7528\u5b50\u985e\u5225\u7684\u5730\u65b9\uff0c\u4e0d\u4e00\u5b9a\u80fd\u5920\u7528\u7236\u985e\u5225\u53bb\u505a\u53d6\u4ee3\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f5c\u5efa\u8b70",children:"\u5be6\u4f5c\u5efa\u8b70"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5b50\u985e\u5225\u5fc5\u9808\u5b8c\u5168\u5be6\u73fe\u7236\u985e\u5225\u7684\u65b9\u6cd5\u3002","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7121\u6cd5\u6eff\u8db3\u6642\uff0c\u8acb\u4f7f\u7528\u5176\u4ed6\u7684\u65b9\u5f0f\u8655\u7406\u3002",(0,s.jsx)(n.br,{}),"\n","ex: \u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u4ecb\u9762\u53bb\u505a\u5b9a\u7fa9\uff0c\u6216\u662f\u53e6\u5916\u958b\u4e00\u500b\u62bd\u8c61\u985e\u5225\u7368\u7acb\u8655\u7406\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u7236\u985e\u5225\u7684\u5730\u65b9\u53ef\u4ee5\u7528\u5b50\u985e\u5225\u53d6\u4ee3\uff1b\u4f7f\u7528\u5b50\u985e\u5225\u7684\u5730\u65b9\u4e0d\u4e00\u5b9a\u80fd\u7528\u7236\u985e\u5225\u53d6\u4ee3\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8986\u5beb\u6216\u662f\u5be6\u4f5c\u7236\u985e\u5225\u65b9\u6cd5\u6642\uff0c\u65b9\u6cd5\u7684\u53c3\u6578\u7bc4\u570d\u53ef\u4ee5\u8b8a\u5927 (Design by Contract)"}),"\n",(0,s.jsx)(n.li,{children:"\u8986\u5beb\u6216\u662f\u5be6\u4f5c\u7236\u985e\u5225\u65b9\u6cd5\u6642\uff0c\u65b9\u6cd5\u7684\u8f38\u51fa\u7bc4\u570d\u53ef\u4ee5\u7e2e\u5c0f (Design by Contract)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f8b",children:"\u5be6\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"// ..."}),"\n",(0,s.jsx)(n.h3,{id:"\u8a2d\u8a08",children:"\u8a2d\u8a08"}),"\n",(0,s.jsx)(n.p,{children:"// ..."}),"\n",(0,s.jsx)(n.h2,{id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",children:"\u6548\u76ca & \u6ce8\u610f\u4e8b\u9805"}),"\n",(0,s.jsx)(n.h3,{id:"\u6548\u76ca",children:"\u6548\u76ca"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u7236\u985e\u5225\u8a2d\u8a08\u7684\u8db3\u5920\u62bd\u8c61\uff0c\u90a3\u884d\u751f\u985e\u5225\u81ea\u7136\u53ef\u4ee5\u7167\u8457\u9019\u500b\u6a21\u677f\u5ba2\u88fd\u51fa\u60f3\u8981\u7684\u985e\u5225\u5be6\u4f5c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7236\u985e\u5225\u7684\u529f\u80fd\u53ef\u4ee5\u505a\u5230\u91cd\u8907\u5229\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u63d0\u9ad8\u4ee3\u78bc\u7684\u53ef\u64f4\u5c55\u6027\uff0c\u5be6\u73fe\u7236\u985e\u5225\u7684\u65b9\u6cd5\u5c31\u53ef\u4ee5\u505a\u5f88\u591a\u60f3\u505a\u7684\u4e8b\u60c5\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9805",children:"\u6ce8\u610f\u4e8b\u9805"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7e7c\u627f\u662f\u4fb5\u5165\u6027\u7684\uff0c\u53ea\u8981\u7e7c\u627f\u5c31\u5fc5\u9808\u64c1\u6709\u7236\u985e\u5225\u7684\u65b9\u6cd5\u548c\u5c6c\u6027\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7e7c\u627f\u67d0\u65b9\u9762\u4e5f\u6703\u8b93\u7a0b\u5f0f\u5931\u53bb\u9748\u6d3b\u6027\uff0c\u8b93\u5b50\u985e\u5225\u5728\u8a2d\u8a08\u4e0a\u591a\u4e86\u4e0d\u5c11\u7d04\u675f\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8026\u5408\u6027\u589e\u5f37\uff0c\u7576\u7236\u985e\u5225\u88ab\u4fee\u6539\u7684\u6642\u5019\uff0c\u6240\u6709\u7684\u5b50\u985e\u5225\u90fd\u6703\u88ab\u5f71\u97ff\uff0c\u5728\u7236\u985e\u5225\u6c92\u6709\u59a5\u5584\u88ab\u8a2d\u8a08\u597d\u7684\u72c0\u6cc1\u4e0b\uff0c\u5f88\u5e38\u6703\u9700\u8981\u9032\u884c\u5927\u898f\u6a21\u7684\u91cd\u69cb\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.sanmin.com.tw/product/index/004405914",children:"\u8a2d\u8a08\u6a21\u5f0f\u4e4b\u79aa"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);