"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6088],{7140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(7624),r=t(2172),s=t(1268),l=t(5388);const i={title:"\u9a57\u8b49\u4f8b\u5916",sidebar_label:"\u9a57\u8b49\u4f8b\u5916",keywords:["unit test","\u55ae\u5143\u6e2c\u8a66"],description:"\u9a57\u8b49\u4f8b\u5916",sidebar_position:2,tags:["\u55ae\u5143\u6e2c\u8a66","\u9a57\u8b49"]},o=void 0,u={id:"dotnet/test/unit/assert/\u4f8b\u5916",title:"\u9a57\u8b49\u4f8b\u5916",description:"\u9a57\u8b49\u4f8b\u5916",source:"@site/docs/dotnet/test/unit/assert/02_\u4f8b\u5916.md",sourceDirName:"dotnet/test/unit/assert",slug:"/dotnet/test/unit/assert/\u4f8b\u5916",permalink:"/dotnet/test/unit/assert/\u4f8b\u5916",draft:!1,unlisted:!1,editUrl:"https://github.com/deverqqqq/DevElixir/tree/main/docs/dotnet/test/unit/assert/02_\u4f8b\u5916.md",tags:[{label:"\u55ae\u5143\u6e2c\u8a66",permalink:"/tags/\u55ae\u5143\u6e2c\u8a66"},{label:"\u9a57\u8b49",permalink:"/tags/\u9a57\u8b49"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u9a57\u8b49\u4f8b\u5916",sidebar_label:"\u9a57\u8b49\u4f8b\u5916",keywords:["unit test","\u55ae\u5143\u6e2c\u8a66"],description:"\u9a57\u8b49\u4f8b\u5916",sidebar_position:2,tags:["\u55ae\u5143\u6e2c\u8a66","\u9a57\u8b49"]},sidebar:"dotnetSidebar",previous:{title:"\u9a57\u8b49\u56de\u50b3\u503c",permalink:"/dotnet/test/unit/assert/\u56de\u50b3\u503c"},next:{title:"\u9a57\u8b49\u72c0\u614b\u6539\u8b8a",permalink:"/dotnet/test/unit/assert/\u72c0\u614b\u6539\u8b8a"}},c={},d=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:2},{value:"\u6e2c\u8a66\u60c5\u5883",id:"\u6e2c\u8a66\u60c5\u5883",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"\u6848\u4f8b\u53c3\u8003",id:"\u6848\u4f8b\u53c3\u8003",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,a.jsx)(n.p,{children:"\u9a57\u8b49\u529f\u80fd\u62cb\u51fa\u7684\u4f8b\u5916\u72c0\u6cc1\u8207\u9810\u671f\u76f8\u7b26\u5408\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u6d41\u7a0b",children:"\u6d41\u7a0b"}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TD;\n    A[\u555f\u52d5\u55ae\u5143\u6e2c\u8a66] --\x3e B[\u547c\u53eb\u53d7\u6e2c\u529f\u80fd];\n    B --\x3e C[\u529f\u80fd\u57f7\u884c\u6642\u61c9\u62cb\u51faException];\n    C --\x3e D{Catch};\n    D --\x3e|\u767c\u751f\u4f8b\u5916\u72c0\u6cc1| E[\u9a57\u8b49\u4f8b\u5916\u72c0\u6cc1\u7684\u985e\u578b];\n    E --\x3e|\u7b26\u5408| F[Pass];\n    E --\x3e|\u4e0d\u7b26\u5408| G[Fail];\n    D --\x3e|\u6c92\u6709\u4f8b\u5916\u72c0\u6cc1| H[Fail];\n    F --\x3e I[\u6e2c\u8a66\u7d50\u675f];\n    G --\x3e I;\n    H --\x3e I;"}),"\n",(0,a.jsx)(n.h2,{id:"\u6e2c\u8a66\u60c5\u5883",children:"\u6e2c\u8a66\u60c5\u5883"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u6709\u4e00\u500b\u985e\u5225 LogAnalyzer\uff0c\u9019\u985e\u5225\u63d0\u4f9b Log \u76f8\u95dc\u7684\u529f\u80fd\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u6709\u4e00\u500b\u65b9\u6cd5",(0,a.jsx)(n.code,{children:"IsValidLogFileName"}),"\uff0c\u53ef\u4ee5\u7528\u4f86\u6aa2\u67e5 log \u6a94\u6848\u7684\u9644\u6a94\u540d\u662f\u7b26\u5408\u898f\u7bc4\uff0c\u4e14\u4e0d\u5340\u5206\u5927\u5c0f\u5beb\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u7576\u6a94\u540d\u70ba\u7a7a\u6642\uff0c\u9700\u8981\u62cb\u51fa Exception: ",(0,a.jsx)(n.code,{children:"ArgumentException"})]}),"\n",(0,a.jsx)(n.li,{children:"\u9700\u8981\u64b0\u5beb\u55ae\u5143\u6e2c\u8a66\u9a57\u8b49\u9019\u500b\u65b9\u6cd5\u7684\u6b63\u78ba\u8207\u5426\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["\u4e0b\u9762\u7684\u7bc4\u4f8b\u5167\u5bb9\u90fd\u5f88\u55ae\u7d14\uff0c\u4e0d\u904e\u4e0d\u540c\u6e2c\u8a66\u6846\u67b6\u7684\u4f5c\u6cd5\u6216\u662f\u529f\u80fd\u4e0a\u6703\u7565\u6709\u4e0d\u540c\uff0c\u5beb\u6cd5\u7121\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002",(0,a.jsx)(n.br,{}),"\n","\u5982\u679c\u9700\u8981\u642d\u914d\u7df4\u7fd2\uff0c\u5efa\u8b70\u7406\u89e3\u5f8c\uff0c\u4f9d\u76ee\u524d\u81ea\u5df1\u6b63\u5728\u4f7f\u7528/\u5b78\u7fd2\u7684\u5de5\u5177\u5617\u8a66\u770b\u770b\u3002"]})}),"\n",(0,a.jsx)(n.h2,{id:"\u7bc4\u4f8b",children:"\u7bc4\u4f8b"}),"\n",(0,a.jsxs)(s.c,{children:[(0,a.jsx)(l.c,{value:"LogAnalyzer",label:"LogAnalyzer",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:"showLineNumbers",children:'namespace Lab.Test.Unit.LogNotification;\n\npublic class LogAnalyzer\n{\n    public bool IsValidLogFileName(string fileName)\n    {\n        // highlight-start\n        if (string.IsNullOrEmpty(fileName))\n        {\n            throw new ArgumentException("fileName has to be provided");\n        }\n        // highlight-end\n\n        var isValid = fileName.EndsWith(".SLF", StringComparison.CurrentCultureIgnoreCase);\n\n        return isValid;\n    }\n}\n'})})}),(0,a.jsx)(l.c,{value:"LogAnalyzerTests",label:"LogAnalyzerTests",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:"showLineNumbers",children:'namespace Lab.Test.Unit.LogNotificationTests;\n\n[UnitTest("LogAnalyzer")]\npublic class LogAnalyzerTests\n{\n    private readonly LogAnalyzer _sut = new LogAnalyzer();\n\n    // highlight-start\n    [Fact(DisplayName = "IsValidLogFileName_\u6a94\u540d\u70ba\u7a7a_Throws")]\n    public void IsValidLogFileName_EmptyFileName_Throws()\n    {\n        // arrange\n        // var sut = new LogAnalyzer();\n\n        // act\n        Action act = () => this._sut.IsValidLogFileName(null);\n\n        // assert\n        act.Should().Throw<ArgumentException>();\n    }\n    // highlight-end\n\n    [Fact(DisplayName = "IsValidLogFileName_\u9644\u6a94\u540d\u6709\u8aa4_\u56de\u50b3 False")]\n    public void IsValidLogFileName_BadExtension_ReturnFalse()\n    {\n        // arrange\n        // var sut = new LogAnalyzer();\n\n        // act\n        var expected = this._sut.IsValidLogFileName("filewithbadextension.foo");\n\n        // assert\n        expected.Should().BeFalse();\n    }\n\n    [Theory(DisplayName = "IsValidLogFileName_\u9644\u6a94\u540d\u6b63\u78ba\u4e14\u4e0d\u5340\u5206\u5927\u5c0f\u5beb_\u56de\u50b3 True")]\n    [InlineData("filewithgoodextension.slf")]\n    [InlineData("filewithgoodextension.SLF")]\n    public void IsValidLogFileName_GoodExtensionLowerCase_ReturnTrue(\n        string fileNmae)\n    {\n        // arrange\n        // var sut = new LogAnalyzer();\n\n        // act\n        var expected = this._sut.IsValidLogFileName(fileNmae);\n\n        // assert\n        expected.Should().BeTrue();\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u6848\u4f8b\u53c3\u8003",children:"\u6848\u4f8b\u53c3\u8003"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://www.tenlong.com.tw/products/9789864342471?list_name=c-unit-test",children:"\u55ae\u5143\u6e2c\u8a66\u7684\u85dd\u8853"})})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5388:(e,n,t)=>{t.d(n,{c:()=>l});t(1504);var a=t(5456);const r={tabItem:"tabItem_Ymn6"};var s=t(7624);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.c)(r.tabItem,l),hidden:t,children:n})}},1268:(e,n,t)=>{t.d(n,{c:()=>N});var a=t(1504),r=t(5456),s=t(3943),l=t(5592),i=t(5288),o=t(632),u=t(7128),c=t(1148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.Uz)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._M)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.IN)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=u??g;return m({value:e,tabValues:s})?e:null})();(0,i.c)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(3664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(7624);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.MV)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==a&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.c)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.c)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function N(e){const n=(0,b.c)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>l});var a=t(1504);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);