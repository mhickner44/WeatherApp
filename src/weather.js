const weekDayElements = document.querySelector(".weekDays");
const highTempElements = document.querySelectorAll(".hiTemp");
const lowTempElements = document.querySelectorAll(".loTemp");
const weatherEmblems = document.querySelectorAll(".weatherEmblem");

//current
const location = document.getElementById("location");
const timeElement = document.getElementById("time");
const currentTemp = document.getElementById("temp");

async function getForecast() {
  const location = "greenville sc";

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f5992c820565482cb30225158231305&q=${location}&days=7`,
    {
      mode: "cors",
    }
  );
  console.log(response);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

function fillWeather(forecastData) {
  //need an array of the days nodelist
  //for the max temp  forecast.forecastday[0].day.maxtemp_f and lowo temp
  //ill need the forecast data
  //maxtemp_  mintemp_(c or f)
  for (let i = 0; i < 7; i++) {
    highTempElements[i].textContent =
      forecastData.forecast.forecastday[i].day.maxtemp_f;
    lowTempElements[i].textContent =
      forecastData.forecast.forecastday[i].day.mintemp_f;
    weatherEmblems[i].src =
      forecastData.forecast.forecastday[i].day.condition.icon;
  }
}

function fillCurrent(forecastData) {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();

  location.textContent =
    forecastData.location.name + "," + forecastData.location.region;
  timeElement.textContent = time;
  temp.textContent = forecastData.current.temp_f+`°`+"";
}
export { getForecast, fillWeather, fillCurrent };
