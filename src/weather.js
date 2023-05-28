const weekDayElements = document.querySelector(".weekDays");

const highTempElementsC = document.querySelectorAll(".hiTempC");
const lowTempElementsC = document.querySelectorAll(".loTempC");

const highTempElementsF = document.querySelectorAll(".hiTempF");
const lowTempElementsF = document.querySelectorAll(".loTempF");

const tempC = document.getElementById("tempC");
const tempF = document.getElementById("tempF");

const weatherEmblems = document.querySelectorAll(".weatherEmblem");

//current
const location = document.getElementById("location");
const timeElement = document.getElementById("time");

const tempToggle = document.getElementById("tempToggle");
const weatherChoice = document.querySelector(".labels");



async function getForecast(location) {
  let response = null;
  
  try {
    response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=f5992c820565482cb30225158231305&q=${location}&days=3`,
      {
        mode: "cors",
      }
    );

    if (response.status == 400) {
      throw new error;
    }
  } catch (error) {
    console.log("error");
    return  alert("error");
  }


  console.log(response);

  let weatherData = await response.json();
  // if(weatherData.error=!null){
  // throw error;
  // }

  console.log(weatherData);

  return weatherData;
}

function fillWeather(forecastData) {
  for (let i = 0; i < 3; i++) {
    highTempElementsF[i].textContent =
      forecastData.forecast.forecastday[i].day.maxtemp_f + "°";
    lowTempElementsF[i].textContent =
      forecastData.forecast.forecastday[i].day.mintemp_f + "°";
    weatherEmblems[i].src =
      forecastData.forecast.forecastday[i].day.condition.icon;

    highTempElementsC[i].textContent =
      forecastData.forecast.forecastday[i].day.maxtemp_c + "°";
    lowTempElementsC[i].textContent =
      forecastData.forecast.forecastday[i].day.mintemp_c + "°";
    weatherEmblems[i].src =
      forecastData.forecast.forecastday[i].day.condition.icon;
  }
}

function fillCurrent(forecastData) {
  tempC.textContent = forecastData.current.temp_c + `°`;
  tempF.textContent = forecastData.current.temp_f + `°`;

  location.textContent =
    forecastData.location.name + "," + forecastData.location.region;

  let date = new Date();
  timeElement.textContent = date.getHours() + ":" + date.getMinutes();
}

tempToggle.addEventListener("change", function (event) {
  if (tempToggle.checked == false) {
    weatherChoice.dataset.choice = "F";
    tempF.hidden = false;
    tempC.hidden = true;
    for (let i = 0; i < 3; i++) {
      highTempElementsF[i].hidden = false;
      lowTempElementsF[i].hidden = false;

      highTempElementsC[i].hidden = true;
      lowTempElementsC[i].hidden = true;
    }
  } else {
    weatherChoice.dataset.choice = "C";
    tempF.hidden = true;
    tempC.hidden = false;

    for (let i = 0; i < 3; i++) {
      highTempElementsF[i].hidden = true;
      lowTempElementsF[i].hidden = true;

      highTempElementsC[i].hidden = false;
      lowTempElementsC[i].hidden = false;
    }
  }
});

export { getForecast, fillWeather, fillCurrent };
