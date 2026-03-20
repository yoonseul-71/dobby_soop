function showGame(game) {
  document.querySelectorAll('.game').forEach(g => g.classList.add('hidden'));
  document.getElementById(game).classList.remove('hidden');
}

function showYear(game, year) {
  document.querySelectorAll(`#${game} .year`).forEach(y => y.classList.add('hidden'));
  document.getElementById(`${game}-${year}`).classList.remove('hidden');
}

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
    const box = document.getElementById(`${m.game}-${m.year}`);

    const el = document.createElement("div");
    el.className = "match";

    el.innerHTML = `
      <img src="${m.img}" width="60">
      <div>
        <b>${m.date}</b><br>
        ${m.type}<br>
        ${m.kda}<br>
        ${m.result}
      </div>
    `;

    box.appendChild(el);
  });
}

render();
