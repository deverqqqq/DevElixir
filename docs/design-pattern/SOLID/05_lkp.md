---
title: 最小知識原則
sidebar_label: 最小知識原則
keywords: ['design pattern', 'Least Knowledge Principle', 'LKP']
description: 說明最小知識原則的定義，和實務上開發適用的情境和做法。
sidebar_position: 5
tags: ['design pattern']
draft: true
---

## 定義
> Only talk to your immediate friends.

## 說明
簡單來說就是要降低類別之間的依賴耦合。

## 實作建議
1. 只和直接的朋友交流
   > 直接的朋友指的是：出現在屬性或是欄位的型別、方法的輸入輸出型別，簡單來說就是這個類別直接相依的型別。
2. 

## 實例

### 需求
// ...

### 設計
// ...

## 效益 & 注意事項

### 效益
1. 降低耦合
   只有降低耦合後，才可以讓類別的可重用性提高。

### 注意事項
1. 這樣的設計會產生許多中間類，或是跳轉類別，導致系統的複雜性提高，要注意好權衡設計，做到結構清新並且高內聚低耦合。
2. 一個系統的成功與否，不僅僅是一個標準或是原則可以決定的，雖然該原則要求設計上可以解除耦合，但在採用時需要反覆權衡，如果強硬套上這個原則，導致系統異常複雜，就是過猶不及。

## Reference
[設計模式之禪](https://www.sanmin.com.tw/product/index/004405914)