const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const intro_greet = document.querySelector(".main-content__intro-greet");

let username = localStorage.getItem("name");
let greeting;
const date = new Date();

if (date.getHours() < 12) greeting = "Good morning,";
else if (date.getHours() > 19) greeting = "Good evening,";
else greeting = "Good afternoon,";

function usernameCheck() {
  const url = window.location.href;
  if (username !== null) {
    loginForm.remove();
    intro_greet.innerHTML = `${greeting} ${username}`;
    if (url.indexOf("/login.html") > 0) {
      location.href = "index.html";
    } else {
      todoCreate();
    }
  } else {
    if (!(url.indexOf("/login.html") > 0)) {
      location.href = "login.html";
    }
  }
}

function loginSubmit(event) {
  event.preventDefault();
  username = loginInput.value;

  localStorage.setItem("name", username);
  usernameCheck();
}

usernameCheck();
loginForm.addEventListener("submit", loginSubmit);
