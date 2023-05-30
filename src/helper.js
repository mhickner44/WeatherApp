let dayElements = document.querySelectorAll(".date");

const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let currentDate = new Date();

//default

function weekDay() {
  for (let i = 0; i < 3; i++) {
    let day = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
    dayElements[i].textContent = weekDays[day.getDay()];
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let initialLocation;

function getLocation() {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      locationGranted,
      locationDenied
    );
  }
}
import { search } from "./index.js";
let searchBar = document.getElementById("searchText");

async function locationGranted(returnLocation) {
  let position =
    returnLocation.coords.latitude + "," + returnLocation.coords.longitude;
  let response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position}&key=AIzaSyC6PkkTeKAD1zWH5lpVHY47Ywrxhi9jKaY`,
    { mode: "cors" }
  );

  let data = await response.json();
  initialLocation =
    data.results[0].address_components[3].long_name +
    "," +
    data.results[0].address_components[5].short_name;

  // weatherUpdates(initialLocation);
  searchBar.value =initialLocation;
  search();
  searchBar.value="";
}

function locationDenied() {
initialLocation="new york"
  searchBar.value =initialLocation;
  search();
  searchBar.value="";
}

export {
  weekDay,
  getRandomInt,
  getLocation,
  initialLocation,
  locationGranted,
  locationDenied,
};
