import { DB } from "https://deno.land/x/sqlite/mod.ts";

// 開啟資料庫
const db = new DB("posts.db");

// 建立貼文資料表 (包含標題和正文)
db.query(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// 準備三篇貼文資料
const posts = [
  {
    title: "🌿 逃離城市！發現隱藏版森林咖啡廳 ☕",
    content: "這個週末開車到郊外，意外找到這間被綠意包圍的玻璃屋咖啡廳～陽光透過樹葉灑進來的樣子太治癒了！推薦他們的「蜂蜜檸檬氣泡飲」，清爽到瞬間降溫 ❄️\n📍 地點：山角咖啡 (導航搜「鹿野林道盡頭」)\n#週末去哪玩 #秘境打卡 #森林系女孩"
  },
  {
    title: "💥 挑戰網紅食譜結果炸廚房了！",
    content: "信了抖音的邪！說好的「零失敗舒芙蕾」根本是黑洞陷阱吧？明明跟著步驟做，為什麼出來的是焦炭化石？？求安慰或教學影片（附上我的災難現場 vs 理想對比圖）\n#廚房小白 #黑暗料理 #求食譜推薦"
  },
  {
    title: "🤯 你的手機充電器其實是「變壓器」！",
    content: "你知道嗎？那個小小的充電頭裡藏著「交流電轉直流電」的黑科技！下次朋友問「為什麼充電器會發熱」，可以帥氣回答：「它在做電力變身啊～」(詳細原理看留言區🔍)\n#冷知識 #科技宅日常 #原來如此"
  }
];

// 插入貼文資料
for (const post of posts) {
  db.query(
    "INSERT INTO posts (title, content) VALUES (?, ?)",
    [post.title, post.content]
  );
}

// 查詢並顯示所有貼文
console.log("儲存的貼文列表:");
for (const [id, title, content, createdAt] of db.query("SELECT id, title, content, created_at FROM posts")) {
  console.log(`\n[ID: ${id}] ${title} (${createdAt})`);
  console.log("──".repeat(20));
  console.log(content);
}

// 關閉資料庫連接
db.close();