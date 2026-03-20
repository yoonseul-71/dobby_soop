function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');
}

function showYear(game, year) {
  document.querySelectorAll(`#${game} .grid`).forEach(g => g.classList.add('hidden'));
  document.getElementById(`${game}-${year}`).classList.remove('hidden');
}

/* 데이터 */
const data = [
  {
    game: "LOL",
    year: "2024",
    date: "2024-08-14",
    type: "랜덤",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
    kda: "3/4/13",
    result: "25:26"
  },
  {
    game: "LOL",
    year: "2024",
    date: "2024-08-14",
    type: "랜덤",
    img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg",
    kda: "3/7/4",
    result: "19:31"
  },
  {
    game: "VAL",
    year: "2025",
    date: "2025-01-10",
    type: "스크림",
    img: "https://via.placeholder.com/150",
    kda: "20/5/3",
    result: "13:10"
  }
];

/* 렌더 */
function render() {
  document.querySelectorAll('.grid').forEach(g => g.innerHTML = "");

  const grouped = {};

  data.forEach(m => {
    const key = `${m.game}-${m.year}-${m.date}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(m);
  });

  Object.keys(grouped).forEach(key => {
    const [game, year, date] = key.split("-");
    const container = document.getElementById(`${game}-${year}`);
    if (!container) return;

    const groupDiv = document.createElement("div");
    groupDiv.className = "date-group";

    groupDiv.innerHTML = `<div class="date-title">${date}</div>`;

    const row = document.createElement("div");
    row.className = "row";

    grouped[key].forEach(m => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${m.img}">
        <div class="info">
          ${m.type}<br>
          ${m.kda}<br>
          ${m.result}
        </div>
      `;

      row.appendChild(card);
    });

    groupDiv.appendChild(row);
    container.appendChild(groupDiv);
  });
}

render();
