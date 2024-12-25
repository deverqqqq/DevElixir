---
title: 介紹
sidebar_label: 介紹
keywords: ["Message Queue"]
description: 認識訊息佇列
sidebar_position: 0
tags: ["Message Queue"]
---

## 什麼是訊息佇列

訊息佇列使應用程式間可以通過發送和接收訊息來做交互，而不需要直接顯式呼叫。

```mermaid
flowchart LR
    Producer1 -->|Message1| MessageBroker[(Message Broker)]
    Producer2 -->|Message2| MessageBroker
    MessageBroker -->|Message1| Consumer1
    MessageBroker -->|Message2| Consumer2
```

### 效益

- 解耦：通過引入訊息佇列，發送者和接收者不必同時在線，從而實現應用程序之間的解耦。
- 容錯：當訊息消費發生故障時，訊息可以暫存在佇列中，等待消費者恢復後再處理。
- 異步處理：可以將需要耗時的操作異步化，從而提高系統的響應速度和吞吐量。
- 事件驅動：推播/訂閱模式 是事件驅動架構的基礎。系統可以根據事件進行反應，實現更加靈活和高效的業務流程。
- 降低峰值壓力：在高併發場景下，可以通過訊息佇列作為請求緩衝，減少系統的瞬時壓力。

訊息佇列可以做為傳統服務彼此間直接呼叫的中介層，透過這個中介層，可以讓原本會遇到的問題，例如瞬時大流量，或是錯誤處理，都可以透過這個中介層 (訊息佇列) 處理。


## Scenario

1. 訂單處理系統  
在電子商務平台上，用戶送出訂單後，訂單訊息會通過 MQ 進行處理。這樣可以確保訂單處理過程中的各個環節 (如支付、庫存更新、物流) 能夠非同步執行，並處理高並發的訂單請求。

2. 日誌收集與分析  
分佈式系統中的各個服務產生的大量日誌數據可以通過 MQ 進行收集，然後統一傳送到日誌分析系統 (如 ELK 堆棧：Elasticsearch, Logstash, Kibana)。這樣可以提高日誌處理的效率，實現實時監控和分析。

3. 數據同步  
在微服務架構中，各個服務之間需要保持數據一致性。MQ 可以用來進行數據同步，確保不同服務之間的數據狀態一致。例如，用戶數據變更後，相關的服務可以通過 MQ 接收到變更通知並更新自己的數據。

4. 異步任務處理
某些耗時的操作 (Ex: 轉檔、圖片處理) 可以通過 MQ 進行異步處理。用戶提交任務後，立即返回響應，而具體的處理則由後端異步完成，完成後再主動通知用戶，這樣可以提高系統的響應速度和用戶體驗。

5. 即時推播  
社交媒體、遊戲、新聞等應用需要向用戶即時推播消息。通過 MQ，可以實現高效的消息分發和推送，確保消息能夠及時送達用戶。

7. 負載平衡  
MQ 可以用來實現系統的負載平衡。當前端請求量過大時，可以通過 MQ 將請求分發到多個後端服務進行處理，從而平衡負載，防止單一服務負載過高。

8. 容錯與恢復  
MQ 提供的傳遞機制可以用來實現系統的容錯與恢復。當某個服務出現故障時，消息仍然會保留在隊列中，待服務恢復後再進行處理，確保不會丟失重要數據。

9. 事件驅動架構  
在事件驅動架構中，各個服務通過事件進行通信和協作。MQ 是事件驅動架構的核心組件，可以實現事件的發布和訂閱，確保各個服務能夠即時響應事件。

## 主流框架

### RabbitMQ

| 特點     | 說明                   |
| -------- | ---------------------- |
| 開發語言 | Erlang                 |
| 協議     | AMQP, MQTT, STOMP      |
| 特點     | 易於使用，文件明確詳細 |
| 適用負載 | 中                     |
| 可靠性   | 高                     |

### Apache Kafka

| 特點     | 說明                                             |
| -------- | ------------------------------------------------ |
| 開發語言 | Scala, Java                                      |
| 協議     | Kafka                                            |
| 特點     | 針對吞吐量和高流量設計，是以日誌紀錄為用途做設計 |
| 適用負載 | 非常高                                           |
| 可靠性   | 中                                               |

## Reference
[參考 1](https://aws.amazon.com/tw/compare/the-difference-between-rabbitmq-and-kafka/)  
[參考 2](https://double.cloud/blog/posts/2023/03/apache-kafka-vs-rabbitmq/)