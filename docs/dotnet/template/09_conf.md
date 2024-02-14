---
title: "範本設定檔定義"
sidebar_label: "template.json 定義"
keywords: ["dotnet template", "template.json"]
description: "Reference for template.json"
sidebar_position: 9
tags: ["dotnet template"]
---

## 常見設定內容

### template.json
| 名稱            | 描述                                                                                                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identity        | 此範本的唯一名稱                                                                                                                                                     |
| author          | 範本的作者                                                                                                                                                           |
| classifications | 定義的值會顯示為 dotnet new 中的 Tags                                                                                                                                |
| name            | 範本的名稱。當使用 dotnet new 和 Visual Studio 時，此名稱作為範本名稱顯示                                                                                            |
| groupIdentity   | 此範本所屬群組的 ID。這允許將多個範本顯示為一個，並基於範本選項決定使用哪一個                                                                                        |
| tags            | 常見的標籤包括：language, type。 <br></br> -language: 指定範本使用語言。 <br></br> - type: 指定範本類型 (project, item, solution)                                    |
| shortName       | 在 CLI 中可以使用該簡短名稱指定範本                                                                                                                                  |
| postActions     | 允許在建立後執行操作                                                                                                                                                 |
| constraints     | 範本限制，可以指定作業系統或是 SDK 版本。 [參考](https://github.com/dotnet/templating/blob/main/docs/Constraints.md)                                                 |
| sources         | 可以對範本的來源目錄做設定，也可以根據條件設定不同的情境處理邏輯。 <br></br> 例如：開發範本過程，需要排除指定目錄下的資料 (bin/, obj/, .vs/...)，可以透過exclude設定 | 否

### ide.host.json
| 名稱     | 描述             |
| -------- | ---------------- |
| icon | 設定 IDE 上面的圖標 |

## 完整 Schema
[Schema(template.json)](https://json.schemastore.org/template)   
[Schema(ide.host.json)](https://json.schemastore.org/ide.host)

## 官方說明文件

範本的功能非常的強大，還有很多東西可以去做調整設定，甚至可以設定參數，根據使用者選擇不同的參數，調整實際上範本的輸出，如果想進一步了解的話，強烈建議可以參考下面的內容，基本上應該都在這邊會有說明。

[Template wiki](https://github.com/dotnet/templating/wiki)  
[template.json](https://github.com/dotnet/templating/wiki/Reference-for-template.json)  
[官方範本參考](https://github.com/dotnet/aspnetcore/tree/main/src/ProjectTemplates)
