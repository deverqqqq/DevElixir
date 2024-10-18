---
title: Overview
sidebar_label: Overview
keywords: [auth, overview]
description: The Overview of Auth
sidebar_position: 0
tags: [auth]
draft: true
---

## 認證與授權

- 認證 (Authentication) 是確認用戶的身份。  
簡單來說，就是「你是誰？」，當你輸入帳號與密碼時，系統會檢查這些憑證是否有效，以確定你的身份

- 授權 (Authorization) 確認用戶能夠執行操作或存取哪些資源。  
這是「你能做什麼？」，當你成功登入電子郵件帳戶後，系統會授權你讀取、寫入或刪除你的郵件。

:::info 傳統作法
**Session-Based Authentication**

早期網站應用常使用這種方式進行身份驗證。

- 流程：
1. 使用者輸入帳號和密碼，伺服器驗證是否正確。
2. 驗證成功後，伺服器會產生一個 session，並將 session ID 存放在伺服器端記憶體或資料庫。
3. 客戶端將 session ID 存放在 cookie 中，向伺服器發送請求時會同時附上 session ID。
4. 伺服器根據 session ID 查詢對應的 session 資料來確認用戶身份。

- 優點：  
相對簡單，適合早期的單一伺服器應用。  
資料存放在伺服器端，相對較為安全。

- 缺點：  
在分佈式系統中擴展性較差，伺服器需要維護大量 session 資料。
:::

## JWT

JWT(JSON Web Token) 是一種基於 JSON 格式的輕量級認證與資料交換方式，特別適用於分散式系統中的無狀態驗證。  
它的最大優勢在於，使用者的身份與授權資訊被直接封裝在 token 內，從而減少伺服器端維護 session 的壓力。

### 組成

- Header: 描述加密演算法與 token 類型 (通常是 JWT)。
- Payload: 存放具體的數據 (如用戶 ID、權限等)，通常這些數據被稱為 claims。
- Signature: 對前兩部分進行簽名，保證數據的完整性與安全性。

JWT 透過 Base64 編碼進行傳輸，並且可以被伺服器簽名以防止被篡改。常見的使用場景包括 API 認證，在每次 API 請求中，客戶端會將 token 放在 Authorization 標頭中，伺服器根據 token 驗證使用者身份並授權請求。

### 流程

1. 使用者登入成功
2. 伺服器生成 JWT 返回給客戶端。
3. 客戶端存儲 JWT(例如在 localStorage 或 cookie 中)。
4. 客戶端向伺服器發送請求並附帶 JWT。
5. 伺服器驗證 JWT，確認身份並授權相應操作。

## OAuth

OAuth 是用於授權使用者的技術標準，用於將授權從一項服務傳遞給另一項服務，無需共用實際的使用者驗證資訊。使用 OAuth，使用者在一個平台上登入後，可被授權在另一個平台上執行動作和檢視資料。(SSO)

### 常見模式

- Local login and registration
- Third-party login and registration (federated identity)
- First-party login and registration (reverse federated identity)
- Enterprise login and registration (federated identity with a twist)
- Third-party service authorization
- First-party service authorization
- Machine-to-machine authentication and authorization
- Device login and registration

### JWT 與 OAuth 如何結合使用？
JWT 和 OAuth 可以互補使用，特別是在授權場景中。OAuth 是一個授權框架，它允許第三方應用程式代表用戶執行操作，而 JWT 則可以作為一種「令牌格式」來攜帶授權與認證資訊。

## Reference
https://www.cloudflare.com/zh-tw/learning/access-management/what-is-oauth/  
https://fusionauth.io/articles/oauth/modern-guide-to-oauth  
