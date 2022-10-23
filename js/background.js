const backgroundImgList = [
  "background-img1.jpg",
  "background-img2.jpg",
  "background-img3.jpg",
  "background-img4.jpg",
  "background-img5.jpg",
  "background-img6.jpg",
  "background-img7.jpg",
  "background-img8.jpg",
];

const body = document.querySelector("body");

const foreground = document.querySelector(".foreground");

const randomSelect = 1;
// Math.floor(Math.random() * backgroundImgList.length);
const backgroundImg = backgroundImgList[randomSelect];

const background_wrapper = document.createElement("div");

body.style.backgroundImage = `url(img/${backgroundImg})`;
