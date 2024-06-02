"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9860],{1792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(7624),a=n(2172),s=n(1268),l=n(5388);const i={title:"Item Template",sidebar_label:"Item",keywords:["dotnet template","item template","\u7bc4\u672c"],description:"\u52d5\u624b\u505a\u4e00\u500b Item Template",sidebar_position:1,tags:["dotnet template"]},o=void 0,c={id:"dotnet/template/item",title:"Item Template",description:"\u52d5\u624b\u505a\u4e00\u500b Item Template",source:"@site/docs/dotnet/template/01_item.md",sourceDirName:"dotnet/template",slug:"/dotnet/template/item",permalink:"/dotnet/template/item",draft:!1,unlisted:!1,editUrl:"https://github.com/deverqqqq/DevElixir/tree/main/docs/dotnet/template/01_item.md",tags:[{inline:!0,label:"dotnet template",permalink:"/tags/dotnet-template"}],version:"current",sidebarPosition:1,frontMatter:{title:"Item Template",sidebar_label:"Item",keywords:["dotnet template","item template","\u7bc4\u672c"],description:"\u52d5\u624b\u505a\u4e00\u500b Item Template",sidebar_position:1,tags:["dotnet template"]},sidebar:"dotnetSidebar",previous:{title:"\u4ecb\u7d39",permalink:"/dotnet/template/intro"},next:{title:"Project",permalink:"/dotnet/template/project"}},u={},d=[{value:"\u76ee\u6a19\uff1a\u5efa\u7acb\u7b2c\u4e00\u500b Item Template",id:"\u76ee\u6a19\u5efa\u7acb\u7b2c\u4e00\u500b-item-template",level:2},{value:"\u76ee\u9304\u7d50\u69cb",id:"\u76ee\u9304\u7d50\u69cb",level:3},{value:"\u5efa\u7acb\u7bc4\u672c\u6a94\u6848 + \u8a2d\u5b9a\u6a94\u6848",id:"\u5efa\u7acb\u7bc4\u672c\u6a94\u6848--\u8a2d\u5b9a\u6a94\u6848",level:3},{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u8a66\u8457\u7528\u770b\u770b",id:"\u8a66\u8457\u7528\u770b\u770b",level:3},{value:"\u79fb\u9664",id:"\u79fb\u9664",level:2},{value:"Reference",id:"reference",level:2}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u76ee\u6a19\u5efa\u7acb\u7b2c\u4e00\u500b-item-template",children:"\u76ee\u6a19\uff1a\u5efa\u7acb\u7b2c\u4e00\u500b Item Template"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u5efa\u7acb\u4e00\u500b String \u7684\u64f4\u5145\u65b9\u6cd5\uff0c\u4e26\u505a\u6210\u7bc4\u672c"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"\u76ee\u9304\u7d50\u69cb",children:"\u76ee\u9304\u7d50\u69cb"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"parent_folder\n\u251c\u2500\u2500\u2500test (\u6e2c\u8a66\u4f7f\u7528)\n\u2514\u2500\u2500\u2500working\n    \u2514\u2500\u2500\u2500content\n        \u2514\u2500\u2500\u2500extensions\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\u5efa\u7acb\u7bc4\u672c\u6a94\u6848--\u8a2d\u5b9a\u6a94\u6848",children:"\u5efa\u7acb\u7bc4\u672c\u6a94\u6848 + \u8a2d\u5b9a\u6a94\u6848"}),"\n",(0,r.jsxs)(t.p,{children:["\u66f4\u591a\u8a2d\u5b9a\u9805\u76ee\u53ef\u4ee5\u53c3\u8003 ",(0,r.jsx)(t.a,{href:"/dotnet/template/conf",children:"[\u8aaa\u660e]"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"parent_folder\n\u251c\u2500\u2500\u2500test (\u6e2c\u8a66\u4f7f\u7528)\n\u2514\u2500\u2500\u2500working\n    \u2514\u2500\u2500\u2500content\n        \u2514\u2500\u2500\u2500extensions\n            \u2514\u2500\u2500\u2500StringExtensions.cs\n            \u2514\u2500\u2500\u2500.template.config\n                \u2514\u2500\u2500\u2500template.json\n"})}),"\n",(0,r.jsxs)(s.c,{children:[(0,r.jsx)(l.c,{value:"StringExtensions.cs",label:"StringExtensions.cs",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",metastring:"showLineNumbers",children:"namespace System;\n\npublic static class StringExtensions\n{\n    public static string Reverse(this string value)\n    {\n        char[] tempArray = value.ToCharArray();\n        Array.Reverse(tempArray);\n        return new string(tempArray);\n    }\n}\n"})})}),(0,r.jsx)(l.c,{value:"template.json",label:"template.json",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n    "$schema": "http://json.schemastore.org/template",\n    "author": "deverqqqq",\n    "classifications": [\n        "Common",\n        "Code"\n    ],\n    "identity": "ExampleTemplate.StringExtensions",\n    "name": "Example templates: string extensions",\n    "shortName": "stringext",\n    "tags": {\n        "language": "C#",\n        "type": "item"\n    },\n    "symbols": {\n        "ClassName": {\n            "type": "parameter",\n            "description": "The name of the code file and class.",\n            "datatype": "text",\n            "replaces": "StringExtensions",\n            "fileRename": "StringExtensions",\n            "defaultValue": "StringExtensions"\n        }\n    }\n}\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u5b89\u88dd",children:"\u5b89\u88dd"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:"showLineNumbers",children:"# \u5c07 cursor \u79fb\u52d5\u5230\u7bc4\u672c\u8cc7\u6599\u593e\ncd /your-template-path\n\n# \u5b89\u88dd\ndotnet new install .\\\n\n# \u67e5\u770b\u53ef\u4ee5\u7528\u7684\u7bc4\u672c\ndotnet new list\n\n# \u67e5\u8a62\u5df2\u5b89\u88dd\u7684\u9805\u76ee\ndotnet new uninstall\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"\u5b89\u88dd\u5f8c\u5982\u679c\u8abf\u6574\u7bc4\u672c\u7684\u5167\u5bb9\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u79fb\u9664\u5f8c\u518d\u5b89\u88dd\uff0c\u56e0\u70ba\u672c\u5730\u5b89\u88dd\u662f\u7528\u8cc7\u6599\u593e\u5167\u7684\u6a94\u6848\u4f5c\u70ba\u7bc4\u672c\u7684\u4f86\u6e90\u3002"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:n(4).c+"",width:"1730",height:"1361"}),"\n",(0,r.jsx)(t.img,{src:n(2724).c+"",width:"1730",height:"368"})]}),"\n",(0,r.jsx)(t.h3,{id:"\u8a66\u8457\u7528\u770b\u770b",children:"\u8a66\u8457\u7528\u770b\u770b"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u65b0\u4f5c\u597d\u7684\u7bc4\u672c\u4f86\u5efa\u7acb"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u4e0d\u4f7f\u7528\u53c3\u6578"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:"showLineNumbers",children:"dotnet new stringext\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(6388).c+"",width:"2109",height:"820"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u67e5\u8a62\u53ef\u4f7f\u7528\u53c3\u6578"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:"showLineNumbers",children:"dotnet new stringext -?\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(2932).c+"",width:"1730",height:"1361"})}),"\n",(0,r.jsx)(t.p,{children:"\u53ef\u4ee5\u770b\u5230\u9019\u908a\u900f\u904e\u5b9a\u7fa9\u5728 template.json \u5167\u7684 ClassName\uff0c\u5be6\u73fe\u4e86\u66ff\u63db\u985e\u5225\u540d\u7a31\u7684\u529f\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u79fb\u9664",children:"\u79fb\u9664"}),"\n",(0,r.jsx)(t.p,{children:"\u7167\u8457\u756b\u9762\u7684\u547d\u4ee4\u57f7\u884c\u5373\u53ef"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:"showLineNumbers",children:"# 1. \u5217\u51fa\u5df2\u5b89\u88dd\u9805\u76ee\ndotnet new uninstall\n\n# 2. \u9078\u53d6\u8981\u79fb\u9664\u7684\u547d\u4ee4\u4e26\u57f7\u884c\n# dotnet new uninstall ....\n"})}),"\n",(0,r.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/zh-tw/dotnet/core/tutorials/cli-templates-create-item-template",children:"MSLearn"})})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>l});n(1504);var r=n(5456);const a={tabItem:"tabItem_Ymn6"};var s=n(7624);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,l),hidden:n,children:t})}},1268:(e,t,n)=>{n.d(t,{c:()=>y});var r=n(1504),a=n(5456),s=n(3943),l=n(5592),i=n(5288),o=n(632),c=n(7128),u=n(3216);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.Uz)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._M)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.IN)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.c)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(7624);function j(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.MV)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.c)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function y(e){const t=(0,b.c)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},4:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/2024-02-11-23-08-01-e91f05614fa01ff7341c30aca91b874e.png"},2724:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/2024-02-11-23-11-17-228bf54a0bd29626f5728dadaf6db7a0.png"},6388:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/2024-02-11-23-34-46-eae93be5804e4f6e6b49e4d1bef1979d.png"},2932:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/2024-02-11-23-37-46-5cdd0434070bf8760e8fc8c5b15c2324.png"},2172:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>l});var r=n(1504);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);