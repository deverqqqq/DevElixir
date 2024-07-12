---
title: REPR
sidebar_label: REPR
keywords: ['design pattern', 'Request Endpoint Response Pattern', 'REPR']
description: REPR 是一種 API 設計模式，定義了請求數據、請求端點和回應數據的結構和行為。
tags: ['design pattern']
---

## 概念
```mermaid
flowchart LR
    Request[Request] --> Endpoint((Endpoint))
    Endpoint --> Response[Response]
    style Request fill:#7fba00,stroke:#333,stroke-width:2px,color:#fff
    style Response fill:#007fff,stroke:#333,stroke-width:2px,color:#fff
    style Endpoint fill:#ccc,stroke:#333,stroke-width:2px,color:#fff
```

## 說明
REPR（Request Endpoint Response）是一種用於現代 Web 開發和 API 設計中的模式。

最早，Controller 是跟著 MVC 的架構所開發出來的，透過繼承 ControllerBase 產生，當系統走向前後端分離，後端的 API 服務越小越專精，甚至是微服務架構後，對 API Service 來說 Controller 所扮演的角色就越來越小，甚至可以說只是一個 Endpoint。

從微軟在 .Net 6.0 後引進的 Minimal APIs 也可以看出，後端服務的發展方向確實不再以過去 MVC 的架構來做設計。

利用 Minimal APIs，將服務的動作具體簡化為 **請求 (Request)** 、 **端點 (Endpoint)** 和 **響應 (Response)** 三個部分。

## 效益 & 注意事項

### 效益
1. 少了 Controller 的項目，直接透過 Minimal APIs 可以提升效能，可以參考 [FastEndpoint](https://fast-endpoints.com/benchmarks#head-to-head-benchmark) 所做的 Benchmark。
2. 可以配合 CQRS 或是 Vertical Slice Architecture 實作。

### 注意事項
1. 針對需要使用 MVC 架構的專案，請維持使用 Controller。
2. 建議搭配一些整合套件使用，例如[FastEndpoint](https://fast-endpoints.com)，可以在效能維持的前提下，更好的管理 Endpoints。

## Reference
[MVC Controllers are Dinosaurs](https://ardalis.com/mvc-controllers-are-dinosaurs-embrace-api-endpoints/)  
[FastEndpoint](https://fast-endpoints.com)