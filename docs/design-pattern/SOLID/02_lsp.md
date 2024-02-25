---
title: 里氏替換原則
sidebar_label: 里氏替換原則
keywords: ['design pattern', 'Liskov Substitution Principle', 'LSP']
description: 說明里氏替換原則的定義，和實務上開發適用的情境和做法。
sidebar_position: 2
tags: ['design pattern']
---

## 定義
1. 定義 1
> If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when ol is substituted for o2 then S is a subtype of T.  
> 一個類別應該只有一個可以去異動的原因。

2. 定義 2
> Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.  
> 所有引用父類的地方必须能直接使用其子類。

## 說明
父類別出現的地方都可以用子類別替代，而且不會有任何的錯誤發生，使用者不需要知道是父類還是子類。  
不過反過來就不行，使用子類別的地方，不一定能夠用父類別去做取代。

## 實作建議
1. 子類別必須完全實現父類別的方法。
   > 無法滿足時，請使用其他的方式處理。  
   > ex: 可以使用不同的介面去做定義，或是另外開一個抽象類別獨立處理。
2. 使用父類別的地方可以用子類別取代；使用子類別的地方不一定能用父類別取代。
3. 覆寫或是實作父類別方法時，方法的參數範圍可以變大 (Design by Contract)
4. 覆寫或是實作父類別方法時，方法的輸出範圍可以縮小 (Design by Contract)

## 實例

### 需求
// ...

### 設計
// ...

## 效益 & 注意事項

### 效益
1. 如果父類別設計的足夠抽象，那衍生類別自然可以照著這個模板客製出想要的類別實作。
2. 父類別的功能可以做到重複利用。
3. 提高代碼的可擴展性，實現父類別的方法就可以做很多想做的事情。

### 注意事項
1. 繼承是侵入性的，只要繼承就必須擁有父類別的方法和屬性。
2. 繼承某方面也會讓程式失去靈活性，讓子類別在設計上多了不少約束。
3. 耦合性增強，當父類別被修改的時候，所有的子類別都會被影響，在父類別沒有妥善被設計好的狀況下，很常會需要進行大規模的重構。

## Reference
[設計模式之禪](https://www.sanmin.com.tw/product/index/004405914)