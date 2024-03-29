---
title: 單一職責原則
sidebar_label: 單一職責原則
keywords: ['design pattern', 'Single Repository Principle', 'SRP']
description: 說明單一職責原則的定義，和實務上開發適用的情境和做法。
sidebar_position: 1
tags: ['design pattern']
---

## 定義
> There should never be more than one reason for a class to change.   
> 一個類別應該只有一個可以去異動的原因。

## 說明
定義非常淺顯易懂，意思是當我們設計類別的時候，要能夠限縮好這個類別的邊界，定義好該做的事情，而不是把各式各樣的事情都放到個類別內。  

當然，在實務上要完成這件事情很困難，因為如果要清楚的定義單一職責，你必須先定義好，什麼樣的職責才夠單一，甚麼範圍的職責才夠單一，所以哪天如果想和同事吵架，你可以打開對方的 code 然後開始質疑他的設計，你這樣根本不符合單一職責，然後，就開始無止盡的設計大戰了🤓。  

甚至我們可以把這個概念再做進一步延伸，我定義的每個方法，真的都有滿足單一職責嗎？

## 實作建議
1. 不要把 SRP 想成是類別專屬的，我們應該把這個概念的衍生到程式開發的習慣內，時時檢查自己的方法、類別，甚至是服務本身，多去思考才會知道在目前的情境下，要怎麼切分職責才會比較好。
2. 不要追求正確的答案，設計本身是很難有正確答案的，但是掌握好大方向，後續要做重構或是調整，才不會因為單一物件太過複雜導致很難重構。
3. 先從大方向著手，然後再慢慢往細項去做拆解，一步一步才能從過程中，及時發現問題並修復，如果一開始就嘗試拆分得很細。
4. 職責的區分，可以從業務邏輯下手，也是系統底層功能，如何定義職責，取決於開發的功能是什麼。
## 實例

### 需求
// ...

### 設計
// ...

## 效益 & 注意事項

### 效益
1. 降低類別的複雜度，每個功能的邊界很好的被定義出來。
2. 每個功能/類別的複查性降低，自然提高可讀性，可讀性提高，自然也會提高可維護性。
3. 降低需求變更導致的風險。
   > 一個介面的功能只影響到少數幾個關聯的類別，減少牽一髮動全身的狀況出現。  
   > 對系統的擴展性或維護性都會有很大的幫助。

### 注意事項
1. 過度應用該原則可能會讓類別破碎，一個功能的實現會拆在不同的類別內，反倒提升系統複雜度。
2. 職責的範圍，可能還需要搭配 DomainKnowhow 才會有辦法確認，沒有明確的答案告訴你這樣是否是乾淨的單一職責，只能從實作和後續的回饋來做確認。

## Reference
[設計模式之禪](https://www.sanmin.com.tw/product/index/004405914)