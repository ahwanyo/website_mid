/* =========================================
   KickFlip 音樂作品頁 — music.js
   （放在 script.js 後面載入）
   ========================================= */

/* ---------- 資料：八張作品（照發行順序） ---------- */
// playlist：YouTube 播放清單網址。留空的話，點下去會改開 YouTube 搜尋
const albums = [
  { no: "01", title: "Flip it, Kick it!",        date: "2025.01.20", cover: "images/music/1.jpg", audio: "audio/1.mp3", playlist: "https://www.youtube.com/watch?v=lN1EXDbplo4&list=OLAK5uy_m8_9gwn-T7unqZQdvcG5v_ilT0JOLbqik" },
  { no: "02", title: "Kick Out, Flip Now!",      date: "2025.05.26", cover: "images/music/2.jpg", audio: "audio/2.mp3", playlist: "https://www.youtube.com/watch?v=Z6fpV6V9y80&list=OLAK5uy_nZj5JHNbKr40KRV5yhJE0-g6zkkPDYU6g" },
  { no: "03", title: "My First Flip",            date: "2025.09.22", cover: "images/music/3.jpg", audio: "audio/3.mp3", playlist: "https://www.youtube.com/watch?v=eebhl4lGv_Y&list=OLAK5uy_myaWr4BAKIpuvO-Bdx2T6zzdIJE_NgBQM" },
  { no: "04", title: "Something Feels Wrong",    date: "2026.01.11", cover: "images/music/8.jpg", audio: "audio/6.mp3", playlist: "https://www.youtube.com/watch?v=HHkj1M34QNg&list=OLAK5uy_mnMmIv4mBvLsIpyogj1Ca-P-SzyGxvw0M" },
  { no: "05", title: "From KickFlip, To WeFlip", date: "2026.01.20", cover: "images/music/6.jpg", audio: "audio/7.mp3", playlist: "https://www.youtube.com/watch?v=eH451qUshxw&list=OLAK5uy_mRKBBfRcd9GqcdsGPUZ6aVeo6tnrVKZ9U" },
  { no: "06", title: "My First Kick",            date: "2026.04.06", cover: "images/music/4.jpg", audio: "audio/4.mp3", playlist: "https://www.youtube.com/watch?v=i5S7DBQnqP0&list=OLAK5uy_nGS6jmUEsy2gtCxJtlnxceUyMDihFNG9M" },
  { no: "07", title: "Everyday, Everynight",     date: "2026.07.08", cover: "images/music/7.jpg", audio: "audio/8.mp3", playlist: "https://www.youtube.com/watch?v=AvDZV6ooreo&list=OLAK5uy_kIq9BXlbxqdmCLJyfENqhO1EJrdsBy6PU" },
  { no: "08", title: "KICK OFF THE WALL Pt. 1",  date: "2026.10.06", cover: "images/music/5.jpg", audio: "audio/5.mp3", playlist: "https://www.youtube.com/watch?v=zz5AX5MCwhs&list=OLAK5uy_l5etLXW3H8ZknF3t0FxcjXmR4DSXD-eP4" },
];

/* ---------- 資料：NEW RELEASE 曲目 ---------- */
// audio：音檔路徑。留空 "" 的話，點下去會改開 YouTube 搜尋
const newRelease = [
  { title: "미완성 (Puzzle Piece)",               time: "2:55", img: "images/music/5.jpg", audio: "audio/5-1.mp3" },
  { title: "Kick Off The Wall (Feat. iann dior)", time: "3:00", img: "images/music/5.jpg", audio: "audio/5.mp3" },
  { title: "0 (Young)",                           time: "2:58", img: "images/music/5.jpg", audio: "audio/5-2.mp3" },
];

const player = new Audio();   // NEW RELEASE 專用的播放器
let playingTrack = -1;        // 目前在播第幾首（-1 = 沒有）

const ytSearch = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent("KickFlip " + q);

/* ---------- 黑膠輪播 ---------- */
const stage = document.querySelector(".disc-stage");
const discTrack = document.querySelector(".disc-track");
const caption = document.querySelector(".disc-caption");
const audio = document.querySelector(".disc-audio");
const relRow = document.querySelector(".release__row");

let current = albums.length - 1;   // 一開始顯示最新的專輯
let playing = false;

discTrack.innerHTML = albums.map((a, i) => `
  <div class="disc" data-i="${i}">
    <div class="disc__vinyl"><img class="disc__cover" src="${a.cover}" alt="${a.title}"></div>
  </div>`).join("");
const discs = discTrack.querySelectorAll(".disc");

relRow.innerHTML = albums.map((a, i) => `
  <button class="rel-item" data-i="${i}">
    <span class="rel-item__cover">
      <img src="${a.cover}" alt="">
      <span class="rel-item__yt">▶ YouTube</span>
    </span>
    <p>${a.title}</p>
  </button>`).join("");
const relItems = relRow.querySelectorAll(".rel-item");

// 第 i 張跟目前專輯的距離：0 = 中間，-1 = 左邊，1 = 右邊（左右循環）
function getOff(i) {
  const n = albums.length;
  let off = ((i - current) % n + n) % n;
  if (off > n / 2) off -= n;
  return off;
}

function layout() {
  discs.forEach((d, i) => {
    d.dataset.off = getOff(i);
    d.classList.toggle("is-playing", i === current && playing);
  });
  relItems.forEach((item, i) => { item.dataset.off = getOff(i); });

  const a = albums[current];
  caption.innerHTML = `${a.no} / <b>${a.title}</b> ・ ${a.date}`;
}

function goTo(i) {
  current = (i + albums.length) % albums.length;
  setPlaying(false);
  audio.src = albums[current].audio;
  layout();
}

function setPlaying(state) {
  playing = state;
  if (state) player.pause();          // 黑膠開始播 → 歌曲列表暫停
  stage.classList.toggle("is-playing", playing);
  if (audio.getAttribute("src")) playing ? audio.play() : audio.pause();
  layout();
}

document.querySelector(".disc-arrow--prev").addEventListener("click", () => goTo(current - 1));
document.querySelector(".disc-arrow--next").addEventListener("click", () => goTo(current + 1));
document.querySelector(".disc-play").addEventListener("click", () => setPlaying(!playing));

// 點旁邊的唱片 → 切過去；點中間的唱片 → 播放／暫停
discs.forEach((d, i) => d.addEventListener("click", () => {
  if (i === current) setPlaying(!playing);
  else goTo(i);
}));

// 手機左右滑
let startX = 0;
stage.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
stage.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx < -40) goTo(current + 1);
  else if (dx > 40) goTo(current - 1);
});

// 點「發行內容」旁邊的封面 → 換過去；點中間的 → 開 YouTube 播放清單
relItems.forEach((item, i) => item.addEventListener("click", () => {
  if (i !== current) { goTo(i); return; }
  const a = albums[i];
  const url = a.playlist || ytSearch(a.title + " album");
  window.open(url, "_blank");
}));

/* ---------- NEW RELEASE 曲目列表：點擊播放 ---------- */
const trackList = document.querySelector(".tracks");
trackList.innerHTML = newRelease.map((t, i) => `
  <li>
    <button class="track" data-i="${i}">
      <span class="track__thumb"><img src="${t.img}" alt=""><span class="track__icon"></span></span>
      <span class="track__name">${t.title}</span>
      <span class="track__time">${t.time}</span>
    </button>
  </li>`).join("");
const trackBtns = trackList.querySelectorAll(".track");

// 秒數 → 0:00 格式
const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// 把某一首恢復成沒在播的樣子
function resetTrack(i) {
  const btn = trackBtns[i];
  if (!btn) return;
  btn.classList.remove("is-playing", "is-paused");
  btn.style.setProperty("--p", "0%");
  btn.querySelector(".track__time").textContent = newRelease[i].time;
}

trackBtns.forEach((btn, i) => btn.addEventListener("click", () => {
  const t = newRelease[i];

  // 沒有音檔 → 開 YouTube
  if (!t.audio) { window.open(ytSearch(t.title), "_blank"); return; }

  // 點正在播的那首 → 暫停／繼續
  if (playingTrack === i) {
    player.paused ? player.play() : player.pause();
    return;
  }

  // 換一首新的
  resetTrack(playingTrack);
  if (playing) setPlaying(false);     // 黑膠在轉的話先停
  playingTrack = i;
  player.src = t.audio;
  player.play().catch(() => {
    console.warn("找不到音檔：" + t.audio);
    resetTrack(i);
    playingTrack = -1;
  });
}));

player.addEventListener("play", () => {
  const btn = trackBtns[playingTrack];
  if (btn) { btn.classList.add("is-playing"); btn.classList.remove("is-paused"); }
});
player.addEventListener("pause", () => {
  const btn = trackBtns[playingTrack];
  if (btn && !player.ended) { btn.classList.add("is-paused"); btn.classList.remove("is-playing"); }
});
// 播放進度：下方綠色進度條 + 右邊時間
player.addEventListener("timeupdate", () => {
  const btn = trackBtns[playingTrack];
  if (!btn || !player.duration) return;
  btn.style.setProperty("--p", (player.currentTime / player.duration * 100) + "%");
  btn.querySelector(".track__time").textContent = fmt(player.currentTime);
});
// 播完自動接下一首
player.addEventListener("ended", () => {
  const next = playingTrack + 1;
  resetTrack(playingTrack);
  playingTrack = -1;
  if (next < newRelease.length) trackBtns[next].click();
});

audio.src = albums[current].audio;
layout();