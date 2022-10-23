const clock_hhmm = document.querySelector(".clock-hhmm");
const clock_ss = document.querySelector(".clock-ss");
const clock_mmdd = document.querySelector(".clock-mmdd");
const clock_day = document.querySelector(".clock-day");

const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function nowClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);

  const year = String(date.getFullYear()).padStart(2, 0);
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const getDate = String(date.getDate()).padStart(2, 0);
  const day = date.getDay();

  if (clock_hhmm !== undefined && clock_hhmm !== null) {
    clock_hhmm.innerHTML = `${hours} : ${minutes}`;
  }
  if (clock_ss !== undefined && clock_ss !== null) {
    clock_ss.innerHTML = `${seconds}`;
  }
  if (clock_mmdd !== undefined && clock_mmdd !== null) {
    clock_mmdd.innerHTML = `${year}년 ${month}월 ${getDate}일`;
  }
  if (clock_day !== undefined && clock_day !== null) {
    clock_day.innerHTML = ` ${WEEKDAY[day]}`;
  }
}

nowClock();
setInterval(nowClock, 1000);
