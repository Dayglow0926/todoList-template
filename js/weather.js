const api_key = "29b79234da2bc7ebdf49047690b73c76";
const weather_img = document.querySelector(
  ".header-content__weather-content img"
);

const weather_temp = document.querySelector(
  ".header-content__weather-content span"
);

const weather_location = document.querySelector(
  ".header-content__weather-location span"
);

function coordinateCheck(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      const icon = data.weather[0].icon;
      const name = data.name;

      const icon_url = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      weather_img.src = icon_url;
      weather_temp.innerHTML = `${temp}&#8451`;
      weather_location.innerHTML = `${name}`;
    });
}

function onError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(coordinateCheck, onError);
