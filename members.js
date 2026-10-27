/* =========================================
   KickFlip 成員頁 — members.js
   （放在 script.js 後面載入，成員資料在 script.js 的 members）
   ========================================= */

/* ---------- 成員頁：角色卡 + 分頁 ---------- */
const card = document.querySelector(".card");
if (card) {
  const photo = document.querySelector(".card__photo");
  const nameEl = document.querySelector(".card__name");
  const namesList = document.querySelector(".profile__names");
  const panel = document.querySelector(".profile__panel");
  const tabs = document.querySelectorAll(".tab");

  let currentMember = Number(new URLSearchParams(location.search).get("m")) || 0;
  let currentTab = "info";

  namesList.innerHTML = members.map((m, i) => `<li data-i="${i}">${m.name}</li>`).join("");

  // 依資料種類決定怎麼排：物件 → 欄位表，陣列 → 條列，文字 → 直接顯示
  function renderPanel() {
    const data = members[currentMember][currentTab];
    if (Array.isArray(data)) {
      panel.innerHTML = `<ul class="panel-list">${data.map(x => `<li>${x}</li>`).join("")}</ul>`;
    } else if (data && typeof data === "object") {
      panel.innerHTML = `<dl class="panel-info">${
        Object.entries(data).map(([k, v]) =>
          Array.isArray(v)
            ? `<dt class="is-wide">${k}</dt><dd class="is-wide"><ul class="panel-list">${v.map(x => `<li>${x}</li>`).join("")}</ul></dd>`
            : `<dt>${k}</dt><dd>${v || "—"}</dd>`
        ).join("")
      }</dl>`;
    } else {
      panel.textContent = data || "";
    }
    panel.classList.remove("is-show");
    void panel.offsetWidth;
    panel.classList.add("is-show");
  }

  // 角色卡照片：在「吉祥物」分頁、而且有吉祥物照片時，換成吉祥物
  function showPhoto() {
    const m = members[currentMember];
    const useMascot = currentTab === "mascot" && m.mascotImg;
    photo.classList.add("is-fading");
    setTimeout(() => {
      photo.src = useMascot ? m.mascotImg : m.img;
      photo.alt = useMascot ? m.mascot.官方吉祥物 : m.name;
      photo.style.objectPosition = useMascot ? "center" : (m.pos || "center");
      photo.classList.toggle("is-mascot", Boolean(useMascot));
      photo.classList.remove("is-fading");
    }, 200);
    nameEl.textContent = useMascot ? m.mascot.官方吉祥物 : m.name;
  }

  function render() {
    namesList.querySelectorAll("li").forEach(li =>
      li.classList.toggle("is-active", Number(li.dataset.i) === currentMember)
    );
    showPhoto();
    renderPanel();
  }

  namesList.addEventListener("click", e => {
    const li = e.target.closest("li");
    if (!li) return;
    currentMember = Number(li.dataset.i);
    render();
  });

  tabs.forEach(tab => tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    currentTab = tab.dataset.tab;
    renderPanel();
    showPhoto();
  }));

  render();
}