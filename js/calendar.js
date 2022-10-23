const year_month = document.querySelector(
  ".main-side-content__calendar-year-month span"
);
const dates = document.querySelector(".main-side-content__calendar-dates");
//한국 기준 날짜 구하기
const cal_date = new Date();
const utc = cal_date.getTime() + cal_date.getTimezoneOffset() * 60 * 1000;

const kstGap = 9 * 60 * 60 * 1000;
const today = new Date(utc + kstGap);

//달력 계산
let thisMonth = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);

let currentYear = thisMonth.getFullYear();
let currentMonth = thisMonth.getMonth();
let currentDate = thisMonth.getDate();

function renderCalendar(thisMonth) {
  currentYear = thisMonth.getFullYear();
  currentMonth = thisMonth.getMonth();
  currentDate = thisMonth.getDate();

  const start = new Date(currentYear, currentMonth, 0);
  const prevDate = start.getDate();
  const prevDay = start.getDay();

  const end = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = end.getDate();
  const nextDay = end.getDay();

  year_month.innerHTML = `${currentYear}.${currentMonth + 1}`;

  dates.innerHTML = "";

  // 지난달
  for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
    dates.innerHTML =
      dates.innerHTML + '<div class="day prev disable">' + i + "</div>";
  }
  // 이번달
  for (let i = 1; i <= nextDate; i++) {
    dates.innerHTML =
      dates.innerHTML + '<div class="day current">' + i + "</div>";
  }
  // 다음달
  for (let i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
    dates.innerHTML =
      dates.innerHTML + '<div class="day next disable">' + i + "</div>";
  }

  // 오늘 날짜 표기
  if (today.getMonth() == currentMonth) {
    todayDate = today.getDate();
    var currentMonthDate = document.querySelectorAll(
      ".main-side-content__calendar-dates .current"
    );
    currentMonthDate[todayDate - 1].classList.add("today");
  }
}

renderCalendar(thisMonth);

const prev = document.querySelector(
  ".main-side-content__calendar-year-month a:first-child"
);
const next = document.querySelector(
  ".main-side-content__calendar-year-month a:last-child"
);

// 이전달로 이동
prev.addEventListener("click", function () {
  thisMonth = new Date(currentYear, currentMonth - 1, 1);
  renderCalendar(thisMonth);
});

// 다음달로 이동
next.addEventListener("click", function () {
  thisMonth = new Date(currentYear, currentMonth + 1, 1);
  renderCalendar(thisMonth);
});

document
  .querySelectorAll(".main-side-content__calendar-dates .day")
  .forEach((item, index, arr) => {
    item.addEventListener("click", function () {
      console.log(this);
    });
  });
