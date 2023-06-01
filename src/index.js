import "./styleReset.css";
import "./style.css";
import { fillWeather, getForecast, fillCurrent } from "./weather";
import { weekDay } from "./helper";
import { display } from "./imageBackground.js";
import { getLocation } from "./helper";

const submitSearch = document.getElementById("searchSubmit");
const searchText = document.getElementById("searchText");

let data;

const loadingSymbol = document.querySelector(".loaderWrapper");

async function weatherUpdates(searchedCity) {
  data = await getForecast(searchedCity);
  if (data != null) {
    fillCurrent(data);
    fillWeather(data);
    display(data);
  } else {
    loadingSymbol.style.display = "none";
  }

}

async function search() {

  if (searchText.checkValidity() == true) {
    loadingSymbol.style.display = "block";
    let city = document.getElementById("searchText").value;
    await weatherUpdates(city);
    document.getElementById("searchText").value = "";
  }
}

submitSearch.addEventListener("click", search);

searchText.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submitSearch.click();
  }
});

async function onload() {
  weekDay();
  await getLocation();
  // display(data);
}
onload();

export { weatherUpdates, search };
