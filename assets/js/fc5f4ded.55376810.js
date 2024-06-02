"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3032],{4564:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=i(7624),s=i(2172);const t={title:"\u55ae\u4e00\u8077\u8cac\u539f\u5247",sidebar_label:"\u55ae\u4e00\u8077\u8cac\u539f\u5247",keywords:["design pattern","Single Repository Principle","SRP"],description:"\u8aaa\u660e\u55ae\u4e00\u8077\u8cac\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",sidebar_position:1,tags:["design pattern"]},l=void 0,d={id:"design-pattern/SOLID/srp",title:"\u55ae\u4e00\u8077\u8cac\u539f\u5247",description:"\u8aaa\u660e\u55ae\u4e00\u8077\u8cac\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",source:"@site/docs/design-pattern/SOLID/01_srp.md",sourceDirName:"design-pattern/SOLID",slug:"/design-pattern/SOLID/srp",permalink:"/design-pattern/SOLID/srp",draft:!1,unlisted:!1,editUrl:"https://github.com/deverqqqq/DevElixir/tree/main/docs/design-pattern/SOLID/01_srp.md",tags:[{inline:!0,label:"design pattern",permalink:"/tags/design-pattern"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u55ae\u4e00\u8077\u8cac\u539f\u5247",sidebar_label:"\u55ae\u4e00\u8077\u8cac\u539f\u5247",keywords:["design pattern","Single Repository Principle","SRP"],description:"\u8aaa\u660e\u55ae\u4e00\u8077\u8cac\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",sidebar_position:1,tags:["design pattern"]},sidebar:"designPatternSidebar",previous:{title:"SOLID",permalink:"/category/solid"},next:{title:"\u91cc\u6c0f\u66ff\u63db\u539f\u5247",permalink:"/design-pattern/SOLID/lsp"}},c={},o=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u5be6\u4f5c\u5efa\u8b70",id:"\u5be6\u4f5c\u5efa\u8b70",level:2},{value:"\u5be6\u4f8b",id:"\u5be6\u4f8b",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u8a2d\u8a08",id:"\u8a2d\u8a08",level:3},{value:"\u6548\u76ca &amp; \u6ce8\u610f\u4e8b\u9805",id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",level:2},{value:"\u6548\u76ca",id:"\u6548\u76ca",level:3},{value:"\u6ce8\u610f\u4e8b\u9805",id:"\u6ce8\u610f\u4e8b\u9805",level:3},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["There should never be more than one reason for a class to change.",(0,r.jsx)(n.br,{}),"\n","\u4e00\u500b\u985e\u5225\u61c9\u8a72\u53ea\u6709\u4e00\u500b\u53ef\u4ee5\u53bb\u7570\u52d5\u7684\u539f\u56e0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8aaa\u660e",children:"\u8aaa\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u5b9a\u7fa9\u975e\u5e38\u6dfa\u986f\u6613\u61c2\uff0c\u610f\u601d\u662f\u7576\u6211\u5011\u8a2d\u8a08\u985e\u5225\u7684\u6642\u5019\uff0c\u8981\u80fd\u5920\u9650\u7e2e\u597d\u9019\u500b\u985e\u5225\u7684\u908a\u754c\uff0c\u5b9a\u7fa9\u597d\u8a72\u505a\u7684\u4e8b\u60c5\uff0c\u800c\u4e0d\u662f\u628a\u5404\u5f0f\u5404\u6a23\u7684\u4e8b\u60c5\u90fd\u653e\u5230\u500b\u985e\u5225\u5167\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7576\u7136\uff0c\u5728\u5be6\u52d9\u4e0a\u8981\u5b8c\u6210\u9019\u4ef6\u4e8b\u60c5\u5f88\u56f0\u96e3\uff0c\u56e0\u70ba\u5982\u679c\u8981\u6e05\u695a\u7684\u5b9a\u7fa9\u55ae\u4e00\u8077\u8cac\uff0c\u4f60\u5fc5\u9808\u5148\u5b9a\u7fa9\u597d\uff0c\u4ec0\u9ebc\u6a23\u7684\u8077\u8cac\u624d\u5920\u55ae\u4e00\uff0c\u751a\u9ebc\u7bc4\u570d\u7684\u8077\u8cac\u624d\u5920\u55ae\u4e00\uff0c\u6240\u4ee5\u54ea\u5929\u5982\u679c\u60f3\u548c\u540c\u4e8b\u5435\u67b6\uff0c\u4f60\u53ef\u4ee5\u6253\u958b\u5c0d\u65b9\u7684 code \u7136\u5f8c\u958b\u59cb\u8cea\u7591\u4ed6\u7684\u8a2d\u8a08\uff0c\u4f60\u9019\u6a23\u6839\u672c\u4e0d\u7b26\u5408\u55ae\u4e00\u8077\u8cac\uff0c\u7136\u5f8c\uff0c\u5c31\u958b\u59cb\u7121\u6b62\u76e1\u7684\u8a2d\u8a08\u5927\u6230\u4e86\ud83e\udd13\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u751a\u81f3\u6211\u5011\u53ef\u4ee5\u628a\u9019\u500b\u6982\u5ff5\u518d\u505a\u9032\u4e00\u6b65\u5ef6\u4f38\uff0c\u6211\u5b9a\u7fa9\u7684\u6bcf\u500b\u65b9\u6cd5\uff0c\u771f\u7684\u90fd\u6709\u6eff\u8db3\u55ae\u4e00\u8077\u8cac\u55ce\uff1f"}),"\n",(0,r.jsx)(n.h2,{id:"\u5be6\u4f5c\u5efa\u8b70",children:"\u5be6\u4f5c\u5efa\u8b70"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u8981\u628a SRP \u60f3\u6210\u662f\u985e\u5225\u5c08\u5c6c\u7684\uff0c\u6211\u5011\u61c9\u8a72\u628a\u9019\u500b\u6982\u5ff5\u7684\u884d\u751f\u5230\u7a0b\u5f0f\u958b\u767c\u7684\u7fd2\u6163\u5167\uff0c\u6642\u6642\u6aa2\u67e5\u81ea\u5df1\u7684\u65b9\u6cd5\u3001\u985e\u5225\uff0c\u751a\u81f3\u662f\u670d\u52d9\u672c\u8eab\uff0c\u591a\u53bb\u601d\u8003\u624d\u6703\u77e5\u9053\u5728\u76ee\u524d\u7684\u60c5\u5883\u4e0b\uff0c\u8981\u600e\u9ebc\u5207\u5206\u8077\u8cac\u624d\u6703\u6bd4\u8f03\u597d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u8981\u8ffd\u6c42\u6b63\u78ba\u7684\u7b54\u6848\uff0c\u8a2d\u8a08\u672c\u8eab\u662f\u5f88\u96e3\u6709\u6b63\u78ba\u7b54\u6848\u7684\uff0c\u4f46\u662f\u638c\u63e1\u597d\u5927\u65b9\u5411\uff0c\u5f8c\u7e8c\u8981\u505a\u91cd\u69cb\u6216\u662f\u8abf\u6574\uff0c\u624d\u4e0d\u6703\u56e0\u70ba\u55ae\u4e00\u7269\u4ef6\u592a\u904e\u8907\u96dc\u5c0e\u81f4\u5f88\u96e3\u91cd\u69cb\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5148\u5f9e\u5927\u65b9\u5411\u8457\u624b\uff0c\u7136\u5f8c\u518d\u6162\u6162\u5f80\u7d30\u9805\u53bb\u505a\u62c6\u89e3\uff0c\u4e00\u6b65\u4e00\u6b65\u624d\u80fd\u5f9e\u904e\u7a0b\u4e2d\uff0c\u53ca\u6642\u767c\u73fe\u554f\u984c\u4e26\u4fee\u5fa9\uff0c\u5982\u679c\u4e00\u958b\u59cb\u5c31\u5617\u8a66\u62c6\u5206\u5f97\u5f88\u7d30\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8077\u8cac\u7684\u5340\u5206\uff0c\u53ef\u4ee5\u5f9e\u696d\u52d9\u908f\u8f2f\u4e0b\u624b\uff0c\u4e5f\u662f\u7cfb\u7d71\u5e95\u5c64\u529f\u80fd\uff0c\u5982\u4f55\u5b9a\u7fa9\u8077\u8cac\uff0c\u53d6\u6c7a\u65bc\u958b\u767c\u7684\u529f\u80fd\u662f\u4ec0\u9ebc\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5be6\u4f8b",children:"\u5be6\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,r.jsx)(n.p,{children:"// ..."}),"\n",(0,r.jsx)(n.h3,{id:"\u8a2d\u8a08",children:"\u8a2d\u8a08"}),"\n",(0,r.jsx)(n.p,{children:"// ..."}),"\n",(0,r.jsx)(n.h2,{id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",children:"\u6548\u76ca & \u6ce8\u610f\u4e8b\u9805"}),"\n",(0,r.jsx)(n.h3,{id:"\u6548\u76ca",children:"\u6548\u76ca"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u964d\u4f4e\u985e\u5225\u7684\u8907\u96dc\u5ea6\uff0c\u6bcf\u500b\u529f\u80fd\u7684\u908a\u754c\u5f88\u597d\u7684\u88ab\u5b9a\u7fa9\u51fa\u4f86\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6bcf\u500b\u529f\u80fd/\u985e\u5225\u7684\u8907\u67e5\u6027\u964d\u4f4e\uff0c\u81ea\u7136\u63d0\u9ad8\u53ef\u8b80\u6027\uff0c\u53ef\u8b80\u6027\u63d0\u9ad8\uff0c\u81ea\u7136\u4e5f\u6703\u63d0\u9ad8\u53ef\u7dad\u8b77\u6027\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u964d\u4f4e\u9700\u6c42\u8b8a\u66f4\u5c0e\u81f4\u7684\u98a8\u96aa\u3002","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e00\u500b\u4ecb\u9762\u7684\u529f\u80fd\u53ea\u5f71\u97ff\u5230\u5c11\u6578\u5e7e\u500b\u95dc\u806f\u7684\u985e\u5225\uff0c\u6e1b\u5c11\u727d\u4e00\u9aee\u52d5\u5168\u8eab\u7684\u72c0\u6cc1\u51fa\u73fe\u3002",(0,r.jsx)(n.br,{}),"\n","\u5c0d\u7cfb\u7d71\u7684\u64f4\u5c55\u6027\u6216\u7dad\u8b77\u6027\u90fd\u6703\u6709\u5f88\u5927\u7684\u5e6b\u52a9\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9805",children:"\u6ce8\u610f\u4e8b\u9805"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u904e\u5ea6\u61c9\u7528\u8a72\u539f\u5247\u53ef\u80fd\u6703\u8b93\u985e\u5225\u7834\u788e\uff0c\u4e00\u500b\u529f\u80fd\u7684\u5be6\u73fe\u6703\u62c6\u5728\u4e0d\u540c\u7684\u985e\u5225\u5167\uff0c\u53cd\u5012\u63d0\u5347\u7cfb\u7d71\u8907\u96dc\u5ea6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8077\u8cac\u7684\u7bc4\u570d\uff0c\u53ef\u80fd\u9084\u9700\u8981\u642d\u914d DomainKnowhow \u624d\u6703\u6709\u8fa6\u6cd5\u78ba\u8a8d\uff0c\u6c92\u6709\u660e\u78ba\u7684\u7b54\u6848\u544a\u8a34\u4f60\u9019\u6a23\u662f\u5426\u662f\u4e7e\u6de8\u7684\u55ae\u4e00\u8077\u8cac\uff0c\u53ea\u80fd\u5f9e\u5be6\u4f5c\u548c\u5f8c\u7e8c\u7684\u56de\u994b\u4f86\u505a\u78ba\u8a8d\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.sanmin.com.tw/product/index/004405914",children:"\u8a2d\u8a08\u6a21\u5f0f\u4e4b\u79aa"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>l});var r=i(1504);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);