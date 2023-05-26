import { getRandomInt } from "./helper";

async function getPhotoOptions(city, region, lat, long) {
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&text=${city} ${region} cityscape&lat=${lat}&long=${long}&has_geo=1`
  );

  const data = await response.json();
  console.log(data);
  let max;
  if (data.photos.photo.length > 25) {
    max = 25;
  } else {
    max = data.photos.photo.length;
  }

  let rand = getRandomInt(max);
  console.log(rand);
  let photoId = data.photos.photo[rand].id;

  return photoId;
}

async function getHighRes(id) {
  const availableSizes = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&photo_id=${id}`
    , {mode: 'cors'}
  );

  const sizesData = await availableSizes.json();

  //array of sizes
  let sizeOptions = sizesData.sizes.size;

  console.log(
    "this returns your hi res image " +
      sizeOptions[sizeOptions.length - 1].source
  );
}

async function display(info) {
  let city = info.location.name;
  let region = info.location.region;
  let lat = info.location.lat;
  let long = info.location.lon;

  let id = await getPhotoOptions(city, region, lat, long);
  await getHighRes(id);
}

export { display };
