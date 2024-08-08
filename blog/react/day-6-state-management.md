---
# slug: day-6-thinking-in-react
title: '[Day 6] State Management'
authors: [deverqqqq]
tags: [React, ZeroToHero]
date: 2024-08-08T11:41
---

```
                    ██████╗ ███████╗ █████╗  ██████╗████████╗                     
                    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝                     
                    ██████╔╝█████╗  ███████║██║        ██║                        
                    ██╔══██╗██╔══╝  ██╔══██║██║        ██║                        
                    ██║  ██║███████╗██║  ██║╚██████╗   ██║                        
                    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝                        
                                                                                  
                        ██████╗  █████╗ ██╗   ██╗     ██████╗                     
                        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔════╝                     
                        ██║  ██║███████║ ╚████╔╝     ███████╗                     
                        ██║  ██║██╔══██║  ╚██╔╝      ██╔═══██╗                    
                        ██████╔╝██║  ██║   ██║       ╚██████╔╝                    
                        ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═════╝                     

```

<!--truncate-->

## State Management

定義要在何時建立各個部分的狀態、需要哪些類型的狀態、每個狀態放置在哪裡，以及資料如何在應用程式中傳遞。

### Local / Global State

| Local State                                    | Global State                  |
| :--------------------------------------------- | :---------------------------- |
| State 只被部分的 Component 使用                | 每個 Component 都可以取得使用 |
| 定義在 Component 內，只有自己和 Child 可以取得 |                               |
| 除非必要，否則一律都用 Local State             |                               |

### 使用時機

```mermaid
flowchart TB
    A[需要儲存資料]
    C[使用 const]
    B{{資料是否會隨時間或是在某一個時間點改變}}
    D{{能否從現有的 State 或是 Props 計算取得}}
    E[導出狀態]
    F{{是否需要重新渲染 Component}}
    G[Ref]
    H[在 Component 內產生新的 State]

    A --> B
    B -- 否 --> C
    B -- 是 --> D
    D -- 否 --> F
    D -- 是 --> E
    F -- 否 --> G
    F -- 是 --> H
```

### 存取範圍

```mermaid
flowchart TB
    I{{只被自己的 Component 使用}}
    J[保留在 Component 內]
    K{{需要被 Child Component 使用}}
    L[透過 Props 傳遞]
    M{{需要被相鄰的 Component 使用}}
    N[提升狀態至 Common Parent Component]
    O[Global State!?]

    I -- 是 --> J
    I -- 否 --> K
    K -- 是 --> L
    K -- 否 --> M
    M -- 是 --> N
    M -- 否 --> O
```

## Derived State

從 Component 內現有的 Props & States 計算出的狀態。

<details>
<summary>Don't Do This!!!</summary>

```js
const [cart, setCart] = useState([
  { name: "JavaScript Course", price: 15.99 },
  { name: "Node.js Bootcamp", price: 14.99 },
]);

// 為了取得 numItems 和 totalPrice，多定義兩個 State
// 一方面是沒必要，另外一方面是這樣會導致這個 Component State 改變時，需要渲染三次
const [numItems, setNumItems] = useState(2);
const [totalPrice, setTotalPrice] = useState(30.98);
```

</details>

```js
const [cart, setCart] = useState([
  { name: "JavaScript Course", price: 15.99 },
  { name: "Node.js Bootcamp", price: 14.99 },
]);

// Re-Render 的時候會重新呼叫該方法，所以用 cart 的內容取得資料就好
const numItems = cart.length;
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
```

## Reference
[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)