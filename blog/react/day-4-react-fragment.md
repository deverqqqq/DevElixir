---
# slug: day-4-react-fragment
title: '[Day 4] React Fragment'
authors: [deverqqqq]
tags: [React, ZeroToHero]
date: 2024-08-06T09:26
---

```
                    ██████╗ ███████╗ █████╗  ██████╗████████╗
                    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
                    ██████╔╝█████╗  ███████║██║        ██║   
                    ██╔══██╗██╔══╝  ██╔══██║██║        ██║   
                    ██║  ██║███████╗██║  ██║╚██████╗   ██║   
                    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
                                                             
                        ██████╗  █████╗ ██╗   ██╗    ██╗  ██╗
                        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██║  ██║
                        ██║  ██║███████║ ╚████╔╝     ███████║
                        ██║  ██║██╔══██║  ╚██╔╝      ╚════██║
                        ██████╔╝██║  ██║   ██║            ██║
                        ╚═════╝ ╚═╝  ╚═╝   ╚═╝            ╚═╝
                                                             
```

<!--truncate-->

## Fragment

每一個 React 組件都只能回傳一個元素，當我們希望回傳的內容有多個元素的時候，可以透過`Fragment`把多個元素 Group 再一起，但是不會增加額外的 div。

```jsx
function Post() {
  return (
    <>
      <PostTitle />
      <PostBody />
    </>
  );
}
```

## Reference
[The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)  
[Fragment](https://react.dev/reference/react/Fragment)