"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6681],{3588:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=s(4848),t=s(8453),a=s(1470),l=s(9365);const i={title:"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-02T14:26"},o=void 0,c={permalink:"/blog/react/day-2-setup-and-js-review",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-2-setup-and-js-review.md",source:"@site/blog/react/day-2-setup-and-js-review.md",title:"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review",description:"\u958b\u767c\u74b0\u5883\u8a2d\u7f6e",date:"2024-08-02T14:26:00.000Z",tags:[{inline:!0,label:"React",permalink:"/blog/tags/react"},{inline:!0,label:"ZeroToHero",permalink:"/blog/tags/zero-to-hero"}],readingTime:8.905,hasTruncateMarker:!0,authors:[{name:"deverqqqq",url:"https://github.com/deverqqqq",imageURL:"https://github.com/deverqqqq.png",key:"deverqqqq"}],frontMatter:{title:"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-02T14:26"},unlisted:!1,prevItem:{title:"[Day 3] React Component",permalink:"/blog/react/day-3-react-component"},nextItem:{title:"[Day 1] \u7b2c\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f !",permalink:"/blog/react/day-1-first-react-app"}},d={authorsImageUrls:[void 0]},u=[{value:"\u958b\u767c\u74b0\u5883\u8a2d\u7f6e",id:"\u958b\u767c\u74b0\u5883\u8a2d\u7f6e",level:2},{value:"Create React App",id:"create-react-app",level:2},{value:"\u4f7f\u7528 npm \u5957\u4ef6\u5feb\u901f\u9375\u7acb React App",id:"\u4f7f\u7528-npm-\u5957\u4ef6\u5feb\u901f\u9375\u7acb-react-app",level:3},{value:"Javascript Review",id:"javascript-review",level:2},{value:"Assignment Operators",id:"assignment-operators",level:3},{value:"Destructuring",id:"destructuring",level:3},{value:"Spread Operator",id:"spread-operator",level:3},{value:"Conditional (Ternary) Operator",id:"conditional-ternary-operator",level:3},{value:"Logical Operator",id:"logical-operator",level:3},{value:"Optional Chaining",id:"optional-chaining",level:3},{value:"Array Method",id:"array-method",level:3},{value:"Promise &amp;&amp; async / await",id:"promise--async--await",level:3},{value:"Reference",id:"reference",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \n                                                             \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2557\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d      \u2588\u2588\u2588\u2588\u2588\u2554\u255d\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d      \u2588\u2588\u2554\u2550\u2550\u2550\u255d \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n                                                             \n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u958b\u767c\u74b0\u5883\u8a2d\u7f6e",children:"\u958b\u767c\u74b0\u5883\u8a2d\u7f6e"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VSCode"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Extension"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESlint"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["VSCode \u8a2d\u5b9a\uff1a",(0,r.jsx)(n.code,{children:"default formatter"}),"\u6539\u70ba Prettier\u3002",(0,r.jsx)(n.br,{}),"\n","\u53ef\u4ee5\u8a2d\u5b9a\u5132\u5b58\u6642\u89f8\u767c\uff0c\u4f46\u6211\u500b\u4eba\u504f\u597d\u624b\u52d5\u6309\u6392\u7248\u3002(alt+shift+F)"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode",children:"Quokka"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nodejs.org/en",children:"Node.js"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-react-app",children:"Create React App"}),"\n",(0,r.jsx)(n.p,{children:"\u9019\u500b\u76ee\u524d\u5df2\u7d93\u4e0d\u518d\u88ab\u5efa\u8b70\u4f7f\u7528\u5728\u6b63\u5f0f\u7684\u5c08\u6848\u4e0a\u9762\uff0c\u56e0\u70ba\u521d\u59cb\u5316\u76f8\u4f9d\u592a\u591a\u7684\u5957\u4ef6\uff0c\u96e3\u4ee5\u91dd\u5c0d\u4e0d\u540c\u7684\u9700\u6c42\u53bb\u505a\u8abf\u6574\uff0c\u4f46\u662f\u7528\u4f86\u4f5c\u70ba\u5b78\u7fd2 React \u7684\u5de5\u5177\u9084\u662f\u5f88\u597d\u7528\u7684\uff0c\u53ef\u4ee5\u5728\u4e0d\u7528\u8907\u96dc\u8a2d\u7f6e\u7684\u524d\u63d0\u4e0b\uff0c\u958b\u7bb1\u5373\u7528\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u524d\u6709\u5e7e\u500b",(0,r.jsx)(n.a,{href:"https://react.dev/learn/start-a-new-react-project",children:"\u5b98\u65b9\u63a8\u85a6"}),"\u7684",(0,r.jsx)(n.strong,{children:"\u5168\u7aef\u6846\u67b6"}),"\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://remix.run/",children:"Remix"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5efa\u7f6e\u5de5\u5177"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528-npm-\u5957\u4ef6\u5feb\u901f\u9375\u7acb-react-app",children:"\u4f7f\u7528 npm \u5957\u4ef6\u5feb\u901f\u9375\u7acb React App"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ps1",children:"## my-app \u8acb\u66ff\u63db\u6210\u4f60\u7684\u5c08\u6848\u540d\u7a31\nnpx create-react-app my-app\n"})}),"\n",(0,r.jsx)(n.h2,{id:"javascript-review",children:"Javascript Review"}),"\n",(0,r.jsx)(n.h3,{id:"assignment-operators",children:"Assignment Operators"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u7a31"}),(0,r.jsx)(n.th,{children:"\u7c21\u5316\u7684\u904b\u7b97\u5b50"}),(0,r.jsx)(n.th,{children:"\u610f\u7fa9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8ce6\u503c"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x = y"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x = y"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u52a0\u6cd5\u8ce6\u503c"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x += y"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x = x + y"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6e1b\u6cd5\u8ce6\u503c"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x -= y"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x = x - y"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e58\u6cd5\u8ce6\u503c"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x *= y"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x = x * y"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u9664\u6cd5\u8ce6\u503c"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x /= y"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x = x / y"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u9918\u6578\u8ce6\u503c"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x %= y"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"x = x % y"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"destructuring",children:"Destructuring"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"\u96c6\u5408\u89e3\u69cb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const data = [\n    {\n      color: "red",\n      size: 10,\n      weight: 22,\n    },\n    {\n      color: "green",\n      size: 8,\n      weight: 16,\n    },\n    {\n      color: "blue",\n      size: 15,\n      weight: 55,\n    },\n  ];\n\n  // \u6309\u7167\u9806\u5e8f\u56de\u50b3\n  const [first, second] = data;\n  const firstResult = JSON.stringify(first);\n  const secondResult = JSON.stringify(second);\n\n  return (\n    <div>\n      <span>first is {firstResult}.</span>\n      <br></br>\n      <span>second is {secondResult}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})}),(0,r.jsx)(l.A,{value:"Rest Pattern",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const data = [\n    {\n      color: "red",\n      size: 10,\n      weight: 22,\n    },\n    {\n      color: "green",\n      size: 8,\n      weight: 16,\n    },\n    {\n      color: "blue",\n      size: 15,\n      weight: 55,\n    },\n  ];\n  const [first, ...others] = data;\n  const firstResult = JSON.stringify(first);\n  const otherResult = JSON.stringify(others);\n\n  return (\n    <div>\n      <span>first is {firstResult}.</span>\n      <br></br>\n      <span>other is {otherResult}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})}),(0,r.jsx)(l.A,{value:"\u7269\u4ef6\u89e3\u69cb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const data = {\n    color: "red",\n    size: 10,\n    weight: 22,\n  };\n\n  // \u540d\u7a31\u4e00\u6a23\u53ef\u4ee5\u89e3\u69cb\n  const { color, weight } = data;\n\n  return (\n    <div>\n      <span>color is {color}.</span>\n      <br></br>\n      <span>weight is {weight}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"spread-operator",children:"Spread Operator"}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(l.A,{value:"Spread",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const data = [\n    {\n      color: "red",\n      size: 10,\n      weight: 22,\n    },\n    {\n      color: "green",\n      size: 8,\n      weight: 16,\n    },\n    {\n      color: "blue",\n      size: 15,\n      weight: 55,\n    },\n  ];\n  const [first, ...others] = data;\n  const newArray = [...others, { color: "black", size: 99, weight: 99 }];\n  const result = JSON.stringify(newArray);\n\n  return (\n    <div>\n      <span>result is {result}.</span>\n    </div>\n  );\n}\n'})})})}),"\n",(0,r.jsx)(n.h3,{id:"conditional-ternary-operator",children:"Conditional (Ternary) Operator"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Test(props) {\n  const before = 10;\n  const after = 20;\n  const result =\n    before > after\n      ? `${before} is bigger than ${after}`\n      : `${after} is bigger than ${before}`;\n\n  return (\n    <div>\n      <span>result is {result}.</span>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"logical-operator",children:"Logical Operator"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"AND",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const val_1 = true && true; // t && t returns true\n  const val_2 = true && false; // t && f returns false\n  const val_3 = false && true; // f && t returns false\n  const val_4 = false && 3 === 4; // f && f returns false\n  const val_5 = "Cat" && "Dog"; // t && t returns "Dog"\n  const val_6 = false && "Cat"; // f && t returns false\n  const val_7 = "Cat" && false; // t && f returns false\n  const val_8 = "" && false; // f && f returns ""\n  const val_9 = false && ""; // f && f returns false\n\n  return (\n    <div>\n      <span>val_1 is {val_1.toString()}.</span>\n      <br></br>\n      <span>val_2 is {val_2.toString()}.</span>\n      <br></br>\n      <span>val_3 is {val_3.toString()}.</span>\n      <br></br>\n      <span>val_4 is {val_4.toString()}.</span>\n      <br></br>\n      <span>val_5 is {val_5}.</span>\n      <br></br>\n      <span>val_6 is {val_6}.</span>\n      <br></br>\n      <span>val_7 is {val_7.toString()}.</span>\n      <br></br>\n      <span>val_8 is {val_8}.</span>\n      <br></br>\n      <span>val_9 is {val_9.toString()}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})}),(0,r.jsx)(l.A,{value:"OR",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const val_1 = true || true; // t || t returns true\n  const val_2 = false || true; // f || t returns true\n  const val_3 = true || false; // t || f returns true\n  const val_4 = false || 3 === 4; // f || f returns false\n  const val_5 = "Cat" || "Dog"; // t || t returns "Cat"\n  const val_6 = false || "Cat"; // f || t returns "Cat"\n  const val_7 = "Cat" || false; // t || f returns "Cat"\n  const val_8 = "" || false; // f || f returns false\n  const val_9 = false || ""; // f || f returns ""\n\n  return (\n    <div>\n      <span>val_1 is {val_1.toString()}.</span>\n      <br></br>\n      <span>val_2 is {val_2.toString()}.</span>\n      <br></br>\n      <span>val_3 is {val_3.toString()}.</span>\n      <br></br>\n      <span>val_4 is {val_4.toString()}.</span>\n      <br></br>\n      <span>val_5 is {val_5}.</span>\n      <br></br>\n      <span>val_6 is {val_6}.</span>\n      <br></br>\n      <span>val_7 is {val_7}.</span>\n      <br></br>\n      <span>val_8 is {val_8.toString()}.</span>\n      <br></br>\n      <span>val_9 is {val_9}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"optional-chaining",children:"Optional Chaining"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const adventurer = {\n    name: "Alice",\n    cat: {\n      name: "Dinah",\n    },\n  };\n\n  // adventurer.dog?.name \u5be6\u969b\u4e0a\u662f undefined\n  // \u900f\u904e\u9019\u7a2e\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u7269\u4ef6\u6c92\u6709\u9700\u8981\u7684\u5c6c\u6027\u6642\u4e0d\u6703\u76f4\u63a5 error\n  console.log(adventurer.dog?.name);\n  const result = JSON.stringify(adventurer.dog?.name);\n\n  return (\n    <div>\n      <span>result is {result}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"array-method",children:"Array Method"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(l.A,{value:"Map",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Test(props) {\n  const datas = [1, 2, 3, 4, 5, 6];\n  const targets = datas.map((el) => el * 2);\n\n  // \u539f\u59cb\u96c6\u5408\u4e0d\u6703\u6539\u8b8a\n  const dataResult = JSON.stringify(datas);\n  const targetResult = JSON.stringify(targets);\n\n  return (\n    <div>\n      <span>dataResult is {dataResult}.</span>\n      <br></br>\n      <span>targetResult is {targetResult}.</span>\n      <br></br>\n    </div>\n  );\n}\n"})}),(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u7528\u4f86\u7576\u4f5c\u8cc7\u6599\u7684\u66f4\u65b0\uff0c\u539f\u59cb\u96c6\u5408\u4e0d\u6703\u88ab\u5f71\u97ff\u3002"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const apples = [\n    { id: 1, color: "red", size: 10 },\n    { id: 2, color: "red", size: 15 },\n  ];\n  const updated = apples.map((apple) =>\n    apple.id === 1 ? { ...apple, color: "blue" } : apple\n  );\n\n  const applesResult = JSON.stringify(apples);\n  const updatedResult = JSON.stringify(updated);\n\n  return (\n    <div>\n      <span>applesResult is {applesResult}.</span>\n      <br></br>\n      <span>updatedResult is {updatedResult}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})]}),(0,r.jsxs)(l.A,{value:"Filter",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Test(props) {\n  const datas = [1, 2, 3, 4, 5, 6];\n  const targets = datas.filter((el) => el < 4);\n\n  // \u539f\u59cb\u96c6\u5408\u4e0d\u6703\u6539\u8b8a\n  const dataResult = JSON.stringify(datas);\n  const targetResult = JSON.stringify(targets);\n\n  return (\n    <div>\n      <span>dataResult is {dataResult}.</span>\n      <br></br>\n      <span>targetResult is {targetResult}.</span>\n      <br></br>\n    </div>\n  );\n}\n"})}),(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u7528\u4f86\u7576\u4f5c\u8cc7\u6599\u7684\u522a\u9664\uff0c\u539f\u59cb\u96c6\u5408\u4e0d\u6703\u88ab\u5f71\u97ff\u3002"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const apples = [\n    { id: 1, color: "red", size: 10 },\n    { id: 2, color: "red", size: 15 },\n  ];\n  const updated = apples.filter((apple) => apple.id === 2);\n\n  const applesResult = JSON.stringify(apples);\n  const updatedResult = JSON.stringify(updated);\n\n  return (\n    <div>\n      <span>applesResult is {applesResult}.</span>\n      <br></br>\n      <span>updatedResult is {updatedResult}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})]}),(0,r.jsx)(l.A,{value:"Reduce",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const apples = [\n    { id: 1, color: "red", size: 10 },\n    { id: 2, color: "red", size: 15 },\n  ];\n\n  // 1. \u8a2d\u5b9a\u8d77\u59cb\u503c\n  // 2. \u6bcf\u8b80\u4e00\u7b46\uff0c\u5c31\u8655\u7406\u4e00\u6b21\u5167\u90e8\u51fd\u6578\u7684\u908f\u8f2f\uff0c\u8655\u7406\u5f8c\u7684\u503c\u653e\u5230 acc \u5167\u3002\n  // 3. \u57f7\u884c\u7d50\u675f\u5f8c\u8fd4\u56de\n  const totalSizes = apples.reduce((acc, apple) => acc + apple.size, 0);\n\n  return (\n    <div>\n      <span>totalSizesResult is {totalSizes}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})}),(0,r.jsxs)(l.A,{value:"Sort",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const apples = [\n    { id: 1, color: "red", size: 10 },\n    { id: 3, color: "red", size: 65 },\n    { id: 2, color: "red", size: 15 },\n  ];\n\n  // sort \u6703\u6539\u8b8a\u539f\u59cb\u6578\u64da\n  // a-b: \u7531\u5c0f\u5230\u5927\n  // b-a: \u7531\u5927\u5230\u5c0f\n  const sorted = apples.sort((a, b) => a.id - b.id);\n\n  return (\n    <div>\n      <span>apples is {JSON.stringify(apples)}.</span>\n      <br></br>\n      <span>sorted is {JSON.stringify(sorted)}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Test(props) {\n  const apples = [\n    { id: 1, color: "red", size: 10 },\n    { id: 3, color: "red", size: 65 },\n    { id: 2, color: "red", size: 15 },\n  ];\n\n  // \u53ef\u4ee5\u900f\u904e slice \u907f\u514d\u6539\u8b8a\u539f\u59cb\u96c6\u5408\n  const sorted = apples.slice().sort((a, b) => a.id - b.id);\n\n  return (\n    <div>\n      <span>apples is {JSON.stringify(apples)}.</span>\n      <br></br>\n      <span>sorted is {JSON.stringify(sorted)}.</span>\n      <br></br>\n    </div>\n  );\n}\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"promise--async--await",children:"Promise && async / await"}),"\n",(0,r.jsxs)(n.p,{children:["\u975e\u540c\u6b65\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u4e0d\u7b49\u7684\u8a71\uff0c\u5c31\u6703\u5148\u5f80\u5f8c\u9762\u57f7\u884c\uff0c\u9019\u6642\u5019\u53ea\u6703\u5148\u56de\u50b3\u4e00\u500b",(0,r.jsx)(n.code,{children:"Promise"}),"\uff0c\u589e\u52a0\u904b\u884c\u7684\u6548\u7387\u3002",(0,r.jsx)(n.br,{}),"\n","\u4e5f\u53ef\u4ee5\u900f\u904e\u7b49\u5f85\u7684\u65b9\u5f0f\uff0c\u7b49\u5230\u56de\u61c9\u5f8c\u518d\u5f80\u5f8c\u9762\u8655\u7406\u3002"]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"Return `Promise`",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"async function getTodos() {\n  console.log(\"Inner\");\n  const res = await fetch(\"https://jsonplaceholder.typicode.com/todos/1\");\n  const data = await res.json();\n\n  return data;\n}\n\nconst todos = getTodos();\nconsole.log(todos);\nconsole.log('Outter');\n\n// Output\n// -------------------------------------------------------------------\n// \u200b\u200b\u200b\u200b\u200bQuokka 'script.js' (node: v20.12.0)\u200b\u200b\u200b\u200b\n\n// 'Inner' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:2:3\u200b\n// Promise {...} \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200btodos\u200b\u200b\u200b \u200b02-javascript-review/script.js:10:1\u200b\n// 'Outter' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:11:1\u200b\n// -------------------------------------------------------------------\n"})})}),(0,r.jsx)(l.A,{value:"await method",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"async function getTodos() {\n  console.log(\"Inner\");\n  const res = await fetch(\"https://jsonplaceholder.typicode.com/todos/1\");\n  const data = await res.json();\n\n  return data;\n}\n\nconst todos = await getTodos();\nconsole.log(todos);\nconsole.log('Outter');\n\n// Output\n// -------------------------------------------------------------------\n// \u200b\u200b\u200b\u200b\u200bQuokka 'script.js' (node: v20.12.0)\u200b\u200b\u200b\u200b\n\n// 'Inner' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:2:3\u200b\n// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }\n//   \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200btodos\u200b\u200b\u200b \u200b02-javascript-review/script.js:10:1\u200b\n// 'Outter' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:11:1\u200b\n// -------------------------------------------------------------------\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.udemy.com/course/the-ultimate-react-course",children:"The Ultimate React Course"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide",children:"MDN"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>l});s(6540);var r=s(4164);const t={tabItem:"tabItem_Ymn6"};var a=s(4848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(6540),t=s(4164),a=s(3104),l=s(6347),i=s(205),o=s(7485),c=s(1682),d=s(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:s}=e;const t=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,a=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=v({queryString:s,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:t}),g=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=s(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function b(e){let{className:n,block:s,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),t=i[s].value;t!==r&&(c(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function m(e){let{lazy:n,children:s,selectedValue:t}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(m,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(6540);const t={},a=r.createContext(t);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);