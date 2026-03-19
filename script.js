function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');
}

function go(url) {
  window.open(url, "_blank");
}

// 캘린더
let schedules = JSON.parse(localStorage.getItem("schedules")) || [];

function addSchedule() {
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value;
  const link = document.getElementById("link").value;

  schedules.push({ date, content, link });
  localStorage.setItem("schedules", JSON.stringify(schedules));

  render();
}

function render() {
  const list = document.getElementById("scheduleList");
  list.innerHTML = "";

  schedules.forEach(s => {
    const li = document.createElement("li");
    li.innerText = `${s.date} - ${s.content}`;
    li.onclick = () => window.open(s.link);

    list.appendChild(li);
  });
}

render();

// 전적
function openStat(game) {
  const frame = document.getElementById("statFrame");

  if (game === "pubg") frame.src = "https://dak.gg/";
  if (game === "valorant") frame.src = "https://tracker.gg/valorant";
  if (game === "lol") frame.src = "https://op.gg/";
}
