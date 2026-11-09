// =========================================================================
// MyToDoList - Firebase 專案配置檔案
// 專案 ID: my-to-do-list-54712
// =========================================================================

export const defaultFirebaseConfig = {
  apiKey: "AIzaSyAmIyAtkrJ1XIfnuHIwjfz2qUe0OPI6Kdo",
  authDomain: "my-to-do-list-54712.firebaseapp.com",
  projectId: "my-to-do-list-54712",
  storageBucket: "my-to-do-list-54712.firebasestorage.app",
  messagingSenderId: "195718024919",
  appId: "1:195718024919:web:dad2dd792bd2244a132a92"
};

// 支援從瀏覽器 localStorage 讀取動態設定（若使用者有自訂則優先使用）
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
