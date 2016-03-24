setInterval(function() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedCurrentTime = padNumber(hours) + ":" +
    padNumber(minutes) + ":" +
    padNumber(seconds);
  document.querySelector("#clock").innerHTML = formattedCurrentTime;
  updateTimerBar(seconds);

}, 1000);

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
//
let formattedCurrentTime = padNumber(hours) + ":" +
  padNumber(minutes) + ":" +
  padNumber(seconds);
document.querySelector("#clock").innerHTML = formattedCurrentTime;
updateTimerBar(seconds);

const hexHours = padNumber(hours.toString(16));
const hexMinutes = padNumber(minutes.toString(16));
const hexSeconds = padNumber(seconds.toString(16));

const hexTime = hexHours + ":" + hexMinutes + ":" + hexSeconds;
const hexBackground = document.querySelector(".container");
const hexTimeColorCode = "#" + hexHours + hexMinutes + hexSeconds;



document
  .querySelector("#clock")
  .addEventListener("mouseover", function() {
    hexBackground.style.background = hexTimeColorCode;
  });
document
  .querySelector("#clock")
  .addEventListener("mouseleave", function() {
    hexBackground.style.background = "#66A8A1";
    document.querySelector("#clock").innerHTML = formattedCurrentTime;
  });
  
document
  .querySelector("#clock")
  .addEventListener("mouseover", function() {
    document.querySelector("#clock").innerHTML = hexTime;
  });
document
  .querySelector("#clock")
  .addEventListener("mouseleave", function() {
    document.querySelector("#clock").innerHTML = formattedCurrentTime;
  });

function padNumber(value) {
  if (value.toString().length === 1) {
    value = "0" + value;
  }
  return value;
}



function updateTimerBar(seconds) {
  var width = (seconds / 60) * 100;
  var timerBar = document.querySelector("#timerBar");
  timerBar.style.width = width.toString() + "%";
}
