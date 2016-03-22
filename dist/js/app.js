(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

setInterval(function () {
  console.log(new Date());
}, 1000);

function padNumber(number) {
  if (number.toString.length === 1) ;
  return "0" + number;
}

date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

currentTime = hours + ":" + minutes + ":" + seconds;

document.querySelector("#clock").innerHTML = "currentTime";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQVU7QUFDcEIsVUFBUSxHQUFSLENBQVksSUFBSSxJQUFKLEVBQVosRUFEb0I7Q0FBVixFQUVULElBRkg7O0FBSUEsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTBCO0FBQ3ZCLE1BQUksT0FBTyxRQUFQLENBQWdCLE1BQWhCLEtBQXlCLENBQXpCLEVBQTJCLENBQS9CO0FBQ0EsU0FBTyxNQUFJLE1BQUosQ0FGZ0I7Q0FBMUI7O0FBS0EsT0FBTyxJQUFJLElBQUosRUFBUDtBQUNDLFFBQVEsS0FBSyxRQUFMLEVBQVI7QUFDQSxVQUFVLEtBQUssVUFBTCxFQUFWO0FBQ0EsVUFBVSxLQUFLLFVBQUwsRUFBVjs7QUFFQSxjQUFjLFFBQU0sR0FBTixHQUFVLE9BQVYsR0FBa0IsR0FBbEIsR0FBc0IsT0FBdEI7O0FBRWYsU0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFNBQWpDLEdBQTJDLGFBQTNDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkpO1xufSwgMTAwMCk7XG5cbmZ1bmN0aW9uIHBhZE51bWJlcihudW1iZXIpe1xuICAgaWYgKG51bWJlci50b1N0cmluZy5sZW5ndGg9PT0xKTtcbiAgIHJldHVybiBcIjBcIitudW1iZXI7XG59XG5cbmRhdGUgPSBuZXcgRGF0ZSgpO1xuIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG5cbiBjdXJyZW50VGltZSA9IGhvdXJzK1wiOlwiK21pbnV0ZXMrXCI6XCIrc2Vjb25kcztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKS5pbm5lckhUTUw9XCJjdXJyZW50VGltZVwiO1xuIl19
