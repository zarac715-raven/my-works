# ✨ 我的網頁與多媒體作品集 (My Web & Creative Portfolio)

> 專為行動裝置優先（Mobile-First）設計的個人作品展覽館，收錄純前端互動應用、數據分析儀表板、互動休閒遊戲、系統原型藍圖、商業廣告 DM、AI 概念影像與原創音樂等 32 件作品。

![GitHub repo size](https://img.shields.io/github/repo-size/zarac715-raven/my-works?color=indigo&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zarac715-raven/my-works?color=purple&style=for-the-badge)
![GitHub license](https://img.shields.io/badge/License-MIT-pink?style=for-the-badge)

---

## 📱 核心亮點與特色

- **行動優先（Mobile-First）響應式架構**：流暢的手機單手操作體驗，具備頂部導覽列與底部懸浮導航膠囊（Bottom Dock）。
- **即時搜尋與分類篩選**：支援關鍵字即時檢索與橫向滑動分類切換（全部、網頁應用、互動遊戲、系統原型、商業 DM、創意攝影、原創音樂）。
- **純離線可用架構**：所有作品皆支援純前端無伺服器環境運行，包含本地端機敏個資去識別化與離線財報分析。
- **內建即時音訊播放**：原創音樂作品整合 HTML5 原生播放器，可在作品卡片上直接試聽。

---

## 📂 作品分類總覽 (Directory Structure)

```text
My works/
├── index.html            # 作品集首頁（Mobile-First 互動展覽館）
├── README.md             # 專案說明文件
├── Web/                  # 網頁應用與數據分析儀表板 (10 件)
│   ├── daily_water_intake_tracker.html
│   ├── hogwarts_chrono_magic_clock.html
│   ├── mops_cash_flow_dashboard.html
│   ├── Mr.Yang's Store.html
│   ├── phoenix_s_client_side_privacy_engine.html
│   ├── Pokemon Weather Forecast.html
│   ├── SuperStar CLock set.html
│   ├── vampire.html
│   ├── weekly horoscope.html
│   └── 企業營運與獲利診斷儀表板.html
├── game/                 # 互動網頁遊戲 (3 件)
│   ├── boba_shop_tycoon_layout.html
│   ├── hogwarts_lottery_magic_predictor.html
│   └── lucky_draw_app.html
├── prototype/            # 系統拓撲圖與 UI/UX 原型規劃 (8 件)
│   ├── 個人網站系統架構與技術剖析.png
│   ├── 遊戲測試追蹤系統指南.png
│   ├── Game_Testing_Tracking_System_Diagram.png
│   ├── Exodus Journey 拼圖聖經遊戲介面.png
│   ├── Q版出埃及記拼圖之旅.png
│   ├── Bible Puzzle Journey Infographic Poster.png
│   ├── 我的第一個 Notion 資料庫.png
│   └── Trade_Specialist_Candidate_Profile.png
├── DM/                   # 商業行銷宣傳海報與 DM (2 件)
│   ├── Luxury Rib DM.png
│   └── ThanksGiving Turkey DM.png
├── creative photo/       # AI 概念藝術與視覺攝影 (12 件)
│   ├── Pop-Art Selfie Comic Collage.png
│   ├── Nineframe.png
│   ├── Moonlit Wolf Guardian in the Forest.png
│   ├── LUNARA_ Lycan Guardian Bond.jpg
│   ├── Lunara_ Lycan of the Violet Moon.png
│   ├── VIRENNU_ Keeper of Boundaries.png
│   └── Liberty of Statue.png (等 13 件)
└── mp3/                  # 原創電子音樂與配樂 (2 首)
    ├── Steel_Rain.mp3
    └── AudioTranscriberAI (Caged).mp3
```

---

## 🛠️ 技術棧與使用 API (Tech Stack & APIs)

| 領域 | 技術與 API | 代表作品 |
|---|---|---|
| **現代前端** | HTML5, CSS3, ES6+ JavaScript, Tailwind CSS, Flex/Grid | `楊老大便當店`, `明星精美桌布時鐘` |
| **數據視覺化** | Chart.js, HTML5 Canvas API, SheetJS (XLSX) | `公開資訊觀測站現金流量表`, `企業營運診斷儀表板` |
| **互動音訊與遊戲** | Web Audio API, Tone.js, requestAnimationFrame 粒子特效 | `珍奶店大作戰`, `霍格華茲魔法選號機`, `豪華抽籤系統` |
| **隱私資安** | Web Crypto API (雜湊/去敏), FileReader, Blob/URL API | `Phoenix 本地端個資去識別化工具` |
| **系統設計** | UML ERD, Mermaid, Figma UI Kit, 狀態機模型 (FSM) | `遊戲測試追蹤系統指南`, `出埃及記遊戲介面原型` |
| **多媒體製作** | 數位音訊合成 (DSP), 向量合成排版, 波普網點演算法 | `Steel Rain`, `Luxury Rib DM`, `Pop-Art 漫畫拼貼` |

---

## 🚀 本地端快速啟動 (Quick Start)

本專案無需繁瑣的 Node.js 建置流程，純靜態網頁即可直接預覽：

1. **Clone 本專案至本機**：
   ```bash
   git clone https://github.com/zarac715-raven/my-works.git
   cd my-works
   ```

2. **直接使用瀏覽器開啟**：
   - 雙擊開啟 `index.html`，或在命令列執行：
   ```bash
   # Windows PowerShell
   Start-Process index.html
   ```

3. **透過 VS Code Live Server 預覽**（選用）：
   - 在 VS Code 中安裝 `Live Server` 外掛，對 `index.html` 右鍵選擇 `Open with Live Server`。

---

## 👨‍💻 關於作者 (About Me)

- **GitHub**: [@zarac715-raven](https://github.com/zarac715-raven)
- **專業領域**: Full-Stack Web Development, Creative UX Design, Data Visualization, Information Security
- **設計哲學**: 將優雅的工程架構與溫度的視覺互動結合，打造兼具實用價值與美感體驗的數位產品。

---

## 📄 授權條款 (License)

本專案採用 [MIT License](LICENSE) 授權。
