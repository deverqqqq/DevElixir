"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4417],{68602:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"algo/leetcode/easy/Two Sum","title":"Two Sum","description":"Two Sum","source":"@site/docs/algo/leetcode/easy/1. Two Sum.md","sourceDirName":"algo/leetcode/easy","slug":"/algo/leetcode/easy/Two Sum","permalink":"/algo/leetcode/easy/Two Sum","draft":false,"unlisted":false,"editUrl":"https://github.com/deverqqqq/DevElixir/tree/main/docs/algo/leetcode/easy/1. Two Sum.md","tags":[{"inline":true,"label":"leetcode","permalink":"/tags/leetcode"},{"inline":true,"label":"easy","permalink":"/tags/easy"},{"inline":true,"label":"hash-table","permalink":"/tags/hash-table"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Two Sum","sidebar_label":"1_Two Sum","keywords":["leetcode","easy","algo"],"description":"Two Sum","sidebar_position":2,"tags":["leetcode","easy","hash-table"]},"sidebar":"algoSidebar","previous":{"title":"Easy","permalink":"/category/easy"}}');var t=n(74848),l=n(28453);const i={title:"Two Sum",sidebar_label:"1_Two Sum",keywords:["leetcode","easy","algo"],description:"Two Sum",sidebar_position:2,tags:["leetcode","easy","hash-table"]},r=void 0,c={},m=[{value:"\u984c\u76ee",id:"\u984c\u76ee",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:3},{value:"\u9650\u5236",id:"\u9650\u5236",level:3},{value:"Solution",id:"solution",level:2},{value:"\u66b4\u529b\u89e3",id:"\u66b4\u529b\u89e3",level:3},{value:"\u512a\u5316",id:"\u512a\u5316",level:3},{value:"\u8907\u96dc\u5ea6\u5206\u6790",id:"\u8907\u96dc\u5ea6\u5206\u6790",level:3},{value:"Reference",id:"reference",level:2}];function h(e){const s={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"\u984c\u76ee",children:"\u984c\u76ee"}),"\n",(0,t.jsx)(s.h3,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u7d66\u5b9a\u4e00\u500b\u6574\u6578\u6578\u7d44 nums \u548c\u4e00\u500b\u6574\u6578 target\uff0c\u8fd4\u56de\u5169\u500b\u6578\u5b57\u7684\u7d22\u5f15\uff0c\u4f7f\u5f97\u5b83\u5011\u76f8\u52a0\u7b49\u65bc target\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u53ef\u4ee5\u5047\u8a2d\u6bcf\u500b\u8f38\u5165\u53ea\u5c0d\u61c9\u4e00\u7a2e\u7b54\u6848\uff0c\u4e14\u76f8\u540c\u7684\u5143\u7d20\u4e0d\u53ef\u4ee5\u88ab\u91cd\u8907\u5229\u7528\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u7b54\u6848\u53ef\u4ee5\u6309\u4efb\u4f55\u9806\u5e8f\u8fd4\u56de\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\u7bc4\u4f8b",children:"\u7bc4\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\u7bc4\u4f8b 1\uff1a\n\u8f38\u5165\uff1anums = [2,7,11,15], target = 9\n\u8f38\u51fa\uff1a[0,1]\n\u89e3\u91cb\uff1a\u56e0\u70ba nums[0] + nums[1] == 9\uff0c\u6211\u5011\u8fd4\u56de [0, 1]\u3002\n\n\u7bc4\u4f8b 2\uff1a\n\u8f38\u5165\uff1anums = [3,2,4], target = 6\n\u8f38\u51fa\uff1a[1,2]\n\n\u7bc4\u4f8b 3\uff1a\n\u8f38\u5165\uff1anums = [3,3], target = 6\n\u8f38\u51fa\uff1a[0,1]\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\n\n\u53ea\u5b58\u5728\u4e00\u500b\u6709\u6548\u7b54\u6848\u3002\n"})}),"\n",(0,t.jsx)(s.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(s.h3,{id:"\u66b4\u529b\u89e3",children:"\u66b4\u529b\u89e3"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",metastring:"showLineNumbers",children:"/*\n1. \u7b2c\u4e00\u500b\u8ff4\u5708\uff0c\u8868\u793a\u4f9d\u5e8f\u62ff\u53d6\u6bcf\u500b\u4f4d\u7f6e\u7684\u6578\u503c\n2. \u7b2c\u4e8c\u500b\u8ff4\u5708\uff0c\u6839\u64da\u524d\u4e00\u500b\u8ff4\u5708\u62ff\u5230\u7684\u6578\u503c\uff0c\u5f80\u5f8c\u4f9d\u5e8f\u67e5\u8a62\uff0c\u627e\u5230\u76f8\u52a0\u70ba target \u7684\u6578\u503c\n3. \u5982\u679c\u627e\u4e0d\u5230\uff0c\u4f7f\u7528\u7b2c\u4e00\u500b\u8ff4\u5708\u7684\u4e0b\u4e00\u500b\u6578\u503c\uff0c\u91cd\u8907\u57f7\u884c\u4e0a\u8ff0\u52d5\u4f5c\uff0c\u76f4\u5230\u6700\u5f8c\u6216\u662f\u627e\u5230\n*/\npublic int[] TwoSum_BruteForce(int[] nums, int target)\n{\n    for (var i = 0; i < nums.Length; i++)\n    {\n        for (var j = i + 1; j < nums.Length; j++)\n        {\n            if (nums[i] + nums[j] == target)\n            {\n                return [i, j];\n            }\n        }\n    }\n\n    return [0, 0];\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u512a\u5316",children:"\u512a\u5316"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",metastring:"showLineNumbers",children:"/*\n1. \u7b2c\u4e00\u500b\u8ff4\u5708\uff0c\u8868\u793a\u4f9d\u5e8f\u62ff\u53d6\u6bcf\u500b\u4f4d\u7f6e\u7684\u6578\u503c\n2. \u5f9e Dictionary \u627e\u770b\u770b\u662f\u5426\u6709\u6578\u503c\u7b26\u5408\u76f8\u52a0\u70ba target \u7684\u5167\u5bb9\n2.1 \u6c92\u6709 -> \u628a\u73fe\u6709\u7684\u6578\u503c\u548c\u7d22\u5f15\u4f4d\u7f6e\uff0c\u7576\u4f5c KeyValue Pair\uff0c\u5b58\u5230 Dictionary \u5167\n2.2 \u6709   -> \u8fd4\u56de\u7d22\u5f15\n*/\npublic int[] TwoSum_Hash(int[] nums, int target)\n{\n    var dc = new Dictionary<int, int>();\n    for (var i = 0; i < nums.Length; i++)\n    {\n        var hasValue = dc.TryGetValue(target - nums[i], out var index);\n        if (hasValue)\n        {\n            return [i, index];\n        }\n\n        dc[nums[i]] = i;\n    }\n\n    return [0, 0];\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u8907\u96dc\u5ea6\u5206\u6790",children:"\u8907\u96dc\u5ea6\u5206\u6790"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Complexity"}),(0,t.jsx)(s.th,{children:"BruteForce"}),(0,t.jsx)(s.th,{children:"HashTable"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Time Complexity"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Space Complexity"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/two-sum/description/",children:"https://leetcode.com/problems/two-sum/description/"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/two-sum/solutions/4838454/c-c-two-friendly-solutions-for-beginners-clear-and-concise/",children:"https://leetcode.com/problems/two-sum/solutions/4838454/c-c-two-friendly-solutions-for-beginners-clear-and-concise/"})]})]})}function d(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var a=n(96540);const t={},l=a.createContext(t);function i(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);