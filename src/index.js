import "./style.css";
import "./styleReset.css";
import { fillWeather, getForecast, fillCurrent } from "./weather";
import { weekDay } from "./helper";
import {display} from "./imageBackground.js"

const submitSearch = document.getElementById("searchSubmit");
const searchText=document.getElementById("searchText");

let data;

async function weatherUpdates(searchedCity) {
   data = await getForecast(searchedCity);
  fillCurrent(data);
  fillWeather(data);
 
}

async function search() {
 let city = document.getElementById("searchText").value;
 await  weatherUpdates(city);
  display(data);
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


weekDay();




// async function component() {
//   const element = document.createElement("div");

//   return element;
// }

// document.body.appendChild(component());
