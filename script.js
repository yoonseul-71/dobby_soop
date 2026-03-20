// 페이지 전환
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');
}

// 년도 전환
function showYear(game, year) {
  document.querySelectorAll(`#${game} .grid`).forEach(g => g.classList.add('hidden'));
  document.getElementById(`${game}-${year}`).classList.remove('hidden');
}

/* 🔥 여기만 수정하면 전적 추가됨 */
const data = [
  {
    game: "LOL",
    year: "2024",
    date: "2024-03-21",
    type: "내전",
    img: "https://via.placeholder.com/200",
    kda: "10/2/5",
    result: "W"
  },
  {
    game: "PUBG",
    year: "2025",
    date: "2025-01-10",
    type: "스크림",
    img: "https://via.placeholder.com/200",
    kda: "5킬",
    result: "L"
  }
];

// 출력
function render() {
  document.querySelectorAll('.grid').forEach(g => g.innerHTML = "");

  data.forEach(m => {
    const box = document.getElementById(`${m.game}-${m.year}`);

    const resultStyled =
      m.result === "W"
        ? "<span class='win'>WIN</span>"
        : "<span class='lose'>LOSE</span>";

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${m.img}">
      <div>
        <b>${m.date}</b><br>
        ${m.type}<br>
        ${m.kda}<br>
        ${resultStyled}
      </div>
    `;

    box.appendChild(div);
  });
}

render();
function showGame(game) {
  document.querySelectorAll('.game').forEach(g => g.classList.add('hidden'));
  document.getElementById(game).classList.remove('hidden');
}

function showYear(game, year) {
  document.querySelectorAll(`#${game} .grid`).forEach(el => el.classList.add('hidden'));
  document.getElementById(`${game}-${year}`).classList.remove('hidden');
}

/* 전적 데이터 */
const data = [
  {
    game: "LOL",
    year: "2024",
    date: "2024-03-21",
    type: "내전",
    img: "https://via.placeholder.com/150",
    kda: "10/2/5",
    result: "W"
  }
];

/* 출력 */
function renderStats() {
  document.querySelectorAll('.grid').forEach(g => g.innerHTML = "");

  data.forEach(m => {
    const box = document.getElementById(`${m.game}-${m.year}`);
    if (!box) return;

    const div = document.createElement("div");
    div.style.marginBottom = "10px";

    div.innerHTML = `
      <img src="${m.img}" style="width:80px"><br>
      ${m.date}<br>
      ${m.type}<br>
      ${m.kda}<br>
      ${m.result}
    `;

    box.appendChild(div);
  });
}

renderStats();
