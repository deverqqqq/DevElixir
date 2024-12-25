"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3028],{49218:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"algo/complexity/time","title":"\u6642\u9593\u8907\u96dc\u5ea6","description":"\u6642\u9593\u8907\u96dc\u5ea6","source":"@site/docs/algo/complexity/time.md","sourceDirName":"algo/complexity","slug":"/algo/complexity/time","permalink":"/algo/complexity/time","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/algo/complexity/time.md","tags":[{"inline":true,"label":"algo","permalink":"/tags/algo"},{"inline":true,"label":"complexity","permalink":"/tags/complexity"}],"version":"current","sidebarPosition":3,"frontMatter":{"title":"\u6642\u9593\u8907\u96dc\u5ea6","sidebar_label":"\u6642\u9593\u8907\u96dc\u5ea6","keywords":["algo","algorithm","complexity"],"description":"\u6642\u9593\u8907\u96dc\u5ea6","sidebar_position":3,"tags":["algo","complexity"]},"sidebar":"algoSidebar","previous":{"title":"\u7a7a\u9593\u8907\u96dc\u5ea6","permalink":"/algo/complexity/space"},"next":{"title":"LeetCode","permalink":"/category/leetcode"}}');var n=i(74848),o=i(28453);const r={title:"\u6642\u9593\u8907\u96dc\u5ea6",sidebar_label:"\u6642\u9593\u8907\u96dc\u5ea6",keywords:["algo","algorithm","complexity"],description:"\u6642\u9593\u8907\u96dc\u5ea6",sidebar_position:3,tags:["algo","complexity"]},c=void 0,s={},a=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u7d71\u8a08\u57f7\u884c\u6240\u82b1\u8cbb\u6642\u9593\u7684\u589e\u9577\u8da8\u52e2",id:"\u7d71\u8a08\u57f7\u884c\u6240\u82b1\u8cbb\u6642\u9593\u7684\u589e\u9577\u8da8\u52e2",level:3},{value:"\u7279\u9ede",id:"\u7279\u9ede",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,n.jsx)(t.p,{children:"\u7b97\u6cd5\u7684\u904b\u884c\u6642\u9593\u53ef\u4ee5\u5f88\u76f4\u89c0\u7684\u8b93\u6211\u5011\u77e5\u9053\u57f7\u884c\u7684\u6548\u7387\uff0c\u4f46\u5982\u679c\u60f3\u8981\u6e96\u78ba\u8a55\u4f30\u57f7\u884c\u7684\u6642\u9593\uff0c\u5be6\u969b\u4e0a\u6703\u53d7\u5230\u5f88\u591a\u5916\u5728\u56e0\u7d20\u7684\u539f\u56e0\u5c0e\u81f4\u3002"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u4f5c\u696d\u7cfb\u7d71"}),"\n",(0,n.jsx)(t.li,{children:"\u786c\u9ad4\u8a2d\u5099"}),"\n",(0,n.jsx)(t.li,{children:"\u7cfb\u7d71\u74b0\u5883\n... \u7b49\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u4e0a\u8ff0\u90fd\u6703\u5f71\u97ff\u7b97\u6cd5\u7684\u5be6\u969b\u57f7\u884c\u6642\u9593\uff0c\u6240\u4ee5\u9664\u4e86\u76f4\u63a5\u57f7\u884c\u5916\uff0c\u9700\u8981\u900f\u904e\u67d0\u4e00\u7a2e\u65b9\u5f0f\uff0c\u4f86\u5408\u7406\u4e14\u80fd\u5920\u7d71\u8a08\u57f7\u884c\u7684\u6642\u9593\u6210\u672c\uff0c\u5c31\u662f\u6240\u8b02\u7684\u6642\u9593\u8907\u96dc\u5ea6\u5206\u6790\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"\u7d71\u8a08\u57f7\u884c\u6240\u82b1\u8cbb\u6642\u9593\u7684\u589e\u9577\u8da8\u52e2",children:"\u7d71\u8a08\u57f7\u884c\u6240\u82b1\u8cbb\u6642\u9593\u7684\u589e\u9577\u8da8\u52e2"}),"\n",(0,n.jsx)(t.p,{children:"\u5982\u540c\u4e0a\u8ff0\u63cf\u8ff0\uff0c\u7d71\u8a08\u8cc7\u6599\u8655\u7406\u7684\u6642\u9593\u5176\u5be6\u610f\u7fa9\u4e0d\u5927\uff0c\u4f46\u6211\u5011\u80fd\u5920\u900f\u904e\u5c07\u8cc7\u6599\u91cf\u9010\u6f38\u653e\u5927\uff0c\u5f9e\u800c\u7d71\u8a08\u51fa\u82b1\u8cbb\u6642\u9593\u7684\u8da8\u52e2\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u8a72\u7b97\u6cd5\u7684\u6642\u9593\u8907\u96dc\u5ea6\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u7279\u9ede",children:"\u7279\u9ede"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u80fd\u5920\u6709\u6548\u8a55\u4f30\u7b97\u6cd5\u7684\u6548\u7387\n\u900f\u904e\u7d71\u8a08\u7684\u8da8\u52e2\u5716\uff0c\u53ef\u4ee5\u77e5\u9053\u8cc7\u6599\u91cf\u7d1a\u8207\u6642\u9593\u6210\u672c\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u5224\u65b7\u5728\u9700\u8981\u7684\u60c5\u5883\u4e0b\uff0c\u662f\u5426\u53ef\u4ee5\u63a1\u7528\u9019\u7a2e\u7b97\u6cd5\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u7d71\u8a08\u65b9\u5f0f\u7c21\u55ae\n\u4e0d\u518d\u9700\u8981\u95dc\u5fc3\u5916\u5728\u56e0\u7d20\uff0c\u53ea\u8981\u5728\u540c\u4e00\u500b\u74b0\u5883\u4e0b\u57f7\u884c\u6240\u5f97\u5230\u7684\u8cc7\u6599\u91cf\u7d1a\u8207\u6642\u9593\u6210\u672c\u7684\u8da8\u52e2\uff0c\u5728\u5176\u4ed6\u5e73\u53f0\u6216\u662f\u74b0\u5883\u7406\u61c9\u662f\u76f8\u540c\u7684\u7d50\u679c\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u4e0d\u80fd\u50c5\u5f9e\u6642\u9593\u8907\u96dc\u5ea6\u4f86\u5224\u65b7\u57f7\u884c\u6548\u7387\n\u4f8b\u5982\uff0c\u6709\u5169\u500b\u7b97\u6cd5\u7684\u6642\u9593\u8907\u96dc\u5ea6\u76f8\u540c\uff0c\u90fd\u662f\u5c6c\u65bc\u5e38\u6578\uff0c\u4e0d\u7ba1\u8cc7\u6599\u91cf\u6709\u591a\u5c11\uff0c\u57f7\u884c\u6642\u9593\u90fd\u4e0d\u6703\u53d7\u5230\u5f71\u97ff\uff0c\u4f46\u6709\u53ef\u80fd\u9019\u5169\u500b\u7684\u56fa\u5b9a\u57f7\u884c\u6642\u9593\u5dee\u5f88\u591a\uff0c\u6240\u4ee5\u7121\u6cd5\u55ae\u7d14\u900f\u904e\u6642\u9593\u8907\u96dc\u5ea6\u4f86\u505a\u5224\u65b7\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.hello-algo.com/zh-hant/chapter_computational_complexity/time_complexity/",children:"https://www.hello-algo.com/zh-hant/chapter_computational_complexity/time_complexity/"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var l=i(96540);const n={},o=l.createContext(n);function r(e){const t=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);