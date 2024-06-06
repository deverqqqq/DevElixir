---
title: "Docker Overview"
sidebar_label: Docker Overview
keywords: ["docker"]
description: Overview
sidebar_position: 1
tags: [docker]
---

## Standards
談到技術就必須先說標準，有了標準，大家才能夠在相同的規格下各自發展良性競爭，作為使用者，也可以在相同規格下，有更多的工具可以選擇。

- [The Open Container Initiative (OCI)](#the-open-container-initiative-oci)

## The Open Container Initiative (OCI)
定義容器底層相關的規格。

1. The [image-spec](https://github.com/opencontainers/image-spec)
2. The [runtime-spec](https://github.com/opencontainers/runtime-spec)
3. The [distribution-spec](https://github.com/opencontainers/distribution-spec)

## Docker technology
Docker 主要提供的元件可以分為兩部分
- Client: 主要負責提供 API，讓使用者操作容器的事務。
- Server(Engine): 主要負責容器的生命週期和建置啟動...等。

![](img/2024-06-06-14-53-18.png)

## Docker Engine
Docker Engine 是由多個元件組合而成的，
- RUNC: Interface with kernel
- shim: Enables pluggable lower level
- containerd: Lifecycle management
- daemon: Expose API
- CLI: Command Line

![](img/2024-06-06-17-06-35.png)

### dokcer daemon (dockerd)
dockerd 是管理容器的主要服務。主要負責處理來自 Docker CLI 的 API 請求。

### containerd
containerd 是一個高性能的 container-runtime，它提供建置和管理容器所需的基本功能。  
它負責處理低層次的容器操作，如啟動和停止容器、拉取和推送 image 等。
(實際上是將 image 轉換為 OCI bundle，告訴 runc 執行)

起初是讓 containerd 成為一個專門管理容器生命週期事件的工具。然而，現在已經擴展到包括管理映像、網絡和卷的能力，可以協助類似 Kubernetes 這樣的專案執行工作。  

### shim
Shim 為 containerd 和 runc 之間提供了一個抽象層，使容器成為 Daemonless Container。  
當 containerd 和 runc 解耦，可以在不影響已運行容器的情況下，單獨更新 daemon 或是 containerd。


### RUNC
runc是實際建立和執行容器的底層 runtime。它是根據 OCI 規範實現的，確保了容器的標準化。  
runc負責處理容器的所有細節，如設置命名空間、控制組、掛載文件系統等。
