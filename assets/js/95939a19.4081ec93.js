"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9473],{1324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(4848),r=a(8453);const o={title:"[Day 5] React State",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-07T09:26"},c=void 0,s={permalink:"/blog/react/day-5-react-state",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-5-react-state.md",source:"@site/blog/react/day-5-react-state.md",title:"[Day 5] React State",description:"What's React State?",date:"2024-08-07T09:26:00.000Z",tags:[{inline:!0,label:"React",permalink:"/blog/tags/react"},{inline:!0,label:"ZeroToHero",permalink:"/blog/tags/zero-to-hero"}],readingTime:2.485,hasTruncateMarker:!0,authors:[{name:"deverqqqq",url:"https://github.com/deverqqqq",imageURL:"https://github.com/deverqqqq.png",key:"deverqqqq",page:null}],frontMatter:{title:"[Day 5] React State",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-07T09:26"},unlisted:!1,prevItem:{title:"[Day 6] State Management",permalink:"/blog/react/day-6-state-management"},nextItem:{title:"[Day 4] React Fragment",permalink:"/blog/react/day-4-react-fragment"}},u={authorsImageUrls:[void 0]},i=[];function l(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \n                                                             \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d      \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2551\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n                                                             \n"})})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>s});var n=a(6540);const r={},o=n.createContext(r);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);