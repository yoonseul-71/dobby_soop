function showGame(game) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(game).classList.remove('hidden');
}

function showYear(game, year) {
  document.querySelectorAll(`#${game} .year`).forEach(y => y.classList.add('hidden'));
  document.getElementById(`${game}-${year}`).classList.remove('hidden');
}

// 데이터 저장
let data = JSON.parse(localStorage.getItem("matchData")) || [];

function addMatch() {
  const match = {
    game: document.getElementById("game").value,
    year: document.getElementById("year").value,
    date: document.getElementById("date").value,
    type: document.getElementById("type").value,
    img: document.getElementById("img").value,
    kda: document.getElementById("kda").value,
    result: document.getElementById("result").value
  };

  data.push(match);
  localStorage.setItem("matchData", JSON.stringify(data));
  render();
}

function render() {
  document.querySelectorAll('.year').forEach(y => y.innerHTML = "");

  data.forEach(m => {
    const container = document.getElementById(`${m.game}-${m.year}`);

    const div = document.createElement("div");
    div.className = "buttons"; // 기존 스타일 재사용

    div.innerHTML = `
      <img src="${m.img}" style="width:60px"><br>
      <b>${m.date}</b><br>
      ${m.type}<br>
      ${m.kda}<br>
      ${m.result}
    `;

    container.appendChild(div);
  });
}

render();
