"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3020],{6208:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"open-telemetry/intro","title":"\u63a2\u7d22 OpenTelemetry - \u5206\u5e03\u5f0f\u8ffd\u8e2a\u8207\u89c0\u6e2c","description":"OpenTelemetry","source":"@site/docs/open-telemetry/00_intro.md","sourceDirName":"open-telemetry","slug":"/open-telemetry/intro","permalink":"/open-telemetry/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/open-telemetry/00_intro.md","tags":[{"inline":true,"label":"OpenTelemetry","permalink":"/tags/open-telemetry"}],"version":"current","sidebarPosition":0,"frontMatter":{"title":"\u63a2\u7d22 OpenTelemetry - \u5206\u5e03\u5f0f\u8ffd\u8e2a\u8207\u89c0\u6e2c","sidebar_label":"\u63a2\u7d22","keywords":["OpenTelemetry"],"description":"OpenTelemetry","sidebar_position":0,"tags":["OpenTelemetry"]},"sidebar":"techSidebar","previous":{"title":"Concept","permalink":"/mq/rabbitmq/concept"}}');var r=i(74848),t=i(28453);const l={title:"\u63a2\u7d22 OpenTelemetry - \u5206\u5e03\u5f0f\u8ffd\u8e2a\u8207\u89c0\u6e2c",sidebar_label:"\u63a2\u7d22",keywords:["OpenTelemetry"],description:"OpenTelemetry",sidebar_position:0,tags:["OpenTelemetry"]},c=void 0,d={},o=[{value:"\u9059\u6e2c\u7684\u91cd\u8981\u6027\u548c\u57fa\u672c\u6982\u5ff5",id:"\u9059\u6e2c\u7684\u91cd\u8981\u6027\u548c\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u80cc\u666f\u8207\u6b77\u53f2",id:"\u80cc\u666f\u8207\u6b77\u53f2",level:3},{value:"\u67b6\u69cb",id:"\u67b6\u69cb",level:3},{value:"\u4e09\u5927\u652f\u67f1",id:"\u4e09\u5927\u652f\u67f1",level:2},{value:"Tracing (\u5206\u4f48\u5f0f\u8ffd\u8e64)",id:"tracing-\u5206\u4f48\u5f0f\u8ffd\u8e64",level:3},{value:"Metrics (\u6307\u6a19)",id:"metrics-\u6307\u6a19",level:3},{value:"Logs (\u65e5\u8a8c)",id:"logs-\u65e5\u8a8c",level:3},{value:"\u76f8\u8f14\u76f8\u6210",id:"\u76f8\u8f14\u76f8\u6210",level:2},{value:"Tracing + Metrics",id:"tracing--metrics",level:3},{value:"Tracing + Logs",id:"tracing--logs",level:3},{value:"Metrics + Logs",id:"metrics--logs",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u9059\u6e2c\u7684\u91cd\u8981\u6027\u548c\u57fa\u672c\u6982\u5ff5",children:"\u9059\u6e2c\u7684\u91cd\u8981\u6027\u548c\u57fa\u672c\u6982\u5ff5"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u55ae\u9ad4\u67b6\u69cb\u4e2d\uff0c\u8ffd\u8e64\u554f\u984c\u53ef\u80fd\u662f\u76f8\u5c0d\u7c21\u55ae\u7684\uff0c\u56e0\u70ba\u6240\u6709\u7684\u908f\u8f2f\u548c\u64cd\u4f5c\u90fd\u96c6\u4e2d\u5728\u4e00\u500b\u61c9\u7528\u4e2d\u3002\u7136\u800c\uff0c\u73fe\u4ee3\u61c9\u7528\u7a0b\u5f0f\u8d8a\u4f86\u8d8a\u591a\u5730\u4f7f\u7528\u5fae\u670d\u52d9\u67b6\u69cb\uff0c\u53c8\u6216\u8005\u662f\u670d\u52d9\u5c0e\u5411\u67b6\u69cb\uff0c\u4e00\u500b Request \u53ef\u80fd\u6703\u7d93\u904e\u6578\u5341\u500b\u751a\u81f3\u4e0a\u767e\u500b\u670d\u52d9\u3002\u9019\u4f7f\u5f97\u554f\u984c\u7684\u8ffd\u8e64\u548c\u5b9a\u4f4d\u8b8a\u5f97\u56f0\u96e3\u4e14\u8017\u6642\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e00\u500b Request \u56de\u61c9\u6642\u9593\u6bd4\u9810\u671f\u8981\u9577\uff0c\u554f\u984c\u53ef\u80fd\u767c\u751f\u5728\u5176\u4e2d\u67d0\u4e00\u500b\u670d\u52d9\u3001\u6578\u64da\u5eab\u67e5\u8a62\u6216\u662f\u7b2c\u4e09\u65b9 API \u4e0a\u3002\u5982\u679c\u6c92\u6709\u5408\u9069\u7684\u9059\u6e2c\u5de5\u5177\uff0c\u9019\u6a23\u7684\u554f\u984c\u53ef\u80fd\u6703\u8b8a\u5f97\u975e\u5e38\u96e3\u4ee5\u6392\u67e5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry \u53ef\u4ee5\u5efa\u7acb\u9019\u6a23\u7684\u80fd\u529b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5feb\u901f\u5b9a\u4f4d\u554f\u984c\uff1a\u900f\u904e Tracing\uff0c\u4f60\u80fd\u5920\u770b\u5230 Request \u5728\u4e0d\u540c\u670d\u52d9\u9593\u7684\u50b3\u905e\uff0c\u4e26\u4e86\u89e3\u54ea\u500b\u6b65\u9a5f\u6642\u9593\u6210\u672c\u6700\u9ad8\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u91cf\u5316\u7cfb\u7d71\u6027\u80fd\uff1a\u4f7f\u7528 Metrics \u4f86\u8ddf\u8e64\u4f60\u7684\u670d\u52d9\u662f\u5426\u6309\u9810\u671f\u904b\u884c\uff0c\u4e26\u5728\u8d85\u51fa\u7bc4\u570d\u6642\u89f8\u767c\u544a\u8b66\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6545\u969c\u8a3a\u65b7\uff1a\u901a\u904e Logs \u548c Tracing \u7684\u7d50\u5408\uff0c\u5feb\u901f\u4e86\u89e3\u554f\u984c\u767c\u751f\u6642\u7684\u4e0a\u4e0b\u6587\uff0c\u5e6b\u52a9\u5feb\u901f\u91d0\u6e05\u932f\u8aa4\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u80cc\u666f\u8207\u6b77\u53f2",children:"\u80cc\u666f\u8207\u6b77\u53f2"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 OpenTelemetry \u554f\u4e16\u4e4b\u524d\uff0c\u5df2\u6709\u5e7e\u500b\u77e5\u540d\u7684\u76e3\u63a7\u5de5\u5177 (\u9084\u6709\u5404\u7a2e\u7a0b\u5f0f\u8a9e\u8a00\u7684 Profiler \u5de5\u5177)\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"OpenTracing\uff1a\u63d0\u4f9b\u7d71\u4e00\u7684 API\uff0c\u7528\u65bc Tracing\uff0c\u8b93\u958b\u767c\u8005\u80fd\u5920\u5728\u591a\u500b\u8ffd\u8e64\u7cfb\u7d71\u4e4b\u9593\u4e92\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"OpenCensus\uff1aGoogle \u958b\u767c\u7684\u4e00\u500b\u6536\u96c6 Tracing \u548c Metrics \u7684\u6846\u67b6\uff0c\u65e8\u5728\u63d0\u4f9b\u8de8\u670d\u52d9\u548c\u61c9\u7528\u7684\u6027\u80fd\u76e3\u63a7\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u70ba\u4e0d\u540c\u7684\u5de5\u5177\u548c\u6578\u64da\u683c\u5f0f\uff0c\u5e38\u5e38\u6703\u56e0\u70ba\u6578\u64da\u898f\u683c\u4e0d\u517c\u5bb9\uff0c\u5c0e\u81f4\u88ab\u7279\u5b9a\u7684\u5e73\u53f0\u6216\u662f\u5de5\u5177\u6240\u7d81\u5b9a\u3002\u56e0\u6b64\uff0c\u958b\u6e90\u793e\u5340\u6c7a\u5b9a\u5408\u4f75\u9019\u5169\u500b\u9805\u76ee\uff0c\u4e26\u5275\u5efa OpenTelemetry \u9019\u500b\u7d71\u4e00\u6a19\u6e96\u3002\u6b64\u5916\uff0c\u96a8\u8457\u96f2\u539f\u751f\u67b6\u69cb\u7684\u8208\u8d77\uff0c\u7cfb\u7d71\u7684\u8907\u96dc\u6027\u8d8a\u4f86\u8d8a\u9ad8\uff0c\u4f01\u696d\u8feb\u5207\u9700\u8981\u4e00\u500b\u53ef\u4ee5\u9069\u61c9\u591a\u7a2e\u74b0\u5883\u7684\u6a19\u6e96\u5316\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry \u4e0d\u50c5\u89e3\u6c7a\u4e86\u9019\u4e9b\u554f\u984c\uff0c\u9084\u63d0\u4f9b\u4e86\u9748\u6d3b\u7684\u67b6\u69cb\uff0c\u53ef\u4ee5\u64f4\u5c55\u5230\u4e0d\u540c\u7684\u76e3\u63a7\u5f8c\u7aef\u7cfb\u7d71\u3002"}),"\n",(0,r.jsxs)(n.admonition,{title:"\u55ae\u9ad4\u61c9\u7528\u4e2d\u7684 OpenTelemetry",type:"info",children:[(0,r.jsx)(n.p,{children:"\u96d6\u7136 OpenTelemetry \u5c0d\u65bc\u5206\u6563\u5f0f\u67b6\u69cb\u6216\u5fae\u670d\u52d9\u7cfb\u7d71\u7279\u5225\u6709\u7528\uff0c\u4f46\u5728\u55ae\u9ad4\u61c9\u7528\u4e2d\u4f7f\u7528\u5b83\u540c\u6a23\u80fd\u5e36\u4f86\u986f\u8457\u597d\u8655\u3002\u4ee5\u4e0b\u662f\u55ae\u9ad4\u61c9\u7528\u4e2d\u4f7f\u7528 OpenTelemetry \u7684\u5e7e\u500b\u512a\u52e2\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7d71\u4e00\u67b6\u69cb\uff1a\u63d0\u4f9b\u7d71\u4e00\u7684\u9059\u6e2c\u6578\u64da\u6536\u96c6\u65b9\u6cd5\uff0c\u6e1b\u5c11\u4f7f\u7528\u591a\u500b\u5de5\u5177\u5e36\u4f86\u7684\u958b\u767c\u548c\u904b\u7dad\u8ca0\u64d4\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6027\u80fd\u5206\u6790\uff1a\u8ffd\u8e64\u61c9\u7528\u5167\u90e8\u4e0d\u540c\u6a21\u7d44\u6216\u529f\u80fd\u4e4b\u9593\u7684\u4e92\u52d5\uff0c\u5e6b\u52a9\u767c\u73fe\u61c9\u7528\u4e2d\u7684\u6027\u80fd\u554f\u984c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u672a\u4f86\u64f4\u5c55\uff1a\u5982\u679c\u9700\u8981\u5c07\u61c9\u7528\u64f4\u5c55\u70ba\u5fae\u670d\u52d9\u67b6\u69cb\uff0c\u4f7f\u7528 OpenTelemetry \u53ef\u4ee5\u4f7f\u8f49\u578b\u904e\u7a0b\u66f4\u52a0\u5e73\u6ed1\uff0c\u958b\u767c\u8005\u53ef\u4ee5\u8f15\u9b06\u5730\u5c07\u73fe\u6709\u7684\u9059\u6e2c\u6a5f\u5236\u64f4\u5c55\u5230\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6545\u969c\u8a3a\u65b7\uff1a\u5373\u4fbf\u5728\u55ae\u9ad4\u7cfb\u7d71\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u6709\u6548\u5730\u6355\u6349\u932f\u8aa4\u767c\u751f\u7684\u5177\u9ad4\u8def\u5f91\u548c\u4e0a\u4e0b\u6587\uff0c\u5e6b\u52a9\u958b\u767c\u8005\u66f4\u5feb\u901f\u5730\u9032\u884c\u554f\u984c\u5b9a\u4f4d\u548c\u4fee\u5fa9\u3002"}),"\n"]}),(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u4e0d\u7ba1\u61c9\u7528\u662f\u55ae\u9ad4\u9084\u662f\u5206\u6563\u5f0f\uff0cOpenTelemetry \u63d0\u4f9b\u7684\u9059\u6e2c\u80fd\u529b\u90fd\u80fd\u5e36\u4f86\u986f\u8457\u7684\u6548\u76ca\uff0c\u66f4\u597d\u5730\u7ba1\u7406\u5176\u670d\u52d9\u7684\u904b\u884c\u72c0\u614b\u548c\u6027\u80fd\u3002"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u67b6\u69cb",children:"\u67b6\u69cb"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7d71\u4e00\u7684 API \u548c\u591a\u7a2e SDK \u652f\u63f4",(0,r.jsx)(n.br,{}),"\n","\u7d71\u4e00\u7684 API\uff0c\u610f\u5473\u8457\u53ea\u9700\u8981\u5b78\u7fd2\u4e00\u5957\u6a19\u6e96\u5316\u7684 API \u4f86\u6536\u96c6\u9059\u6e2c\u6578\u64da\uff0c\u4e0d\u6703\u56e0\u70ba\u4e0d\u540c\u7684\u958b\u767c\u8a9e\u8a00\u7522\u751f\u984d\u5916\u5b78\u7fd2\u7684\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8de8\u5e73\u53f0",(0,r.jsx)(n.br,{}),"\n","\u7121\u8ad6\u4f60\u662f\u5728\u672c\u5730\u90e8\u7f72\u7684\u670d\u52d9\uff0c\u9084\u662f\u904b\u884c\u5728\u96f2\u7aef\u5e73\u53f0\uff0c\u90fd\u80fd\u5920\u4f7f\u7528\u3002",(0,r.jsx)(n.br,{}),"\n","\u540c\u6642\u652f\u6301\u865b\u64ec\u6a5f\u3001\u5bb9\u5668\u5316\u74b0\u5883\u4ee5\u53ca\u7121\u4f3a\u670d\u5668\u67b6\u69cb\uff0c\u8b93\u958b\u767c\u8005\u53ef\u4ee5\u8f15\u9b06\u5730\u6536\u96c6\u548c\u5c0e\u51fa\u89c0\u5bdf\u6027\u6578\u64da\uff0c\u7121\u9700\u70ba\u4e0d\u540c\u7684\u904b\u884c\u74b0\u5883\u4f7f\u7528\u4e0d\u540c\u7684\u5de5\u5177\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f48\u6027\u8207\u53ef\u64f4\u5c55\u6027",(0,r.jsx)(n.br,{}),"\n","\u4e0d\u50c5\u80fd\u5920\u6eff\u8db3\u5c0f\u578b\u61c9\u7528\u7684\u9700\u6c42\uff0c\u4e5f\u80fd\u5920\u8655\u7406\u5927\u898f\u6a21\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d\u7684\u9ad8\u6d41\u91cf\u6578\u64da\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6a21\u7d44\u5316\u8a2d\u8a08",(0,r.jsx)(n.br,{}),"\n","API\u3001SDK \u548c Collector \u5206\u958b\uff0c\u53ef\u4ee5\u6839\u64da\u61c9\u7528\u9700\u6c42\u9748\u6d3b\u9078\u64c7\u9700\u8981\u7684\u6a21\u7d44\uff0c\u800c\u4e0d\u5fc5\u5168\u90e8\u5c0e\u5165\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Example",type:"info",children:(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u53ea\u9700\u8981\u8ffd\u8e64\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u50c5\u4f7f\u7528 Tracing \u90e8\u5206\uff0c\u800c\u4e0d\u9700\u8981\u5f15\u5165\u5b8c\u6574\u7684\u9059\u6e2c\u529f\u80fd\u3002"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Sampling Strategies(\u63a1\u6a23\u7b56\u7565)",(0,r.jsx)(n.br,{}),"\n","\u53ef\u4ee5\u6839\u64da\u7cfb\u7d71\u8ca0\u8f09\u60c5\u6cc1\u8a2d\u7f6e\u4e0d\u540c\u7684\u91c7\u6a23\u7387\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Example",type:"info",children:(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5728\u6d41\u91cf\u9ad8\u5cf0\u671f\uff0c\u4f60\u53ef\u4ee5\u9078\u64c7\u53ea\u8ffd\u8e64 10% \u7684\u8acb\u6c42\u6578\u64da\uff0c\u800c\u5728\u6d41\u91cf\u8f03\u4f4e\u7684\u6642\u6bb5\u5247\u53ef\u4ee5\u8ffd\u8e64\u66f4\u591a\u8acb\u6c42\u3002"})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7b2c\u4e09\u65b9\u5de5\u5177\u517c\u5bb9\n\u5145\u5206\u8003\u616e\u5230\u4e86\u8207\u5176\u4ed6\u9059\u6e2c\u5de5\u5177\u7684\u517c\u5bb9\u6027\u3002",(0,r.jsx)(n.br,{}),"\n","\u76ee\u524d\u8a31\u591a\u4e0d\u540c\u7684\u9059\u6e2c\u5e73\u53f0 (\u5982 Jaeger\u3001Prometheus\u3001Grafana)\uff0c\u90fd\u53ef\u4ee5\u6b63\u5e38\u904b\u4f5c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u958b\u653e\u6a19\u6e96\u8207\u793e\u5340\u652f\u6301",(0,r.jsx)(n.br,{}),"\n","OpenTelemetry \u662f\u4e00\u500b\u7531 CNCF \u652f\u6301\u7684\u958b\u6e90\u9805\u76ee\uff0c\u9019\u4f7f\u5f97\u5b83\u5177\u6709\u6975\u5927\u7684\u517c\u5bb9\u6027\u548c\u6301\u7e8c\u767c\u5c55\u6f5b\u529b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5ee0\u5546\u4e2d\u7acb\uff1aOpenTelemetry \u662f\u4e00\u500b\u958b\u653e\u7684\u6a19\u6e96\uff0c\u9019\u610f\u5473\u8457\u5b83\u4e0d\u6703\u7d81\u5b9a\u5230\u67d0\u4e00\u500b\u7279\u5b9a\u7684\u4f9b\u61c9\u5546\u6216\u5e73\u53f0\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5f37\u5927\u7684\u793e\u5340\u652f\u6301\uff1a\u4f5c\u70ba CNCF \u4e0b\u7684\u4e00\u500b\u9805\u76ee\uff0cOpenTelemetry \u5f97\u5230\u4e86\u4f86\u81ea\u5168\u7403\u773e\u591a\u958b\u767c\u8005\u548c\u516c\u53f8\u7684\u652f\u6301\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e09\u5927\u652f\u67f1",children:"\u4e09\u5927\u652f\u67f1"}),"\n",(0,r.jsx)(n.h3,{id:"tracing-\u5206\u4f48\u5f0f\u8ffd\u8e64",children:"Tracing (\u5206\u4f48\u5f0f\u8ffd\u8e64)"}),"\n",(0,r.jsx)(n.p,{children:"Tracing \u662f\u7406\u89e3\u8907\u96dc\u5206\u6563\u5f0f\u7cfb\u7d71\u4e2d Request \u8def\u5f91\u7684\u6838\u5fc3\u5de5\u5177\u3002\u80fd\u5920\u8b93\u7dad\u904b\u4eba\u54e1\u6e05\u695a\u5730\u770b\u5230\u6bcf\u500b Request \u5728\u591a\u500b\u670d\u52d9\u4e4b\u9593\u7684\u50b3\u905e\uff0c\u4e26\u8a18\u9304\u6bcf\u500b\u6b65\u9a5f\u7684\u57f7\u884c\u6642\u9593\u3002\u9019\u6a23\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u627e\u51fa\u7cfb\u7d71\u4e2d\u7684\u6027\u80fd\u74f6\u9838\u6216\u5931\u6557\u7684\u7bc0\u9ede\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 OpenTelemetry \u4e2d\uff0cTracing \u662f\u901a\u904e Traces \u548c Spans \u4f86\u5be6\u73fe\u7684\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:["Trace\uff1a\u662f\u4e00\u500b Request \u6216\u5de5\u4f5c\u6d41\u7a0b\u7684\u5168\u5c40\u8868\u793a\uff0c\u4ee3\u8868\u5f9e\u958b\u59cb\u5230\u7d50\u675f\u7684\u6574\u500b\u904e\u7a0b\u3002\u5b83\u53ef\u80fd\u5305\u62ec\u8de8\u591a\u500b\u670d\u52d9\u6216\u61c9\u7528\u7a0b\u5f0f\u3002",(0,r.jsx)(n.br,{}),"\n","Span\uff1a\u662f\u4e00\u500b Trace \u7684\u57fa\u672c\u69cb\u6210\u55ae\u4f4d\u3002\u6bcf\u500b Span \u5305\u542b\u64cd\u4f5c\u7684\u540d\u7a31\u3001\u958b\u59cb\u548c\u7d50\u675f\u6642\u9593\u3001\u53c3\u6578\uff08\u5982\u6a19\u7c64\u3001\u4e8b\u4ef6\uff09\u7b49\u3002\u53ef\u4ee5\u5d4c\u5957\u5728\u5f7c\u6b64\u4e4b\u4e2d\uff0c\u9019\u6a23\u80fd\u6e05\u695a\u5730\u8868\u73fe\u51fa\u5404\u500b\u6b65\u9a5f\u7684\u5c64\u6b21\u7d50\u69cb\u548c\u76f8\u4e92\u4f9d\u8cf4\u95dc\u4fc2\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:i(27459).A+"",width:"800",height:"546"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:i(25090).A+"",width:"800",height:"336"})]}),"\n",(0,r.jsx)(n.p,{children:"\u9069\u7528\u5834\u666f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6027\u80fd\u74f6\u9838\u5206\u6790"}),"\n",(0,r.jsx)(n.li,{children:"\u8de8\u670d\u52d9\u6545\u969c\u6392\u67e5/\u5b9a\u4f4d"}),"\n",(0,r.jsx)(n.li,{children:"\u7528\u6236 Request \u8def\u5f91\u53ef\u8996\u5316"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"metrics-\u6307\u6a19",children:"Metrics (\u6307\u6a19)"}),"\n",(0,r.jsx)(n.p,{children:"Metrics \u662f\u7528\u4f86\u91cf\u5316\u7cfb\u7d71\u7684\u5065\u5eb7\u72c0\u6cc1\u8207\u6027\u80fd\u8868\u73fe\u3002Metrics \u901a\u5e38\u4ee5\u6578\u503c\u7684\u5f62\u5f0f\u51fa\u73fe\uff0c\u4e26\u4e14\u53ef\u4ee5\u662f\u77ac\u6642\u503c\u6216\u7d2f\u7a4d\u503c\uff0c\u4f8b\u5982 CPU \u4f7f\u7528\u7387\u3001\u56de\u61c9\u6642\u9593\u3001\u932f\u8aa4\u7387\u3001RPS...\u7b49\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Counter\uff1a\u53ea\u6703\u589e\u9577\u7684\u6307\u6a19\uff0c\u901a\u5e38\u7528\u4f86\u6e2c\u91cf\u7cfb\u7d71\u4e2d\u67d0\u4e9b\u4e8b\u4ef6\u7684\u6b21\u6578\u3002\u4f8b\u5982\uff0cHTTP Request \u7684\u7e3d\u6578\u6216\u932f\u8aa4\u6b21\u6578\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Sums\uff1a\u985e\u4f3c\u65bc Counter\uff0c\u4f46\u5b83\u66f4\u9748\u6d3b\uff0c\u5141\u8a31\u958b\u767c\u8005\u5728\u7279\u5b9a\u5834\u666f\u4e0b\u4e5f\u53ef\u4ee5\u9032\u884c\u6e1b\u5c11\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u6d3b\u8e8d\u9023\u63a5\u6578\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Gauge\uff1a\u53ef\u4ee5\u589e\u6e1b\u7684\u6307\u6a19\uff0c\u901a\u5e38\u53cd\u6620\u7cfb\u7d71\u7684\u7576\u524d\u72c0\u614b\u3002\u53ef\u80fd\u5305\u542b\uff0cCPU \u4f7f\u7528\u7387\u3001\u8a18\u61b6\u9ad4\u4f7f\u7528\u91cf...\u7b49\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Histogram\uff1a\u5c07\u6578\u64da\u5206\u5e03\u5230\u4e0d\u540c\u7684\u7bc4\u570d\u4e2d\uff0c\u5e6b\u52a9\u4f60\u4e86\u89e3\u6578\u64da\u7684\u5206\u5e03\u60c5\u6cc1\u3002\u4f8b\u5982\uff0cHTTP \u56de\u61c9\u6642\u9593\u7684\u5206\u5e03\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Summary\uff1a\u985e\u4f3c\u65bc\u76f4\u65b9\u5716\uff0c\u4f46\u5b83\u63d0\u4f9b\u7684\u662f\u7279\u5b9a\u6578\u64da\u7684\u7d71\u8a08\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:i(21019).A+"",width:"934",height:"417"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:i(14798).A+"",width:"957",height:"548"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:i(88799).A+"",width:"962",height:"453"})]}),"\n",(0,r.jsx)(n.p,{children:"\u9069\u7528\u5834\u666f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7cfb\u7d71\u72c0\u614b\u76e3\u63a7\uff1a\u901a\u904e\u76e3\u63a7\u61c9\u7528\u7684\u5404\u7a2e Metrics\uff0c\u4e26\u5728\u6578\u503c\u8d85\u51fa\u9810\u8a2d\u7bc4\u570d\u6642\u81ea\u52d5\u89f8\u767c\u544a\u8b66\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8cc7\u6e90\u898f\u5283\uff1a\u76e3\u63a7\u7cfb\u7d71\u7684\u8cc7\u6e90\u4f7f\u7528\u60c5\u6cc1\uff0c\u5f9e\u800c\u9032\u884c\u5408\u7406\u7684\u5bb9\u91cf\u898f\u5283\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6027\u80fd\u8da8\u52e2\uff1a\u5206\u6790\u7cfb\u7d71\u7684\u6027\u80fd\u8da8\u52e2\uff0c\u63d0\u524d\u9810\u6e2c\u548c\u89e3\u6c7a\u53ef\u80fd\u51fa\u73fe\u7684\u6027\u80fd\u74f6\u9838\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"logs-\u65e5\u8a8c",children:"Logs (\u65e5\u8a8c)"}),"\n",(0,r.jsx)(n.p,{children:"Logs \u662f\u7cfb\u7d71\u5728\u7279\u5b9a\u6642\u523b\u7684\u5177\u9ad4\u4e8b\u4ef6\u548c\u884c\u70ba\uff0c\u901a\u5e38\u7528\u65bc\u6392\u67e5\u932f\u8aa4\u548c\u4e86\u89e3\u7cfb\u7d71\u5728\u7279\u5b9a\u6642\u9593\u7684\u904b\u884c\u72c0\u614b\u3002\u53ef\u4ee5\u6355\u6349\u6bcf\u500b Request \u8655\u7406\u7684\u8a73\u7d30\u8cc7\u8a0a\uff0c\u5305\u62ec Request \u53c3\u6578\u3001\u8655\u7406\u904e\u7a0b\u4e2d\u7684\u4e0a\u4e0b\u6587\u6578\u64da\u4ee5\u53ca\u767c\u751f\u932f\u8aa4\u6642\u7684\u8a73\u7d30\u5167\u5bb9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Logs \u7684\u5178\u578b\u4f7f\u7528\u5834\u666f\u5305\u62ec\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6545\u969c\u8a3a\u65b7\uff1a\u7576\u7cfb\u7d71\u51fa\u73fe\u932f\u8aa4\u6642\uff0c\u63d0\u4f9b\u8a73\u7d30\u7684\u932f\u8aa4\u4e0a\u4e0b\u6587\u548c\u5177\u9ad4\u7684\u932f\u8aa4\u8a0a\u606f\uff0c\u5feb\u901f\u5b9a\u4f4d\u554f\u984c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e8b\u4ef6\u8ffd\u6eaf\uff1a\u901a\u904e Logs \u4e86\u89e3\u67d0\u4e9b\u4e8b\u4ef6\u767c\u751f\u7684\u80cc\u666f\u548c\u6d41\u7a0b\uff0c\u627e\u51fa\u7cfb\u7d71\u4e2d\u7684\u7570\u5e38\u884c\u70ba\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5be9\u8a08\uff1aLogs \u8a18\u9304\u4e86\u7cfb\u7d71\u4e2d\u7684\u91cd\u8981\u4e8b\u4ef6\uff0c\u53ef\u7528\u65bc\u5f8c\u671f\u7684\u5b89\u5168\u5be9\u8a08\u548c\u98a8\u96aa\u5206\u6790\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76f8\u8f14\u76f8\u6210",children:"\u76f8\u8f14\u76f8\u6210"}),"\n",(0,r.jsx)(n.p,{children:"\u9059\u6e2c\u6574\u9ad4\u6027\u7684\u4e00\u500b\u6838\u5fc3\u9ede\u662f\uff0c\u4e09\u5927\u652f\u67f1\u4e26\u4e0d\u662f\u5f7c\u6b64\u7368\u7acb\u7684\u5de5\u5177\u6216\u65b9\u6cd5\uff0c\u800c\u662f\u5f9e\u4e0d\u540c\u89d2\u5ea6\u63d0\u4f9b\u95dc\u9375\u6578\u64da\uff0c\u4e92\u70ba\u88dc\u5145\uff0c\u5f9e\u800c\u5e6b\u52a9\u958b\u767c\u8005\u66f4\u9ad8\u6548\u5730\u8a3a\u65b7\u554f\u984c\u4e26\u512a\u5316\u7cfb\u7d71\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(26491).A+"",width:"484",height:"373"})}),"\n",(0,r.jsx)(n.h3,{id:"tracing--metrics",children:"Tracing + Metrics"}),"\n",(0,r.jsx)(n.p,{children:"Tracing \u53ef\u4ee5\u7528\u4f86\u8a18\u9304\u4e00\u500b Request \u4e0d\u540c\u670d\u52d9\u4e4b\u9593\u7684\u5b8c\u6574\u8def\u5f91\uff0c\u4e26\u8ffd\u8e64\u6bcf\u500b\u6b65\u9a5f\u7684\u6642\u9593\u6210\u672c\u3002\u4f46\u50c5\u9760 Tracing\uff0c\u53ea\u80fd\u77e5\u9053\u7279\u5b9a\u7684 Request \u6216\u662f\u67d0\u500b\u60c5\u5883\u4e0b\u7684\u67d0\u4e00\u500b\u6b65\u9a5f\u8017\u6642\u8f03\u591a\uff0c\u5c0d\u65bc\u5728\u6574\u500b\u7cfb\u7d71\u4e2d\u7684\u5f71\u97ff\u96e3\u4ee5\u8a55\u4f30\u3002"}),"\n",(0,r.jsxs)(n.admonition,{title:"\u8aaa\u660e",type:"info",children:[(0,r.jsxs)(n.p,{children:["\u67d0\u500b\u67e5\u8a62\u64cd\u4f5c\u8017\u6642 500ms\uff0c\u4f46\u9019\u53ea\u662f\u55ae\u4e00\u8acb\u6c42\u7684\u6578\u64da\u3002\u5982\u679c Metrics \u986f\u793a\uff0c\u9019\u6a23\u7684\u67e5\u8a62\u64cd\u4f5c\u6bcf\u79d2\u767c\u751f\u4e0a\u5343\u6b21\uff0c\u90a3\u9ebc\u9019\u500b\u8017\u6642\u7684\u554f\u984c\u5c31\u8b8a\u5f97\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u70ba\u5b83\u6703\u56b4\u91cd\u5f71\u97ff\u7cfb\u7d71\u7684\u6574\u9ad4\u6027\u80fd\u3002",(0,r.jsx)(n.br,{}),"\n","\u53cd\u4e4b\uff0c\u5982\u679c\u9019\u6a23\u7684\u64cd\u4f5c\u5728\u6574\u9ad4\u7cfb\u7d71\u67e5\u8a62\u7684 Request \u5167\uff0c\u50c5\u4f54\u64da\u6975\u5c11\u90e8\u5206\uff0c\u90a3\u8a72\u554f\u984c\u7684\u512a\u5148\u5ea6\u4e5f\u8a31\u5c31\u6c92\u90a3\u9ebc\u6025\u8feb\u3002"]}),(0,r.jsx)(n.p,{children:"\u9019\u6a23\u7684\u6578\u64da\u53ef\u4ee5\u5e6b\u52a9\u958b\u767c\u8005\u4e0d\u50c5\u770b\u5230\u554f\u984c\u6240\u5728\uff0c\u9084\u80fd\u8861\u91cf\u554f\u984c\u7684\u56b4\u91cd\u6027\u3002"})]}),"\n",(0,r.jsx)(n.h3,{id:"tracing--logs",children:"Tracing + Logs"}),"\n",(0,r.jsx)(n.p,{children:"Tracing \u53ef\u4ee5\u7528\u4f86\u8a18\u9304\u4e00\u500b Request \u4e0d\u540c\u670d\u52d9\u4e4b\u9593\u7684\u5b8c\u6574\u8def\u5f91\uff0c\u4e26\u986f\u793a\u54ea\u4e9b\u670d\u52d9\u51fa\u73fe\u4e86\u554f\u984c\uff0c\u4f46\u5b83\u53ef\u80fd\u7121\u6cd5\u63d0\u4f9b\u8a73\u7d30\u7684\u932f\u8aa4\u4e0a\u4e0b\u6587\u3002\u9019\u6642\u5019\uff0c\u8a73\u7d30\u7684 Logs \u6578\u64da\u53ef\u4ee5\u63d0\u4f9b\u66f4\u591a\u6709\u95dc\u932f\u8aa4\u7684\u5177\u9ad4\u8a0a\u606f\uff0c\u5305\u62ec\u932f\u8aa4\u7684\u6839\u672c\u539f\u56e0\u3001\u7576\u6642\u7684\u7cfb\u7d71\u72c0\u614b\u3001\u4e0a\u4e0b\u6587\u7b49\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u8aaa\u660e",type:"info",children:(0,r.jsx)(n.p,{children:"\u67d0\u500b\u670d\u52d9\u5728\u7279\u5b9a\u7684 API \u547c\u53eb\u767c\u751f\u4e86\u932f\u8aa4\uff0c\u4f46 Logs \u6703\u63d0\u4f9b\u5177\u9ad4\u7684\u932f\u8aa4\u8a0a\u606f\uff0c\u6bd4\u5982\u5177\u9ad4\u7684 Stacks\u3001\u932f\u8aa4\u4ee3\u78bc\u3001\u4ee5\u53ca\u7576\u6642\u7684\u4e0a\u4e0b\u6587\u72c0\u614b\uff0c\u8b93\u4f60\u80fd\u5920\u9032\u4e00\u6b65\u6df1\u5165\u8a3a\u65b7\u554f\u984c\u3002\n\u9019\u6a23\uff0c\u7576\u51fa\u73fe\u554f\u984c\u6642\uff0c\u4f60\u4e0d\u50c5\u80fd\u5920\u77e5\u9053\u932f\u8aa4\u767c\u751f\u5728\u54ea\u500b\u670d\u52d9\u6216\u54ea\u500b\u6a21\u584a\uff0c\u9084\u53ef\u4ee5\u5feb\u901f\u6df1\u5165\u4e86\u89e3\u554f\u984c\u7684\u7d30\u7bc0\u3002"})}),"\n",(0,r.jsx)(n.h3,{id:"metrics--logs",children:"Metrics + Logs"}),"\n",(0,r.jsx)(n.p,{children:"Metrics \u63d0\u4f9b\u4e86\u4e00\u500b\u5168\u5c40\u7684\u7cfb\u7d71\u72c0\u614b\u7e3d\u89bd\uff0c\u4f8b\u5982\u7cfb\u7d71\u7684 CPU \u4f7f\u7528\u7387\u3001\u8a18\u61b6\u9ad4\u4f7f\u7528\u3001Request \u6578\u91cf\u7b49\u3002\u7576\u67d0\u4e9b Metrics \u7570\u5e38\u6642\uff0c\u958b\u767c\u8005\u53ef\u4ee5\u9032\u4e00\u6b65\u5229\u7528 Logs \u4f86\u6df1\u5165\u4e86\u89e3\u5177\u9ad4\u7684\u7570\u5e38\u539f\u56e0\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u8aaa\u660e",type:"info",children:(0,r.jsxs)(n.p,{children:["\u67d0\u500b API \u7684\u56de\u61c9\u6642\u9593\u7570\u5e38\u589e\u9ad8\uff0c\u9019\u53ef\u80fd\u6697\u793a\u51fa\u73fe\u4e86\u6027\u80fd\u74f6\u9838\uff0c\u6216\u8005\u67d0\u500b\u670d\u52d9\u6b63\u5728\u9762\u81e8\u58d3\u529b\u3002\u6b64\u6642\uff0c\u958b\u767c\u8005\u53ef\u4ee5\u6839\u64da\u9019\u4e9b\u7570\u5e38 Metrics\uff0c\u67e5\u770b\u5177\u9ad4\u7684 Logs\uff0c\u9032\u4e00\u6b65\u6392\u67e5\u554f\u984c\u3002",(0,r.jsx)(n.br,{}),"\n","\u901a\u904e Metrics\uff0c\u4f60\u53ef\u4ee5\u9ad8\u6548\u5730\u76e3\u63a7\u6574\u500b\u7cfb\u7d71\u7684\u904b\u884c\u72c0\u614b\uff0c\u800c Logs \u5247\u5e6b\u52a9\u4f60\u5c0d\u5177\u9ad4\u7570\u5e38\u60c5\u6cc1\u9032\u884c\u6df1\u5165\u5206\u6790\u548c\u56de\u6eaf\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,r.jsx)(n.p,{children:"\u9059\u6e2c\u7684\u6574\u9ad4\u6027\u610f\u5473\u8457 Tracing\u3001Metrics \u548c Logs \u662f\u76f8\u8f14\u76f8\u6210\u3001\u4e92\u76f8\u88dc\u5145\u7684\u3002\u5b83\u5011\u70ba\u958b\u767c\u8005\u63d0\u4f9b\u4e86\u5f9e\u9ad8\u5c64\u6b21\u5230\u7d30\u7bc0\u7684\u5168\u65b9\u4f4d\u76e3\u63a7\u80fd\u529b\uff0c\u4f7f\u554f\u984c\u6392\u67e5\u3001\u6027\u80fd\u512a\u5316\u4ee5\u53ca\u6545\u969c\u4fee\u5fa9\u904e\u7a0b\u8b8a\u5f97\u66f4\u52a0\u9ad8\u6548\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/otel/metrics/data-model/",children:"https://opentelemetry.io/docs/specs/otel/metrics/data-model/"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://dev.to/siddhantkcode/the-mechanics-of-distributed-tracing-in-opentelemetry-1ohk",children:"https://dev.to/siddhantkcode/the-mechanics-of-distributed-tracing-in-opentelemetry-1ohk"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://dev.to/amplication/distributed-tracing-and-opentelemetry-guide-8b6",children:"https://dev.to/amplication/distributed-tracing-and-opentelemetry-guide-8b6"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://microsoft.github.io/code-with-engineering-playbook/observability/log-vs-metric-vs-trace/",children:"https://microsoft.github.io/code-with-engineering-playbook/observability/log-vs-metric-vs-trace/"})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},27459:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-10-08-11-26-44-69bd2dfee2ff6ababf0465dc1ff40d66.png"},25090:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-10-08-11-28-32-6bfac5c1c6f4b61a74bb1d7555da9460.png"},21019:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-10-08-11-48-44-32ab4157f5e0c99c24b904931a68eee4.png"},14798:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-10-08-11-49-02-526a5207486532814c597757c85ff0d7.png"},88799:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-10-08-11-49-18-2656546aeef9e4cd77500f1bd4771f05.png"},26491:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2024-10-08-12-02-30-3a1f105d3aae85b72868d27963b0d00f.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);