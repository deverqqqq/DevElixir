---
# slug: day-1-first-react-app
title: '[Day 1] 第一個 React 應用程式 !'
authors: [deverqqqq]
tags: [React, ZeroToHero]
date: 2024-08-01T10:29
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
                                                             
                        ██████╗  █████╗ ██╗   ██╗     ██╗    
                        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ███║    
                        ██║  ██║███████║ ╚████╔╝     ╚██║    
                        ██║  ██║██╔══██║  ╚██╔╝       ██║    
                        ██████╔╝██║  ██║   ██║        ██║    
                        ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═╝    
                                                             
```


<!--truncate-->

## 從 0 開始第 1 個 React 應用

### 開發環境

透過線上編輯器，可以在不設定開發環境的前提下，簡單使用線上工具進行開發。

[CodeSandbox](https://codesandbox.io/)

要快速建立一個 React 範本，可以透下面的連結前往。  
[react.new](https://react.new)

### 目標

1. 建立一個可以互動網頁。
2. 頁面上有一個按鈕，按下後會呼叫 API 替換該頁的標題內容。
3. 在畫面上需要呈現共按下幾次。

### Try Some React

1. 畫面是由各式各樣的小組件拼湊而成，就像是樂高一樣。
2. App.js: 是一個組件，React 的組件是一個方法，宣告時需要 export，然後在使用的地方做 import。
3. 組件回傳的內容是 JSX，一種 React 使用的語法，html 跟 js 的組合。
4. `useState`: 透過`資料`跟`資料來源`做綁定，當資料來源異動，把資料同步到畫面上。
5. `useEffect`: 可以做第一次載入的觸發。

<Tabs>
  <TabItem value="App.js">

```js
import { useEffect, useState } from "react";

// 需要被 import 所以這邊要宣告 export
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

// Message 單除拆一個組件出來，透過 props 取得參數內容
function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces advices.{" "}
    </p>
  );
}
```
  </TabItem>

  <TabItem value="index.js">

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 載入 App
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

  </TabItem>
</Tabs>

## 為何需要前端框架

前端基本上要做的事情，最主要就是把`資料`透過`UI`呈現在畫面上。當我們把重點聚焦在這個功能上，會發現傳統的做法 (ex: jQuery)，會需要透過遍歷整個 DOM，找到目標的元件，然後更新內容，當畫面上的內容區塊越來越複雜，每個區塊的資料來源 API 可能也都不一樣，就算不使用框架的作法，為了避免複雜度和可維護性，最終也會做出類似前端框架的東西。

從上面的例子可以看到，相較於不使用框架的寫法，這種做法可以更乾淨的切分畫面的組件，然後也不再需要去找到對應的 DOM 然後去執行同步資料。

## Why React?

1. 靈活度。
2. 文件內容詳細且好上手，相關的學習內容也很豐富。
3. 不單單做網頁前端開發，也可以用來做其他應用。(React Native)

### React
React 是一個用於構建使用者界面的 JavaScript 函示庫。它主要提供了一個高效的方式來更新和渲染 UI 組件。React 本身不包含任何特定於平台的代碼，因此它可以作為一個抽象層，允許我們在多個平台上使用相同的邏輯來構建應用程序。

### ReactDOM
ReactDOM 是針對 Web 平台的特定實現。它負責將 React 組件渲染到瀏覽器的 DOM（Document Object Model）中。因此，如果你使用 ReactDOM，就表示你正在開發一個 Web 應用。

### 其他渲染層
- React Native：用於移動應用開發，允許你使用相同的 React 語法構建原生 iOS 和 Android 應用。
- React Native for Windows and macOS：擴展 React Native，使其可以用於開發桌面應用程序。
- React 360：用於構建虛擬現實 (VR) 應用。
- Ink：用於構建命令行界面 (CLI) 應用程序。

## Reference
[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)
