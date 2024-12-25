"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1749],{95187:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"algo/complexity/space","title":"\u7a7a\u9593\u8907\u96dc\u5ea6","description":"\u7a7a\u9593\u8907\u96dc\u5ea6","source":"@site/docs/algo/complexity/space.md","sourceDirName":"algo/complexity","slug":"/algo/complexity/space","permalink":"/algo/complexity/space","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/algo/complexity/space.md","tags":[{"inline":true,"label":"algo","permalink":"/tags/algo"},{"inline":true,"label":"complexity","permalink":"/tags/complexity"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"\u7a7a\u9593\u8907\u96dc\u5ea6","sidebar_label":"\u7a7a\u9593\u8907\u96dc\u5ea6","keywords":["algo","algorithm","complexity"],"description":"\u7a7a\u9593\u8907\u96dc\u5ea6","sidebar_position":2,"tags":["algo","complexity"]},"sidebar":"algoSidebar","previous":{"title":"\u5206\u6790","permalink":"/algo/complexity/analyze"},"next":{"title":"\u6642\u9593\u8907\u96dc\u5ea6","permalink":"/algo/complexity/time"}}');var n=l(74848),i=l(28453);const r={title:"\u7a7a\u9593\u8907\u96dc\u5ea6",sidebar_label:"\u7a7a\u9593\u8907\u96dc\u5ea6",keywords:["algo","algorithm","complexity"],description:"\u7a7a\u9593\u8907\u96dc\u5ea6",sidebar_position:2,tags:["algo","complexity"]},s=void 0,a={},c=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"Reference",id:"reference",level:2}];function p(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,n.jsx)(t.p,{children:"\u7b97\u6cd5\u5728\u57f7\u884c\u904e\u7a0b\u4e2d\u4f7f\u7528\u7684\u8a18\u61b6\u9ad4\u7a7a\u9593\u3002"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u8f38\u5165\u7a7a\u9593\uff1a\u7528\u65bc\u5132\u5b58\u8f38\u5165\u8cc7\u6599\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u66ab\u5b58\u7a7a\u9593\uff1a\u7528\u65bc\u5132\u5b58\u7b97\u6cd5\u5728\u57f7\u884c\u904e\u7a0b\u4e2d\u7684\u8b8a\u6578\u3001\u7269\u4ef6\u3001\u51fd\u5f0f\u4e0a\u4e0b\u6587\u7b49\u8cc7\u6599\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u8f38\u51fa\u7a7a\u9593\uff1a\u7528\u65bc\u5132\u5b58\u8f38\u51fa\u8cc7\u6599\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u4e00\u822c\u60c5\u6cc1\u4e0b\uff0c\u7a7a\u9593\u8907\u96dc\u5ea6\u7684\u7d71\u8a08\u7bc4\u570d\u662f",(0,n.jsx)(t.strong,{children:"\u66ab\u5b58\u7a7a\u9593"}),"\u52a0\u4e0a",(0,n.jsx)(t.strong,{children:"\u8f38\u51fa\u7a7a\u9593"}),"\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8207",(0,n.jsx)(t.a,{href:"/algo/complexity/time",children:"\u6642\u9593\u8907\u96dc\u5ea6"}),"\u4e0d\u540c\uff0c\u56e0\u70ba\u8a18\u61b6\u9ad4\u7684\u689d\u4ef6\u662f\u56fa\u5b9a\u7684\uff0c\u5fc5\u9808\u78ba\u4fdd\u8a18\u61b6\u9ad4\u7528\u91cf\u4e0d\u6703\u8d85\u904e\u9700\u8981\u7684\u4e0a\u9650\uff0c\u7a7a\u9593\u8907\u96dc\u5ea6\u95dc\u6ce8\u7684\u662f\u6574\u500b\u57f7\u884c\u904e\u7a0b\u4e2d\uff0c\u53ef\u80fd\u7684\u6700\u5927\u6210\u672c\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.hello-algo.com/zh-hant/chapter_computational_complexity/space_complexity/",children:"https://www.hello-algo.com/zh-hant/chapter_computational_complexity/space_complexity/"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>s});var o=l(96540);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);