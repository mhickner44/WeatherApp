import { getRandomInt } from "./helper";
import clear from "./skyImages/clearSky.jpg"
import clouds from "./skyImages/Cloudy.jpg"
import rainy from "./skyImages/rainy.jpg"
import snow from "./skyImages/snow.jpg"


const loadingSymbol = document.querySelector(".loaderWrapper");


async function getPhotoOptions(city, region, lat, long, weatherStatus) {
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&text=${city} ${region} skyline&lat=${lat}&long=${long}&has_geo=1`
  );

  const data = await response.json();
  console.log(data);
  let photoId;
  if (data.photos.pages == 0) {
    photoId = weatherStatus;
  } else {
    
    let max = data.photos.photo.length;
    let rand = getRandomInt(max);
    console.log(rand);
     photoId = data.photos.photo[rand].id;
  }

  return photoId;
}

async function getHighRes(id) {
  const availableSizes = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&photo_id=${id}`,
    { mode: "cors" }
  );

  const sizesData = await availableSizes.json();

  //array of sizes
  let sizeOptions = sizesData.sizes.size;
  let url = sizeOptions[sizeOptions.length - 1].source;
  console.log("this returns your hi res image " + url);

  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

async function display(info) {
  let city = info.location.name;
  let region = info.location.region;
  let lat = info.location.lat;
  let long = info.location.lon;
  let weatherStatus = info.current.condition.text;

  let id = await getPhotoOptions(city, region, lat, long, weatherStatus);


  const rain = ["rain","drizzle",]
  const cloudy = ["cloudy","overcast"]
  let imageChoice;
//if it doesnt contain numbers
  if (/^([^0-9]*)$/.test(id)) {
    if(rain.some(el=> weatherStatus.includes(el))){
  imageChoice = rainy;
    }else if(cloudy.some(el=> weatherStatus.includes(el))){
      imageChoice=clouds;
    }else if(weatherStatus.includes("snow")){
      imageChoice=snow;
    }else{
      imageChoice=clear;
    }
    document.body.style.backgroundImage = `url(${imageChoice})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
  else {
    await getHighRes(id);
  }
  loadingSymbol.style.display='none';

  

}

export { display };
