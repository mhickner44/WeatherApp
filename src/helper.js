let dayElements = document.querySelectorAll(".date");

const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let currentDate = new Date();

function weekDay() {
  for (let i = 0; i < 7; i++) {
    let day = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
    dayElements[i].textContent = weekDays[day.getDay()];
  }
}



export { weekDay };
