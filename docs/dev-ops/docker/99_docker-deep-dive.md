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

這本書提供了 Docker 和容器的全面指南，旨在將讀者從零知識帶到熟練程度。結構分為兩
個主要部分：
1. 介紹 Docker、容器、雲原生技術、微服務和編排等概念。
2. 技術內容
   > 涵蓋圖像、容器、多容器應用程序、編排、WebAssembly、漏洞掃描、調試和高可用性等實踐方面。
章節概要

## 章節整理

[第 1 章：Docker 和容器的歷史及未來潛力。](./01_intro.md)

[第 2 章：重要的容器相關標準和項目。](./01_intro.md)

[第 3 章：獲取 Docker 的方法。](./01_intro.md)

[第 4 章：簡單的實踐容器工作流程。](./01_intro.md)

[第 5 章：Docker 引擎架構。](./01_intro.md)

[第 6 章：深入研究圖像及其管理。](./01_intro.md)

[第 7 章：深入研究容器及其管理。](./01_intro.md)

[第 8 章：將應用程序容器化。](./01_intro.md)

[第 9 章：使用 Compose 構建、部署和管理多容器應用程序。](./01_intro.md)

[第 10 章：構建安全的 Swarm 集群。](./01_intro.md)

[第 11 章：在安全 Swarm 上部署和管理多容器應用程序。](./01_intro.md)

[第 12 章：構建和容器化 WebAssembly 應用程序。](./01_intro.md)

[第 13 章：Docker 網絡。](./01_intro.md)

[第 14 章：構建和測試 Docker 覆蓋網絡。](./01_intro.md)

[第 15 章：Docker 中的持久性和非持久性數據。](./01_intro.md)

[第 16 章：主要的 Linux 和 Docker 安全技術。](./01_intro.md)




2：Docker 和容器相關標準和項目
Docker

Docker 平台與 Docker, Inc.：Docker 平台是一組管理容器的技術，而 Docker, Inc.是其背後的公司。
Docker, Inc.

歷史：最初作為 PaaS 提供商 dotCloud，該公司轉向專注於 Docker 技術，使容器使用變得簡單。
Docker 技術

組件：Docker 包括用於管理容器的 CLI 和運行容器的伺服器端引擎。

3：獲取 Docker
Docker Desktop

本地開發：Docker Desktop 是運行 Docker 在本地機器上的推薦工具，支持 Linux、Mac 和 Windows。
使用 Multipass 安裝 Docker

替代方法：Multipass 可用於在本地機器上運行輕量級 VM 中的 Docker。
在 Linux 上安裝 Docker

指導：提供在 Ubuntu Linux 上安裝 Docker 的說明，強調這種方法可能缺乏一些 Docker Desktop 的功能。

4：大局觀
運維視角

實踐經驗：著重於啟動、停止和管理容器的操作視角。
開發視角

應用程序重點：指導通過構建應用程序到容器鏡像並運行它，提供開發視角。

5：Docker 引擎
Docker 引擎簡介

伺服器端組件：Docker 引擎包括運行和管理容器的組件，類似於汽車引擎中的專用零件協同工作。
Docker 引擎

架構：最初是一個單片守護進程，現在已被模塊化以提高效率和加快演進。

6：使用映像
Docker 映像簡介

映像要點：映像包含運行應用程序所需的一切，包括操作系統、源代碼、依賴項和元數據。
映像和層

構造：映像由多層構成，每一層代表一個更改或添加。

7：使用容器
容器簡介

OCI 規範：Docker 實現了 OCI 規範，使這些概念適用於其他容器運行時。
容器生命周期

管理：涵蓋啟動、停止、連接和檢查容器。

8：將應用程序容器化
容器化應用程序簡介

過程：包括編寫應用程序、創建 Dockerfile、將應用程序構建成映像、將其推送到註冊表並作為容器運行。

9：使用 Compose 構建多容器應用程序
Docker Compose 簡介

多容器應用程序：Compose 允許在配置文件中定義多容器應用程序，並使用單個命令進行部署。

10：Docker Swarm
Docker Swarm 簡介

集群和編排：Swarm 將 Docker 節點組成集群並編排微服務應用程序。

11：使用 Docker Stacks 部署應用程序
使用 Docker Stacks 部署應用程序簡介

Stack 文件：在配置文件中定義應用程序及其基礎設施，並在 Swarm 上進行部署和管理。

12：Docker 和 WebAssembly
Wasm 和容器

集成：Docker 支持 WebAssembly，允許使用標準的 Docker 工具來構建和運行 Wasm 應用程序。

13：Docker 網絡
Docker 網絡簡介

網絡基礎：Docker 網絡基於容器網絡模型（CNM）和 libnetwork，促進容器與外部服務之間的通信。

14：Docker 覆蓋網絡
Docker 覆蓋網絡簡介

歷史和實現：討論 Docker 覆蓋網絡的發展以及如何構建和測試它們。

15：卷和持久數據
卷和持久數據簡介

數據管理：涵蓋 Docker 中持久性和非持久性數據的管理，使用卷。

16：Docker 安全
Docker 安全簡介

安全技術：討論內核命名空間、控制組、功能、MAC 系統、seccomp 和 Docker 特有的安全功能。
這份總結提供了每章的概述，突出了主要點和結構。

## Reference
https://leanpub.com/dockerdeepdive
