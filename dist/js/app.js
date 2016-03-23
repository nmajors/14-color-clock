(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var formattedCurrentTime = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
  document.querySelector("#clock").innerHTML = formattedCurrentTime;
  updateTimerBar(seconds);
}, 1000);

function padNumber(value) {
  if (value.toString().length === 1) {
    value = "0" + value;
  }
  return value;
}

function updateTimerBar(seconds) {
  var width = seconds / 60 * 100;
  var timerBar = document.querySelector("#timerBar");
  timerBar.style.width = width.toString() + "%";
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQVc7QUFDckIsTUFBSSxPQUFPLElBQUksSUFBSixFQUFQLENBRGlCO0FBRXJCLE1BQUksUUFBUSxLQUFLLFFBQUwsRUFBUixDQUZpQjtBQUdyQixNQUFJLFVBQVUsS0FBSyxVQUFMLEVBQVYsQ0FIaUI7QUFJckIsTUFBSSxVQUFVLEtBQUssVUFBTCxFQUFWLENBSmlCOztBQU1yQixNQUFJLHVCQUF1QixVQUFVLEtBQVYsSUFBbUIsR0FBbkIsR0FDekIsVUFBVSxPQUFWLENBRHlCLEdBQ0osR0FESSxHQUV6QixVQUFVLE9BQVYsQ0FGeUIsQ0FOTjtBQVNyQixXQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsU0FBakMsR0FBNkMsb0JBQTdDLENBVHFCO0FBVXJCLGlCQUFlLE9BQWYsRUFWcUI7Q0FBWCxFQVdULElBWEg7O0FBY0EsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3hCLE1BQUksTUFBTSxRQUFOLEdBQWlCLE1BQWpCLEtBQTRCLENBQTVCLEVBQStCO0FBQ2pDLFlBQVEsTUFBTSxLQUFOLENBRHlCO0dBQW5DO0FBR0EsU0FBTyxLQUFQLENBSndCO0NBQTFCOztBQU9BLFNBQVMsY0FBVCxDQUF3QixPQUF4QixFQUFnQztBQUM5QixNQUFJLFFBQVEsT0FBQyxHQUFRLEVBQVIsR0FBWSxHQUFiLENBRGtCO0FBRS9CLE1BQUksV0FBWSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWixDQUYyQjtBQUcvQixXQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLE1BQU0sUUFBTixLQUFtQixHQUFuQixDQUhRO0NBQWhDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgdmFyIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgdmFyIHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcblxuICB2YXIgZm9ybWF0dGVkQ3VycmVudFRpbWUgPSBwYWROdW1iZXIoaG91cnMpICsgXCI6XCIgK1xuICAgIHBhZE51bWJlcihtaW51dGVzKSArIFwiOlwiICtcbiAgICBwYWROdW1iZXIoc2Vjb25kcyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIikuaW5uZXJIVE1MID0gZm9ybWF0dGVkQ3VycmVudFRpbWU7XG4gIHVwZGF0ZVRpbWVyQmFyKHNlY29uZHMpO1xufSwgMTAwMCk7XG5cblxuZnVuY3Rpb24gcGFkTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbHVlID0gXCIwXCIgKyB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWVyQmFyKHNlY29uZHMpe1xuICB2YXIgd2lkdGggPSAoc2Vjb25kcy82MCkqMTAwO1xuIHZhciB0aW1lckJhciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVyQmFyXCIpO1xuIHRpbWVyQmFyLnN0eWxlLndpZHRoID0gd2lkdGgudG9TdHJpbmcoKSArIFwiJVwiO1xufVxuIl19
