---
# slug: day-2-setup-and-js-review
title: '[Day 2]開發環境設置和 JS Review'
authors: [deverqqqq]
tags: [React, ZeroToHero]
date: 2024-08-02T14:26
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```
                    ██████╗ ███████╗ █████╗  ██████╗████████╗
                    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
                    ██████╔╝█████╗  ███████║██║        ██║   
                    ██╔══██╗██╔══╝  ██╔══██║██║        ██║   
                    ██║  ██║███████╗██║  ██║╚██████╗   ██║   
                    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                             
                        ██████╗  █████╗ ██╗   ██╗    ██████╗ 
                        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ╚════██╗
                        ██║  ██║███████║ ╚████╔╝      █████╔╝
                        ██║  ██║██╔══██║  ╚██╔╝      ██╔═══╝ 
                        ██████╔╝██║  ██║   ██║       ███████╗
                        ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝
                                                             
```

<!--truncate-->

## 開發環境設置

1. [VSCode](https://code.visualstudio.com/)
    - Extension
        - [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

        - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
        > VSCode 設定：`default formatter`改為 Prettier。  
        > 可以設定儲存時觸發，但我個人偏好手動按排版。(alt+shift+F)

        - [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
        
2. [Node.js](https://nodejs.org/en)

## Create React App

這個目前已經不再被建議使用在正式的專案上面，因為初始化相依太多的套件，難以針對不同的需求去做調整，但是用來作為學習 React 的工具還是很好用的，可以在不用複雜設置的前提下，開箱即用。

目前有幾個[官方推薦](https://react.dev/learn/start-a-new-react-project)的**全端框架**。

1. [Next.js](https://nextjs.org/)
2. [Remix](https://remix.run/)

建置工具

1. [Vite](https://vitejs.dev/)

### 使用 npm 套件快速鍵立 React App

```ps1
## my-app 請替換成你的專案名稱
npx create-react-app my-app
```

## Javascript Review

### Assignment Operators

| 名稱     | 簡化的運算子 | 意義        |
| -------- | ------------ | ----------- |
| 賦值     | `x = y`      | `x = y`     |
| 加法賦值 | `x += y`     | `x = x + y` |
| 減法賦值 | `x -= y`     | `x = x - y` |
| 乘法賦值 | `x *= y`     | `x = x * y` |
| 除法賦值 | `x /= y`     | `x = x / y` |
| 餘數賦值 | `x %= y`     | `x = x % y` |

### Destructuring

<Tabs>
  <TabItem value="集合解構">

```jsx live
function Test(props) {
  const data = [
    {
      color: "red",
      size: 10,
      weight: 22,
    },
    {
      color: "green",
      size: 8,
      weight: 16,
    },
    {
      color: "blue",
      size: 15,
      weight: 55,
    },
  ];

  // 按照順序回傳
  const [first, second] = data;
  const firstResult = JSON.stringify(first);
  const secondResult = JSON.stringify(second);

  return (
    <div>
      <span>first is {firstResult}.</span>
      <br></br>
      <span>second is {secondResult}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>

  <TabItem value="Rest Pattern">

```jsx live
function Test(props) {
  const data = [
    {
      color: "red",
      size: 10,
      weight: 22,
    },
    {
      color: "green",
      size: 8,
      weight: 16,
    },
    {
      color: "blue",
      size: 15,
      weight: 55,
    },
  ];
  const [first, ...others] = data;
  const firstResult = JSON.stringify(first);
  const otherResult = JSON.stringify(others);

  return (
    <div>
      <span>first is {firstResult}.</span>
      <br></br>
      <span>other is {otherResult}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>

  <TabItem value="物件解構">

```jsx live
function Test(props) {
  const data = {
    color: "red",
    size: 10,
    weight: 22,
  };

  // 名稱一樣可以解構
  const { color, weight } = data;

  return (
    <div>
      <span>color is {color}.</span>
      <br></br>
      <span>weight is {weight}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>
</Tabs>

### Spread Operator

<Tabs>
  <TabItem value="Spread">

```jsx live
function Test(props) {
  const data = [
    {
      color: "red",
      size: 10,
      weight: 22,
    },
    {
      color: "green",
      size: 8,
      weight: 16,
    },
    {
      color: "blue",
      size: 15,
      weight: 55,
    },
  ];
  const [first, ...others] = data;
  const newArray = [...others, { color: "black", size: 99, weight: 99 }];
  const result = JSON.stringify(newArray);

  return (
    <div>
      <span>result is {result}.</span>
    </div>
  );
}
```

  </TabItem>
</Tabs>

### Conditional (Ternary) Operator

```jsx live
function Test(props) {
  const before = 10;
  const after = 20;
  const result =
    before > after
      ? `${before} is bigger than ${after}`
      : `${after} is bigger than ${before}`;

  return (
    <div>
      <span>result is {result}.</span>
    </div>
  );
}
```

### Logical Operator

<Tabs>
  <TabItem value="AND">

```jsx live
function Test(props) {
  const val_1 = true && true; // t && t returns true
  const val_2 = true && false; // t && f returns false
  const val_3 = false && true; // f && t returns false
  const val_4 = false && 3 === 4; // f && f returns false
  const val_5 = "Cat" && "Dog"; // t && t returns "Dog"
  const val_6 = false && "Cat"; // f && t returns false
  const val_7 = "Cat" && false; // t && f returns false
  const val_8 = "" && false; // f && f returns ""
  const val_9 = false && ""; // f && f returns false

  return (
    <div>
      <span>val_1 is {val_1.toString()}.</span>
      <br></br>
      <span>val_2 is {val_2.toString()}.</span>
      <br></br>
      <span>val_3 is {val_3.toString()}.</span>
      <br></br>
      <span>val_4 is {val_4.toString()}.</span>
      <br></br>
      <span>val_5 is {val_5}.</span>
      <br></br>
      <span>val_6 is {val_6}.</span>
      <br></br>
      <span>val_7 is {val_7.toString()}.</span>
      <br></br>
      <span>val_8 is {val_8}.</span>
      <br></br>
      <span>val_9 is {val_9.toString()}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>

  <TabItem value="OR">

```jsx live
function Test(props) {
  const val_1 = true || true; // t || t returns true
  const val_2 = false || true; // f || t returns true
  const val_3 = true || false; // t || f returns true
  const val_4 = false || 3 === 4; // f || f returns false
  const val_5 = "Cat" || "Dog"; // t || t returns "Cat"
  const val_6 = false || "Cat"; // f || t returns "Cat"
  const val_7 = "Cat" || false; // t || f returns "Cat"
  const val_8 = "" || false; // f || f returns false
  const val_9 = false || ""; // f || f returns ""

  return (
    <div>
      <span>val_1 is {val_1.toString()}.</span>
      <br></br>
      <span>val_2 is {val_2.toString()}.</span>
      <br></br>
      <span>val_3 is {val_3.toString()}.</span>
      <br></br>
      <span>val_4 is {val_4.toString()}.</span>
      <br></br>
      <span>val_5 is {val_5}.</span>
      <br></br>
      <span>val_6 is {val_6}.</span>
      <br></br>
      <span>val_7 is {val_7}.</span>
      <br></br>
      <span>val_8 is {val_8.toString()}.</span>
      <br></br>
      <span>val_9 is {val_9}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>
</Tabs>


### Optional Chaining

```jsx live
function Test(props) {
  const adventurer = {
    name: "Alice",
    cat: {
      name: "Dinah",
    },
  };

  // adventurer.dog?.name 實際上是 undefined
  // 透過這種方式，可以在物件沒有需要的屬性時不會直接 error
  console.log(adventurer.dog?.name);
  const result = JSON.stringify(adventurer.dog?.name);

  return (
    <div>
      <span>result is {result}.</span>
      <br></br>
    </div>
  );
}
```

### Array Method

<Tabs>
  <TabItem value="Map">

```jsx live
function Test(props) {
  const datas = [1, 2, 3, 4, 5, 6];
  const targets = datas.map((el) => el * 2);

  // 原始集合不會改變
  const dataResult = JSON.stringify(datas);
  const targetResult = JSON.stringify(targets);

  return (
    <div>
      <span>dataResult is {dataResult}.</span>
      <br></br>
      <span>targetResult is {targetResult}.</span>
      <br></br>
    </div>
  );
}
```

可以用來當作資料的更新，原始集合不會被影響。

```jsx live
function Test(props) {
  const apples = [
    { id: 1, color: "red", size: 10 },
    { id: 2, color: "red", size: 15 },
  ];
  const updated = apples.map((apple) =>
    apple.id === 1 ? { ...apple, color: "blue" } : apple
  );

  const applesResult = JSON.stringify(apples);
  const updatedResult = JSON.stringify(updated);

  return (
    <div>
      <span>applesResult is {applesResult}.</span>
      <br></br>
      <span>updatedResult is {updatedResult}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>

  <TabItem value="Filter">

```jsx live
function Test(props) {
  const datas = [1, 2, 3, 4, 5, 6];
  const targets = datas.filter((el) => el < 4);

  // 原始集合不會改變
  const dataResult = JSON.stringify(datas);
  const targetResult = JSON.stringify(targets);

  return (
    <div>
      <span>dataResult is {dataResult}.</span>
      <br></br>
      <span>targetResult is {targetResult}.</span>
      <br></br>
    </div>
  );
}
```

可以用來當作資料的刪除，原始集合不會被影響。

```jsx live
function Test(props) {
  const apples = [
    { id: 1, color: "red", size: 10 },
    { id: 2, color: "red", size: 15 },
  ];
  const updated = apples.filter((apple) => apple.id === 2);

  const applesResult = JSON.stringify(apples);
  const updatedResult = JSON.stringify(updated);

  return (
    <div>
      <span>applesResult is {applesResult}.</span>
      <br></br>
      <span>updatedResult is {updatedResult}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>

  <TabItem value="Reduce">

```jsx live
function Test(props) {
  const apples = [
    { id: 1, color: "red", size: 10 },
    { id: 2, color: "red", size: 15 },
  ];

  // 1. 設定起始值
  // 2. 每讀一筆，就處理一次內部函數的邏輯，處理後的值放到 acc 內。
  // 3. 執行結束後返回
  const totalSizes = apples.reduce((acc, apple) => acc + apple.size, 0);

  return (
    <div>
      <span>totalSizesResult is {totalSizes}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>

  <TabItem value="Sort">

```jsx live
function Test(props) {
  const apples = [
    { id: 1, color: "red", size: 10 },
    { id: 3, color: "red", size: 65 },
    { id: 2, color: "red", size: 15 },
  ];

  // sort 會改變原始數據
  // a-b: 由小到大
  // b-a: 由大到小
  const sorted = apples.sort((a, b) => a.id - b.id);

  return (
    <div>
      <span>apples is {JSON.stringify(apples)}.</span>
      <br></br>
      <span>sorted is {JSON.stringify(sorted)}.</span>
      <br></br>
    </div>
  );
}
```

```jsx live
function Test(props) {
  const apples = [
    { id: 1, color: "red", size: 10 },
    { id: 3, color: "red", size: 65 },
    { id: 2, color: "red", size: 15 },
  ];

  // 可以透過 slice 避免改變原始集合
  const sorted = apples.slice().sort((a, b) => a.id - b.id);

  return (
    <div>
      <span>apples is {JSON.stringify(apples)}.</span>
      <br></br>
      <span>sorted is {JSON.stringify(sorted)}.</span>
      <br></br>
    </div>
  );
}
```

  </TabItem>
</Tabs>

### Promise && async / await

非同步的方法，如果不等的話，就會先往後面執行，這時候只會先回傳一個`Promise`，增加運行的效率。  
也可以透過等待的方式，等到回應後再往後面處理。

<Tabs>
  <TabItem value="Return `Promise`">

```js
async function getTodos() {
  console.log("Inner");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return data;
}

const todos = getTodos();
console.log(todos);
console.log('Outter');

// Output
// -------------------------------------------------------------------
// ​​​​​Quokka 'script.js' (node: v20.12.0)​​​​

// 'Inner' ​​​​​at ​​​​​​02-javascript-review/script.js:2:3​
// Promise {...} ​​​​​at ​​​​​​​​todos​​​ ​02-javascript-review/script.js:10:1​
// 'Outter' ​​​​​at ​​​​​​02-javascript-review/script.js:11:1​
// -------------------------------------------------------------------
```

  </TabItem>

  <TabItem value="await method">

```js
async function getTodos() {
  console.log("Inner");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return data;
}

const todos = await getTodos();
console.log(todos);
console.log('Outter');

// Output
// -------------------------------------------------------------------
// ​​​​​Quokka 'script.js' (node: v20.12.0)​​​​

// 'Inner' ​​​​​at ​​​​​​02-javascript-review/script.js:2:3​
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
//   ​​​​​at ​​​​​​​​todos​​​ ​02-javascript-review/script.js:10:1​
// 'Outter' ​​​​​at ​​​​​​02-javascript-review/script.js:11:1​
// -------------------------------------------------------------------
```

  </TabItem>
</Tabs>

## Reference

[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)  
[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide)
