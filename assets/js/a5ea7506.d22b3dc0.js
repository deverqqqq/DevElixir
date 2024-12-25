"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3169],{24222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"dotnet/test/unit/\u5047\u7269\u4ef6","title":"\u5047\u7269\u4ef6","description":"\u5047\u7269\u4ef6","source":"@site/docs/dotnet/test/unit/05_\u5047\u7269\u4ef6.md","sourceDirName":"dotnet/test/unit","slug":"/dotnet/test/unit/\u5047\u7269\u4ef6","permalink":"/dotnet/test/unit/\u5047\u7269\u4ef6","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/dotnet/test/unit/05_\u5047\u7269\u4ef6.md","tags":[{"inline":true,"label":"\u55ae\u5143\u6e2c\u8a66","permalink":"/tags/\u55ae\u5143\u6e2c\u8a66"}],"version":"current","sidebarPosition":5,"frontMatter":{"title":"\u5047\u7269\u4ef6","sidebar_label":"\u5047\u7269\u4ef6","keywords":["unit test","\u55ae\u5143\u6e2c\u8a66"],"description":"\u5047\u7269\u4ef6","sidebar_position":5,"tags":["\u55ae\u5143\u6e2c\u8a66"]},"sidebar":"techSidebar","previous":{"title":"\u9a57\u8b49\u4e92\u52d5","permalink":"/dotnet/test/unit/assert/\u4e92\u52d5"},"next":{"title":"\u6e2c\u8a66\u5de5\u5177","permalink":"/category/\u6e2c\u8a66\u5de5\u5177-1"}}');var i=t(74848),r=t(28453);const l={title:"\u5047\u7269\u4ef6",sidebar_label:"\u5047\u7269\u4ef6",keywords:["unit test","\u55ae\u5143\u6e2c\u8a66"],description:"\u5047\u7269\u4ef6",sidebar_position:5,tags:["\u55ae\u5143\u6e2c\u8a66"]},c=void 0,d={},o=[{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:2},{value:"\u70ba\u4f55\u9700\u8981\u5047\u7269\u4ef6",id:"\u70ba\u4f55\u9700\u8981\u5047\u7269\u4ef6",level:2},{value:"\u6a21\u64ec\u7269\u4ef6 (Mock)",id:"\u6a21\u64ec\u7269\u4ef6-mock",level:3},{value:"\u865b\u8a2d\u5e38\u5f0f (Stub)",id:"\u865b\u8a2d\u5e38\u5f0f-stub",level:3},{value:"\u5982\u4f55 \u505a\u51fa/\u4f7f\u7528 \u5047\u7269\u4ef6",id:"\u5982\u4f55-\u505a\u51fa\u4f7f\u7528-\u5047\u7269\u4ef6",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5047\u7269\u4ef6\u662f\u901a\u7528\u7684\u540d\u8a5e\uff0c\u53ef\u4ee5\u62ff\u4f86\u63cf\u9011\u4e00\u500b\u865b\u8a2d\u5e38\u5f0f\u7269\u4ef6\u6216\u6a21\u64ec\u7269\u4ef6\u3002",(0,i.jsx)(n.br,{}),"\n","\u4e00\u500b\u5047\u7269\u4ef6\uff0c\u7a76\u7adf\u662f\u865b\u8a2d\u5e38\u5f0f\u7269\u4ef6\u9084\u662f\u6a21\u64ec\u7269\u4ef6\uff0c\u53d6\u6c7a\u65bc\u5b83\u5728\u76ee\u524d\u6e2c\u8a66\u88e1\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",(0,i.jsx)(n.br,{}),"\n","\u5982\u679c\u9019\u500b\u5047\u7269\u4ef6\u662f\u7528\u4f86\u505a\u9a57\u8b49\u7684\uff0c\u90a3\u5b83\u5c31\u662f\u6a21\u64ec\u7269\u4ef6\u3002",(0,i.jsx)(n.br,{}),"\n","\u53cd\u4e4b\uff0c\u5c31\u662f\u865b\u8a2d\u5e38\u5f0f\u7269\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u70ba\u4f55\u9700\u8981\u5047\u7269\u4ef6",children:"\u70ba\u4f55\u9700\u8981\u5047\u7269\u4ef6"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u64b0\u5beb\u55ae\u5143\u6e2c\u8a66\u7684\u6642\u5019\uff0c\u7576\u60c5\u5883\u9700\u8981\u9a57\u8b49\u7684\u662f\u5f85\u6e2c\u529f\u80fd\u6709\u547c\u53eb\u5230\u5916\u90e8\u7684\u670d\u52d9\uff0c\u5982\u679c\u4e0d\u900f\u904e\u4e00\u500b\u5047\u7269\u4ef6\uff0c\u90a3\u5c31\u5fc5\u9808\u8981\u628a\u6240\u6709\u76f8\u95dc\u7684\u4f9d\u8cf4\u670d\u52d9\u90fd\u555f\u52d5\u8d77\u4f86\uff0c\u6703\u8b93\u55ae\u5143\u6e2c\u8a66\u5f88\u8907\u96dc\uff0c\u800c\u4e14\u4e5f\u6c92\u6709\u8fa6\u6cd5\u6eff\u8db3 ",(0,i.jsx)(n.code,{children:"Isolated"})," \u9019\u500b\u7279\u9ede\u3002",(0,i.jsx)(n.a,{href:"/dotnet/test/unit/%E5%84%AA%E7%A7%80%E7%9A%84%E5%96%AE%E5%85%83%E6%B8%AC%E8%A9%A6",children:"\u53c3\u8003"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6a21\u64ec\u7269\u4ef6-mock",children:"\u6a21\u64ec\u7269\u4ef6 (Mock)"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c",(0,i.jsx)(n.a,{href:"/dotnet/test/unit/assert/%E4%BA%92%E5%8B%95",children:"\u9a57\u8b49\u4e92\u52d5"}),"\uff0c\u6211\u53ea\u662f\u8981\u7c21\u55ae\u9a57\u8b49 ",(0,i.jsx)(n.strong,{children:"[\u547c\u53eb\u5916\u90e8 WebService]"})," \u7684\u9019\u500b\u52d5\u4f5c\u6709\u57f7\u884c\uff0c\u81f3\u65bc\u5be6\u969b\u4e0a\u9019\u500b\u670d\u52d9\u5b58\u4e0d\u5b58\u5728\uff0c\u4e26\u4e0d\u662f\u9019\u500b\u6e2c\u8a66\u8981\u95dc\u5fc3\u7684\u554f\u984c\u3002",(0,i.jsx)(n.br,{}),"\n","\u6240\u4ee5\uff0c\u6211\u5011\u900f\u904e\u4e00\u500b\u5047\u7269\u4ef6\uff0c\u5047\u88dd\u9019\u500b\u670d\u52d9\u662f\u5b58\u5728\u7684\uff0c\u4e26\u900f\u904e\u9019\u500b\u6211\u5011\u81ea\u5df1\u505a\u51fa\u4f86\u4e14\u80fd\u5920\u5b8c\u5168\u63a7\u5236\u7684\u7269\u4ef6\uff0c\u53bb\u78ba\u8a8d\u9019\u500b\u7269\u4ef6\u7684\u52d5\u4f5c\u662f\u5426\u6709\u7b26\u5408\u6211\u5011\u7684\u9810\u671f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(96090).A+"",width:"1000",height:"490"})}),"\n",(0,i.jsx)(n.h3,{id:"\u865b\u8a2d\u5e38\u5f0f-stub",children:"\u865b\u8a2d\u5e38\u5f0f (Stub)"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u7576\u9a57\u8b49\u7684\u7d50\u679c\u8207\u5916\u90e8\u670d\u52d9\u7121\u95dc\uff0c\u53ea\u662f\u9700\u8981\u9019\u500b\u5916\u90e8\u670d\u52d9\u56de\u50b3\u7684\u8cc7\u6599\uff0c\u9a57\u8b49\u5f8c\u9762\u7684\u908f\u8f2f\u3002\u81f3\u65bc\u9019\u500b\u5916\u90e8\u670d\u52d9\uff0c\u80fd\u4e0d\u80fd\u5920\u6210\u529f\u904b\u884c\uff0c\u4e26\u4e0d\u662f\u9019\u500b\u55ae\u5143\u6e2c\u8a66\u9700\u8981\u95dc\u5fc3\u7684\u554f\u984c\u3002",(0,i.jsx)(n.br,{}),"\n","\u6240\u4ee5\uff0c\u6211\u5011\u900f\u904e\u4e00\u500b\u5047\u7269\u4ef6\uff0c\u5047\u88dd\u9019\u500b\u670d\u52d9\u662f\u5b58\u5728\u7684\uff0c\u4e26\u900f\u904e\u9019\u500b\u6211\u5011\u81ea\u5df1\u505a\u51fa\u4f86\u4e14\u80fd\u5920\u5b8c\u5168\u63a7\u5236\u7684\u7269\u4ef6\uff0c\u76f4\u63a5\u56de\u50b3\u6211\u5011\u9700\u8981\u7684\u8cc7\u6599\uff0c\u9a57\u8b49\u9700\u8981\u9a57\u8b49\u7684\u529f\u80fd\u6d41\u7a0b\u5373\u53ef\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u60f3\u770b\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u5047\u8a2d\u6211\u5011\u8981\u6e2c\u8a66",(0,i.jsx)(n.code,{children:"GetMessage"}),"\u7684\u529f\u80fd\uff0c\u53ea\u8981\u8056\u8a95\u7bc0\u7576\u5929\u57f7\u884c\u8a72\u529f\u80fd\uff0c\u8981\u56de\u50b3",(0,i.jsx)(n.code,{children:"Merry Christmas"}),"\uff0c\u4f46\u662f\u56e0\u70ba\u76f4\u63a5\u4f7f\u7528\u4e86 DateTime\uff0c\u5982\u679c\u4e0d\u628a\u9019\u500b\u7269\u4ef6\u6539\u6210\u865b\u8a2d\u5e38\u5f0f\uff0c\u662f\u4e0d\u662f\u53ea\u80fd\u8abf\u6574\u7cfb\u7d71\u6642\u9593\u624d\u6709\u8fa6\u6cd5\u9a57\u8b49\uff1f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:"showLineNumbers",children:'public class Target\n{\n    public string GetMessage()\n    {\n        var dt = DateTime.Now;\n        if (dt.Month == 12 && dt.Day == 25)\n        {\n            return "Merry Christmas";\n        }\n\n        return string.Empty;\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(93627).A+"",width:"1002",height:"496"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55-\u505a\u51fa\u4f7f\u7528-\u5047\u7269\u4ef6",children:"\u5982\u4f55 \u505a\u51fa/\u4f7f\u7528 \u5047\u7269\u4ef6"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6a21\u64ec\u6846\u67b6\uff1a\u6709\u5f88\u591a\u958b\u6e90\u597d\u7528\u7684\u6a21\u64ec\u6846\u67b6\u53ef\u4ee5\u4f7f\u7528\uff0c\u4e0d\u7528\u81ea\u5df1\u624b\u523b\uff0c\u8f15\u9b06\u5beb\u610f\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NSubstitute"}),"\n",(0,i.jsx)(n.li,{children:"Moq"}),"\n",(0,i.jsx)(n.li,{children:"FakeItEasy"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528\uff1a\u900f\u904e\u4ecb\u9762\u9694\u96e2 + \u6ce8\u5165 (\u5c6c\u6027\uff0c\u5efa\u69cb\u5f0f)","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4efb\u4f55\u7269\u4ef6\u5c0e\u5411\u7684\u554f\u984c\uff0c\u90fd\u53ef\u4ee5\u900f\u904e\u589e\u52a0\u4e00\u5c64\u4e2d\u4ecb\u5c64\u4f86\u89e3\u6c7a\u3002",(0,i.jsx)(n.br,{}),"\n","\u900f\u904e\u9019\u500b\u4e2d\u4ecb\u5c64\u628a\u7269\u4ef6\u50b3\u5165\uff0c\u540c\u6642\u9019\u500b\u4e2d\u4ecb\u5c64\u4e5f\u63d0\u4f9b\u4e86\u64f4\u5c55\u7684\u80fd\u529b\uff0c\u8b93\u6211\u5011\u5f88\u65b9\u4fbf\u5730\u628a\u5047\u7269\u4ef6\u50b3\u5165\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u865b\u8a2d\u5e38\u5f0f (Stub) \u548c\u6a21\u64ec\u7269\u4ef6 (Mock)\uff0c\u90fd\u662f\u5047\u7269\u4ef6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4e00\u500b\u6e2c\u8a66\u6848\u4f8b\u53ea\u6e2c\u8a66\u4e00\u7a2e\u60c5\u5883\uff0c\u6240\u4ee5\u4e00\u500b\u6e2c\u8a66\u6848\u4f8b\u6700\u591a\u53ea\u6709\u4e00\u500b\u6a21\u64ec\u7269\u4ef6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u900f\u904e\u5b8c\u5168\u53ef\u63a7\u7684\u5047\u7269\u4ef6\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u66f4\u8f15\u9b06\u5730\u53bb\u9a57\u8b49\u6211\u5011\u9700\u8981\u9a57\u8b49\u60c5\u5883\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8981\u628a\u5047\u7269\u4ef6\u50b3\u5165\u53d7\u6e2c\u7269\u4ef6\u5167\uff0c\u610f\u5473\u8457\u6211\u5011\u7684\u7a0b\u5f0f\u5fc5\u9808\u6709\u53ef\u6e2c\u8a66\u6027\uff0c\u9019\u540c\u6642\u4e5f\u80fd\u63d0\u4f9b\u6211\u5011\u4e00\u500b\u6aa2\u67e5\u8a2d\u8a08\u7684\u6a5f\u6703\uff0c\u5f37\u8feb\u6211\u5011\u53bb\u6aa2\u8996\u81ea\u5df1\u7684\u8a2d\u8a08\u662f\u5426\u8db3\u5920\u5f48\u6027\u9748\u6d3b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.tenlong.com.tw/products/9789864342471?list_name=c-unit-test",children:"\u55ae\u5143\u6e2c\u8a66\u7684\u85dd\u8853"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},93627:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-02-17-14-33-15-1354ec2ee960a05959be46f8e75c6d7e.png"},96090:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2024-02-17-14-33-50-7f815876d863aeef6927ea71ef227c86.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);