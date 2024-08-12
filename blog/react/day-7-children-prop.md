---
# slug: day-7-children-prop
title: '[Day 7] Children Prop'
authors: [deverqqqq]
tags: [React, ZeroToHero]
date: 2024-08-09T09:32
---

```
                    ██████╗ ███████╗ █████╗  ██████╗████████╗
                    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
                    ██████╔╝█████╗  ███████║██║        ██║   
                    ██╔══██╗██╔══╝  ██╔══██║██║        ██║   
                    ██║  ██║███████╗██║  ██║╚██████╗   ██║   
                    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                             
                        ██████╗  █████╗ ██╗   ██╗    ███████╗
                        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ╚════██║
                        ██║  ██║███████║ ╚████╔╝         ██╔╝
                        ██║  ██║██╔══██║  ╚██╔╝         ██╔╝ 
                        ██████╔╝██║  ██║   ██║          ██║  
                        ╚═════╝ ╚═╝  ╚═╝   ╚═╝          ╚═╝  
                                                             
```

<!--truncate-->

## Children Prop

React 內建的一種 Prop，可以接收來自 Component 標籤範圍內的內容。內容可以是一邊的文字，或是 JSX 都可以，概念上跟 Html 的標籤一致，只是會把內容自動放到 Child Component 的 children 上面。

```jsx
import Avatar from './Avatar.js';

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

// 透過解構式直接拿 children
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

## Reference
[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)  
[Passing JSX As Children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
