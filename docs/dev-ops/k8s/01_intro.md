---
title: "Intro"
sidebar_label: Intro
keywords: ["k8s", "Kubernetes"]
description: Kubernetes
sidebar_position: 1
tags: [k8s]
---

## What is Kubernetes?

> Kubernetes is an orchestrator of containerized cloud-native microservices apps.

Kubernetes 是一個用於自動化佈署、擴展、管理容器化應用的開源平台。

### Orchestration

容器協調器指的是一個可以佈署容器化應用並動態變化的系統或平台。

### Cloud Native

1. 自動擴展
2. 自我修復 (EX: 自動重啟)
3. 0 停機時間 + 滾動更新

### Microservices

由許多小型、專門化、獨立的部分組成，這些部分協同工作以形成一個應用程式/系統。

## 雲端的作業系統

如同 OS 抽象化了主機硬體資源和調度應用程式的 Process；K8s 抽象化了雲端資源和調度各容器間的互動。

:::info
K8s 目前已經擺脫對 Docker 和雲端平台/廠商工具的依賴，而是以開放的標準來運行。

從 1.31 版本開始，核心部分已經成為一個完全中立，沒有額外依賴的平台，更容易與不同雲端供應商結合。
:::

## Reference
https://leanpub.com/thekubernetesbook  
https://www.ithome.com.tw/news/165134
