"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1960],{53137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var r=n(25088),a=n(74848),l=n(28453),c=n(11470),s=n(19365);const o={title:"[Day 1] \u7b2c\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f !",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-01T10:29"},i=void 0,u={authorsImageUrls:[void 0]},d=[{value:"\u5f9e 0 \u958b\u59cb\u7b2c 1 \u500b React \u61c9\u7528",id:"\u5f9e-0-\u958b\u59cb\u7b2c-1-\u500b-react-\u61c9\u7528",level:2},{value:"\u958b\u767c\u74b0\u5883",id:"\u958b\u767c\u74b0\u5883",level:3},{value:"\u76ee\u6a19",id:"\u76ee\u6a19",level:3},{value:"Try Some React",id:"try-some-react",level:3},{value:"\u70ba\u4f55\u9700\u8981\u524d\u7aef\u6846\u67b6",id:"\u70ba\u4f55\u9700\u8981\u524d\u7aef\u6846\u67b6",level:2},{value:"Why React?",id:"why-react",level:2},{value:"React",id:"react",level:3},{value:"ReactDOM",id:"reactdom",level:3},{value:"\u5176\u4ed6\u6e32\u67d3\u5c64",id:"\u5176\u4ed6\u6e32\u67d3\u5c64",level:3},{value:"Reference",id:"reference",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \n                                                             \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557     \u2588\u2588\u2557    \n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u2588\u2588\u2588\u2551    \n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d     \u255a\u2588\u2588\u2551    \n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d       \u2588\u2588\u2551    \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551        \u2588\u2588\u2551    \n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d        \u255a\u2550\u255d    \n                                                             \n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u5f9e-0-\u958b\u59cb\u7b2c-1-\u500b-react-\u61c9\u7528",children:"\u5f9e 0 \u958b\u59cb\u7b2c 1 \u500b React \u61c9\u7528"}),"\n",(0,a.jsx)(t.h3,{id:"\u958b\u767c\u74b0\u5883",children:"\u958b\u767c\u74b0\u5883"}),"\n",(0,a.jsx)(t.p,{children:"\u900f\u904e\u7dda\u4e0a\u7de8\u8f2f\u5668\uff0c\u53ef\u4ee5\u5728\u4e0d\u8a2d\u5b9a\u958b\u767c\u74b0\u5883\u7684\u524d\u63d0\u4e0b\uff0c\u7c21\u55ae\u4f7f\u7528\u7dda\u4e0a\u5de5\u5177\u9032\u884c\u958b\u767c\u3002"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://codesandbox.io/",children:"CodeSandbox"})}),"\n",(0,a.jsxs)(t.p,{children:["\u8981\u5feb\u901f\u5efa\u7acb\u4e00\u500b React \u7bc4\u672c\uff0c\u53ef\u4ee5\u900f\u4e0b\u9762\u7684\u9023\u7d50\u524d\u5f80\u3002",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"https://react.new",children:"react.new"})]}),"\n",(0,a.jsx)(t.h3,{id:"\u76ee\u6a19",children:"\u76ee\u6a19"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"\u5efa\u7acb\u4e00\u500b\u53ef\u4ee5\u4e92\u52d5\u7db2\u9801\u3002"}),"\n",(0,a.jsx)(t.li,{children:"\u9801\u9762\u4e0a\u6709\u4e00\u500b\u6309\u9215\uff0c\u6309\u4e0b\u5f8c\u6703\u547c\u53eb API \u66ff\u63db\u8a72\u9801\u7684\u6a19\u984c\u5167\u5bb9\u3002"}),"\n",(0,a.jsx)(t.li,{children:"\u5728\u756b\u9762\u4e0a\u9700\u8981\u5448\u73fe\u5171\u6309\u4e0b\u5e7e\u6b21\u3002"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"try-some-react",children:"Try Some React"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"\u756b\u9762\u662f\u7531\u5404\u5f0f\u5404\u6a23\u7684\u5c0f\u7d44\u4ef6\u62fc\u6e4a\u800c\u6210\uff0c\u5c31\u50cf\u662f\u6a02\u9ad8\u4e00\u6a23\u3002"}),"\n",(0,a.jsx)(t.li,{children:"App.js: \u662f\u4e00\u500b\u7d44\u4ef6\uff0cReact \u7684\u7d44\u4ef6\u662f\u4e00\u500b\u65b9\u6cd5\uff0c\u5ba3\u544a\u6642\u9700\u8981 export\uff0c\u7136\u5f8c\u5728\u4f7f\u7528\u7684\u5730\u65b9\u505a import\u3002"}),"\n",(0,a.jsx)(t.li,{children:"\u7d44\u4ef6\u56de\u50b3\u7684\u5167\u5bb9\u662f JSX\uff0c\u4e00\u7a2e React \u4f7f\u7528\u7684\u8a9e\u6cd5\uff0chtml \u8ddf js \u7684\u7d44\u5408\u3002"}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"useState"}),": \u900f\u904e",(0,a.jsx)(t.code,{children:"\u8cc7\u6599"}),"\u8ddf",(0,a.jsx)(t.code,{children:"\u8cc7\u6599\u4f86\u6e90"}),"\u505a\u7d81\u5b9a\uff0c\u7576\u8cc7\u6599\u4f86\u6e90\u7570\u52d5\uff0c\u628a\u8cc7\u6599\u540c\u6b65\u5230\u756b\u9762\u4e0a\u3002"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"useEffect"}),": \u53ef\u4ee5\u505a\u7b2c\u4e00\u6b21\u8f09\u5165\u7684\u89f8\u767c\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(c.A,{children:[(0,a.jsx)(s.A,{value:"App.js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import { useEffect, useState } from "react";\n\n// \u9700\u8981\u88ab import \u6240\u4ee5\u9019\u908a\u8981\u5ba3\u544a export\nexport default function App() {\n  const [advice, setAdvice] = useState("");\n  const [count, setCount] = useState(0);\n\n  async function getAdvice() {\n    const res = await fetch("https://api.adviceslip.com/advice");\n    const data = await res.json();\n\n    setAdvice(data.slip.advice);\n    setCount((c) => c + 1);\n  }\n\n  useEffect(function () {\n    getAdvice();\n  }, []);\n\n  return (\n    <div>\n      <h1>{advice}</h1>\n      <button onClick={getAdvice}>Get Advice</button>\n      <Message count={count} />\n    </div>\n  );\n}\n\n// Message \u55ae\u9664\u62c6\u4e00\u500b\u7d44\u4ef6\u51fa\u4f86\uff0c\u900f\u904e props \u53d6\u5f97\u53c3\u6578\u5167\u5bb9\nfunction Message(props) {\n  return (\n    <p>\n      You have read <strong>{props.count}</strong> pieces advices.{" "}\n    </p>\n  );\n}\n'})})}),(0,a.jsx)(s.A,{value:"index.js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\n\n// \u8f09\u5165 App\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nconst root = createRoot(rootElement);\n\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"\u70ba\u4f55\u9700\u8981\u524d\u7aef\u6846\u67b6",children:"\u70ba\u4f55\u9700\u8981\u524d\u7aef\u6846\u67b6"}),"\n",(0,a.jsxs)(t.p,{children:["\u524d\u7aef\u57fa\u672c\u4e0a\u8981\u505a\u7684\u4e8b\u60c5\uff0c\u6700\u4e3b\u8981\u5c31\u662f\u628a",(0,a.jsx)(t.code,{children:"\u8cc7\u6599"}),"\u900f\u904e",(0,a.jsx)(t.code,{children:"UI"}),"\u5448\u73fe\u5728\u756b\u9762\u4e0a\u3002\u7576\u6211\u5011\u628a\u91cd\u9ede\u805a\u7126\u5728\u9019\u500b\u529f\u80fd\u4e0a\uff0c\u6703\u767c\u73fe\u50b3\u7d71\u7684\u505a\u6cd5 (ex: jQuery)\uff0c\u6703\u9700\u8981\u900f\u904e\u904d\u6b77\u6574\u500b DOM\uff0c\u627e\u5230\u76ee\u6a19\u7684\u5143\u4ef6\uff0c\u7136\u5f8c\u66f4\u65b0\u5167\u5bb9\uff0c\u7576\u756b\u9762\u4e0a\u7684\u5167\u5bb9\u5340\u584a\u8d8a\u4f86\u8d8a\u8907\u96dc\uff0c\u6bcf\u500b\u5340\u584a\u7684\u8cc7\u6599\u4f86\u6e90 API \u53ef\u80fd\u4e5f\u90fd\u4e0d\u4e00\u6a23\uff0c\u5c31\u7b97\u4e0d\u4f7f\u7528\u6846\u67b6\u7684\u4f5c\u6cd5\uff0c\u70ba\u4e86\u907f\u514d\u8907\u96dc\u5ea6\u548c\u53ef\u7dad\u8b77\u6027\uff0c\u6700\u7d42\u4e5f\u6703\u505a\u51fa\u985e\u4f3c\u524d\u7aef\u6846\u67b6\u7684\u6771\u897f\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u5f9e\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u5230\uff0c\u76f8\u8f03\u65bc\u4e0d\u4f7f\u7528\u6846\u67b6\u7684\u5beb\u6cd5\uff0c\u9019\u7a2e\u505a\u6cd5\u53ef\u4ee5\u66f4\u4e7e\u6de8\u7684\u5207\u5206\u756b\u9762\u7684\u7d44\u4ef6\uff0c\u7136\u5f8c\u4e5f\u4e0d\u518d\u9700\u8981\u53bb\u627e\u5230\u5c0d\u61c9\u7684 DOM \u7136\u5f8c\u53bb\u57f7\u884c\u540c\u6b65\u8cc7\u6599\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"why-react",children:"Why React?"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"\u9748\u6d3b\u5ea6\u3002"}),"\n",(0,a.jsx)(t.li,{children:"\u6587\u4ef6\u5167\u5bb9\u8a73\u7d30\u4e14\u597d\u4e0a\u624b\uff0c\u76f8\u95dc\u7684\u5b78\u7fd2\u5167\u5bb9\u4e5f\u5f88\u8c50\u5bcc\u3002"}),"\n",(0,a.jsx)(t.li,{children:"\u4e0d\u55ae\u55ae\u505a\u7db2\u9801\u524d\u7aef\u958b\u767c\uff0c\u4e5f\u53ef\u4ee5\u7528\u4f86\u505a\u5176\u4ed6\u61c9\u7528\u3002(React Native)"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"react",children:"React"}),"\n",(0,a.jsx)(t.p,{children:"React \u662f\u4e00\u500b\u7528\u65bc\u69cb\u5efa\u4f7f\u7528\u8005\u754c\u9762\u7684 JavaScript \u51fd\u793a\u5eab\u3002\u5b83\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e00\u500b\u9ad8\u6548\u7684\u65b9\u5f0f\u4f86\u66f4\u65b0\u548c\u6e32\u67d3 UI \u7d44\u4ef6\u3002React \u672c\u8eab\u4e0d\u5305\u542b\u4efb\u4f55\u7279\u5b9a\u65bc\u5e73\u53f0\u7684\u4ee3\u78bc\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u4f5c\u70ba\u4e00\u500b\u62bd\u8c61\u5c64\uff0c\u5141\u8a31\u6211\u5011\u5728\u591a\u500b\u5e73\u53f0\u4e0a\u4f7f\u7528\u76f8\u540c\u7684\u908f\u8f2f\u4f86\u69cb\u5efa\u61c9\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"reactdom",children:"ReactDOM"}),"\n",(0,a.jsx)(t.p,{children:"ReactDOM \u662f\u91dd\u5c0d Web \u5e73\u53f0\u7684\u7279\u5b9a\u5be6\u73fe\u3002\u5b83\u8ca0\u8cac\u5c07 React \u7d44\u4ef6\u6e32\u67d3\u5230\u700f\u89bd\u5668\u7684 DOM\uff08Document Object Model\uff09\u4e2d\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u4f7f\u7528 ReactDOM\uff0c\u5c31\u8868\u793a\u4f60\u6b63\u5728\u958b\u767c\u4e00\u500b Web \u61c9\u7528\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"\u5176\u4ed6\u6e32\u67d3\u5c64",children:"\u5176\u4ed6\u6e32\u67d3\u5c64"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"React Native\uff1a\u7528\u65bc\u79fb\u52d5\u61c9\u7528\u958b\u767c\uff0c\u5141\u8a31\u4f60\u4f7f\u7528\u76f8\u540c\u7684 React \u8a9e\u6cd5\u69cb\u5efa\u539f\u751f iOS \u548c Android \u61c9\u7528\u3002"}),"\n",(0,a.jsx)(t.li,{children:"React Native for Windows and macOS\uff1a\u64f4\u5c55 React Native\uff0c\u4f7f\u5176\u53ef\u4ee5\u7528\u65bc\u958b\u767c\u684c\u9762\u61c9\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,a.jsx)(t.li,{children:"React 360\uff1a\u7528\u65bc\u69cb\u5efa\u865b\u64ec\u73fe\u5be6 (VR) \u61c9\u7528\u3002"}),"\n",(0,a.jsx)(t.li,{children:"Ink\uff1a\u7528\u65bc\u69cb\u5efa\u547d\u4ee4\u884c\u754c\u9762 (CLI) \u61c9\u7528\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.udemy.com/course/the-ultimate-react-course",children:"The Ultimate React Course"})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,c),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>R});var r=n(96540),a=n(34164),l=n(23104),c=n(56347),s=n(205),o=n(57485),i=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[c,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,d]=m({queryString:n,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),x=(()=>{const e=i??f;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:c,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==r&&(i(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:l}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function R(e){const t=(0,v.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(96540);const a={},l=r.createContext(a);function c(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(l.Provider,{value:t},e.children)}},25088:e=>{e.exports=JSON.parse('{"permalink":"/blog/react/day-1-first-react-app","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-1-first-react-app.md","source":"@site/blog/react/day-1-first-react-app.md","title":"[Day 1] \u7b2c\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f !","description":"\u5f9e 0 \u958b\u59cb\u7b2c 1 \u500b React \u61c9\u7528","date":"2024-08-01T10:29:00.000Z","tags":[{"inline":true,"label":"React","permalink":"/blog/tags/react"},{"inline":true,"label":"ZeroToHero","permalink":"/blog/tags/zero-to-hero"}],"readingTime":4.815,"hasTruncateMarker":true,"authors":[{"name":"deverqqqq","url":"https://github.com/deverqqqq","imageURL":"https://github.com/deverqqqq.png","key":"deverqqqq","page":null}],"frontMatter":{"title":"[Day 1] \u7b2c\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f !","authors":["deverqqqq"],"tags":["React","ZeroToHero"],"date":"2024-08-01T10:29"},"unlisted":false,"prevItem":{"title":"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review","permalink":"/blog/react/day-2-setup-and-js-review"}}')}}]);