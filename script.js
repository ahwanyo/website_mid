/* =========================================
   KickFlip 期中作業 — script.js
   ========================================= */

/* ---------- 資料：成員（首頁輪播、成員頁共用） ---------- */
const members = [
  {
    name: "Kyehoon",
    img: "images/members/Kyehoon.JPG",
    mascotImg: "images/mascot/kyesoongi.jpg",   // 吉祥物照片
    pos: "50% 20%",
    info:   { 本名: "이계훈 (李啟訓)", 生日: "2004.09.16", 國籍: "韓國", 擔當: "隊長、Ace", MBTI: "ISFP" },
    career: ["SBS 選秀節目《LOUD》出身", "2025.01.20 以 KickFlip 出道"],
    mascot: {
      官方吉祥物: "Kyesoongi",
      原型與由來: "由狐猴（여우원숭이）結合成員的名字命名，原名為「巧克崇（초코숭이）」。",
      獨特屬性: [
        "<b>出生地與愛好</b>：出生於《決戰猩球》拍攝現場，因為是猴子類，所以最喜歡高層公寓。",
        "<b>法律系學霸與巧克力狂愛</b>：正在準備考法學院（로스쿨），因為讀書過度容易低血糖而極度依賴巧克力（甚至曾去迦納留學）。",
        "<b>害羞性格與外貌特徵</b>：看似表情犀利，但其實非常害羞，害羞或尷尬時耳朵和臉會變紅；頭頂有天生的「燕窩頭（제비집）」髮型。心情不好時會用斜眼看人。",
      ],
    },
  },
  {
    name: "Amaru",
    img: "images/members/Amaru.jpg",
    mascotImg: "",   // 吉祥物照片
    pos: "50% 30%",
    info:   { 本名: "満行亜丸(Mitsuyuki Amaru)", 生日: "2005.10.21", 國籍: "日本", 擔當: "Vocal、Rap", MBTI: "ISTP" },
    career: ["SBS 選秀節目《LOUD》出身", "2025.01.20 以 KickFlip 出道"],
    mascot: {官方吉祥物: "(暫停活動，暫時沒有官方吉祥物)", 介紹: "" },
  },
  {
    name: "Donghwa",
    img: "images/members/Donghwa.JPG",
    mascotImg: "images/mascot/hwadongi.jpg",   // 吉祥物照片
    pos: "50% 25%",
    info:   { 本名: "이동화(李東花)", 生日: "2006.03.11", 國籍: "韓國",擔當: "Dance", MBTI: "INTJ" },
    career: ["JYP 練習生出身", "2025.01.20 以 KickFlip 出道"],
    mascot: {
      官方吉祥物: "Hwadongi",
      原型與由來: "成員東花（이동화）將自己名字倒過來，試圖創造出自己的完美複製品「變異青蛙」。",
      獨特屬性: [
        "<b>MBTI 與出生地</b>：MBTI 為 INTJ，出生於沼澤科學研究所。",
        "<b>焦慮依戀與多重人格</b>：擁有「焦慮型依戀症候群」與多重人格。性格極度缺乏安全感且愛嫉妒，隨時需要獲得滿滿的愛，若得不到愛會變得非常可怕。",
        "<b>造型與習慣</b>：眼神呈渙散狀（풀린 눈），穿著豹紋紅褲子（鬼怪內褲風格）。喜歡躲在沼澤暗中偷看別人。心情好時會發出「잉（Ing）」的聲音。",
      ],
    },
  },
  {
    name: "Juwang",
    img: "images/members/Juwang.JPG",
    mascotImg: "images/mascot/jjuangi.jpg",   // 吉祥物照片
    pos: "50% 20%",
    info:   { 本名: "장주왕(張主汪)", 生日: "2006.05.02", 國籍: "韓國", 擔當: "Vocal",MBTI: "ISFP" },
    career: ["JYP 練習生出身", "2025.01.20 以 KickFlip 出道"],
    mascot: {
      官方吉祥物: "Jjuangi",
      原型與由來: "結合倉鼠與起司球的「倉起司球（햄치즈볼）」。",
      獨特屬性: [
        "<b>MBTI 與出生地</b>：MBTI 為 ISFP，出生於熱油之中。",
        "<b>微波爐續航與沾醬包</b>：每 1 分鐘就要進一次微波爐，否則無法維持鬆軟；必備裝備是沾醬包。",
        "<b>外柔內剛與起司身體</b>：外表看似鬆軟且有小肚子（其實是拉長腿的姿勢），但硬化後性格會變硬；身體由莫札瑞拉、切達等多種起司組成。",
        "<b>伸縮肢體</b>：生氣或心情不好時會把手腳拉長來教訓別人。",
      ],
    },
  },
  {
    name: "Minje",
    img: "images/members/Minje.JPG",
    mascotImg: "images/mascot/woolmingi.jpg",   // 吉祥物照片
    pos: "50% 20%",
    info:   { 本名: "최민제(崔旻帝)", 生日: "2006.05.12", 國籍: "韓國／紐西蘭", 擔當: "Rap",MBTI: "INTP" },
    career: ["JYP 練習生出身", "2025.01.20 以 KickFlip 出道"],
    mascot: {
      官方吉祥物: "Woolmingi",
      原型與由來: "成員旻帝（민제）結合狼嚎聲與自己名字所創造的溫順野狼。",
      獨特屬性: [
        "<b>MBTI 與憧憬</b>：MBTI 為 ENFP，因為想成為擅長社交、口才好的人而如此設定。",
        "<b>主持級口才與毛線帽</b>：出生於冬日村莊，必備物品是毛線帽。性格溫和，擁有 MC 級的口才且非常善於與人相處。",
        "<b>獨特特技與聲音</b>：興趣是破壞積木，特技是可以一直睜著眼睛不眨眼。心情好時會重踩地面並發出「꿀（蜜/豬叫）」聲，心情不好時會發出「밍밍밍（Ming-ming-ming）」聲。",
      ],
    },
  },
  {
    name: "Keiju",
    img: "images/members/Keiju.JPG",
    mascotImg: "images/mascot/nyangori.jpg",   // 吉祥物照片
    pos: "50% 30%",
    info:   { 本名: "岡本佳樹(Okamoto Keiju)", 生日: "2006.10.04", 國籍: "日本",擔當: "Dance", MBTI: "INFP" },
    career: ["SBS 選秀節目《LOUD》出身", "2025.01.20 以 KickFlip 出道"],
    mascot: {
      官方吉祥物: "Nyangori",
      原型與由來: "結合貓咪（냥）與魔鬼魚（가오리）的海洋貓咪。",
      獨特屬性: [
        "<b>出生地與配件</b>：出生於「Point Nemo（無人海底）」，戴著 KickFlip 眼罩。",
        "<b>110V 插頭尾巴</b>：尾巴是 110V 插頭形狀，可以幫人充電或發射 100 萬伏特電力。",
        "<b>宅貓玩家與暴走反差</b>：是個喜歡待在家睡覺、打電玩的宅貓，觸感極度蓬鬆柔軟。但打遊戲生氣時會把電視機打穿。最喜歡麻婆豆腐與 WeFlip。",
      ],
    },
  },
  {
    name: "Donghyeon",
    img: "images/members/Dong.jpg",
    mascotImg: "images/mascot/tonyoni.jpg",   // 吉祥物照片
    pos: "50% 0%",
    info:   { 本名: "이동현(李東玹)", 生日: "2007.03.13", 國籍: "韓國", 擔當: "忙內、Vocal", MBTI: "ISFP" },
    career: ["SBS 選秀節目《LOUD》出身", "2025.01.20 以 KickFlip 出道"],
    mascot: {
      官方吉祥物: "Tonyoni",
      原型與由來: "成員東玹（동현）結合兔子與樹懶特徵所創造的角色。",
      獨特屬性: [
        "<b>出生地與疲倦眼神</b>：來自月球。眼睛總是半睜半閉，反映了作者在練舞後極度疲倦的眼神。",
        "<b>叛逆性格與門牙微表情</b>：水藍色身體，性格有點沒禮貌與傲嬌（口頭禪是「我是兔紐，你想怎樣？」）。長著兩顆門牙（可以做門牙賣萌），戴著圍兜兜。",
        "<b>喜好與聲音</b>：喜歡在床上睡覺、唱歌與吃蔬菜／胡蘿蔔，討厭青葡萄。心情好時會發出「니니（Ni-ni）」聲，心情不好時會發出「도뇨（Do-nyo）」聲。",
      ],
    },
  },
];

/* ---------- 資料：首頁黑膠 ---------- */
const songs = [
  { title: "Flip it, Kick it!",       date: "2025.01.20", cover: "images/music/1.jpg", bg: "images/music/1.jpg", audio: "audio/1.mp3" },
  { title: "Kick Out, Flip Now!",     date: "2025.05.26", cover: "images/music/2.jpg", bg: "images/music/2.jpg", audio: "audio/2.mp3" },
  { title: "My First Flip",           date: "2025.09.22", cover: "images/music/3.jpg", bg: "images/music/3.jpg", audio: "audio/3.mp3" },
  { title: "My First Kick",           date: "2026.04.06", cover: "images/music/4.jpg", bg: "images/music/4.jpg", audio: "audio/4.mp3" },
  { title: "KICK OFF THE WALL Pt. 1", date: "2026.10.06", cover: "images/music/5.jpg", bg: "images/music/5.jpg", audio: "audio/5.mp3" },
];

/* ---------- 共用：其他選單 ---------- */
const menu = document.querySelector(".menu");
document.querySelectorAll("[data-menu-open]").forEach(btn =>
  btn.addEventListener("click", () => {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
  })
);
document.querySelectorAll("[data-menu-close], .menu__list a").forEach(el =>
  el.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
  })
);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") menu.classList.remove("is-open");
});

/* ---------- 共用：跑馬燈 (複製文字讓它無縫循環) ---------- */
document.querySelectorAll(".marquee__track").forEach(track => {
  const word = track.textContent.trim();
  track.innerHTML = Array(16).fill(`<span>${word}</span>`).join("");
});

/* ---------- 首頁：成員照片無限循環輪播 ---------- */
const memberRow = document.querySelector(".member-row");
if (memberRow) {
  memberRow.innerHTML = `<div class="member-track">${
    members.map((m, i) => `
      <a class="member-thumb" href="members.html?m=${i}">
        <img src="${m.img}" alt="${m.name}" style="object-position:${m.pos || 'center'}">
        <span class="member-thumb__name">${m.name}</span>
      </a>`).join("")
  }</div>`;

  const track = memberRow.querySelector(".member-track");
  const GAP = 12;
  const SPEED = "transform .4s ease";
  let moving = false;   // 動畫進行中就不接受新的點擊

  const step = () => track.firstElementChild.offsetWidth + GAP;

  // 只在整排滑完時才執行（避免照片 hover 的動畫誤觸發）
  function afterSlide(callback) {
    const handler = e => {
      if (e.target !== track) return;
      track.removeEventListener("transitionend", handler);
      callback();
    };
    track.addEventListener("transitionend", handler);
  }

  function next() {
    if (moving) return;
    moving = true;
    track.style.transition = SPEED;
    track.style.transform = `translateX(${-step()}px)`;
    afterSlide(() => {
      track.style.transition = "none";
      track.appendChild(track.firstElementChild);   // 第一張搬到最後
      track.style.transform = "translateX(0)";
      moving = false;
    });
  }

  function prev() {
    if (moving) return;
    moving = true;
    track.style.transition = "none";
    track.prepend(track.lastElementChild);          // 最後一張搬到最前
    track.style.transform = `translateX(${-step()}px)`;
    track.offsetWidth;                              // 讓瀏覽器先套用位置
    track.style.transition = SPEED;
    track.style.transform = "translateX(0)";
    afterSlide(() => { moving = false; });
  }

  document.querySelector(".member-slider__arrow--next").addEventListener("click", next);
  document.querySelector(".member-slider__arrow--prev").addEventListener("click", prev);

  // 手機左右滑
  let startX = 0;
  memberRow.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  memberRow.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) next();
    else if (dx > 40) prev();
  });
}

/* ---------- 首頁：音樂輪播 ---------- */
const vinyl = document.querySelector(".vinyl");
if (vinyl) {
  const cover = document.querySelector(".vinyl__cover");
  const bg = document.querySelector(".music__bg");
  const title = document.querySelector(".music__title");
  const audio = document.querySelector(".music__audio");
  let current = 0;

  function renderSong() {
    const s = songs[current];
    cover.src = s.cover;
    bg.src = s.bg;
    title.innerHTML = `${s.title}<span class="music__date">${s.date}</span>`;
    audio.src = s.audio;
    vinyl.classList.remove("is-playing");
  }

  document.querySelector(".music__arrow--prev").addEventListener("click", () => {
    current = (current - 1 + songs.length) % songs.length;
    renderSong();
  });
  document.querySelector(".music__arrow--next").addEventListener("click", () => {
    current = (current + 1) % songs.length;
    renderSong();
  });
  document.querySelector(".vinyl__play").addEventListener("click", () => {
    const playing = vinyl.classList.toggle("is-playing");
    if (audio.getAttribute("src")) playing ? audio.play() : audio.pause();
  });

  renderSong();
}

/* ---------- 影片彈出視窗 ---------- */
const videoModal = document.querySelector(".video-modal");
if (videoModal) {
  const frame = videoModal.querySelector(".video-modal__frame");

  // YouTube 網址 → 嵌入用網址（支援影片、播放清單）
  const modalEmbed = url => {
    const id = (url.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/) || [])[1];
    const list = (url.match(/[?&]list=([\w-]+)/) || [])[1];
    if (id && list) return `https://www.youtube.com/embed/${id}?list=${list}&autoplay=1&rel=0`;
    if (list) return `https://www.youtube.com/embed/videoseries?list=${list}&autoplay=1&rel=0`;
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  };

  const openVideo = url => {
    frame.innerHTML = `<iframe src="${modalEmbed(url)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
  };
  const closeVideo = () => {
    videoModal.classList.remove("is-open");
    videoModal.setAttribute("aria-hidden", "true");
    frame.innerHTML = "";              // 清掉影片 = 停止播放
  };

  document.querySelectorAll("[data-video]").forEach(btn =>
    btn.addEventListener("click", () => openVideo(btn.dataset.video))
  );
  videoModal.querySelector(".video-modal__close").addEventListener("click", closeVideo);
  videoModal.addEventListener("click", e => { if (e.target === videoModal) closeVideo(); });   // 點黑色背景關閉
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeVideo(); });
}