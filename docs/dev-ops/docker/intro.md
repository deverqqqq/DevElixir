---
title: 走向容器化
sidebar_label: 走向容器化
keywords: ["docker"]
description: 走向容器化
sidebar_position: 1
tags: [docker]
---

## 容器是甚麼
> 容器是一種可以快速啟動的虛擬化技術，相較於虛擬機，可以更有效的利用系統資源，同時達到更快的啟動和擴展。
![](img/2024-05-31-11-28-06.png)

## 為什麼需要容器技術
1. 當應用程式越來越複雜，需要越來越多的服務來構建一個完整的系統，如上圖展示，虛擬基本會需要的基礎啟動資源就已經不少，造成資源的浪費。
2. 由於容器化的資源需求更低，啟動可以更快，更方便的執行彈性的動態調整。
3. 使用容器後，可以更方便的把建置需要的步驟和環境設定配置在檔案內，不需要根據不同的虛擬機去擔心環境配置的問題。

## Docker
Docker 並不是泛指一種容器技術，而是讓我們可以很方便地把應用程式以容器的方式來執行。

## 如何管理容器
當服務的數量越來越多，就會需要有一個工具來對數量龐大的容器去做管理，其中，由 Google 領導開發的 Kubernetes 就誕生了。
![](img/2024-05-30-16-23-25.png)

除了 Kubernetes 以外，也有其他的容器管理技術，但目前業界最主要使用的還是以 Kubernetes 為主，例如像三大雲端廠商，都有針對 Kubernetes 開發自己的雲端服務。

## Reference
https://app.pluralsight.com/library/courses/docker-kubernetes-big-picture/table-of-contents