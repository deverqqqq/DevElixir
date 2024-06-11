---
title: "Docker Deep Dive"
sidebar_label: Docker Deep Dive
keywords: ["docker"]
description: Docker Deep Dive
sidebar_position: 99
tags: [docker]
draft: true
---

## Big Picture

這本書提供了Docker和容器的全面指南，旨在將讀者從零知識帶到熟練程度。結構分為兩
個主要部分：
1. 介紹 Docker、容器、雲原生技術、微服務和編排等概念。
2. 技術內容
   > 涵蓋圖像、容器、多容器應用程序、編排、WebAssembly、漏洞掃描、調試和高可用性等實踐方面。
章節概要

## 章節整理

[第1章： Docker和容器的歷史及未來潛力。](./01_intro.md)

[第2章： 重要的容器相關標準和項目。](./01_intro.md)

[第3章： 獲取Docker的方法。](./01_intro.md)

[第4章： 簡單的實踐容器工作流程。](./01_intro.md)

[第5章： Docker引擎架構。](./01_intro.md)

[第6章： 深入研究圖像及其管理。](./01_intro.md)

[第7章： 深入研究容器及其管理。](./01_intro.md)

[第8章： 將應用程序容器化。](./01_intro.md)

[第9章： 使用Compose構建、部署和管理多容器應用程序。](./01_intro.md)

[第10章： 構建安全的Swarm集群。](./01_intro.md)

[第11章： 在安全Swarm上部署和管理多容器應用程序。](./01_intro.md)

[第12章： 構建和容器化WebAssembly應用程序。](./01_intro.md)

[第13章： Docker網絡。](./01_intro.md)

[第14章： 構建和測試Docker覆蓋網絡。](./01_intro.md)

[第15章： Docker中的持久性和非持久性數據。](./01_intro.md)

[第16章： 主要的Linux和Docker安全技術。](./01_intro.md)




2：Docker和容器相關標準和項目
Docker

Docker平台與Docker, Inc.： Docker平台是一組管理容器的技術，而Docker, Inc.是其背後的公司。
Docker, Inc.

歷史： 最初作為PaaS提供商dotCloud，該公司轉向專注於Docker技術，使容器使用變得簡單。
Docker技術

組件： Docker包括用於管理容器的CLI和運行容器的伺服器端引擎。

3：獲取Docker
Docker Desktop

本地開發： Docker Desktop是運行Docker在本地機器上的推薦工具，支持Linux、Mac和Windows。
使用Multipass安裝Docker

替代方法： Multipass可用於在本地機器上運行輕量級VM中的Docker。
在Linux上安裝Docker

指導： 提供在Ubuntu Linux上安裝Docker的說明，強調這種方法可能缺乏一些Docker Desktop的功能。

4：大局觀
運維視角

實踐經驗： 著重於啟動、停止和管理容器的操作視角。
開發視角

應用程序重點： 指導通過構建應用程序到容器鏡像並運行它，提供開發視角。

5：Docker引擎
Docker引擎簡介

伺服器端組件： Docker引擎包括運行和管理容器的組件，類似於汽車引擎中的專用零件協同工作。
Docker引擎

架構： 最初是一個單片守護進程，現在已被模塊化以提高效率和加快演進。

6：使用映像
Docker映像簡介

映像要點： 映像包含運行應用程序所需的一切，包括操作系統、源代碼、依賴項和元數據。
映像和層

構造： 映像由多層構成，每一層代表一個更改或添加。

7：使用容器
容器簡介

OCI規範： Docker實現了OCI規範，使這些概念適用於其他容器運行時。
容器生命周期

管理： 涵蓋啟動、停止、連接和檢查容器。

8：將應用程序容器化
容器化應用程序簡介

過程： 包括編寫應用程序、創建Dockerfile、將應用程序構建成映像、將其推送到註冊表並作為容器運行。

9：使用Compose構建多容器應用程序
Docker Compose簡介

多容器應用程序： Compose允許在配置文件中定義多容器應用程序，並使用單個命令進行部署。

10：Docker Swarm
Docker Swarm簡介

集群和編排： Swarm將Docker節點組成集群並編排微服務應用程序。

11：使用Docker Stacks部署應用程序
使用Docker Stacks部署應用程序簡介

Stack文件： 在配置文件中定義應用程序及其基礎設施，並在Swarm上進行部署和管理。

12：Docker和WebAssembly
Wasm和容器

集成： Docker支持WebAssembly，允許使用標準的Docker工具來構建和運行Wasm應用程序。

13：Docker網絡
Docker網絡簡介

網絡基礎： Docker網絡基於容器網絡模型（CNM）和libnetwork，促進容器與外部服務之間的通信。

14：Docker覆蓋網絡
Docker覆蓋網絡簡介

歷史和實現： 討論Docker覆蓋網絡的發展以及如何構建和測試它們。

15：卷和持久數據
卷和持久數據簡介

數據管理： 涵蓋Docker中持久性和非持久性數據的管理，使用卷。

16：Docker安全
Docker安全簡介

安全技術： 討論內核命名空間、控制組、功能、MAC系統、seccomp和Docker特有的安全功能。
這份總結提供了每章的概述，突出了主要點和結構。

## Reference
https://leanpub.com/dockerdeepdive
