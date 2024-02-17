---
title: 草稿
sidebar_label: 草稿
keywords: ["unit test"]
description: 草稿
sidebar_position: 3
tags: [草稿]
draft: true
---

### 滿足條件

## 成功進行 TDD 的三種核心技能
1. 僅僅做到先撰寫測試，並不能保證測試是可維護、可讀且可靠的。
2. 僅僅做到撰寫出可維護、可讀、可靠的測試，並不能保證你能獲得測試先行的各種好處。
3. 僅僅做到測試先行且測試可讀、可維護、可靠，並不能保證你能產出一個設計完善的系統。

## 單元測試命名

測試類別：
`{nameof(sut)}Tests`

測試方法 :
UnitOfWorkName: 被測試的方法、一組方法或一組類別。
Scenario: 情境，例如「登入失敗」、「無效的使用者」、「密碼正確」。
ExpectedBehavior: 對被測試方法行為的預期。

## Code Convention
1. 建立測試類別、專案和方法的慣例：對每個待測試類別建立對應的測試類別，對每個待測試的專案建立 個測試專案（整合測試專案應與這種對應的測試專案分
開），對每個工作單元（可以小到是一個方法，也可以大到是幾個類別的協作）建立至少一個測試方法。
- 使用下列的 模式 以便讓你的命名 更好懂
`[UnitOfWorkl_[Scenario]_[ExpectedBehavior]`
- 使用工廠方法來讓測試能重用程式，例如那些用來初始化和建立所有測試都要使用到的物件的程式。




## 參考書籍

[Gerard Meszaros: xUnit Test Patterns: Refactoring Test Code](https://www.amazon.com/xUnit-Test-Patterns-Refactoring-Code/dp/0131495054)
[Dependency Injection in .NET](https://www.manning.com/books/dependency-injection-in-dot-net)
[Working Effectively with Legacy Code](https://www.tenlong.com.tw/products/9789864344000?list_name=srh)


## 隔離 (模擬) 框架

