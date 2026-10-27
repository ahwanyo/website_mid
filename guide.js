/* =========================================
   KickFlip 入坑指南 — guide.js
   （放在 script.js 後面載入）
   ========================================= */

/* ---------- 資料：只要貼 YouTube 網址，縮圖會自動抓 ---------- */
// url 可以貼「單支影片」或「播放清單」：
//   影片：https://www.youtube.com/watch?v=xxxxxxxxxxx
//   清單：https://www.youtube.com/playlist?list=PLxxxxxxxx
//   清單裡的某一支：https://www.youtube.com/watch?v=xxxxxxxxxxx&list=PLxxxxxxxx
// 只貼 playlist?list= 的網址抓不到縮圖，可以另外加 thumb: "圖片路徑"
// 最上面的大播放器，一開始顯示這支
const featured = {
  title: "KickFlip “hate blueberry” M/V 🫐 | Film by Donghwa",
  url: "https://www.youtube.com/watch?v=OFFhkIUf6gc",          // 例如 "https://www.youtube.com/watch?v=xxxxxxxxxxx"
};

// 分類：想加新分類就多加一組 { title, videos }
const videoGroups = [
  {
    title: "綜藝",
    videos: [
      { title: "KickKick Original (團綜) ", time: "", url: "https://www.youtube.com/watch?v=9HB5dtiZNCA&list=PLUSrIVz3btt7wCoIgWgUgTOXTTyT7ht2v" },
      { title: "Monthly KickFlip (成員Cover)", time: "", url: "https://www.youtube.com/watch?v=Wasued8OVE4&list=PLUSrIVz3btt6QEbJvd594c7B2PpHkYh-G" },
      { title: "Kick 2 Kick (1v1談話節目)", time: "", url: "https://www.youtube.com/watch?v=Ov5h5dMif2U&list=PLUSrIVz3btt4hQ3G_pXFU8bz93kWKee_S" },
      { title: "（LALALALA (Stray Kids) 舞台Cover ", time: "3:07", url: "https://www.youtube.com/watch?v=DTaaCA2eMW8" },
    ],
  },
  {
    title: "選秀",
    videos: [
      { title: "케이주, 무대를 휘어잡은 음(Mmmh) 무대 (成員 Keiju 選秀Solo)", time: "2:41", url: "https://www.youtube.com/watch?v=qGxymQpGIfs" },
      { title: "JYP 팀, 스트레이 키즈와 완벽한 케미 이루며 ‘Back Door’ 열창♬ (決賽舞台)", time: "3:30", url: "https://www.youtube.com/watch?v=Yhb2g3TqiJ8" },
    ],
  },
];

/* ---------- 工具 ---------- */
// 從 YouTube 網址取出影片 ID（支援 watch?v=、youtu.be/、shorts/、embed/）
function ytId(url) {
  const m = (url || "").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : "";
}
// 從網址取出播放清單 ID（list=...）
function ytList(url) {
  const m = (url || "").match(/[?&]list=([\w-]+)/);
  return m ? m[1] : "";
}
const hasVideo = v => ytId(v.url) || ytList(v.url);
const ytThumb = id => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

// 縮圖：有自己指定 thumb 就用 thumb，沒有就用影片 ID 抓
function thumbOf(v) {
  if (v.thumb) return v.thumb;
  const id = ytId(v.url);
  return id ? ytThumb(id) : "";
}

// 嵌入用的網址：影片、播放清單、清單中的某一支都能播
function embedSrc(v) {
  const id = ytId(v.url), list = ytList(v.url);
  if (id && list) return `https://www.youtube.com/embed/${id}?list=${list}&autoplay=1&rel=0`;
  if (list)       return `https://www.youtube.com/embed/videoseries?list=${list}&autoplay=1&rel=0`;
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}
const arrowSvg = `<svg class="v-card__arrow" viewBox="0 0 100 20"><path d="M0 10 H92 M84 3 L94 10 L84 17"/></svg>`;

/* ---------- 大播放器 ---------- */
const player = document.getElementById("player");
const playerTitle = document.getElementById("playerTitle");
let currentVideo = featured;

// 顯示縮圖 + 播放鍵（還沒開始播）
function showCover(video) {
  currentVideo = video;
  const thumb = thumbOf(video);
  player.innerHTML = `
    ${thumb ? `<img class="player__thumb" src="${thumb}" alt="">` : ""}
    <button class="player__play" aria-label="播放影片"></button>`;
  playerTitle.textContent = video.title;
  player.querySelector(".player__play").addEventListener("click", () => playVideo(video));
}

// 換成 YouTube 播放器並開始播
function playVideo(video) {
  if (!hasVideo(video)) {
    alert("這支影片還沒有填 YouTube 網址喔！");
    return;
  }
  currentVideo = video;
  player.innerHTML = `<iframe src="${embedSrc(video)}"
    title="${video.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  playerTitle.textContent = video.title;
  document.querySelectorAll(".v-card").forEach(c => c.classList.toggle("is-current", c.video === video));
}

/* ---------- 影片分類 ---------- */
const sections = document.getElementById("videoSections");
sections.innerHTML = videoGroups.map((g, gi) => `
  <section class="v-section">
    <h2 class="v-section__title">${g.title}</h2>
    <div class="v-grid">
      ${g.videos.map((v, vi) => {
        const thumb = thumbOf(v);
        const isList = ytList(v.url) !== "";
        const label = isList ? "▶ 播放清單" : v.time;
        return `
        <button class="v-card" data-g="${gi}" data-v="${vi}">
          <div class="v-card__thumb">
            ${thumb ? `<img src="${thumb}" alt="">`
                    : `<span class="v-card__empty">${hasVideo(v) ? "▶ 播放清單" : "貼上 YouTube 網址"}</span>`}
            ${label ? `<span class="v-card__time${isList ? " v-card__time--list" : ""}">${label}</span>` : ""}
          </div>
          <p class="v-card__title">${v.title}</p>
          ${arrowSvg}
        </button>`;
      }).join("")}
    </div>
  </section>`).join("");

// 點卡片 → 在上面的大播放器播放，並捲上去
document.querySelectorAll(".v-card").forEach(card => {
  const video = videoGroups[card.dataset.g].videos[card.dataset.v];
  card.video = video;
  card.addEventListener("click", () => {
    if (!hasVideo(video)) {
      alert("這支影片還沒有填 YouTube 網址喔！");
      return;
    }
    playVideo(video);
    player.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// 大播放器一開始：用 featured；沒填的話就用第一支有網址的影片
const firstWithUrl = videoGroups.flatMap(g => g.videos).find(hasVideo);
showCover(hasVideo(featured) ? featured : (firstWithUrl || featured));