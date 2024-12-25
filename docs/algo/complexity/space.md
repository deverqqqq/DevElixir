---
title: 空間複雜度
sidebar_label: 空間複雜度
keywords: [algo, algorithm, complexity]
description: 空間複雜度
sidebar_position: 2
tags: [algo, complexity]
---

## 定義
算法在執行過程中使用的記憶體空間。

1. 輸入空間：用於儲存輸入資料。
2. 暫存空間：用於儲存算法在執行過程中的變數、物件、函式上下文等資料。  
3. 輸出空間：用於儲存輸出資料。

一般情況下，空間複雜度的統計範圍是**暫存空間**加上**輸出空間**。

與[時間複雜度](time.md)不同，因為記憶體的條件是固定的，必須確保記憶體用量不會超過需要的上限，空間複雜度關注的是整個執行過程中，可能的最大成本。

## Reference
https://www.hello-algo.com/zh-hant/chapter_computational_complexity/space_complexity/