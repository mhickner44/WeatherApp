import "./style.css";
import "./styleReset.css";
import { fillWeather, getForecast ,fillCurrent} from "./weather";

async function weatherUpdates() {
  let weekForcast = await getForecast();
  fillCurrent(weekForcast)
  fillWeather(weekForcast);
}

weatherUpdates();

// async function component() {
//   const element = document.createElement("div");

//   return element;
// }

// document.body.appendChild(component());
