// 게임 탭
function showGame(game) {
  document.querySelectorAll('.game').forEach(g => g.classList.add('hidden'));
  document.getElementById(game).classList.remove('hidden');
}

// 년도 탭
function showYear(game, year) {
  document.querySelectorAll(`#${game} .year`).forEach(y => y.classList.add('hidden'));
  document.getElementById(`${game}-${year}`).classList.remove('hidden');
}

// 데이터 저장
let data = JSON.parse(localStorage.getItem("matchData")) || [];

// 추가
function addMatch() {
  const game = document.getElementById("game").value;
  const year = document.getElementById("year").value;
  const date = document.getElementById("date").value;
  const type = document.getElementById("type").value;
  const img = document.getElementById("img").value;
  const kda = document.getElementById("kda").value;
  const result = document.getElementById("result").value;

  const match = { game, year, date, type, img, kda, result };

  data.push(match);
  localStorage.setItem("matchData", JSON.stringify(data));

  render();
}

// 출력
function render() {
  document.querySelectorAll('.year').forEach(y => y.innerHTML = "");

  data.forEach(m => {
    const container = document.getElementById(`${m.game}-${m.year}`);

    const div = document.createElement("div");
    div.className = "match";

    div.innerHTML = `
      <img src="${m.img}">
      <div class="match-info">
        <strong>${m.date}</strong>
        <span>${m.type}</span>
        <span>KDA: ${m.kda}</span>
        <span>결과: ${m.result}</span>
      </div>
    `;

    container.appendChild(div);
  });
}

render();
