---
title: "範本設定檔定義"
sidebar_label: "template.json 定義"
keywords: ["dotnet template", "template.json"]
description: "Reference for template.json"
sidebar_position: 9
tags: ["dotnet template"]
---

## 常見設定內容

| 名稱            | 描述                                                                                                                              | 是否必須 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------- |
| identity        | 此範本的唯一名稱                                                                                                                  | 是       |
| author          | 範本的作者                                                                                                                        | 否       |
| classifications | 定義的值會顯示為 dotnet new 中的 Tags                                                                                             | 否       |
| name            | 範本的名稱。當使用 dotnet new 和 Visual Studio 時，此名稱作為範本名稱顯示                                                         | 是       |
| groupIdentity   | 此範本所屬群組的 ID。這允許將多個範本顯示為一個，並基於範本選項決定使用哪一個                                                     | 否       |
| tags            | 常見的標籤包括：language, type。 <br></br> -language: 指定範本使用語言。 <br></br> - type: 指定範本類型 (project, item, solution) | 否       |
| shortName       | 在 CLI 中可以使用該簡短名稱指定範本                                                                                               | 是       |
| postActions     | 允許在建立後執行操作                                                                                                              | 否       |
| constraints     | 範本限制                                                                                                                          |          |

## 完整 Schema
[Schema](https://json.schemastore.org/template)

## 官方說明文件
[Reference](https://github.com/dotnet/templating/wiki/Reference-for-template.json)
