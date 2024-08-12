"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8983],{2016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(4848),o=t(8453);const a={title:"[Day 3] React Component",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-05T10:50"},i=void 0,s={permalink:"/blog/react/day-3-react-component",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-3-react-component.md",source:"@site/blog/react/day-3-react-component.md",title:"[Day 3] React Component",description:"React Component",date:"2024-08-05T10:50:00.000Z",tags:[{inline:!0,label:"React",permalink:"/blog/tags/react"},{inline:!0,label:"ZeroToHero",permalink:"/blog/tags/zero-to-hero"}],readingTime:3.18,hasTruncateMarker:!0,authors:[{name:"deverqqqq",url:"https://github.com/deverqqqq",imageURL:"https://github.com/deverqqqq.png",key:"deverqqqq",page:null}],frontMatter:{title:"[Day 3] React Component",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-05T10:50"},unlisted:!1,prevItem:{title:"[Day 4] React Fragment",permalink:"/blog/react/day-4-react-fragment"},nextItem:{title:"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review",permalink:"/blog/react/day-2-setup-and-js-review"}},c={authorsImageUrls:[void 0]},l=[{value:"React Component",id:"react-component",level:2},{value:"JSX",id:"jsx",level:2},{value:"Imperative vs Declarative",id:"imperative-vs-declarative",level:3},{value:"Separation of Concerns",id:"separation-of-concerns",level:2},{value:"Props &amp;&amp; State",id:"props--state",level:2},{value:"Why immuatable",id:"why-immuatable",level:3},{value:"One-Way Data Flow",id:"one-way-data-flow",level:3},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \n                                                             \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2557\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d      \u2588\u2588\u2588\u2588\u2588\u2554\u255d\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d       \u255a\u2550\u2550\u2550\u2588\u2588\u2557\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551       \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d       \u255a\u2550\u2550\u2550\u2550\u2550\u255d \n                                                             \n"})}),"\n",(0,r.jsx)(n.h2,{id:"react-component",children:"React Component"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"React \u900f\u904e Component \u7d44\u6210\u756b\u9762\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6bcf\u4e00\u500b Component \u90fd\u662f\u4e00\u500b\u51fd\u5f0f\uff0c\u56de\u50b3 JSX\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6bcf\u4e00\u500b Component \u90fd\u5305\u542b\uff1a",(0,r.jsx)(n.code,{children:"Data"}),", ",(0,r.jsx)(n.code,{children:"Logic"}),", ",(0,r.jsx)(n.code,{children:"Appearance"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"Component \u958b\u982d\u5fc5\u9808\u8981\u5927\u5beb\u82f1\u6587\uff0c\u8ddf html \u7684\u6a19\u7c64\u5340\u9694\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u8981\u5728\u4e00\u500b Component \u5167\uff0c\u5b9a\u7fa9\u53e6\u5916\u4e00\u500b Component\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart  TB\n    subgraph Component\n        Data\n        Logic\n        Appearance\n\n    subgraph Data\n        Props\n        State\n\n    end\nend"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function App() {\n  \n  // \u4e0d\u8981\u9019\u6a23\u5b9a\u7fa9\n  function Pizza() {\n    return <h1>Pizza</h1>;\n  }\n\n  return (\n    <div>\n      <h1>Hello React!</h1>\n      <Pizza />\n    </div>\n  );\n}\n"})})}),"\n",(0,r.jsx)(n.h2,{id:"jsx",children:"JSX"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u900f\u904e\u9019\u7a2e\u64f4\u5c55\u8a9e\u6cd5\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5c07\u4e00\u500b Component \u6240\u9700\u8981\u7684 ",(0,r.jsx)(n.code,{children:"html"}),", ",(0,r.jsx)(n.code,{children:"css"}),", ",(0,r.jsx)(n.code,{children:"javascript"}),"\uff0c\u90fd\u653e\u5728\u540c\u4e00\u500b\u5340\u584a\u5167\u3002"]}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)(n.p,{children:"JSX \u5be6\u969b\u4e0a\u662f\u900f\u904e Babel \u88ab\u8f49\u63db\u70ba Jacascript \u8a9e\u6cd5\u3002"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u50b3\u7d71\u4e0a\u6703\u5c07\u9019\u4e09\u500b\u5206\u5225\u62c6\u958b\u7de8\u8f2f\uff0c\u9054\u5230\u53ef\u7dad\u8b77\u6027\u548c\u4e00\u81f4\u6027\uff0c\u4f46\u662f\u7576\u756b\u9762\u7684\u5448\u73fe\u8d8a\u4f86\u8d8a\u8907\u96dc\uff0c\u4ee5 Component \u70ba\u4e2d\u5fc3\u7684\u8a2d\u8a08\uff0c\u51fa\u767c\u9ede\u8981\u4ee5\u55ae\u500b\u5143\u4ef6\u70ba\u4e3b\u3002"}),(0,r.jsx)(n.p,{children:"\u8207\u5176\u7dad\u6301\u5c07\u4e09\u7a2e\u985e\u578b\u7684\u8a9e\u6cd5\u62c6\u958b\u64b0\u5beb\uff0c\u4e0d\u5982\u5beb\u5728\u540c\u4e00\u500b\u5340\u584a\u5167\u505a render\uff0c\u9019\u4e5f\u662f JSX \u6240\u8981\u505a\u5230\u7684\u4e8b\u60c5\uff0c\u4e5f\u662f React \u7684 Component \u8a2d\u8a08\u7406\u5ff5\u3002"})]}),"\n",(0,r.jsx)(n.h3,{id:"imperative-vs-declarative",children:"Imperative vs Declarative"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Imperative: \u547d\u4ee4\u5f0f\uff0c",(0,r.jsx)(n.code,{children:"How to do things"}),"\u3002(pure Javascript)",(0,r.jsx)(n.br,{}),"\n","\u9700\u8981\u4e00\u6b65\u4e00\u6b65\u544a\u8a34\u700f\u89bd\u5668\uff0c\u5728\u751a\u9ebc\u908f\u8f2f\u4e0b\uff0c\u9700\u8981\u505a\u751a\u9ebc\u4e8b\u60c5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Declarative: \u5ba3\u544a\u5f0f\uff0c",(0,r.jsx)(n.code,{children:"What UI should look like"}),"\u3002(JSX)",(0,r.jsx)(n.br,{}),"\n","\u53ea\u9700\u8981\u9810\u5148\u5b9a\u7fa9\u597d\uff0c\u90a3\u4e9b\u5340\u584a\u61c9\u8a72\u5448\u73fe\u751a\u9ebc\u6a23\u5b50\u548c\u8cc7\u6599\uff0c\u53ea\u8981\u9077\u5165\u5230\u756b\u9762\u4e0a\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u5b9a\u7fa9\u5448\u73fe\u5340\u584a\u756b\u9762\u548c\u8cc7\u6599\u908f\u8f2f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"separation-of-concerns",children:"Separation of Concerns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Tranditional"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"React"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Technology Per File"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"One Component Per File"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"props--state",children:"Props && State"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["React components use props to communicate with each other.",(0,r.jsx)(n.br,{}),"\n","Every parent component can pass some information to its child components by giving them props."]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Props \u53ea\u80fd\u88ab\u7236\u5143\u4ef6\u66f4\u65b0\uff0c\u8cc7\u6599\u4f86\u6e90\u5c6c\u65bc Component \u7684\u5916\u90e8\u3002"}),"\n",(0,r.jsx)(n.li,{children:"State \u53ea\u80fd\u88ab Component \u5167\u7684\u908f\u8f2f\u89f8\u767c\u4fee\u6539\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u2728 Props \u5728 Component \u5167\u90e8\u662f\u4e0d\u53ef\u8b8a\u7684\u3002(ReadOnly)",(0,r.jsx)(n.br,{}),"\n","\u2728 \u7576\u6709\u9700\u8981\u66f4\u65b0 Props\uff0c\u8981\u4f7f\u7528 State \u800c\u4e0d\u662f Props\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"why-immuatable",children:"Why immuatable"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Component \u5167\u4fee\u6539 Props \u53ef\u80fd\u6703\u5c0e\u81f4\u5176\u4ed6\u5730\u65b9\u53d7\u5230\u5f71\u97ff\u3002(\u7236\u5143\u4ef6)",(0,r.jsx)(n.br,{}),"\n","\u9019\u908a\u8ddf ",(0,r.jsx)(n.code,{children:"Functional Programming"})," \u7684\u6982\u5ff5\u662f\u4e00\u81f4\u7684\uff0c\u907f\u514d\u8b8a\u6578\u503c\u8b8a\u52d5\u6240\u5c0e\u81f4\u7684\u7684\u908a\u969b\u6548\u61c9\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"one-way-data-flow",children:"One-Way Data Flow"}),"\n",(0,r.jsx)(n.p,{children:"React \u53ea\u5141\u8a31\u8cc7\u6599\u7531\u4e0a\u5230\u4e0b\uff0c\u4e0d\u5141\u8a31\u5b50\u5143\u4ef6\u5f80\u4e0a\u8b8a\u52d5/\u50b3\u905e\u8cc7\u6599\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.udemy.com/course/the-ultimate-react-course",children:"The Ultimate React Course"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/StrictMode",children:"StrictMode"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://react.dev/learn/passing-props-to-a-component",children:"Props"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);