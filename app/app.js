setInterval(function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var hexHours = padNumber(hours.toString(16));
  var hexMinutes = padNumber(minutes.toString(16));
  var hexSeconds = padNumber(seconds.toString(16));

  var hexTime = hexHours + ":" + hexMinutes + ":" + hexSeconds
  var hexBackground = document.querySelector(".container");

  document
    .querySelector("#clock")
    .addEventListener("mouseenter", function() {
      hexBackground.style.background =
      "#" + hexHours + hexMinutes + hexSeconds;
    document.querySelector("#clock").innerHTML = hexHours + ":" + hexMinutes + ":" + hexSeconds;

    document.querySelector("#clock")
      .addEventListener("mouseleave", function() {
        hexBackground.style.background = "#66A8A1";
        document.querySelector("#clock").innerHTML = formattedCurrentTime;

      })
  });


  var formattedCurrentTime = padNumber(hours) + ":" +
    padNumber(minutes) + ":" +
    padNumber(seconds);
  document.querySelector("#clock").innerHTML = formattedCurrentTime;
  // document.querySelector("#clock").innerHTML = hexTime;
  updateTimerBar(seconds);
}, 1000);


function padNumber(value) {
  if (value.toString().length === 1) {
    value = "0" + value;
  }
  return value;
}

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hours = date.getHours();
console.log(date.getSeconds());
console.log(date.getHours());


function updateTimerBar(seconds) {
  var width = (seconds / 60) * 100;
  var timerBar = document.querySelector("#timerBar");
  timerBar.style.width = width.toString() + "%";
}
