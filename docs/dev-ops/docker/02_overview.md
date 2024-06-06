---
title: "Docker Overview"
sidebar_label: Docker Overview
keywords: ["docker"]
description: Overview
sidebar_position: 1
tags: [docker]
draft: true
---

## Standards
談到技術就必須先說標準，有了標準，大家才能夠在相同的規格下各自發展良性競爭，作為使用者，也可以在相同規格下，有更多的工具可以選擇。

目前主要跟容器相關的標準有以下幾個

- [The Open Container Initiative (OCI)](#the-open-container-initiative-oci)

## The Open Container Initiative (OCI)
定義容器底層相關的規格。

1. The [image-spec](https://github.com/opencontainers/image-spec)
2. The [runtime-spec](https://github.com/opencontainers/runtime-spec)
3. The [distribution-spec](https://github.com/opencontainers/distribution-spec)

## Docker technology
Docker 主要提供的元件可以分為兩部分
- Client
- Server(Engine)

![](img/2024-06-06-14-53-18.png)

![](img/2024-06-06-17-06-35.png)