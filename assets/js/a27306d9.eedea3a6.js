"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6871],{483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(4848),r=n(8453);const o={title:"[Day 6] State Management",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-08T11:41"},l=void 0,s={permalink:"/blog/react/day-6-state-management",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-6-state-management.md",source:"@site/blog/react/day-6-state-management.md",title:"[Day 6] State Management",description:"State Management",date:"2024-08-08T11:41:00.000Z",tags:[{inline:!0,label:"React",permalink:"/blog/tags/react"},{inline:!0,label:"ZeroToHero",permalink:"/blog/tags/zero-to-hero"}],readingTime:2.61,hasTruncateMarker:!0,authors:[{name:"deverqqqq",url:"https://github.com/deverqqqq",imageURL:"https://github.com/deverqqqq.png",key:"deverqqqq",page:null}],frontMatter:{title:"[Day 6] State Management",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-08T11:41"},unlisted:!1,prevItem:{title:"[Day 7] Children Prop",permalink:"/blog/react/day-7-children-prop"},nextItem:{title:"[Day 5] React State",permalink:"/blog/react/day-5-react-state"}},c={authorsImageUrls:[void 0]},i=[{value:"State Management",id:"state-management",level:2},{value:"Local / Global State",id:"local--global-state",level:3},{value:"\u4f7f\u7528\u6642\u6a5f",id:"\u4f7f\u7528\u6642\u6a5f",level:3},{value:"\u5b58\u53d6\u7bc4\u570d",id:"\u5b58\u53d6\u7bc4\u570d",level:3},{value:"Derived State",id:"derived-state",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557                     \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d                     \n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551                        \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551                        \n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551                        \n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d                        \n                                                                                  \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2557                     \n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d                     \n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557                     \n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d      \u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557                    \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551       \u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d                    \n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d        \u255a\u2550\u2550\u2550\u2550\u2550\u255d                     \n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"state-management",children:"State Management"}),"\n",(0,a.jsx)(t.p,{children:"\u5b9a\u7fa9\u8981\u5728\u4f55\u6642\u5efa\u7acb\u5404\u500b\u90e8\u5206\u7684\u72c0\u614b\u3001\u9700\u8981\u54ea\u4e9b\u985e\u578b\u7684\u72c0\u614b\u3001\u6bcf\u500b\u72c0\u614b\u653e\u7f6e\u5728\u54ea\u88e1\uff0c\u4ee5\u53ca\u8cc7\u6599\u5982\u4f55\u5728\u61c9\u7528\u7a0b\u5f0f\u4e2d\u50b3\u905e\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"local--global-state",children:"Local / Global State"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Local State"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Global State"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"State \u53ea\u88ab\u90e8\u5206\u7684 Component \u4f7f\u7528"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"\u6bcf\u500b Component \u90fd\u53ef\u4ee5\u53d6\u5f97\u4f7f\u7528"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b9a\u7fa9\u5728 Component \u5167\uff0c\u53ea\u6709\u81ea\u5df1\u548c Child \u53ef\u4ee5\u53d6\u5f97"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"\u9664\u975e\u5fc5\u8981\uff0c\u5426\u5247\u4e00\u5f8b\u90fd\u7528 Local State"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"\u4f7f\u7528\u6642\u6a5f",children:"\u4f7f\u7528\u6642\u6a5f"}),"\n",(0,a.jsx)(t.mermaid,{value:"flowchart TB\n    A[\u9700\u8981\u5132\u5b58\u8cc7\u6599]\n    C[\u4f7f\u7528 const]\n    B{{\u8cc7\u6599\u662f\u5426\u6703\u96a8\u6642\u9593\u6216\u662f\u5728\u67d0\u4e00\u500b\u6642\u9593\u9ede\u6539\u8b8a}}\n    D{{\u80fd\u5426\u5f9e\u73fe\u6709\u7684 State \u6216\u662f Props \u8a08\u7b97\u53d6\u5f97}}\n    E[\u5c0e\u51fa\u72c0\u614b]\n    F{{\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3 Component}}\n    G[Ref]\n    H[\u5728 Component \u5167\u7522\u751f\u65b0\u7684 State]\n\n    A --\x3e B\n    B -- \u5426 --\x3e C\n    B -- \u662f --\x3e D\n    D -- \u5426 --\x3e F\n    D -- \u662f --\x3e E\n    F -- \u5426 --\x3e G\n    F -- \u662f --\x3e H"}),"\n",(0,a.jsx)(t.h3,{id:"\u5b58\u53d6\u7bc4\u570d",children:"\u5b58\u53d6\u7bc4\u570d"}),"\n",(0,a.jsx)(t.mermaid,{value:"flowchart TB\n    I{{\u53ea\u88ab\u81ea\u5df1\u7684 Component \u4f7f\u7528}}\n    J[\u4fdd\u7559\u5728 Component \u5167]\n    K{{\u9700\u8981\u88ab Child Component \u4f7f\u7528}}\n    L[\u900f\u904e Props \u50b3\u905e]\n    M{{\u9700\u8981\u88ab\u76f8\u9130\u7684 Component \u4f7f\u7528}}\n    N[\u63d0\u5347\u72c0\u614b\u81f3 Common Parent Component]\n    O[Global State!?]\n\n    I -- \u662f --\x3e J\n    I -- \u5426 --\x3e K\n    K -- \u662f --\x3e L\n    K -- \u5426 --\x3e M\n    M -- \u662f --\x3e N\n    M -- \u5426 --\x3e O"}),"\n",(0,a.jsx)(t.h2,{id:"derived-state",children:"Derived State"}),"\n",(0,a.jsx)(t.p,{children:"\u5f9e Component \u5167\u73fe\u6709\u7684 Props & States \u8a08\u7b97\u51fa\u7684\u72c0\u614b\u3002"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Don't Do This!!!"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const [cart, setCart] = useState([\n  { name: "JavaScript Course", price: 15.99 },\n  { name: "Node.js Bootcamp", price: 14.99 },\n]);\n\n// \u70ba\u4e86\u53d6\u5f97 numItems \u548c totalPrice\uff0c\u591a\u5b9a\u7fa9\u5169\u500b State\n// \u4e00\u65b9\u9762\u662f\u6c92\u5fc5\u8981\uff0c\u53e6\u5916\u4e00\u65b9\u9762\u662f\u9019\u6a23\u6703\u5c0e\u81f4\u9019\u500b Component State \u6539\u8b8a\u6642\uff0c\u9700\u8981\u6e32\u67d3\u4e09\u6b21\nconst [numItems, setNumItems] = useState(2);\nconst [totalPrice, setTotalPrice] = useState(30.98);\n'})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const [cart, setCart] = useState([\n  { name: "JavaScript Course", price: 15.99 },\n  { name: "Node.js Bootcamp", price: 14.99 },\n]);\n\n// Re-Render \u7684\u6642\u5019\u6703\u91cd\u65b0\u547c\u53eb\u8a72\u65b9\u6cd5\uff0c\u6240\u4ee5\u7528 cart \u7684\u5167\u5bb9\u53d6\u5f97\u8cc7\u6599\u5c31\u597d\nconst numItems = cart.length;\nconst totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.udemy.com/course/the-ultimate-react-course",children:"The Ultimate React Course"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);