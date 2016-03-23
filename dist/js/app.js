(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  console.log(seconds / 60);

  var formattedCurrentTime = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
  document.querySelector("#clock").innerHTML = formattedCurrentTime;
}, 1000);

function padNumber(value) {
  if (value.toString().length === 1) {
    value = "0" + value;
  }
  return value;
}
// var date = new Date();
// var seconds=date.getSeconds();
// console.log(seconds/60);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQVc7QUFDckIsTUFBSSxPQUFPLElBQUksSUFBSixFQUFQLENBRGlCO0FBRXJCLE1BQUksUUFBUSxLQUFLLFFBQUwsRUFBUixDQUZpQjtBQUdyQixNQUFJLFVBQVUsS0FBSyxVQUFMLEVBQVYsQ0FIaUI7QUFJckIsTUFBSSxVQUFVLEtBQUssVUFBTCxFQUFWLENBSmlCO0FBS3JCLFVBQVEsR0FBUixDQUFZLFVBQVEsRUFBUixDQUFaLENBTHFCOztBQU9yQixNQUFJLHVCQUF1QixVQUFVLEtBQVYsSUFBbUIsR0FBbkIsR0FDekIsVUFBVSxPQUFWLENBRHlCLEdBQ0osR0FESSxHQUV6QixVQUFVLE9BQVYsQ0FGeUIsQ0FQTjtBQVVyQixXQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsU0FBakMsR0FBNkMsb0JBQTdDLENBVnFCO0NBQVgsRUFXVCxJQVhIOztBQWNBLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUN4QixNQUFJLE1BQU0sUUFBTixHQUFpQixNQUFqQixLQUE0QixDQUE1QixFQUErQjtBQUNqQyxZQUFRLE1BQU0sS0FBTixDQUR5QjtHQUFuQztBQUdBLFNBQU8sS0FBUCxDQUp3QjtDQUExQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIHZhciBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIGNvbnNvbGUubG9nKHNlY29uZHMvNjApO1xuXG4gIHZhciBmb3JtYXR0ZWRDdXJyZW50VGltZSA9IHBhZE51bWJlcihob3VycykgKyBcIjpcIiArXG4gICAgcGFkTnVtYmVyKG1pbnV0ZXMpICsgXCI6XCIgK1xuICAgIHBhZE51bWJlcihzZWNvbmRzKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRDdXJyZW50VGltZTtcbn0sIDEwMDApO1xuXG5cbmZ1bmN0aW9uIHBhZE51bWJlcih2YWx1ZSkge1xuICBpZiAodmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcbiAgICB2YWx1ZSA9IFwiMFwiICsgdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuLy8gdmFyIHNlY29uZHM9ZGF0ZS5nZXRTZWNvbmRzKCk7XG4vLyBjb25zb2xlLmxvZyhzZWNvbmRzLzYwKTtcbiJdfQ==
