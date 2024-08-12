---
# slug: day-8-component-design
title: '[Day 8] Component Desgin'
authors: [deverqqqq]
tags: [React, ZeroToHero]
date: 2024-08-12T13:45
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
                                                             
                        ██████╗  █████╗ ██╗   ██╗     █████╗ 
                        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗
                        ██║  ██║███████║ ╚████╔╝     ╚█████╔╝
                        ██║  ██║██╔══██║  ╚██╔╝      ██╔══██╗
                        ██████╔╝██║  ██║   ██║       ╚█████╔╝
                        ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚════╝ 
                                                             
```

<!--truncate-->

## Component GuideLine

1. Logical separation of content/layout  
當你覺得 Component 的 Content 和 Layout 似乎不屬於一組 Component 的內容  
=> 應該要拆解出新 Component

2. Reusability  
如果你想要重複使用這個 Component 內的某一個部分  
=> 應該要拆解出新 Component

3. Responsibilities / complexity
    - 檢查 Component 是否背負太多職責
    - 檢查 Component 是否太過於複雜
    - 檢查 Component 是否有太多的 States 或是 Props

    => 應該要拆解出新 Component

4. Personal coding style

:::warning
建立越多的 Component，抽象的成本越高，需要花更多的精力去做閱讀，所以一定要在可維護性、可用性、開發效率上做取捨。
:::

## Component Category

| Stateless/ Presentational |  Stateful  |        Structural        |
| :-----------------------: | :--------: | :----------------------: |
|         No State          | Have State | Pages / Layouts/ Screens |
| Usually Small & Reusable  |  Reuseble  |    Huge / Non-Usable     |

## Prop Drilling

當有兩個不同分支的 Component 需要一樣的屬性去做內容的呈現時，因為 React 是單向數據流，所以需要把 State 提升到第一個共用的 Component 上面，會造成屬性透過 props 一直傳遞。

## Component Composition

透過 Children Prop 傳遞要鑲嵌的 Component。

<Tabs>
  <TabItem value="SuccessModal">

```js
function Model() {
  return (
    <div className="modal">
      <Success />
    </div>
  );
}

function Success() {
  return <p>Success Message</p>;
}
```

  </TabItem>

  <TabItem value="ErrorModel">

```js
function Model() {
  return (
    <div className="modal">
      <Error />
    </div>
  );
}

function Error() {
  return <p>Error Message</p>;
}
```

  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="Model">

```js
function Model({children}) {
  return (
    <div className="modal">
      {children}
    </div>
  );
}

// <Model>
//   <Success />
// </Model>;

// <Model>
//   <Success />
// </Error>;
```

  </TabItem>

  <TabItem value="SuccessModel">

```js
function Success(){
    return <p>Success Message</p>;
}
```

  </TabItem>

  <TabItem value="ErrorModel">

```js
function Error() {
  return <p>Error Message</p>;
}
```

  </TabItem>
</Tabs>

## Reference
[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)  
[Props Drilling](https://www.freecodecamp.org/news/prop-drilling-in-react-explained-with-examples/)
