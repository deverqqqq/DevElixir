"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5218],{558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(4848),a=n(8453);n(1470),n(9365);const o={title:"[Day 8] Component Desgin",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-12T13:45"},u=void 0,l={permalink:"/blog/react/day-8-component-design",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-8-component-design.md",source:"@site/blog/react/day-8-component-design.md",title:"[Day 8] Component Desgin",description:"Component GuideLine",date:"2024-08-12T13:45:00.000Z",tags:[{inline:!0,label:"React",permalink:"/blog/tags/react"},{inline:!0,label:"ZeroToHero",permalink:"/blog/tags/zero-to-hero"}],readingTime:2.27,hasTruncateMarker:!0,authors:[{name:"deverqqqq",url:"https://github.com/deverqqqq",imageURL:"https://github.com/deverqqqq.png",key:"deverqqqq",page:null}],frontMatter:{title:"[Day 8] Component Desgin",authors:["deverqqqq"],tags:["React","ZeroToHero"],date:"2024-08-12T13:45"},unlisted:!1,nextItem:{title:"[Day 7] Children Prop",permalink:"/blog/react/day-7-children-prop"}},s={authorsImageUrls:[void 0]},i=[];function c(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \n                                                             \n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2557 \n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d     \u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d      \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551       \u255a\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d        \u255a\u2550\u2550\u2550\u2550\u255d \n                                                             \n"})})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>u});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function u(e){let{children:t,hidden:n,className:u}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(6540),a=n(4164),o=n(3104),u=n(6347),l=n(205),s=n(7485),i=n(1682),c=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[u,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,d]=b({queryString:n,groupId:a}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??h;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&s(g)}),[g]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function q(e){let{className:t,block:n,selectedValue:r,selectValue:u,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(i(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(q,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function x(e){const t=(0,f.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>l});var r=n(6540);const a={},o=r.createContext(a);function u(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);