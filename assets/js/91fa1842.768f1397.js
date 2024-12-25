"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4955],{89517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"dotnet/csharp/overview","title":"C# Overview","description":"C#","source":"@site/docs/dotnet/csharp/00_overview.md","sourceDirName":"dotnet/csharp","slug":"/dotnet/csharp/overview","permalink":"/dotnet/csharp/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/dotnet/csharp/00_overview.md","tags":[{"inline":true,"label":"dotnet","permalink":"/tags/dotnet"},{"inline":true,"label":"C#","permalink":"/tags/c"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"C# Overview","sidebar_label":"Overview","keywords":["dotnet","C#","csharp"],"description":"C#","sidebar_position":1,"tags":["dotnet","C#"]},"sidebar":"techSidebar","previous":{"title":"C#","permalink":"/category/c-1"},"next":{"title":"Test","permalink":"/category/test-1"}}');var i=t(74848),s=t(28453);const o={title:"C# Overview",sidebar_label:"Overview",keywords:["dotnet","C#","csharp"],description:"C#",sidebar_position:1,tags:["dotnet","C#"]},c=void 0,l={},a=[{value:"C# \u662f\u4ec0\u9ebc\uff1f",id:"c-\u662f\u4ec0\u9ebc",level:2},{value:"\u6b77\u53f2\u80cc\u666f",id:"\u6b77\u53f2\u80cc\u666f",level:3},{value:"\u8a2d\u8a08\u7406\u5ff5",id:"\u8a2d\u8a08\u7406\u5ff5",level:3},{value:"C# \u7684\u767c\u5c55",id:"c-\u7684\u767c\u5c55",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"c-\u662f\u4ec0\u9ebc",children:"C# \u662f\u4ec0\u9ebc\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"C#(C-sharp) \u662f\u4e00\u7a2e\u73fe\u4ee3\u7684\u3001\u901a\u7528\u578b\u7684\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u7531\u5fae\u8edf\u63a8\u51fa\u3002C# \u8a9e\u6cd5\u8207 C \u8a9e\u8a00\u5bb6\u65cf (\u5982 C\u3001C++ \u548c Java) \u76f8\u4f3c\u3002C# \u88ab\u8a2d\u8a08\u7528\u4f86\u5275\u5efa\u5404\u7a2e\u61c9\u7528\uff0c\u5305\u62ec\u684c\u9762\u7aef\u61c9\u7528\u3001Web \u670d\u52d9\u3001\u884c\u52d5\u61c9\u7528\u3001\u96f2\u7aef\u670d\u52d9\u3001\u904a\u6232\u958b\u767c...\u7b49\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b77\u53f2\u80cc\u666f",children:"\u6b77\u53f2\u80cc\u666f"}),"\n",(0,i.jsx)(n.p,{children:"C# \u8a9e\u8a00\u7531 Anders Hejlsberg \u9818\u5c0e\u7684\u5718\u968a\u958b\u767c\uff0c\u4e26\u4e14\u662f .NET \u6846\u67b6\u7684\u4e00\u90e8\u5206\u3002\u9019\u4f7f\u5f97 C# \u6210\u70ba .NET \u5e73\u53f0\u4e0a\u9996\u9078\u7684\u8a9e\u8a00\uff0c\u80fd\u5920\u904b\u884c\u5728 Windows \u64cd\u4f5c\u7cfb\u7d71\u548c\u8de8\u5e73\u53f0\u74b0\u5883\u4e0a\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8a2d\u8a08\u7406\u5ff5",children:"\u8a2d\u8a08\u7406\u5ff5"}),"\n",(0,i.jsx)(n.p,{children:"C# \u7684\u4e3b\u8981\u76ee\u6a19\u4e4b\u4e00\u662f\u63d0\u4f9b\u4e00\u7a2e\u5728\u751f\u7522\u529b\u548c\u6548\u80fd\u4e4b\u9593\u53d6\u5f97\u5e73\u8861\u7684\u8a9e\u8a00\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f37\u578b\u5225\uff1a\u610f\u5473\u8457\u8b8a\u6578\u7684\u578b\u5225\u5728\u7de8\u8b6f\u6642\u5c31\u6703\u88ab\u6aa2\u67e5\uff0c\u6e1b\u5c11\u4e86\u904b\u884c\u6642\u932f\u8aa4\u7684\u53ef\u80fd\u3002\u540c\u6642\uff0c\u4e5f\u652f\u6301\u96b1\u5f0f\u985e\u578b\u63a8\u65b7\u3002\u901a\u904e var \u95dc\u9375\u5b57\u53ef\u4ee5\u8b93\u7de8\u8b6f\u5668\u81ea\u884c\u63a8\u65b7\u8b8a\u91cf\u985e\u578b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"int x = 10;  // \u660e\u78ba\u985e\u578b\nvar y = 20;  // \u7de8\u8b6f\u5668\u81ea\u52d5\u63a8\u65b7\u985e\u578b\u70ba int\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7269\u4ef6\u5c0e\u5411 (OOP)\uff1a\u63d0\u9ad8\u958b\u767c\u7684\u53ef\u64f4\u5c55\u6027\u548c\u53ef\u91cd\u7528\u6027\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7c21\u6f54\u548c\u9ad8\u6548\uff1a\u5e6b\u52a9\u958b\u767c\u8005\u66f4\u5feb\u5730\u64b0\u5beb\u6548\u80fd\u597d\u7684\u7a0b\u5f0f\u78bc\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u975e\u540c\u6b65\u8a9e\u6cd5\uff1a\u900f\u904e async \u548c await\uff0c\u53ef\u4ee5\u7c21\u55ae\u4e14\u65b9\u4fbf\u7684\u64b0\u5beb\u51fa\u975e\u540c\u6b65\u7a0b\u5f0f\uff0c\u5c0d\u65bc\u8655\u7406\u5927\u91cf I/O \u6216\u662f\u7db2\u8def\u9700\u6c42\u7684\u61c9\u7528\uff0c\u6548\u80fd\u6703\u66f4\u597d\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public async Task<string> GetDataAsync()\n{\n    HttpClient client = new HttpClient();\n    string result = await client.GetStringAsync("http://example.com");\n    return result;\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GC\uff1a\u4e0d\u9700\u8981\u624b\u52d5\u7ba1\u7406\u8a18\u61b6\u9ad4\u5206\u914d\u548c\u91cb\u653e\uff0c\u964d\u4f4e\u958b\u767c\u7684\u7e41\u8907\u548c\u63d0\u9ad8\u7a0b\u5f0f\u7684\u5b89\u5168\u6027\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"c-\u7684\u767c\u5c55",children:"C# \u7684\u767c\u5c55"}),"\n",(0,i.jsx)(n.p,{children:"\u96a8\u8457 .NET \u767c\u5c55\uff0cC#\u5df2\u7d93\u6210\u70ba\u4e00\u500b\u5f37\u5927\u7684\u8de8\u5e73\u53f0\u8a9e\u8a00\uff0c\u4e14\u5718\u968a\u4ecd\u4e0d\u65b7\u7684\u5c0d .NET \u548c C# \u512a\u5316\u6539\u9032 (\u5305\u542b\u5404\u7a2e\u5f9e\u793e\u7fa4\u6536\u5230\u7684\u56de\u994b)\uff0c\u6bcf\u5e74\u90fd\u6703\u6709\u65b0\u7684\u7248\u672c\u91cb\u51fa\u3002\u5c0d\u65bc\u5927\u90e8\u5206\u7684\u958b\u767c\u8005\u4f86\u8aaa\uff0c\u53ea\u8981\u5347\u7d1a.NET\uff0c\u5c31\u53ef\u4ee5\u514d\u8cbb\u7372\u5f97\u6548\u80fd\u63d0\u5347\uff0c\u6574\u9ad4\u7684\u767c\u5c55\u662f\u5f88\u6d3b\u8e8d\u7684\u3002"}),"\n",(0,i.jsx)(n.admonition,{title:".NET dev blog",type:"info",children:(0,i.jsxs)(n.p,{children:["\u5b98\u65b9\u90e8\u843d\u683c\u6bcf\u5e74\u90fd\u662f\u91cb\u51fa\u7248\u672c\u7684\u4e3b\u8981\u6539\u9032\u5167\u5bb9\uff0c\u5167\u5bb9\u591a\u5230\u751a\u81f3\u88ab\u6232\u7a31\u70ba\u700f\u89bd\u5668\u7684\u6548\u80fd\u6e2c\u8a66\ud83d\ude02",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-5/",children:".NET 5"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://devblogs.microsoft.com/dotnet/string-interpolation-in-c-10-and-net-6/",children:".NET 6"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://devblogs.microsoft.com/dotnet/performance_improvements_in_net_7/",children:".NET 7"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/",children:".NET 8"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-9/",children:".NET 9"})]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);