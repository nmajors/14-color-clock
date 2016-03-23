setInterval(function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var formattedCurrentTime = padNumber(hours) + ":" +
    padNumber(minutes) + ":" +
    padNumber(seconds);
  document.querySelector("#clock").innerHTML = formattedCurrentTime;
}, 1000);


function padNumber(value) {
  if (value.toString().length === 1) {
    value = "0" + value;
  }
  return value;
}
