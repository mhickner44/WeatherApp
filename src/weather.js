const weekDayElements = document.querySelector(".weekDays");
const highTempElements = document.querySelectorAll(".hiTemp");

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

  // for (const day in highTempElements) {
  //   highTempElements[day].textContent = forecastData.forecast.forecastday[day].day.maxtemp_f;
  // }
  for (let i = 0; i < highTempElements.length; i++) {
    highTempElements[i].textContent =
      forecastData.forecast.forecastday[i].day.maxtemp_f;
  }
}

export { getForecast, fillWeather };
