"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/react/day-2-setup-and-js-review","metadata":{"permalink":"/blog/react/day-2-setup-and-js-review","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-2-setup-and-js-review.md","source":"@site/blog/react/day-2-setup-and-js-review.md","title":"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review","description":"\u958b\u767c\u74b0\u5883\u8a2d\u7f6e","date":"2024-08-02T14:26:00.000Z","tags":[{"inline":true,"label":"React","permalink":"/blog/tags/react"},{"inline":true,"label":"ZeroToHero","permalink":"/blog/tags/zero-to-hero"}],"readingTime":8.905,"hasTruncateMarker":true,"authors":[{"name":"deverqqqq","url":"https://github.com/deverqqqq","imageURL":"https://github.com/deverqqqq.png","key":"deverqqqq"}],"frontMatter":{"title":"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review","authors":["deverqqqq"],"tags":["React","ZeroToHero"],"date":"2024-08-02T14:26"},"unlisted":false,"nextItem":{"title":"[Day 1] \u7b2c\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f !","permalink":"/blog/react/day-1-first-react-app"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n```\\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \\n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \\n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \\n                                                             \\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \\n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u255a\u2550\u2550\u2550\u2550\u2588\u2588\u2557\\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d      \u2588\u2588\u2588\u2588\u2588\u2554\u255d\\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d      \u2588\u2588\u2554\u2550\u2550\u2550\u255d \\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\\n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\\n                                                             \\n```\\n\\n\x3c!--truncate--\x3e\\n\\n## \u958b\u767c\u74b0\u5883\u8a2d\u7f6e\\n\\n1. [VSCode](https://code.visualstudio.com/)\\n    - Extension\\n        - [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)\\n\\n        - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)\\n        > VSCode \u8a2d\u5b9a\uff1a`default formatter`\u6539\u70ba Prettier\u3002  \\n        > \u53ef\u4ee5\u8a2d\u5b9a\u5132\u5b58\u6642\u89f8\u767c\uff0c\u4f46\u6211\u500b\u4eba\u504f\u597d\u624b\u52d5\u6309\u6392\u7248\u3002(alt+shift+F)\\n\\n        - [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)\\n        \\n2. [Node.js](https://nodejs.org/en)\\n\\n## Create React App\\n\\n\u9019\u500b\u76ee\u524d\u5df2\u7d93\u4e0d\u518d\u88ab\u5efa\u8b70\u4f7f\u7528\u5728\u6b63\u5f0f\u7684\u5c08\u6848\u4e0a\u9762\uff0c\u56e0\u70ba\u521d\u59cb\u5316\u76f8\u4f9d\u592a\u591a\u7684\u5957\u4ef6\uff0c\u96e3\u4ee5\u91dd\u5c0d\u4e0d\u540c\u7684\u9700\u6c42\u53bb\u505a\u8abf\u6574\uff0c\u4f46\u662f\u7528\u4f86\u4f5c\u70ba\u5b78\u7fd2 React \u7684\u5de5\u5177\u9084\u662f\u5f88\u597d\u7528\u7684\uff0c\u53ef\u4ee5\u5728\u4e0d\u7528\u8907\u96dc\u8a2d\u7f6e\u7684\u524d\u63d0\u4e0b\uff0c\u958b\u7bb1\u5373\u7528\u3002\\n\\n\u76ee\u524d\u6709\u5e7e\u500b[\u5b98\u65b9\u63a8\u85a6](https://react.dev/learn/start-a-new-react-project)\u7684**\u5168\u7aef\u6846\u67b6**\u3002\\n\\n1. [Next.js](https://nextjs.org/)\\n2. [Remix](https://remix.run/)\\n\\n\u5efa\u7f6e\u5de5\u5177\\n\\n1. [Vite](https://vitejs.dev/)\\n\\n### \u4f7f\u7528 npm \u5957\u4ef6\u5feb\u901f\u9375\u7acb React App\\n\\n```ps1\\n## my-app \u8acb\u66ff\u63db\u6210\u4f60\u7684\u5c08\u6848\u540d\u7a31\\nnpx create-react-app my-app\\n```\\n\\n## Javascript Review\\n\\n### Assignment Operators\\n\\n| \u540d\u7a31     | \u7c21\u5316\u7684\u904b\u7b97\u5b50 | \u610f\u7fa9        |\\n| -------- | ------------ | ----------- |\\n| \u8ce6\u503c     | `x = y`      | `x = y`     |\\n| \u52a0\u6cd5\u8ce6\u503c | `x += y`     | `x = x + y` |\\n| \u6e1b\u6cd5\u8ce6\u503c | `x -= y`     | `x = x - y` |\\n| \u4e58\u6cd5\u8ce6\u503c | `x *= y`     | `x = x * y` |\\n| \u9664\u6cd5\u8ce6\u503c | `x /= y`     | `x = x / y` |\\n| \u9918\u6578\u8ce6\u503c | `x %= y`     | `x = x % y` |\\n\\n### Destructuring\\n\\n<Tabs>\\n  <TabItem value=\\"\u96c6\u5408\u89e3\u69cb\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const data = [\\n    {\\n      color: \\"red\\",\\n      size: 10,\\n      weight: 22,\\n    },\\n    {\\n      color: \\"green\\",\\n      size: 8,\\n      weight: 16,\\n    },\\n    {\\n      color: \\"blue\\",\\n      size: 15,\\n      weight: 55,\\n    },\\n  ];\\n\\n  // \u6309\u7167\u9806\u5e8f\u56de\u50b3\\n  const [first, second] = data;\\n  const firstResult = JSON.stringify(first);\\n  const secondResult = JSON.stringify(second);\\n\\n  return (\\n    <div>\\n      <span>first is {firstResult}.</span>\\n      <br></br>\\n      <span>second is {secondResult}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n\\n  <TabItem value=\\"Rest Pattern\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const data = [\\n    {\\n      color: \\"red\\",\\n      size: 10,\\n      weight: 22,\\n    },\\n    {\\n      color: \\"green\\",\\n      size: 8,\\n      weight: 16,\\n    },\\n    {\\n      color: \\"blue\\",\\n      size: 15,\\n      weight: 55,\\n    },\\n  ];\\n  const [first, ...others] = data;\\n  const firstResult = JSON.stringify(first);\\n  const otherResult = JSON.stringify(others);\\n\\n  return (\\n    <div>\\n      <span>first is {firstResult}.</span>\\n      <br></br>\\n      <span>other is {otherResult}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n\\n  <TabItem value=\\"\u7269\u4ef6\u89e3\u69cb\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const data = {\\n    color: \\"red\\",\\n    size: 10,\\n    weight: 22,\\n  };\\n\\n  // \u540d\u7a31\u4e00\u6a23\u53ef\u4ee5\u89e3\u69cb\\n  const { color, weight } = data;\\n\\n  return (\\n    <div>\\n      <span>color is {color}.</span>\\n      <br></br>\\n      <span>weight is {weight}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\\n### Spread Operator\\n\\n<Tabs>\\n  <TabItem value=\\"Spread\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const data = [\\n    {\\n      color: \\"red\\",\\n      size: 10,\\n      weight: 22,\\n    },\\n    {\\n      color: \\"green\\",\\n      size: 8,\\n      weight: 16,\\n    },\\n    {\\n      color: \\"blue\\",\\n      size: 15,\\n      weight: 55,\\n    },\\n  ];\\n  const [first, ...others] = data;\\n  const newArray = [...others, { color: \\"black\\", size: 99, weight: 99 }];\\n  const result = JSON.stringify(newArray);\\n\\n  return (\\n    <div>\\n      <span>result is {result}.</span>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\\n### Conditional (Ternary) Operator\\n\\n```jsx live\\nfunction Test(props) {\\n  const before = 10;\\n  const after = 20;\\n  const result =\\n    before > after\\n      ? `${before} is bigger than ${after}`\\n      : `${after} is bigger than ${before}`;\\n\\n  return (\\n    <div>\\n      <span>result is {result}.</span>\\n    </div>\\n  );\\n}\\n```\\n\\n### Logical Operator\\n\\n<Tabs>\\n  <TabItem value=\\"AND\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const val_1 = true && true; // t && t returns true\\n  const val_2 = true && false; // t && f returns false\\n  const val_3 = false && true; // f && t returns false\\n  const val_4 = false && 3 === 4; // f && f returns false\\n  const val_5 = \\"Cat\\" && \\"Dog\\"; // t && t returns \\"Dog\\"\\n  const val_6 = false && \\"Cat\\"; // f && t returns false\\n  const val_7 = \\"Cat\\" && false; // t && f returns false\\n  const val_8 = \\"\\" && false; // f && f returns \\"\\"\\n  const val_9 = false && \\"\\"; // f && f returns false\\n\\n  return (\\n    <div>\\n      <span>val_1 is {val_1.toString()}.</span>\\n      <br></br>\\n      <span>val_2 is {val_2.toString()}.</span>\\n      <br></br>\\n      <span>val_3 is {val_3.toString()}.</span>\\n      <br></br>\\n      <span>val_4 is {val_4.toString()}.</span>\\n      <br></br>\\n      <span>val_5 is {val_5}.</span>\\n      <br></br>\\n      <span>val_6 is {val_6}.</span>\\n      <br></br>\\n      <span>val_7 is {val_7.toString()}.</span>\\n      <br></br>\\n      <span>val_8 is {val_8}.</span>\\n      <br></br>\\n      <span>val_9 is {val_9.toString()}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n\\n  <TabItem value=\\"OR\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const val_1 = true || true; // t || t returns true\\n  const val_2 = false || true; // f || t returns true\\n  const val_3 = true || false; // t || f returns true\\n  const val_4 = false || 3 === 4; // f || f returns false\\n  const val_5 = \\"Cat\\" || \\"Dog\\"; // t || t returns \\"Cat\\"\\n  const val_6 = false || \\"Cat\\"; // f || t returns \\"Cat\\"\\n  const val_7 = \\"Cat\\" || false; // t || f returns \\"Cat\\"\\n  const val_8 = \\"\\" || false; // f || f returns false\\n  const val_9 = false || \\"\\"; // f || f returns \\"\\"\\n\\n  return (\\n    <div>\\n      <span>val_1 is {val_1.toString()}.</span>\\n      <br></br>\\n      <span>val_2 is {val_2.toString()}.</span>\\n      <br></br>\\n      <span>val_3 is {val_3.toString()}.</span>\\n      <br></br>\\n      <span>val_4 is {val_4.toString()}.</span>\\n      <br></br>\\n      <span>val_5 is {val_5}.</span>\\n      <br></br>\\n      <span>val_6 is {val_6}.</span>\\n      <br></br>\\n      <span>val_7 is {val_7}.</span>\\n      <br></br>\\n      <span>val_8 is {val_8.toString()}.</span>\\n      <br></br>\\n      <span>val_9 is {val_9}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\\n\\n### Optional Chaining\\n\\n```jsx live\\nfunction Test(props) {\\n  const adventurer = {\\n    name: \\"Alice\\",\\n    cat: {\\n      name: \\"Dinah\\",\\n    },\\n  };\\n\\n  // adventurer.dog?.name \u5be6\u969b\u4e0a\u662f undefined\\n  // \u900f\u904e\u9019\u7a2e\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u7269\u4ef6\u6c92\u6709\u9700\u8981\u7684\u5c6c\u6027\u6642\u4e0d\u6703\u76f4\u63a5 error\\n  console.log(adventurer.dog?.name);\\n  const result = JSON.stringify(adventurer.dog?.name);\\n\\n  return (\\n    <div>\\n      <span>result is {result}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n### Array Method\\n\\n<Tabs>\\n  <TabItem value=\\"Map\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const datas = [1, 2, 3, 4, 5, 6];\\n  const targets = datas.map((el) => el * 2);\\n\\n  // \u539f\u59cb\u96c6\u5408\u4e0d\u6703\u6539\u8b8a\\n  const dataResult = JSON.stringify(datas);\\n  const targetResult = JSON.stringify(targets);\\n\\n  return (\\n    <div>\\n      <span>dataResult is {dataResult}.</span>\\n      <br></br>\\n      <span>targetResult is {targetResult}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n\u53ef\u4ee5\u7528\u4f86\u7576\u4f5c\u8cc7\u6599\u7684\u66f4\u65b0\uff0c\u539f\u59cb\u96c6\u5408\u4e0d\u6703\u88ab\u5f71\u97ff\u3002\\n\\n```jsx live\\nfunction Test(props) {\\n  const apples = [\\n    { id: 1, color: \\"red\\", size: 10 },\\n    { id: 2, color: \\"red\\", size: 15 },\\n  ];\\n  const updated = apples.map((apple) =>\\n    apple.id === 1 ? { ...apple, color: \\"blue\\" } : apple\\n  );\\n\\n  const applesResult = JSON.stringify(apples);\\n  const updatedResult = JSON.stringify(updated);\\n\\n  return (\\n    <div>\\n      <span>applesResult is {applesResult}.</span>\\n      <br></br>\\n      <span>updatedResult is {updatedResult}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n\\n  <TabItem value=\\"Filter\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const datas = [1, 2, 3, 4, 5, 6];\\n  const targets = datas.filter((el) => el < 4);\\n\\n  // \u539f\u59cb\u96c6\u5408\u4e0d\u6703\u6539\u8b8a\\n  const dataResult = JSON.stringify(datas);\\n  const targetResult = JSON.stringify(targets);\\n\\n  return (\\n    <div>\\n      <span>dataResult is {dataResult}.</span>\\n      <br></br>\\n      <span>targetResult is {targetResult}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n\u53ef\u4ee5\u7528\u4f86\u7576\u4f5c\u8cc7\u6599\u7684\u522a\u9664\uff0c\u539f\u59cb\u96c6\u5408\u4e0d\u6703\u88ab\u5f71\u97ff\u3002\\n\\n```jsx live\\nfunction Test(props) {\\n  const apples = [\\n    { id: 1, color: \\"red\\", size: 10 },\\n    { id: 2, color: \\"red\\", size: 15 },\\n  ];\\n  const updated = apples.filter((apple) => apple.id === 2);\\n\\n  const applesResult = JSON.stringify(apples);\\n  const updatedResult = JSON.stringify(updated);\\n\\n  return (\\n    <div>\\n      <span>applesResult is {applesResult}.</span>\\n      <br></br>\\n      <span>updatedResult is {updatedResult}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n\\n  <TabItem value=\\"Reduce\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const apples = [\\n    { id: 1, color: \\"red\\", size: 10 },\\n    { id: 2, color: \\"red\\", size: 15 },\\n  ];\\n\\n  // 1. \u8a2d\u5b9a\u8d77\u59cb\u503c\\n  // 2. \u6bcf\u8b80\u4e00\u7b46\uff0c\u5c31\u8655\u7406\u4e00\u6b21\u5167\u90e8\u51fd\u6578\u7684\u908f\u8f2f\uff0c\u8655\u7406\u5f8c\u7684\u503c\u653e\u5230 acc \u5167\u3002\\n  // 3. \u57f7\u884c\u7d50\u675f\u5f8c\u8fd4\u56de\\n  const totalSizes = apples.reduce((acc, apple) => acc + apple.size, 0);\\n\\n  return (\\n    <div>\\n      <span>totalSizesResult is {totalSizes}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n\\n  <TabItem value=\\"Sort\\">\\n\\n```jsx live\\nfunction Test(props) {\\n  const apples = [\\n    { id: 1, color: \\"red\\", size: 10 },\\n    { id: 3, color: \\"red\\", size: 65 },\\n    { id: 2, color: \\"red\\", size: 15 },\\n  ];\\n\\n  // sort \u6703\u6539\u8b8a\u539f\u59cb\u6578\u64da\\n  // a-b: \u7531\u5c0f\u5230\u5927\\n  // b-a: \u7531\u5927\u5230\u5c0f\\n  const sorted = apples.sort((a, b) => a.id - b.id);\\n\\n  return (\\n    <div>\\n      <span>apples is {JSON.stringify(apples)}.</span>\\n      <br></br>\\n      <span>sorted is {JSON.stringify(sorted)}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n```jsx live\\nfunction Test(props) {\\n  const apples = [\\n    { id: 1, color: \\"red\\", size: 10 },\\n    { id: 3, color: \\"red\\", size: 65 },\\n    { id: 2, color: \\"red\\", size: 15 },\\n  ];\\n\\n  // \u53ef\u4ee5\u900f\u904e slice \u907f\u514d\u6539\u8b8a\u539f\u59cb\u96c6\u5408\\n  const sorted = apples.slice().sort((a, b) => a.id - b.id);\\n\\n  return (\\n    <div>\\n      <span>apples is {JSON.stringify(apples)}.</span>\\n      <br></br>\\n      <span>sorted is {JSON.stringify(sorted)}.</span>\\n      <br></br>\\n    </div>\\n  );\\n}\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\\n### Promise && async / await\\n\\n\u975e\u540c\u6b65\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u4e0d\u7b49\u7684\u8a71\uff0c\u5c31\u6703\u5148\u5f80\u5f8c\u9762\u57f7\u884c\uff0c\u9019\u6642\u5019\u53ea\u6703\u5148\u56de\u50b3\u4e00\u500b`Promise`\uff0c\u589e\u52a0\u904b\u884c\u7684\u6548\u7387\u3002  \\n\u4e5f\u53ef\u4ee5\u900f\u904e\u7b49\u5f85\u7684\u65b9\u5f0f\uff0c\u7b49\u5230\u56de\u61c9\u5f8c\u518d\u5f80\u5f8c\u9762\u8655\u7406\u3002\\n\\n<Tabs>\\n  <TabItem value=\\"Return `Promise`\\">\\n\\n```js\\nasync function getTodos() {\\n  console.log(\\"Inner\\");\\n  const res = await fetch(\\"https://jsonplaceholder.typicode.com/todos/1\\");\\n  const data = await res.json();\\n\\n  return data;\\n}\\n\\nconst todos = getTodos();\\nconsole.log(todos);\\nconsole.log(\'Outter\');\\n\\n// Output\\n// -------------------------------------------------------------------\\n// \u200b\u200b\u200b\u200b\u200bQuokka \'script.js\' (node: v20.12.0)\u200b\u200b\u200b\u200b\\n\\n// \'Inner\' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:2:3\u200b\\n// Promise {...} \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200btodos\u200b\u200b\u200b \u200b02-javascript-review/script.js:10:1\u200b\\n// \'Outter\' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:11:1\u200b\\n// -------------------------------------------------------------------\\n```\\n\\n  </TabItem>\\n\\n  <TabItem value=\\"await method\\">\\n\\n```js\\nasync function getTodos() {\\n  console.log(\\"Inner\\");\\n  const res = await fetch(\\"https://jsonplaceholder.typicode.com/todos/1\\");\\n  const data = await res.json();\\n\\n  return data;\\n}\\n\\nconst todos = await getTodos();\\nconsole.log(todos);\\nconsole.log(\'Outter\');\\n\\n// Output\\n// -------------------------------------------------------------------\\n// \u200b\u200b\u200b\u200b\u200bQuokka \'script.js\' (node: v20.12.0)\u200b\u200b\u200b\u200b\\n\\n// \'Inner\' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:2:3\u200b\\n// { userId: 1, id: 1, title: \'delectus aut autem\', completed: false }\\n//   \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200btodos\u200b\u200b\u200b \u200b02-javascript-review/script.js:10:1\u200b\\n// \'Outter\' \u200b\u200b\u200b\u200b\u200bat \u200b\u200b\u200b\u200b\u200b\u200b02-javascript-review/script.js:11:1\u200b\\n// -------------------------------------------------------------------\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\\n## Reference\\n\\n[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)  \\n[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide)"},{"id":"/react/day-1-first-react-app","metadata":{"permalink":"/blog/react/day-1-first-react-app","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/day-1-first-react-app.md","source":"@site/blog/react/day-1-first-react-app.md","title":"[Day 1] \u7b2c\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f !","description":"\u5f9e 0 \u958b\u59cb\u7b2c 1 \u500b React \u61c9\u7528","date":"2024-08-01T10:29:00.000Z","tags":[{"inline":true,"label":"React","permalink":"/blog/tags/react"},{"inline":true,"label":"ZeroToHero","permalink":"/blog/tags/zero-to-hero"}],"readingTime":4.815,"hasTruncateMarker":true,"authors":[{"name":"deverqqqq","url":"https://github.com/deverqqqq","imageURL":"https://github.com/deverqqqq.png","key":"deverqqqq"}],"frontMatter":{"title":"[Day 1] \u7b2c\u4e00\u500b React \u61c9\u7528\u7a0b\u5f0f !","authors":["deverqqqq"],"tags":["React","ZeroToHero"],"date":"2024-08-01T10:29"},"unlisted":false,"prevItem":{"title":"[Day 2]\u958b\u767c\u74b0\u5883\u8a2d\u7f6e\u548c JS Review","permalink":"/blog/react/day-2-setup-and-js-review"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n```\\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255d\\n                    \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \\n                    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551        \u2588\u2588\u2551   \\n                    \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551   \\n                    \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d   \\n                                                             \\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557     \u2588\u2588\u2557    \\n                        \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d    \u2588\u2588\u2588\u2551    \\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d     \u255a\u2588\u2588\u2551    \\n                        \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d       \u2588\u2588\u2551    \\n                        \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551        \u2588\u2588\u2551    \\n                        \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d        \u255a\u2550\u255d    \\n                                                             \\n```\\n\\n\\n\x3c!--truncate--\x3e\\n\\n## \u5f9e 0 \u958b\u59cb\u7b2c 1 \u500b React \u61c9\u7528\\n\\n### \u958b\u767c\u74b0\u5883\\n\\n\u900f\u904e\u7dda\u4e0a\u7de8\u8f2f\u5668\uff0c\u53ef\u4ee5\u5728\u4e0d\u8a2d\u5b9a\u958b\u767c\u74b0\u5883\u7684\u524d\u63d0\u4e0b\uff0c\u7c21\u55ae\u4f7f\u7528\u7dda\u4e0a\u5de5\u5177\u9032\u884c\u958b\u767c\u3002\\n\\n[CodeSandbox](https://codesandbox.io/)\\n\\n\u8981\u5feb\u901f\u5efa\u7acb\u4e00\u500b React \u7bc4\u672c\uff0c\u53ef\u4ee5\u900f\u4e0b\u9762\u7684\u9023\u7d50\u524d\u5f80\u3002  \\n[react.new](https://react.new)\\n\\n### \u76ee\u6a19\\n\\n1. \u5efa\u7acb\u4e00\u500b\u53ef\u4ee5\u4e92\u52d5\u7db2\u9801\u3002\\n2. \u9801\u9762\u4e0a\u6709\u4e00\u500b\u6309\u9215\uff0c\u6309\u4e0b\u5f8c\u6703\u547c\u53eb API \u66ff\u63db\u8a72\u9801\u7684\u6a19\u984c\u5167\u5bb9\u3002\\n3. \u5728\u756b\u9762\u4e0a\u9700\u8981\u5448\u73fe\u5171\u6309\u4e0b\u5e7e\u6b21\u3002\\n\\n### Try Some React\\n\\n1. \u756b\u9762\u662f\u7531\u5404\u5f0f\u5404\u6a23\u7684\u5c0f\u7d44\u4ef6\u62fc\u6e4a\u800c\u6210\uff0c\u5c31\u50cf\u662f\u6a02\u9ad8\u4e00\u6a23\u3002\\n2. App.js: \u662f\u4e00\u500b\u7d44\u4ef6\uff0cReact \u7684\u7d44\u4ef6\u662f\u4e00\u500b\u65b9\u6cd5\uff0c\u5ba3\u544a\u6642\u9700\u8981 export\uff0c\u7136\u5f8c\u5728\u4f7f\u7528\u7684\u5730\u65b9\u505a import\u3002\\n3. \u7d44\u4ef6\u56de\u50b3\u7684\u5167\u5bb9\u662f JSX\uff0c\u4e00\u7a2e React \u4f7f\u7528\u7684\u8a9e\u6cd5\uff0chtml \u8ddf js \u7684\u7d44\u5408\u3002\\n4. `useState`: \u900f\u904e`\u8cc7\u6599`\u8ddf`\u8cc7\u6599\u4f86\u6e90`\u505a\u7d81\u5b9a\uff0c\u7576\u8cc7\u6599\u4f86\u6e90\u7570\u52d5\uff0c\u628a\u8cc7\u6599\u540c\u6b65\u5230\u756b\u9762\u4e0a\u3002\\n5. `useEffect`: \u53ef\u4ee5\u505a\u7b2c\u4e00\u6b21\u8f09\u5165\u7684\u89f8\u767c\u3002\\n\\n<Tabs>\\n  <TabItem value=\\"App.js\\">\\n\\n```js\\nimport { useEffect, useState } from \\"react\\";\\n\\n// \u9700\u8981\u88ab import \u6240\u4ee5\u9019\u908a\u8981\u5ba3\u544a export\\nexport default function App() {\\n  const [advice, setAdvice] = useState(\\"\\");\\n  const [count, setCount] = useState(0);\\n\\n  async function getAdvice() {\\n    const res = await fetch(\\"https://api.adviceslip.com/advice\\");\\n    const data = await res.json();\\n\\n    setAdvice(data.slip.advice);\\n    setCount((c) => c + 1);\\n  }\\n\\n  useEffect(function () {\\n    getAdvice();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <h1>{advice}</h1>\\n      <button onClick={getAdvice}>Get Advice</button>\\n      <Message count={count} />\\n    </div>\\n  );\\n}\\n\\n// Message \u55ae\u9664\u62c6\u4e00\u500b\u7d44\u4ef6\u51fa\u4f86\uff0c\u900f\u904e props \u53d6\u5f97\u53c3\u6578\u5167\u5bb9\\nfunction Message(props) {\\n  return (\\n    <p>\\n      You have read <strong>{props.count}</strong> pieces advices.{\\" \\"}\\n    </p>\\n  );\\n}\\n```\\n  </TabItem>\\n\\n  <TabItem value=\\"index.js\\">\\n\\n```js\\nimport { StrictMode } from \\"react\\";\\nimport { createRoot } from \\"react-dom/client\\";\\n\\n// \u8f09\u5165 App\\nimport App from \\"./App\\";\\n\\nconst rootElement = document.getElementById(\\"root\\");\\nconst root = createRoot(rootElement);\\n\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>\\n);\\n```\\n\\n  </TabItem>\\n</Tabs>\\n\\n## \u70ba\u4f55\u9700\u8981\u524d\u7aef\u6846\u67b6\\n\\n\u524d\u7aef\u57fa\u672c\u4e0a\u8981\u505a\u7684\u4e8b\u60c5\uff0c\u6700\u4e3b\u8981\u5c31\u662f\u628a`\u8cc7\u6599`\u900f\u904e`UI`\u5448\u73fe\u5728\u756b\u9762\u4e0a\u3002\u7576\u6211\u5011\u628a\u91cd\u9ede\u805a\u7126\u5728\u9019\u500b\u529f\u80fd\u4e0a\uff0c\u6703\u767c\u73fe\u50b3\u7d71\u7684\u505a\u6cd5 (ex: jQuery)\uff0c\u6703\u9700\u8981\u900f\u904e\u904d\u6b77\u6574\u500b DOM\uff0c\u627e\u5230\u76ee\u6a19\u7684\u5143\u4ef6\uff0c\u7136\u5f8c\u66f4\u65b0\u5167\u5bb9\uff0c\u7576\u756b\u9762\u4e0a\u7684\u5167\u5bb9\u5340\u584a\u8d8a\u4f86\u8d8a\u8907\u96dc\uff0c\u6bcf\u500b\u5340\u584a\u7684\u8cc7\u6599\u4f86\u6e90 API \u53ef\u80fd\u4e5f\u90fd\u4e0d\u4e00\u6a23\uff0c\u5c31\u7b97\u4e0d\u4f7f\u7528\u6846\u67b6\u7684\u4f5c\u6cd5\uff0c\u70ba\u4e86\u907f\u514d\u8907\u96dc\u5ea6\u548c\u53ef\u7dad\u8b77\u6027\uff0c\u6700\u7d42\u4e5f\u6703\u505a\u51fa\u985e\u4f3c\u524d\u7aef\u6846\u67b6\u7684\u6771\u897f\u3002\\n\\n\u5f9e\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u5230\uff0c\u76f8\u8f03\u65bc\u4e0d\u4f7f\u7528\u6846\u67b6\u7684\u5beb\u6cd5\uff0c\u9019\u7a2e\u505a\u6cd5\u53ef\u4ee5\u66f4\u4e7e\u6de8\u7684\u5207\u5206\u756b\u9762\u7684\u7d44\u4ef6\uff0c\u7136\u5f8c\u4e5f\u4e0d\u518d\u9700\u8981\u53bb\u627e\u5230\u5c0d\u61c9\u7684 DOM \u7136\u5f8c\u53bb\u57f7\u884c\u540c\u6b65\u8cc7\u6599\u3002\\n\\n## Why React?\\n\\n1. \u9748\u6d3b\u5ea6\u3002\\n2. \u6587\u4ef6\u5167\u5bb9\u8a73\u7d30\u4e14\u597d\u4e0a\u624b\uff0c\u76f8\u95dc\u7684\u5b78\u7fd2\u5167\u5bb9\u4e5f\u5f88\u8c50\u5bcc\u3002\\n3. \u4e0d\u55ae\u55ae\u505a\u7db2\u9801\u524d\u7aef\u958b\u767c\uff0c\u4e5f\u53ef\u4ee5\u7528\u4f86\u505a\u5176\u4ed6\u61c9\u7528\u3002(React Native)\\n\\n### React\\nReact \u662f\u4e00\u500b\u7528\u65bc\u69cb\u5efa\u4f7f\u7528\u8005\u754c\u9762\u7684 JavaScript \u51fd\u793a\u5eab\u3002\u5b83\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e00\u500b\u9ad8\u6548\u7684\u65b9\u5f0f\u4f86\u66f4\u65b0\u548c\u6e32\u67d3 UI \u7d44\u4ef6\u3002React \u672c\u8eab\u4e0d\u5305\u542b\u4efb\u4f55\u7279\u5b9a\u65bc\u5e73\u53f0\u7684\u4ee3\u78bc\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u4f5c\u70ba\u4e00\u500b\u62bd\u8c61\u5c64\uff0c\u5141\u8a31\u6211\u5011\u5728\u591a\u500b\u5e73\u53f0\u4e0a\u4f7f\u7528\u76f8\u540c\u7684\u908f\u8f2f\u4f86\u69cb\u5efa\u61c9\u7528\u7a0b\u5e8f\u3002\\n\\n### ReactDOM\\nReactDOM \u662f\u91dd\u5c0d Web \u5e73\u53f0\u7684\u7279\u5b9a\u5be6\u73fe\u3002\u5b83\u8ca0\u8cac\u5c07 React \u7d44\u4ef6\u6e32\u67d3\u5230\u700f\u89bd\u5668\u7684 DOM\uff08Document Object Model\uff09\u4e2d\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u4f7f\u7528 ReactDOM\uff0c\u5c31\u8868\u793a\u4f60\u6b63\u5728\u958b\u767c\u4e00\u500b Web \u61c9\u7528\u3002\\n\\n### \u5176\u4ed6\u6e32\u67d3\u5c64\\n- React Native\uff1a\u7528\u65bc\u79fb\u52d5\u61c9\u7528\u958b\u767c\uff0c\u5141\u8a31\u4f60\u4f7f\u7528\u76f8\u540c\u7684 React \u8a9e\u6cd5\u69cb\u5efa\u539f\u751f iOS \u548c Android \u61c9\u7528\u3002\\n- React Native for Windows and macOS\uff1a\u64f4\u5c55 React Native\uff0c\u4f7f\u5176\u53ef\u4ee5\u7528\u65bc\u958b\u767c\u684c\u9762\u61c9\u7528\u7a0b\u5e8f\u3002\\n- React 360\uff1a\u7528\u65bc\u69cb\u5efa\u865b\u64ec\u73fe\u5be6 (VR) \u61c9\u7528\u3002\\n- Ink\uff1a\u7528\u65bc\u69cb\u5efa\u547d\u4ee4\u884c\u754c\u9762 (CLI) \u61c9\u7528\u7a0b\u5e8f\u3002\\n\\n## Reference\\n[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)"}]}}')}}]);