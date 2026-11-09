# 📋 MyToDoList - 多人即時協作待辦清單 (Firebase)

基於 **Firebase (專案 ID: `my-to-do-list-54712`)** 開發的多人即時協同作業待辦事項網頁應用程式，支援 Google 帳號授權登入、Cloud Firestore 實時資料同步（Real-time sync）、自訂協作看板與分享連結。

---

## ✨ 核心特色與功能

1. **Google 帳號快速登入**：
   - 整合 Firebase Authentication（Google Provider），一鍵彈窗登入。
   - 記錄任務創建者的 Google 頭像、名稱與操作時間。

2. **多人實時協作（Real-Time Collaboration）**：
   - 採用 Cloud Firestore `onSnapshot` 即時監聽機制，多人同時間新增、勾選、編輯或刪除任務時，所有在線成員螢幕無須重新整理即可即時同步！
   - 多看板支援：內建「🌐 公開團隊協作板」、登入專屬「🔒 個人私人清單」，亦可輸入任意代碼（如 `sprint-2026`）建立專屬團隊協作空間。
   - 一鍵複製看板邀請連結（支援 URL 參數 `?board=boardId` 自動加入）。

3. **任務管理與進度追蹤**：
   - 任務優先度標註：🔴 緊急 (High)、🟡 中等 (Medium)、🟢 一般 (Normal)。
   - 自訂標籤分類（#前端、#設計、#會議、#測試、#待辦）。
   - 完成百分比計算與動態漸層進度條。
   - 即時關鍵字搜尋與狀態切換（全部 / 進行中 / 已完成）。

4. **開箱即用設定介面**：
   - 內建專案設定面板（右上角齒輪），可在網頁介面直接填寫 API Key，資料安全存於本地瀏覽器 `localStorage`。
   - 內建「展示模式（Demo Mode）」，在尚未配置金鑰前即可先行體驗完整的 UI 互動與音效回饋。

---

## 🚀 Firebase 專案配置教學 (`my-to-do-list-54712`)

本應用程式已預設鎖定您的專案 `my-to-do-list-54712`。請依照以下步驟啟用雲端服務：

### 步驟 1：取得 Web API Key
1. 開啟 [Firebase Console - my-to-do-list-54712](https://console.firebase.google.com/project/my-to-do-list-54712/overview)。
2. 點擊左上角齒輪圖示進入「**專案設定 (Project settings)**」。
3. 在「**一般 (General)**」頁籤往下滑至「**你的應用程式 (Your apps)**」，若尚未建立 Web 應用程式，請點擊 `</>` (Web) 新增一個（例如命名為 `MyToDoList`）。
4. 複製其中的 `apiKey`（例如：`AIzaSy...`）。
5. 您可以直接在網頁右上角點擊齒輪圖示貼上，或編輯本目錄下的 `firebase-config.js`。

### 步驟 2：啟用 Google 登入
1. 在 Firebase Console 左側選單點選「**Authentication (身份驗證)**」。
2. 進入「**Sign-in method**」分頁。
3. 點選「**Google**」，將狀態切換為「**啟用 (Enable)**」，設定專案支援電子郵件後點擊儲存。
4. 在「**已授權網域 (Authorized domains)**」中，確認包含 `localhost`（若部署至 GitHub Pages，請新增 `zarac715-raven.github.io`）。

### 步驟 3：設定 Cloud Firestore 安全性規則
1. 在 Firebase Console 左側選單點選「**Firestore Database**」，若尚未建立請點擊「建立資料庫」（選擇正式版或測試版）。
2. 切換至「**規則 (Rules)**」頁籤，貼上以下協作規則並發布：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 允許任何已授權看板進行讀寫協作
    match /boards/{boardId}/tasks/{taskId} {
      allow read, write: if true; // 協作模式下開放讀寫（或設定為 if request.auth != null; 需登入才能讀寫）
    }
  }
}
```

---

## 💻 本地執行方式

直接在瀏覽器雙擊開啟 `index.html` 即可使用，或使用 PowerShell 命令列開啟：

```powershell
Start-Process "c:\Users\digio\OneDrive\Desktop\My works\MyToDoList\index.html"
```
