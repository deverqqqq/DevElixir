---
title: Overview
sidebar_label: Overview
keywords: [dotnet, overview]
description: The Overview of dotnet
sidebar_position: 0
tags: [dotnet]
---

import DotnetArchitectureSvg from './img/swimlane-architecture-framework.svg';

## .Net 是什麼

.NET 通常被稱為框架 (framework) 或平台 (platform)，事實上是由微軟主導的程式語言 (C#, F#, VB) 所建立的生態系統 (開源 + 免費)。例如，.NET 包含 Runtime，這是 C# 程式執行時所依賴的環境。

<DotnetArchitectureSvg />

Runtime 對於這些程式語言，就像是生物存活所需要的的陽光、空氣、水。且 .NET 的 Runtime 非常強大，包含了 Thread Management, GC, 例外處理...等。

此外，.NET 還包含可以直接在程式中使用的大量程式碼集合，有需要的時候直接使用即可。例如，你不需要自己撰寫開啟檔案或連接資料庫的程式碼，因為 .NET 已經為你提供了這些功能。

:::info
對於開發者來說，.Net 還提供了 SDK，幫助更快速的開發應用。
:::

## .NET 可以用來做什麼

目前 .NET 已經實現跨平台，基本上可以透過 .NET 在絕大部分的平台上，建立你想要的任意應用程式 (Windows, mac, Linux, Android...等)。

## Reference
https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet-framework  
https://dotnet.microsoft.com/zh-tw/platform/why-choose-dotnet
