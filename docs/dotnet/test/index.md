---
title: Index
sidebar_label: Index
keywords: [dotnet, test, 測試]
description: 在 dotnet 平台進行測試的相關內容索引
sidebar_position: 1
tags: [dotnet, "測試", "單元測試", "整合測試", "負載測試"]
---

# Intro

小至一個方法，大至一個系統，當我們開發好之後，為了確保開發的內容符合預期，會進行各式各樣的測試，當後續需求變更，再次調整程式，又要把之前的測試全部在做一次，避免程式開發的過程中，不小心把本來的功能改壞。從上面的說明可以看出，但我們的系統越大，功能越複雜，要做好測試這件事情就會更困難且更費時，要如何把測試這件事情也一併的系統化與自動化，是這個單元要說明的。

## Mindmap

```mermaid
mindmap
  root((軟體測試))
    類型
      單元測試
        定義[最小可測試單元的測試]
        MSTest, NUnit, XUnit
      整合測試
        定義[模組間互動的測試]
        TestServer
      端對端測試
        定義[系統整體的測試，通常是人工，透過實際操作進行測試]
        Selenium
      效能測試
        定義[測試系統性能，如回應時間和吞吐量]
        BenchmarkDotNet
      安全測試
        定義[識別安全漏洞和風險]
        ZAP
    效益
      提高系統品質
      提早發現問題
      提高用戶信任
```