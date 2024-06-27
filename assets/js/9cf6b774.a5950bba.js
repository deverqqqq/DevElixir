"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8316],{1900:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(7624),l=i(2172);const t={title:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_label:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",keywords:["design pattern","Dependency Inversion Principle","DIP"],description:"\u8aaa\u660e\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",sidebar_position:3,tags:["design pattern"]},r=void 0,d={id:"design-pattern/SOLID/dip",title:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",description:"\u8aaa\u660e\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",source:"@site/docs/design-pattern/SOLID/03_dip.md",sourceDirName:"design-pattern/SOLID",slug:"/design-pattern/SOLID/dip",permalink:"/design-pattern/SOLID/dip",draft:!1,unlisted:!1,editUrl:"https://github.com/deverqqqq/DevElixir/tree/main/docs/design-pattern/SOLID/03_dip.md",tags:[{inline:!0,label:"design pattern",permalink:"/tags/design-pattern"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",sidebar_label:"\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247",keywords:["design pattern","Dependency Inversion Principle","DIP"],description:"\u8aaa\u660e\u4f9d\u8cf4\u53cd\u8f49\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",sidebar_position:3,tags:["design pattern"]},sidebar:"patternSidebar",previous:{title:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",permalink:"/design-pattern/SOLID/lsp"},next:{title:"\u4ecb\u9762\u9694\u96e2\u539f\u5247",permalink:"/design-pattern/SOLID/isp"}},o={},c=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u5be6\u4f5c\u5efa\u8b70",id:"\u5be6\u4f5c\u5efa\u8b70",level:2},{value:"\u5be6\u4f8b",id:"\u5be6\u4f8b",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u8a2d\u8a08",id:"\u8a2d\u8a08",level:3},{value:"\u6548\u76ca &amp; \u6ce8\u610f\u4e8b\u9805",id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",level:2},{value:"\u6548\u76ca",id:"\u6548\u76ca",level:3},{value:"\u6ce8\u610f\u4e8b\u9805",id:"\u6ce8\u610f\u4e8b\u9805",level:3},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["High level modules should not depend upon low level modules.",(0,s.jsx)(n.br,{}),"\n","Both should depend upon abstractions.",(0,s.jsx)(n.br,{}),"\n","Abstractions should not depend upon details. Details should depend upon abstractions."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8aaa\u660e",children:"\u8aaa\u660e"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u9ad8\u5c64\u6b21\u7684\u6a21\u7d44\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u4f4e\u5c64\u6b21\u7684\u6a21\u7d44\uff0c\u5169\u8005\u90fd\u61c9\u8a72\u4f9d\u8cf4\u65bc\u62bd\u8c61\u4ecb\u9762\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u62bd\u8c61\u4ecb\u9762\u4e0d\u61c9\u8a72\u4f9d\u8cf4\u65bc\u5177\u9ad4\u5be6\u73fe\u3002\u800c\u5177\u9ad4\u5be6\u73fe\u5247\u61c9\u8a72\u4f9d\u8cf4\u65bc\u62bd\u8c61\u4ecb\u9762\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f5c\u5efa\u8b70",children:"\u5be6\u4f5c\u5efa\u8b70"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6bcf\u500b\u985e\u5225\u90fd\u9700\u8981\u6709\u4ecb\u9762\u6216\u62bd\u8c61\u985e\u5225"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u7684\u8b8a\u6578\u578b\u5225\u61c9\u8a72\u76e1\u91cf\u662f\u62bd\u8c61\u800c\u4e0d\u662f\u5177\u9ad4\u985e\u5225\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u76e1\u91cf\u4e0d\u8981\u5f9e\u5177\u9ad4\u985e\u5225\u7e7c\u627f\u3002","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u7576\u7136\u5be6\u52d9\u4e0a\u6c92\u6709\u5c0d\u7684\u60c5\u5883\uff0c\u4f46\u5982\u679c\u5df2\u7d93\u77e5\u9053\u7e7c\u627f\u6703\u5c0e\u81f4\u4e00\u4e9b\u884d\u4f38\u7684\u554f\u984c\uff0c\u90a3\u5728\u505a\u9019\u500b\u6c7a\u5b9a\u4e4b\u524d\uff0c\u66f4\u61c9\u8a72\u597d\u597d\u601d\u8003\u4e00\u4e0b\uff0c\u662f\u5426\u80fd\u5920\u7528\u7e7c\u627f\u4ecb\u9762\u4f86\u89e3\u6c7a\uff0c\u53c8\u6216\u8005\u662f\u6709\u5176\u4ed6\u7684\u505a\u6cd5\u53ef\u4ee5\u8655\u7406\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7d50\u5408",(0,s.jsx)(n.a,{href:"/design-pattern/SOLID/lsp",children:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247"}),"\u7684\u5167\u5bb9\uff0c\u53ef\u4ee5\u5f97\u51fa\u4e00\u500b\u5927\u81f4\u7684\u898f\u7bc4\u3002","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ecb\u9762\uff1a\u8ca0\u8cac\u5b9a\u7fa9 public \u7684\u65b9\u6cd5\u548c\u5c6c\u6027\n\u62bd\u8c61\u985e\uff1a\u8ca0\u8cac\u5b9a\u7fa9\u5efa\u69cb\u51fd\u5f0f\u90e8\u5206\u7684\u5be6\u73fe"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5be6\u4f8b",children:"\u5be6\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"// ..."}),"\n",(0,s.jsx)(n.h3,{id:"\u8a2d\u8a08",children:"\u8a2d\u8a08"}),"\n",(0,s.jsx)(n.p,{children:"// ..."}),"\n",(0,s.jsx)(n.h2,{id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",children:"\u6548\u76ca & \u6ce8\u610f\u4e8b\u9805"}),"\n",(0,s.jsx)(n.h3,{id:"\u6548\u76ca",children:"\u6548\u76ca"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7576\u6211\u5011\u4f9d\u8cf4\u62bd\u8c61 (\u4ecb\u9762/\u62bd\u8c61\u985e\u5225) \u800c\u4e0d\u662f\u5177\u9ad4\u5be6\u73fe (\u985e\u5225)\uff0c\u53ef\u4ee5\u900f\u904e\u4e00\u4e9b\u55ae\u5143\u6e2c\u8a66\u7684\u5de5\u5177\uff0c\u5f88\u5feb\u505a\u51fa\u5047\u7269\u4ef6\u4f86\u5c0d\u6211\u5011\u7684\u529f\u80fd\u505a\u9a57\u8b49\u3002",(0,s.jsx)(n.br,{}),"\n","\u5c0d\u65bc\u958b\u767c\u4eba\u54e1\u4f86\u8aaa\uff0c\u4e0d\u9700\u8981\u4e00\u958b\u59cb\u5c31\u7169\u60f1\u5177\u9ad4\u7684\u5be6\u4f5c\u662f\u751a\u9ebc\uff0c\u800c\u662f\u53ef\u4ee5\u66f4\u5feb\u5730\u900f\u904e\u4ecb\u9762\u4f86\u9a57\u8b49\u6211\u5011\u7684\u529f\u80fd\u8a2d\u8a08\u662f\u4e0d\u662f\u6211\u5011\u60f3\u8981\u7684\u3002\u751a\u81f3\u53ef\u4ee5\u5728\u5177\u9ad4\u5be6\u73fe\u5b8c\u6210\u4e4b\u524d\uff0c\u5c0d\u6211\u5011\u7684\u529f\u80fd\u9032\u884c\u9a57\u8b49\u3002(TDD = Test-Driven Development = \u6e2c\u8a66\u9a45\u52d5\u958b\u767c)"]}),"\n",(0,s.jsx)(n.li,{children:"\u62bd\u8c61\u672c\u8eab\u6c7a\u5b9a\u4e86\u8981\u5982\u4f55\u4f7f\u7528\u9019\u500b\u529f\u80fd\uff0c\u53ea\u8981\u9019\u500b\u4ecb\u9762\u662f\u88ab\u78ba\u5b9a\u7684\uff0c\u4e0d\u7ba1\u5177\u9ad4\u5be6\u73fe\u662f\u8ab0\u505a\u7684\uff0c\u5982\u4f55\u505a\u7684\uff0c\u90fd\u4e0d\u6703\u8df3\u812b\u51fa\u9019\u500b\u7bc4\u7587\uff0c\u4f7f\u7528\u7684\u4eba\u518d\u4e5f\u4e0d\u7528\u64d4\u5fc3\u56e0\u70ba\u5177\u9ad4\u5be6\u73fe\u985e\u5225\u8b8a\u66f4\uff0c\u5c0e\u81f4\u6240\u6709\u7528\u5230\u9019\u500b\u529f\u80fd\u7684\u5730\u65b9\u90fd\u9700\u8981\u91cd\u65b0\u6aa2\u67e5\u6709\u6c92\u6709\u88ab\u5f71\u97ff\u5230\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9805",children:"\u6ce8\u610f\u4e8b\u9805"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728\u5c0f\u578b\u9805\u76ee\u4e2d\u5f88\u96e3\u9ad4\u6703\u4f9d\u8cf4\u53cd\u8f49\u7684\u512a\u9ede\uff0c\u76f8\u8f03\u65bc\u4f7f\u7528\u4ecb\u9762\uff0c\u76f4\u63a5 new \u51fa\u4e00\u500b\u9700\u8981\u7684\u7269\u4ef6\u66f4\u5feb\u66f4\u5be6\u969b\u3002",(0,s.jsx)(n.br,{}),"\n","\u53ea\u6709\u7576\u5c08\u6848\u8d8a\u4f86\u8d8a\u5927\uff0c\u53c3\u8207\u7684\u4eba\u54e1\u8d8a\u4f86\u8d8a\u591a\uff0c\u624d\u80fd\u611f\u53d7\u5230\u7576\u9700\u6c42\u4e0d\u65b7\u8b8a\u66f4\u7684\u72c0\u6cc1\u4e0b\uff0c\u53ea\u6709\u4f7f\u7528\u4f9d\u8cf4\u53cd\u8f49\u624d\u80fd\u8b93\u7a0b\u5f0f\u7684\u7a69\u5065\u5ea6\u63d0\u9ad8\uff0c\u8b93\u7dad\u904b\u4eba\u54e1\u53ef\u4ee5\u66f4\u52a0\u7684\u5bb9\u6613\u5730\u8abf\u6574\u548c\u64f4\u5c55\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u4f9d\u8cf4\u53cd\u8f49\u5f8c\uff0c\u56e0\u70ba\u4f9d\u8cf4\u7684\u662f\u62bd\u8c61\uff0c\u90a3\u63a5\u4e0b\u4f86\u7684\u554f\u984c\u5c31\u662f\uff0c\u61c9\u8a72\u900f\u904e\u751a\u9ebc\u6a5f\u5236\uff0c\u628a\u771f\u6b63\u7684\u5be6\u9ad4\u50b3\u5165\uff0c\u751a\u81f3\u61c9\u8a72\u8981\u5982\u4f55\u63a7\u5236\u9019\u500b\u7269\u4ef6\u7684\u751f\u547d\u9031\u671f\uff0c\u662f\u958b\u767c\u4eba\u54e1\u5fc5\u9808\u8981\u984d\u5916\u53bb Survey \u7684\u5167\u5bb9\u3002(ex: DI \u6846\u67b6)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.sanmin.com.tw/product/index/004405914",children:"\u8a2d\u8a08\u6a21\u5f0f\u4e4b\u79aa"})})]})}function p(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>r});var s=i(1504);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);