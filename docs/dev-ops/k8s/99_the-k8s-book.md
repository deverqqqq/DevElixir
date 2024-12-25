---
title: "The Kubernetes Book"
sidebar_label: The Kubernetes Book
keywords: ["k8s"]
description: The Kubernetes Book
sidebar_position: 99
tags: [k8s]
draft: true
---

第二章：Kubernetes 的運作原理

本章節將深入探討 Kubernetes 的運作機制，介紹控制平面、工作節點、應用程式打包、聲明式模型、Pod、部署和服務等核心概念。
- Kubernetes 架構：Kubernetes 叢集由一個控制平面和多個工作節點組成。控制平面負責管理叢集的整體狀態，而工作節點則負責運行應用程式。
- 聲明式模型：Kubernetes 使用聲明式模型來管理應用程式，這意味著您只需描述您想要的應用程式狀態，而 Kubernetes 會負責實現它。
- 應用程式打包：為了在 Kubernetes 上運行應用程式，您需要將其打包成容器映像檔，並使用 YAML 檔案來定義其部署配置。
- Pod: Pod 是 Kubernetes 中最小的部署單位，它封裝了一個或多個容器，這些容器共享網路和儲存資源。
- 部署：部署用於管理 Pod 的生命週期，它可以自動化 Pod 的建立、更新和擴展。
- 服務：服務提供了一種穩定的方式來訪問 Pod，它為 Pod 提供了一個虛擬 IP 位址和埠，即使 Pod 被重新建立或移動到其他節點，服務的位址和埠也不會改變。
- 叢集儲存：叢集儲存負責儲存 Kubernetes 叢集的所有狀態資訊，它使用 etcd 分散式資料庫來確保高可用性。

第三章：取得 Kubernetes

本章節將介紹幾種取得 Kubernetes 叢集的方法，包括在您的電腦上建立一個 Kubernetes 叢集，或是在雲端建立一個託管 Kubernetes 叢集。
- 在您的電腦上建立 Kubernetes 叢集：您可以使用 Docker Desktop、k3d、KinD 或 minikube 等工具在您的電腦上建立一個本機開發叢集。
- 在雲端建立託管 Kubernetes 叢集：您可以使用 Google Kubernetes Engine (GKE)、Amazon Elastic Kubernetes Service (EKS) 或 Azure Kubernetes Service (AKS) 等雲端服務來建立和管理託管 Kubernetes 叢集。
- 使用 kubectl: kubectl 是一個命令列工具，用於與 Kubernetes 叢集互動，您可以使用它來部署應用程式、檢查叢集狀態和執行其他管理任務。

第四章：使用 Pod

本章節將深入探討 Pod 的概念，介紹如何建立、管理和檢查 Pod，以及如何使用多容器 Pod 和初始化容器。
- Pod 理論：Pod 是 Kubernetes 中最小的部署單位，它封裝了一個或多個容器，這些容器共享網路和儲存資源。
- 多容器 Pod: 您可以將多個容器封裝在同一個 Pod 中，這些容器可以共享網路和儲存資源，並且可以相互通訊。
- 初始化容器：初始化容器是在主應用程式容器啟動之前運行的特殊容器，它們通常用於檢查或初始化應用程式環境。
- 使用 kubectl 管理 Pod: 您可以使用 kubectl 命令列工具來建立、刪除、查看和檢查 Pod。
- Pod 主機名稱：Pod 的主機名稱來自其 YAML 檔案的 metadata.name 欄位，Kubernetes 會將其用作 Pod 中每個容器的主機名稱。
- Pod 的不變性：Pod 被設計為不可變物件，這意味著您不應該修改正在運行的 Pod。

第五章：使用命名空間建立虛擬叢集
本章節將介紹如何使用命名空間（Namespaces）將 Kubernetes 叢集劃分為多個虛擬叢集，以提高安全性、隔離性和資源管理效率。
- 命名空間概念：命名空間就像 Kubernetes 叢集中的虛擬叢集，它們允許您將叢集中的資源（例如 Pod、服務和部署）分組到邏輯單元中。
- 命名空間的優點:
   - **安全性：**  命名空間可以限制對資源的訪問，從而提高安全性。
   - **隔離性：**  命名空間可以將不同應用程式或團隊的資源隔離開來，防止它們相互干擾。
   - **資源管理：**  命名空間可以限制每個命名空間可以使用的資源量，從而提高資源管理效率。
- **建立命名空間：**  您可以使用 kubectl create ns 命令以指令式方式建立命名空間，也可以使用 YAML 檔案以聲明式方式建立命名空間。
- **設定 kubectl 的命名空間：**  您可以使用 kubectl config set-context 命令將 kubectl 配置為自動針對特定命名空間運行命令，從而避免在每個命令中都添加 -n 或 --namespace 標誌。
- **將應用程式部署到命名空間：**  您可以使用 YAML 檔案以聲明式方式將應用程式部署到特定命名空間，方法是在 YAML 檔案中指定 metadata.namespace 欄位。

第六章：Kubernetes 部署

本章節將介紹如何使用部署（Deployments）為 Kubernetes 上的無狀態應用程式添加雲原生功能，例如自我修復、擴展、滾動更新和版本化回滾。
- **部署理論：**  部署是運行在 Kubernetes 上的無狀態應用程式最常用的方式，它們添加了自我修復、擴展、滾動更新和回滾等功能。
- **建立部署：**  您可以使用 YAML 檔案以聲明式方式建立部署，YAML 檔案中包含 Pod 模板、副本數量和更新策略等資訊。
- **手動擴展應用程式：**  您可以使用 kubectl scale 命令以指令式方式手動擴展部署，也可以通過更新部署 YAML 檔案中的副本數量並重新發布到叢集來以聲明式方式進行擴展。聲明式方法是首選方法。
- **執行滾動更新：**  滾動更新是一種逐步更新應用程式的方式，它可以最大程度地減少停機時間，並允許您在更新過程中監控應用程式的狀態。
- **執行回滾：**  如果滾動更新出現問題，您可以使用回滾功能將應用程式恢復到之前的版本。
- 自動擴展：Kubernetes 提供了幾種自動擴展部署的方法，包括：
   - 水平 Pod 自動擴展器（HPA）：HPA 根據 CPU 使用率、記憶體使用率或其他指標自動添加或刪除 Pod，以滿足當前需求。大多數叢集預設安裝 HPA，並且廣泛使用。
   - 叢集自動擴展器（CA）：CA 自動添加或刪除叢集節點，以便您始終有足夠的節點來運行所有已排程的 Pod。這也是預設安裝的，並且廣泛使用。
   - 垂直 Pod 自動擴展器（VPA）：VPA 根據當前需求增加或減少分配給正在運行的 Pod 的 CPU 和記憶體。它不是預設安裝的，有幾個已知的限制，並且使用較少。目前的實作會在每次擴展 Pod 資源時刪除現有 Pod 並替換為新的 Pod。這會造成中斷，甚至可能導致 Kubernetes 將新 Pod 排程到不同的節點。然而，目前正在進行工作以啟用對活動 Pod 的就地更新。
- **聲明式模型：**  聲明式模型是我們向 Kubernetes 聲明所需狀態的方式，而無需告訴 Kubernetes 如何實作它。您將「如何做」留給 Kubernetes 處理。
- **聲明式與指令式的比較：**  聲明式模型描述最終目標 - 您告訴 Kubernetes 您想要什麼。指令式模型需要一長串命令來告訴 Kubernetes 如何達到最終目標。

第七章：Kubernetes 服務

本章節將介紹如何使用服務（Services）為 Kubernetes 上的 Pod 提供穩定的網路訪問，以及不同類型的服務和它們的用途。
- **服務理論：**  服務是 Kubernetes API 中的資源，它為 Pod 提供了一個穩定的網路端點，即使 Pod 被重新建立或移動到其他節點，服務的端點也不會改變。
- 服務的類型：Kubernetes 支援以下幾種類型的服務：
   - **ClusterIP：**  叢集內部服務，僅供叢集內部 Pod 訪問。
   - **NodePort：**  節點埠服務，在每個叢集節點上公開一個固定的埠，外部客戶端可以通过该埠访问服务。
   - **LoadBalancer：**  負載均衡器服務，使用雲端平台的負載均衡器來公開服務，提供外部訪問。
   - **ExternalName：**  外部名稱服務，將服務映射到外部 DNS 名稱。
- **服務和 EndpointSlices：**  每當您建立服務時，Kubernetes 都會自動建立一個關聯的 EndpointSlice，以追蹤具有匹配標籤的健康 Pod。
- **使用 kubectl 管理服務：**  您可以使用 kubectl 命令列工具來建立、刪除、查看和檢查服務。

第八章：入口（Ingress）

本章節將介紹如何使用入口（Ingress）將外部流量路由到 Kubernetes 叢集內的應用程式，以及如何使用不同的入口控制器和規則。
- **入口設定：**  要使用入口，您需要先安裝一個入口控制器，入口控制器是一個負責處理入口流量的 Pod。
- **入口架構：**  入口控制器通常部署在叢集邊緣，它會監聽來自外部的流量，並根據入口規則將流量路由到叢集內的服務。
- 使用入口：
   1. 安裝入口控制器。
   2. 配置入口類別。
   3. 部署範例應用程式。
   4. 配置入口物件。
   5. 檢查入口物件。
   6. 配置 DNS 名稱解析。
   7. 測試入口。

- **入口規則：**  入口規則定義了如何將流量路由到服務，您可以使用主機名或路徑來定義規則。
- **入口控制器：**  有許多不同的入口控制器可用，例如 NGINX Ingress Controller、Traefik 和 Contour。

第九章：Kubernetes 上的 WebAssembly

本章節將介紹如何在 Kubernetes 上運行 WebAssembly (Wasm) 應用程式，以及 Wasm 在雲端運算中的重要性。
- Wasm 簡介：WebAssembly 是一種新的二進位指令集，程式語言可以使用它作為編譯目標，而不是編譯成像 ARM 上的 Linux 之類的東西。您將應用程式編譯成 Wasm，它就可以在任何具有 Wasm 執行環境的主機上運行。
- Wasm 的優點：
   - 可攜性：Wasm 應用程式可以在任何具有 Wasm 執行環境的平台上運行，無需修改程式碼。
   - 安全性：Wasm 應用程式在沙盒環境中運行，與主機系統隔離，提高了安全性。
   - 效能：Wasm 執行環境的啟動速度和執行速度都比傳統容器更快。
- 在 Kubernetes 上運行 Wasm：
   1. 編寫 Wasm 應用程式並編譯成 Wasm 二進位檔案。
   2. 將 Wasm 二進位檔案打包成 OCI 映像檔，並儲存在 OCI 儲存庫中。
   3. 在至少一個叢集節點上安裝 Wasm shim。
   4. 建立一個指定 Wasm shim 的 RuntimeClass。
   5. 為 Wasm 應用程式建立一個 Pod（使用步驟 2 中的 Wasm 映像檔）。
   6. 在 Pod 中引用 RuntimeClass。
   7. 將 Pod 部署到 Kubernetes。
- Wasm 和容器的比較：Wasm 和容器都是雲端運算的重要技術，它們可以協同工作，為不同的應用程式場景提供最佳解決方案。

第十章：服務發現深度解析

本章節將深入探討 Kubernetes 中的服務發現機制，介紹服務註冊表、服務註冊、服務發現以及如何解決服務發現問題。
- **服務發現的場景：** 在 Kubernetes 叢集中，Pod 是動態建立和銷毀的，它們的 IP 位址會不斷變化。服務發現機制允許應用程式在不知道 Pod 的確切 IP 位址的情況下找到並連接到它們。
- **服務註冊表：** 服務註冊表是一個儲存服務資訊的資料庫，例如服務名稱、IP 位址和埠。
- **服務註冊：** 當服務建立時，它會自動向服務註冊表註冊其資訊。
- **服務發現：** 當應用程式需要連接到服務時，它會查詢服務註冊表以獲取服務的 IP 位址和埠。
- **命名空間和服務發現：** 服務發現是在命名空間範圍內進行的，這意味著應用程式只能發現和連接到同一命名空間中的服務。
- **解決服務發現問題：** 您可以使用 kubectl 命令列工具和日誌檔案來解決服務發現問題。

第十一章：Kubernetes 儲存

本章節將介紹 Kubernetes 的儲存子系統，以及如何使用持久化磁碟（Persistent Volumes）和儲存類別（Storage Classes）為應用程式提供持久化儲存。
- **儲存概覽：** Kubernetes 儲存子系統允許應用程式動態配置和使用來自各種外部儲存系統的儲存。
- **儲存提供者：** 每個外部儲存系統都需要自己的 CSI 外掛程式，該外掛程式建立外部磁碟並將其公開在 Kubernetes 中。
- **容器儲存介面（CSI）：** CSI 是一個介面，允許外部第三方儲存系統與 Kubernetes 整合。儲存供應商編寫一個 CSI 驅動程式/外掛程式，該驅動程式/外掛程式作為一組 Pod 在叢集上運行，並將儲存系統的增強功能公開給叢集和應用程式。
- Kubernetes 持久化磁碟子系統：Kubernetes 持久化磁碟子系統負責管理持久化磁碟的生命週期，它使用以下資源：
   - 持久化磁碟（PV）：PV 代表外部儲存系統上的磁碟，它具有固定的大小和訪問模式。
   - 持久化磁碟聲明（PVC）：PVC 是應用程式對儲存的請求，它指定了所需的儲存大小和訪問模式。
   - 儲存類別（SC）：SC 定義了如何配置 PV，例如儲存類型、訪問模式和回收策略。
- 使用儲存類別動態配置：儲存類別控制器在後台運行，監控 API 伺服器以查找新的 PVC 物件。每次看到一個時，它就會在外部系統上建立請求的磁碟，並將其映射到 Kubernetes 上的新 PV。然後，Pod 可以使用 PVC 掛載 PV 以供使用。
- 磁碟設定：
   - **訪問模式：** Kubernetes 支援三種磁碟訪問模式：
      - **ReadWriteOnce（RWO）：** 允許單個 PVC 以讀寫（R/W）模式綁定到磁碟。嘗試從多個 PVC 綁定它將失敗。
      - **ReadWriteMany（RWM）：** 允許多個 PVC 以讀寫（R/W）模式綁定到磁碟。檔案和物件儲存通常支援此模式，而區塊儲存通常不支援。
      - **ReadOnlyMany（ROM）：** 允許多個 PVC 以唯讀（R/O）模式綁定到磁碟。
   - **回收策略：** 回收策略定義了當 PVC 被刪除時如何處理 PV。Kubernetes 支援以下回收策略：
      - **Retain：** 保留 PV，以便您可以手動清理和刪除它。
      - **Recycle：** 回收 PV，以便它可以被其他 PVC 使用。
      - **Delete：** 刪除 PV，這也會刪除外部儲存系統上的磁碟。

第十二章：ConfigMaps 和 Secrets

本章節將介紹如何使用 ConfigMaps 和 Secrets 將配置資訊和敏感資料與應用程式程式碼分離，以提高安全性、可攜性和可管理性。
- ConfigMaps：ConfigMaps 用於儲存應用程式的配置資訊，例如環境變數、命令列參數和配置文件。
- Secrets：Secrets 用於儲存敏感資料，例如密碼、API 金鑰和證書。
- ConfigMaps 和 Secrets 的優點：
   - **重用：** 您可以將 ConfigMaps 和 Secrets 重用於不同的應用程式。
   - **更簡單的開發和測試：** 您可以輕鬆地修改 ConfigMaps 和 Secrets，而無需重建應用程式映像檔。
   - **更簡單且更少中斷的變更：** 您可以更新 ConfigMaps 和 Secrets，而無需重新啟動 Pod。
- 使用 ConfigMaps 和 Secrets：
   - **以指令式方式建立 ConfigMaps 和 Secrets：** 您可以使用 kubectl 命令列工具以指令式方式建立 ConfigMaps 和 Secrets。
   - **以聲明式方式建立 ConfigMaps 和 Secrets：** 您可以使用 YAML 檔案以聲明式方式建立 ConfigMaps 和 Secrets。
   - **在 Pod 中使用 ConfigMaps 和 Secrets：** 您可以將 ConfigMaps 和 Secrets 注入到容器中，作為環境變數、命令列參數或磁碟區。最靈活的方式是使用磁碟區。

第十三章：StatefulSets

本章節將介紹 StatefulSets，它是一種用於在 Kubernetes 上運行 有狀態應用程式 的控制器。與管理無狀態應用程式的 Deployments 不同，StatefulSets 提供了以下功能：
- **穩定的、可預測的 Pod 識別：** StatefulSets 中的每個 Pod 都有一個唯一的、穩定的名稱和網路識別，即使 Pod 被重新啟動或重新排程，這些識別也會保留。
- **有序的 Pod 建立和刪除：** StatefulSets 會按順序建立和刪除 Pod，以確保 Pod 之間的依賴關係得到滿足。
- **持久化儲存：** StatefulSets 使用持久化磁碟聲明（PVC）為 Pod 提供持久化儲存，即使 Pod 被重新啟動或重新排程，資料也會保留。
StatefulSets 的運作原理：
1.StatefulSet 控制器會建立一個 Headless Service，該 Service 為 StatefulSet 中的每個 Pod 提供一個穩定的 DNS 名稱。
2.StatefulSet 控制器會按順序建立 Pod，並為每個 Pod 分配一個唯一的序號。
3.每個 Pod 都會掛載一個或多個持久化磁碟，這些磁碟會通過 PVC 綁定到 PV。
4.當 Pod 被刪除時，StatefulSet 控制器會按相反的順序刪除 Pod，並確保資料在刪除 Pod 之前被安全地保存。

StatefulSets 的使用案例：

StatefulSets 適用於需要持久化儲存和有序操作的應用程式，例如：
- 資料庫
- 訊息佇列
- 快取伺服器

StatefulSets 的優點：
- 簡化了有狀態應用程式的部署和管理。
- 提供了穩定的 Pod 識別和有序的操作，以確保資料一致性和應用程式可靠性。
- 與持久化儲存整合，以確保資料在 Pod 重新啟動或重新排程後仍然可用。

第十四章：API 安全性和 RBAC

本章節將介紹 Kubernetes API 的安全性，以及如何使用基於角色的訪問控制（RBAC）來控制對 API 的訪問。
Kubernetes API 安全性概覽：
Kubernetes API 是叢集的控制平面，它允許使用者和應用程式與叢集互動。保護 API 的安全對於確保叢集的整體安全至關重要。

Kubernetes API 安全性機制：
- **驗證：** 驗證用於驗證請求 API 的使用者或應用程式的身份。
- **授權：** 授權用於確定驗證後的使用者或應用程式是否具有執行請求操作的權限。
- **准入控制：** 准入控制用於在請求被執行之前對其進行驗證和修改。

基於角色的訪問控制（RBAC）：
RBAC 是一種用於控制對 API 訪問的授權機制。它允許您定義角色，這些角色代表一組權限，然後將這些角色分配給使用者和應用程式。
RBAC 的組成部分：
- **角色：** 角色定義了一組權限。
- **角色綁定：** 角色綁定將角色分配給使用者或應用程式。
- **叢集角色：** 叢集角色與角色類似，但它們適用於整個叢集，而不僅僅是單個命名空間。
- **叢集角色綁定：** 叢集角色綁定將叢集角色分配給使用者或應用程式。
使用 RBAC 保護 API 的安全：
1. 定義角色，這些角色代表您想要授予使用者和應用程式的權限。
2. 建立角色綁定，將角色分配給使用者和應用程式。
3. 使用 kubectl 命令列工具或 Kubernetes API 來管理角色和角色綁定。

第十五章：Kubernetes API

本章節將深入探討 Kubernetes API 的架構和功能，包括 API 伺服器、API 資源和 API 版本控制。
Kubernetes API 概覽：
Kubernetes API 是一個 RESTful API，它允許使用者和應用程式與叢集互動。API 伺服器是 API 的前端，它負責處理 API 請求、驗證使用者、授權請求和執行准入控制。
API 資源：
API 資源是 Kubernetes 中的基本建構區塊，它們代表叢集中的不同物件，例如 Pod、Deployments 和 Services。每個 API 資源都有一個對應的 API 端點，您可以使用 kubectl 命令列工具或 Kubernetes API 來與這些端點互動。
API 版本控制：
Kubernetes API 使用版本控制來確保向後相容性。每個 API 資源都有一個 API 版本，該版本表示資源的特定版本。Kubernetes 支援多個 API 版本，您可以使用 kubectl 命令列工具或 Kubernetes API 來指定您想要使用的 API 版本。
使用 Kubernetes API：
- **使用 kubectl 命令列工具：** kubectl 是一個命令列工具，它提供了一組用於與 Kubernetes API 互動的命令。
- **使用 Kubernetes API：** 您可以使用程式語言（例如 Go、Python 和 Java）直接與 Kubernetes API 互動。
- **使用 Kubernetes Dashboard：** Kubernetes Dashboard 是一個基於 Web 的使用者介面，它允許您以視覺化方式管理叢集。

第十六章：Kubernetes 的威脅建模

本章節將介紹如何使用 STRIDE 模型對 Kubernetes 進行威脅建模，以識別潛在的安全漏洞，並採取措施來預防和減輕這些漏洞。
威脅建模：
威脅建模是一個用於識別潛在安全漏洞的過程，它可以幫助您了解攻擊者如何攻擊您的系統，以及如何保護您的系統免受攻擊。
STRIDE 模型：
STRIDE 是一個流行的威脅建模模型，它代表以下六種威脅類別：
- **Spoofing（偽造）：** 攻擊者偽裝成另一個使用者或系統。
- **Tampering（篡改）：** 攻擊者修改資料或程式碼。
- **Repudiation（抵賴）：** 攻擊者否認他們執行了某個動作。
- **Information Disclosure（資訊洩露）：** 攻擊者獲取未授權的資訊。
- **Denial of Service（拒絕服務）：** 攻擊者使系統或服務無法使用。
- **Elevation of Privilege（權限提升）：** 攻擊者獲取比他們應該擁有的更多權限。
將 STRIDE 模型應用於 Kubernetes：
您可以使用 STRIDE 模型來識別 Kubernetes 中的潛在安全漏洞，並採取措施來預防和減輕這些漏洞。
預防和減輕威脅的措施：
- 使用強大的驗證和授權機制。
- 實施 Pod 安全策略。
- 加密敏感資料。
- 監控和審計叢集活動。

第十七章：真實世界的 Kubernetes 安全性

本章節將介紹在真實世界中實施 Kubernetes 時可能遇到的安全性相關挑戰，並提供一些最佳實踐和經驗教訓。
軟體交付管道中的安全性：
確保軟體交付管道中的安全性對於防止惡意程式碼進入生產環境至關重要。
工作負載隔離：
將工作負載隔離在不同的命名空間和叢集中，可以限制攻擊者在成功入侵一個工作負載後對其他工作負載的訪問。
身分和訪問管理：
實施強大的身分和訪問管理策略，以控制對叢集資源的訪問。
安全性監控和審計：
監控和審計叢集活動，以檢測和響應安全事件。
最佳實踐和經驗教訓：
- 使用受信任的基礎映像檔。
- 掃描映像檔以查找漏洞。
- 限制容器的權限。
- 實施網路策略以限制 Pod 之間的通信。
- 使用 Kubernetes Secrets 來儲存敏感資料。
- 監控和審計 API 伺服器的訪問。
- 定期更新 Kubernetes 叢集和元件。





