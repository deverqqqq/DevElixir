"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6706],{63786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var r=t(44045),l=t(74848),s=t(28453),a=t(11470),o=t(19365);const i={title:"[Day 8] Component Desgin",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-12T13:45"},c=void 0,u={authorsImageUrls:[void 0]},d=[{value:"Component GuideLine",id:"component-guideline",level:2},{value:"Component Category",id:"component-category",level:2},{value:"Prop Drilling",id:"prop-drilling",level:2},{value:"Component Composition",id:"component-composition",level:2},{value:"Reference",id:"reference",level:2}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \n                                                             \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2557 \n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d     \u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d      \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551       \u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d        \u255a\u2550\u2550\u2550\u2550\u255d \n                                                             \n"})}),"\n",(0,l.jsx)(n.h2,{id:"component-guideline",children:"Component GuideLine"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Logical separation of content/layout",(0,l.jsx)(n.br,{}),"\n","\u7576\u4f60\u89ba\u5f97 Component \u7684 Content \u548c Layout \u4f3c\u4e4e\u4e0d\u5c6c\u65bc\u4e00\u7d44 Component \u7684\u5167\u5bb9",(0,l.jsx)(n.br,{}),"\n","=> \u61c9\u8a72\u8981\u62c6\u89e3\u51fa\u65b0 Component"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Reusability",(0,l.jsx)(n.br,{}),"\n","\u5982\u679c\u4f60\u60f3\u8981\u91cd\u8907\u4f7f\u7528\u9019\u500b Component \u5167\u7684\u67d0\u4e00\u500b\u90e8\u5206",(0,l.jsx)(n.br,{}),"\n","=> \u61c9\u8a72\u8981\u62c6\u89e3\u51fa\u65b0 Component"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Responsibilities / complexity"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6aa2\u67e5 Component \u662f\u5426\u80cc\u8ca0\u592a\u591a\u8077\u8cac"}),"\n",(0,l.jsx)(n.li,{children:"\u6aa2\u67e5 Component \u662f\u5426\u592a\u904e\u65bc\u8907\u96dc"}),"\n",(0,l.jsx)(n.li,{children:"\u6aa2\u67e5 Component \u662f\u5426\u6709\u592a\u591a\u7684 States \u6216\u662f Props"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"=> \u61c9\u8a72\u8981\u62c6\u89e3\u51fa\u65b0 Component"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Personal coding style"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"\u5efa\u7acb\u8d8a\u591a\u7684 Component\uff0c\u62bd\u8c61\u7684\u6210\u672c\u8d8a\u9ad8\uff0c\u9700\u8981\u82b1\u66f4\u591a\u7684\u7cbe\u529b\u53bb\u505a\u95b1\u8b80\uff0c\u6240\u4ee5\u4e00\u5b9a\u8981\u5728\u53ef\u7dad\u8b77\u6027\u3001\u53ef\u7528\u6027\u3001\u958b\u767c\u6548\u7387\u4e0a\u505a\u53d6\u6368\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"component-category",children:"Component Category"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Stateless/ Presentational"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Stateful"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Structural"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"No State"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Have State"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Pages / Layouts/ Screens"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Usually Small & Reusable"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Reuseble"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Huge / Non-Usable"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"prop-drilling",children:"Prop Drilling"}),"\n",(0,l.jsx)(n.p,{children:"\u7576\u6709\u5169\u500b\u4e0d\u540c\u5206\u652f\u7684 Component \u9700\u8981\u4e00\u6a23\u7684\u5c6c\u6027\u53bb\u505a\u5167\u5bb9\u7684\u5448\u73fe\u6642\uff0c\u56e0\u70ba React \u662f\u55ae\u5411\u6578\u64da\u6d41\uff0c\u6240\u4ee5\u9700\u8981\u628a State \u63d0\u5347\u5230\u7b2c\u4e00\u500b\u5171\u7528\u7684 Component \u4e0a\u9762\uff0c\u6703\u9020\u6210\u5c6c\u6027\u900f\u904e props \u4e00\u76f4\u50b3\u905e\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"component-composition",children:"Component Composition"}),"\n",(0,l.jsx)(n.p,{children:"\u900f\u904e Children Prop \u50b3\u905e\u8981\u9472\u5d4c\u7684 Component\u3002"}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(o.A,{value:"SuccessModal",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'function Model() {\n  return (\n    <div className="modal">\n      <Success />\n    </div>\n  );\n}\n\nfunction Success() {\n  return <p>Success Message</p>;\n}\n'})})}),(0,l.jsx)(o.A,{value:"ErrorModel",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'function Model() {\n  return (\n    <div className="modal">\n      <Error />\n    </div>\n  );\n}\n\nfunction Error() {\n  return <p>Error Message</p>;\n}\n'})})})]}),"\n",(0,l.jsxs)(a.A,{children:[(0,l.jsx)(o.A,{value:"Model",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'function Model({children}) {\n  return (\n    <div className="modal">\n      {children}\n    </div>\n  );\n}\n\n// <Model>\n//   <Success />\n// </Model>;\n\n// <Model>\n//   <Success />\n// </Error>;\n'})})}),(0,l.jsx)(o.A,{value:"SuccessModel",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"function Success(){\n    return <p>Success Message</p>;\n}\n"})})}),(0,l.jsx)(o.A,{value:"ErrorModel",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"function Error() {\n  return <p>Error Message</p>;\n}\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://www.udemy.com/course/the-ultimate-react-course",children:"The Ultimate React Course"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"https://www.freecodecamp.org/news/prop-drilling-in-react-explained-with-examples/",children:"Props Drilling"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const l={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(96540),l=t(34164),s=t(23104),a=t(56347),o=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,s=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:l}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,u.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),b=(()=>{const e=c??x;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),l=o[t].value;l!==r&&(c(n),a(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,l.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function C(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}},44045:e=>{e.exports=JSON.parse('{"permalink":"/blog/react/day-8-component-design","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-8-component-design.md","source":"@site/blog/react/day-8-component-design.md","title":"[Day 8] Component Desgin","description":"Component GuideLine","date":"2024-08-12T13:45:00.000Z","tags":[{"inline":true,"label":"React","permalink":"/blog/tags/react"},{"inline":true,"label":"ZeroToHero","permalink":"/blog/tags/zero-to-hero"}],"readingTime":2.27,"hasTruncateMarker":true,"authors":[{"name":"deverqqqq","url":"https://github.com/deverqqqq","imageURL":"https://github.com/deverqqqq.png","key":"deverqqqq","page":null}],"frontMatter":{"title":"[Day 8] Component Desgin","authors":["deverqqqq"],"tags":["React","ZeroToHero"],"date":"2024-08-12T13:45"},"unlisted":false,"nextItem":{"title":"[Day 7] Children Prop","permalink":"/blog/react/day-7-children-prop"}}')}}]);