"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7926],{79766:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"design-pattern/SOLID/ocp","title":"\u958b\u653e\u5c01\u9589\u539f\u5247","description":"\u8aaa\u660e\u958b\u653e\u5c01\u9589\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002","source":"@site/docs/design-pattern/SOLID/06_ocp.md","sourceDirName":"design-pattern/SOLID","slug":"/design-pattern/SOLID/ocp","permalink":"/design-pattern/SOLID/ocp","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/design-pattern/SOLID/06_ocp.md","tags":[{"inline":true,"label":"design pattern","permalink":"/tags/design-pattern"}],"version":"current","sidebarPosition":6,"frontMatter":{"title":"\u958b\u653e\u5c01\u9589\u539f\u5247","sidebar_label":"\u958b\u653e\u5c01\u9589\u539f\u5247","keywords":["design pattern","Open/Closed Principle","OCP"],"description":"\u8aaa\u660e\u958b\u653e\u5c01\u9589\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002","sidebar_position":6,"tags":["design pattern"]},"sidebar":"patternSidebar","previous":{"title":"\u4ecb\u9762\u9694\u96e2\u539f\u5247","permalink":"/design-pattern/SOLID/isp"},"next":{"title":"REPR","permalink":"/design-pattern/REPR"}}');var r=i(74848),l=i(28453);const t={title:"\u958b\u653e\u5c01\u9589\u539f\u5247",sidebar_label:"\u958b\u653e\u5c01\u9589\u539f\u5247",keywords:["design pattern","Open/Closed Principle","OCP"],description:"\u8aaa\u660e\u958b\u653e\u5c01\u9589\u539f\u5247\u7684\u5b9a\u7fa9\uff0c\u548c\u5be6\u52d9\u4e0a\u958b\u767c\u9069\u7528\u7684\u60c5\u5883\u548c\u505a\u6cd5\u3002",sidebar_position:6,tags:["design pattern"]},d=void 0,c={},o=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u5be6\u4f5c\u5efa\u8b70",id:"\u5be6\u4f5c\u5efa\u8b70",level:2},{value:"\u5be6\u4f8b",id:"\u5be6\u4f8b",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u8a2d\u8a08",id:"\u8a2d\u8a08",level:3},{value:"\u6548\u76ca &amp; \u6ce8\u610f\u4e8b\u9805",id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",level:2},{value:"\u6548\u76ca",id:"\u6548\u76ca",level:3},{value:"\u6ce8\u610f\u4e8b\u9805",id:"\u6ce8\u610f\u4e8b\u9805",level:3},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Software entities like classes, modules and functions should be open for extension but closed for modifications.",(0,r.jsx)(n.br,{}),"\n","\u8edf\u9ad4\u5728\u751f\u547d\u9031\u671f\u5167\uff0c\u61c9\u8a72\u5c0d\u64f4\u5c55\u958b\u653e\uff0c\u5c0d\u4fee\u6539\u5c01\u9589\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8aaa\u660e",children:"\u8aaa\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u65e2\u7136\u767c\u751f\u8b8a\u5316\u662f\u4e00\u4ef6\u5fc5\u7136\u6703\u767c\u751f\u7684\u4e8b\u60c5\uff0c\u5728\u8a2d\u8a08\u7684\u6642\u5019\u5c07\u9019\u4e9b\u8b8a\u5316\u7684\u9069\u61c9\u80fd\u529b\u8a2d\u8a08\u5230\u5c08\u6848\u4e0a\u9762\uff0c\u8b93\u6211\u5011\u9762\u5c0d\u8b8a\u5316\u53ef\u4ee5\u66f4\u6709\u9918\u529b\u53bb\u89e3\u6c7a\u3002\u800c\u958b\u653e\u5c01\u9589\u539f\u5247\uff0c\u5c31\u662f\u5e0c\u671b\u80fd\u5920\u76e1\u91cf\u64f4\u5c55\u8edf\u9ad4\u7684\u5be6\u969b\u884c\u70ba\uff0c\u800c\u4e0d\u662f\u900f\u904e\u4fee\u6539\u73fe\u6709\u7684\u7a0b\u5f0f\u78bc\u4f86\u5b8c\u6210\u8b8a\u5316\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u822c\u4f86\u8aaa\uff0c\u53ef\u4ee5\u628a\u8b8a\u5316\u6b78\u985e\u70ba\u4e0b\u9762\u4e09\u7a2e"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u908f\u8f2f\u8b8a\u5316",(0,r.jsx)(n.br,{}),"\n","\u53ea\u8b8a\u5316\u4e00\u500b\u908f\u8f2f\uff0c\u4e0d\u5f71\u97ff\u5176\u4ed6\u5b50\u6a21\u7d44\u7684\uff0c\u524d\u63d0\u662f\u6240\u6709\u95dc\u806f\u7684\u6a21\u7d44\u6216\u662f\u4f9d\u8cf4\uff0c\u90fd\u5fc5\u9808\u4ee5\u76f8\u540c\u7684\u908f\u8f2f\u8655\u7406\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5b50\u6a21\u7d44\u8b8a\u5316",(0,r.jsx)(n.br,{}),"\n","\u4e00\u500b\u6a21\u7d44\u8b8a\u52d5\uff0c\u5fc5\u7136\u6703\u5c0d\u5176\u4ed6\u7684\u6a21\u7d44\u7522\u751f\u5f71\u97ff\uff0c\u7279\u5225\u662f\u4f4e\u5c64\u6b21\u7684\u6a21\u7d44\u8b8a\u5316\u5fc5\u7136\u6703\u5c0e\u81f4\u9ad8\u5c64\u6b21\u6a21\u7d44\u7684\u8b8a\u5316\uff0c\u56e0\u6b64\u900f\u904e\u64f4\u5c55\u4fee\u6539\u6642\uff0c\u9ad8\u5c64\u6b21\u6a21\u7d44\u7684\u4fee\u6539\u662f\u4f9d\u5b9a\u6703\u767c\u751f\u7684\uff0c\u751a\u81f3\u6703\u8b93\u4f7f\u7528\u8005\u4ecb\u9762\u767c\u751f\u5f71\u97ff\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Client API / UI \u8b8a\u5316",(0,r.jsx)(n.br,{}),"\n","\u9019\u908a\u6307\u7684\u662f\u63d0\u4f9b\u7d66\u5ba2\u6236\u4f7f\u7528\u7684\u4ecb\u9762\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5be6\u4f5c\u5efa\u8b70",children:"\u5be6\u4f5c\u5efa\u8b70"}),"\n",(0,r.jsx)(n.p,{children:"\u958b\u653e\u5c01\u9589\u539f\u5247\u4e5f\u50c5\u662f\u4e00\u500b\u539f\u5247\uff0c\u8981\u5be6\u73fe\u9019\u500b\u539f\u5247\u4e5f\u4e26\u975e\u9650\u65bc\u9019\u5e7e\u7a2e\u8a2d\u8a08\u539f\u5247\u548c\u65b9\u6cd5\uff0c\u4f46\u662f\u9075\u5faa\u9019\u516d\u5927\u539f\u5247 (SOLID)\uff0c\u57fa\u672c\u4e0a\u53ef\u4ee5\u61c9\u4ed8\u7d55\u5927\u591a\u6578\u7684\u8b8a\u5316\uff0c\u5efa\u8b70\u4ee5\u9019\u516d\u5927\u539f\u5247\u70ba\u57fa\u790e\uff0c\u7136\u5f8c\u5728\u5fc5\u8981\u7684\u6642\u5019\u518d\u9032\u884c\u64f4\u5145\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5be6\u4f8b",children:"\u5be6\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,r.jsx)(n.p,{children:"// ..."}),"\n",(0,r.jsx)(n.h3,{id:"\u8a2d\u8a08",children:"\u8a2d\u8a08"}),"\n",(0,r.jsx)(n.p,{children:"// ..."}),"\n",(0,r.jsx)(n.h2,{id:"\u6548\u76ca--\u6ce8\u610f\u4e8b\u9805",children:"\u6548\u76ca & \u6ce8\u610f\u4e8b\u9805"}),"\n",(0,r.jsx)(n.h3,{id:"\u6548\u76ca",children:"\u6548\u76ca"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c0d\u6e2c\u8a66\u7684\u5f71\u97ff",(0,r.jsx)(n.br,{}),"\n","\u6240\u6709\u5728 Production \u7684\u7a0b\u5f0f\u78bc\u90fd\u662f\u6709\u610f\u7fa9\u7684\uff0c\u4e0a\u7dda\u524d\u90fd\u61c9\u8a72\u53d7\u5230\u56b4\u683c\u7684\u9a57\u8b49\u548c\u7cfb\u7d71\u898f\u5247\u7d04\u675f\uff0c\u9019\u6a23\u7d93\u904e\u5343\u9318\u767e\u934a\u6e2c\u8a66\u7684\u7a0b\u5f0f\u78bc\uff0c\u662f\u5426\u6709\u8fa6\u6cd5\u5728\u4e0d\u4fee\u6539\u7684\u524d\u63d0\u4e0b\uff0c\u50c5\u900f\u904e\u64f4\u5c55\u5be6\u73fe\u529f\u80fd\u8b8a\u5316\u3002\u5982\u679c\u4e0d\u884c\uff0c\u90a3\u8868\u793a\u9700\u8981\u628a\u539f\u6709\u7684\u6e2c\u8a66\u9805\u76ee\u5168\u90e8\u5728\u57f7\u884c\u4e00\u6b21\uff0c\u5149\u662f\u60f3\u5230\u9019\u6a23\u7684\u60c5\u5883\uff0c\u662f\u4e0d\u662f\u5c31\u8b93\u4eba\u89ba\u5f97\u4e0d\u60f3\u53bb\u6539\u539f\u672c\u7684\u7a0b\u5f0f\u78bc\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u901a\u904e\u64f4\u5c55\u7684\u65b9\u5f0f\uff0c\u4f8b\u5982\u8aaa\u65b0\u589e\u4e00\u500b\u5b50\u985e\u5225\u5b8c\u6210\u696d\u52d9\u9700\u6c42\u7684\u64f4\u5c55\u529f\u80fd\uff0c\u53ea\u8981\u91dd\u5c0d\u9019\u500b\u65b0\u985e\u5225\u53bb\u64b0\u5beb\u529f\u80fd\u548c\u65b0\u589e\u6e2c\u8a66\u9805\u76ee\u5c31\u597d\uff0c\u65e2\u6709\u7684\u6e2c\u8a66\u9805\u76ee\u548c\u529f\u80fd\u90fd\u4e0d\u6703\u88ab\u8abf\u6574\u5230\u3002\u5728\u52d5\u624b\u4e0a\u5c31\u4e0d\u6703\u64d4\u5fc3\u7570\u52d5\u6240\u95dc\u806f\u7684\u5730\u65b9\u592a\u591a\uff0c\u5c0e\u81f4\u9023\u5e36\u767c\u751f\u7684\u5f71\u97ff\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u63d0\u9ad8\u53ef\u91cd\u7528\u59d3",(0,r.jsx)(n.br,{}),"\n","\u5728\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u4e2d\uff0c\u6240\u6709\u7684\u908f\u8f2f\u90fd\u662f\u900f\u904e\u8a31\u591a\u7c92\u5ea6\u5c0f\u7684\u529f\u80fd\u7d44\u5408\u800c\u6210\u3002\u53ea\u6709\u7576\u529b\u5ea6\u7e2e\u5c0f\u5230\u4e0d\u53ef\u5728\u5206\u5272\u6642\uff0c\u624d\u53ef\u4ee5\u907f\u514d\u985e\u4f3c\u7684\u908f\u8f2f\u6563\u843d\u5728\u5404\u500b\u5730\u65b9\uff0c\u5c0e\u81f4\u8981\u65b0\u589e\u529f\u80fd\u6642\u8981\u4e00\u76f4\u7ffb\u627e\u985e\u4f3c\u529f\u80fd\u7684\u7a0b\u5f0f\u78bc\u505a\u53c3\u8003\uff0c\u7121\u6cd5\u7528\u73fe\u6709\u7684\u6a21\u7d44\u9032\u884c\u958b\u767c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9805",children:"\u6ce8\u610f\u4e8b\u9805"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u62bd\u8c61\u9650\u5236",(0,r.jsx)(n.br,{}),"\n","\u62bd\u8c61\u662f\u5c0d\u4e8b\u7269\u7684\u901a\u7528\u63cf\u8ff0\uff0c\u6c92\u6709\u5177\u9ad4\u7684\u5be6\u73fe\u7d30\u7bc0\uff0c\u8868\u793a\u672c\u8eab\u53ef\u4ee5\u6709\u975e\u5e38\u591a\u7684\u53ef\u80fd\u6027\uff0c\u53ef\u4ee5\u6839\u64da\u9700\u6c42\u8b8a\u5316\u800c\u7570\u52d5\u3002\u56e0\u6b64\u900f\u904e\u4ecb\u9762\u6216\u662f\u62bd\u8c61\u985e\u5225\uff0c\u53ef\u4ee5\u9650\u5236\u53ef\u80fd\u8b8a\u5316\u7684\u884c\u70ba\uff0c\u4e26\u4e14\u80fd\u5920\u5be6\u73fe\u5c0d\u64f4\u5c55\u958b\u653e\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u901a\u904e\u4ecb\u9762\u6216\u662f\u62bd\u8c61\u985e\u5225\u5c0d\u64f4\u5c55\u9032\u884c\u908a\u754c\u9650\u5236\uff0c\u4e0d\u5141\u8a31\u51fa\u73fe\u4e0d\u5b58\u5728\u65bc\u4ecb\u9762\u6216\u662f\u62bd\u8c61\u985e\u5225\u7684\u516c\u958b\u65b9\u6cd5\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c3\u6578\u578b\u5225\u76e1\u91cf\u4f7f\u7528\u4ecb\u9762\u6216\u662f\u62bd\u8c61\u985e\uff0c\u907f\u514d\u76f4\u63a5\u4f9d\u8cf4\u5be6\u4f5c\u3002(",(0,r.jsx)(n.a,{href:"/design-pattern/SOLID/dip",children:"\u4f9d\u8cf4\u53cd\u8f49"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"\u62bd\u8c61\u985e\u5225\u6216\u662f\u4ecb\u9762\uff0c\u76e1\u91cf\u4fdd\u6301\u7a69\u5b9a\uff0c\u4e00\u65e6\u78ba\u5b9a\u76e1\u91cf\u4e0d\u8981\u8abf\u6574\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c01\u88dd\u8b8a\u5316",(0,r.jsx)(n.br,{}),"\n","\u5c0d\u8b8a\u5316\u7684\u5c01\u88dd\u5305\u542b\u5169\u5c64\u6db5\u7fa9"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5c07\u76f8\u540c\u7684\u8b8a\u5316\u5c01\u88dd\u5230\u4e00\u500b\u4ecb\u9762\u6216\u662f\u62bd\u8c61\u985e\u5225"}),"\n",(0,r.jsx)(n.li,{children:"\u5c07\u4e0d\u540c\u7684\u8b8a\u5316\u5c01\u88dd\u5230\u4e0d\u540c\u7684\u4ecb\u9762\u6216\u662f\u62bd\u8c61\u985e\u5225\uff0c\u4e0d\u61c9\u8a72\u6709\u5169\u500b\u4e0d\u540c\u8b8a\u5316\u7684\u539f\u56e0\u51fa\u73fe\u5728\u540c\u4e00\u500b\u4ecb\u9762\u6216\u662f\u62bd\u8c61\u985e\u5225\u4e0a\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u627e\u51fa\u9810\u8a08\u53ef\u80fd\u767c\u751f\u8b8a\u5316\u7684\u9ede\uff0c\u5c31\u53ef\u4ee5\u9032\u884c\u5c01\u88dd\uff0c\u800c\u5f8c\u9762\u8981\u4ecb\u7d39\u7684\u8a2d\u8a08\u6a21\u5f0f\uff0c\u5c31\u662f\u5f9e\u4e0d\u540c\u89d2\u5ea6\u5c0d\u8b8a\u5316\u9032\u884c\u5c01\u88dd\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.sanmin.com.tw/product/index/004405914",children:"\u8a2d\u8a08\u6a21\u5f0f\u4e4b\u79aa"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var s=i(96540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);