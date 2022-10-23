const link = document.querySelector(".header-content__link form");
const link_input = document.querySelector(".header-content__link form input");

function googleSearch(event) {
  event.preventDefault();
  let url = "https://www.google.com/search?q=" + link_input.value;
  location.href = url;
}

//link.addEventListener("submit", googleSearch);
