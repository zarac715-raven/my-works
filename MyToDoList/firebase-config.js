// =========================================================================
// MyToDoList - Firebase 專案配置檔案
// 專案 ID: my-to-do-list-54712
// =========================================================================

// 您可以直接在此處填入您的 Firebase Web 應用程式配置
// 可在 Firebase Console > 專案設定 > 一般 > 你的應用程式 > SDK 設定與配置 中找到
export const defaultFirebaseConfig = {
  apiKey: "", // 請在此填入您的 Firebase API Key（例如：AIzaSy...）
  authDomain: "my-to-do-list-54712.firebaseapp.com",
  projectId: "my-to-do-list-54712",
  storageBucket: "my-to-do-list-54712.firebasestorage.app",
  messagingSenderId: "", // 請在此填入 Sender ID（選填）
  appId: "" // 請在此填入 appId（例如：1:123456789:web:...）
};

// 支援從瀏覽器 localStorage 讀取動態設定（方便免改扣直接在網頁設定）
export function getActiveFirebaseConfig() {
  const saved = localStorage.getItem("my_todo_firebase_config");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey) return parsed;
    } catch (e) {
      console.warn("無法解析 localStorage 中的 Firebase 配置", e);
    }
  }
  return defaultFirebaseConfig;
}

export function saveFirebaseConfig(config) {
  localStorage.setItem("my_todo_firebase_config", JSON.stringify(config));
}

export function isConfigValid(config) {
  return Boolean(config && config.apiKey && config.apiKey.trim() !== "");
}
