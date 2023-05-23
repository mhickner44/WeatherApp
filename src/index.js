import "./style.css";
import "./styleReset.css";
import { fillWeather, getForecast, fillCurrent } from "./weather";

const submitSearch = document.getElementById("searchSubmit");
const searchText=document.getElementById("searchText");
let city;

async function weatherUpdates(searchedCity) {
  let weekForcast = await getForecast(searchedCity);
  fillCurrent(weekForcast);
  fillWeather(weekForcast);
}

function search() {
  city = document.getElementById("searchText").value;
  weatherUpdates(city);
}

submitSearch.addEventListener("click",  search);

searchText.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submitSearch.click();
  }
});



// async function component() {
//   const element = document.createElement("div");

//   return element;
// }

// document.body.appendChild(component());
