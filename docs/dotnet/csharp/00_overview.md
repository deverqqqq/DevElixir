---
title: C# Overview
sidebar_label: Overview
keywords: [dotnet, C#, csharp]
description: C#
sidebar_position: 1
tags: [dotnet, C#]
---

## C# 是什麼？
C#(C-sharp) 是一種現代的、通用型的物件導向程式語言，由微軟推出。C# 語法與 C 語言家族 (如 C、C++ 和 Java) 相似。C# 被設計用來創建各種應用，包括桌面端應用、Web 服務、行動應用、雲端服務、遊戲開發...等。

### 歷史背景
C# 語言由 Anders Hejlsberg 領導的團隊開發，並且是 .NET 框架的一部分。這使得 C# 成為 .NET 平台上首選的語言，能夠運行在 Windows 操作系統和跨平台環境上。

### 設計理念
C# 的主要目標之一是提供一種在生產力和效能之間取得平衡的語言。

- 強型別：意味著變數的型別在編譯時就會被檢查，減少了運行時錯誤的可能。同時，也支持隱式類型推斷。通過 var 關鍵字可以讓編譯器自行推斷變量類型。
```csharp
int x = 10;  // 明確類型
var y = 20;  // 編譯器自動推斷類型為 int
```

- 物件導向 (OOP)：提高開發的可擴展性和可重用性。
- 簡潔和高效：幫助開發者更快地撰寫效能好的程式碼。
- 非同步語法：透過 async 和 await，可以簡單且方便的撰寫出非同步程式，對於處理大量 I/O 或是網路需求的應用，效能會更好。
```csharp
public async Task<string> GetDataAsync()
{
    HttpClient client = new HttpClient();
    string result = await client.GetStringAsync("http://example.com");
    return result;
}
```

- GC：不需要手動管理記憶體分配和釋放，降低開發的繁複和提高程式的安全性。

## C# 的發展

隨著 .NET 發展，C#已經成為一個強大的跨平台語言，且團隊仍不斷的對 .NET 和 C# 優化改進 (包含各種從社群收到的回饋)，每年都會有新的版本釋出。對於大部分的開發者來說，只要升級.NET，就可以免費獲得效能提升，整體的發展是很活躍的。

:::info .NET dev blog
官方部落格每年都是釋出版本的主要改進內容，內容多到甚至被戲稱為瀏覽器的效能測試😂  
[.NET 5](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-5/)  
[.NET 6](https://devblogs.microsoft.com/dotnet/string-interpolation-in-c-10-and-net-6/)  
[.NET 7](https://devblogs.microsoft.com/dotnet/performance_improvements_in_net_7/)  
[.NET 8](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/)  
[.NET 9](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-9/)  
[.NET 10](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-10/)  
:::