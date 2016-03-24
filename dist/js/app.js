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

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
//
var formattedCurrentTime = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
document.querySelector("#clock").innerHTML = formattedCurrentTime;
updateTimerBar(seconds);

var hexHours = padNumber(hours.toString(16));
var hexMinutes = padNumber(minutes.toString(16));
var hexSeconds = padNumber(seconds.toString(16));

var hexTime = hexHours + ":" + hexMinutes + ":" + hexSeconds;
var hexBackground = document.querySelector(".container");
var hexTimeColorCode = "#" + hexHours + hexMinutes + hexSeconds;

document.querySelector("#clock").addEventListener("mouseover", function () {
  hexBackground.style.background = hexTimeColorCode;
});
document.querySelector("#clock").addEventListener("mouseleave", function () {
  hexBackground.style.background = "#66A8A1";
  document.querySelector("#clock").innerHTML = formattedCurrentTime;
});

document.querySelector("#clock").addEventListener("mouseover", function () {
  document.querySelector("#clock").innerHTML = hexTime;
});
document.querySelector("#clock").addEventListener("mouseleave", function () {
  document.querySelector("#clock").innerHTML = formattedCurrentTime;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQVc7QUFDckIsTUFBTSxPQUFPLElBQUksSUFBSixFQUFQLENBRGU7QUFFckIsTUFBTSxRQUFRLEtBQUssUUFBTCxFQUFSLENBRmU7QUFHckIsTUFBTSxVQUFVLEtBQUssVUFBTCxFQUFWLENBSGU7QUFJckIsTUFBTSxVQUFVLEtBQUssVUFBTCxFQUFWLENBSmU7O0FBTXJCLE1BQU0sdUJBQXVCLFVBQVUsS0FBVixJQUFtQixHQUFuQixHQUMzQixVQUFVLE9BQVYsQ0FEMkIsR0FDTixHQURNLEdBRTNCLFVBQVUsT0FBVixDQUYyQixDQU5SO0FBU3JCLFdBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUE2QyxvQkFBN0MsQ0FUcUI7QUFVckIsaUJBQWUsT0FBZixFQVZxQjtDQUFYLEVBWVQsSUFaSDs7QUFjQSxJQUFJLE9BQU8sSUFBSSxJQUFKLEVBQVA7QUFDSixJQUFJLFFBQVEsS0FBSyxRQUFMLEVBQVI7QUFDSixJQUFJLFVBQVUsS0FBSyxVQUFMLEVBQVY7QUFDSixJQUFJLFVBQVUsS0FBSyxVQUFMLEVBQVY7O0FBRUosSUFBSSx1QkFBdUIsVUFBVSxLQUFWLElBQW1CLEdBQW5CLEdBQ3pCLFVBQVUsT0FBVixDQUR5QixHQUNKLEdBREksR0FFekIsVUFBVSxPQUFWLENBRnlCO0FBRzNCLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUE2QyxvQkFBN0M7QUFDQSxlQUFlLE9BQWY7O0FBRUEsSUFBTSxXQUFXLFVBQVUsTUFBTSxRQUFOLENBQWUsRUFBZixDQUFWLENBQVg7QUFDTixJQUFNLGFBQWEsVUFBVSxRQUFRLFFBQVIsQ0FBaUIsRUFBakIsQ0FBVixDQUFiO0FBQ04sSUFBTSxhQUFhLFVBQVUsUUFBUSxRQUFSLENBQWlCLEVBQWpCLENBQVYsQ0FBYjs7QUFFTixJQUFNLFVBQVUsV0FBVyxHQUFYLEdBQWlCLFVBQWpCLEdBQThCLEdBQTlCLEdBQW9DLFVBQXBDO0FBQ2hCLElBQU0sZ0JBQWdCLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFoQjtBQUNOLElBQU0sbUJBQW1CLE1BQU0sUUFBTixHQUFpQixVQUFqQixHQUE4QixVQUE5Qjs7QUFJekIsU0FDRyxhQURILENBQ2lCLFFBRGpCLEVBRUcsZ0JBRkgsQ0FFb0IsV0FGcEIsRUFFaUMsWUFBVztBQUN4QyxnQkFBYyxLQUFkLENBQW9CLFVBQXBCLEdBQWlDLGdCQUFqQyxDQUR3QztDQUFYLENBRmpDO0FBS0EsU0FDRyxhQURILENBQ2lCLFFBRGpCLEVBRUcsZ0JBRkgsQ0FFb0IsWUFGcEIsRUFFa0MsWUFBVztBQUN6QyxnQkFBYyxLQUFkLENBQW9CLFVBQXBCLEdBQWlDLFNBQWpDLENBRHlDO0FBRXpDLFdBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUE2QyxvQkFBN0MsQ0FGeUM7Q0FBWCxDQUZsQzs7QUFPQSxTQUNHLGFBREgsQ0FDaUIsUUFEakIsRUFFRyxnQkFGSCxDQUVvQixXQUZwQixFQUVpQyxZQUFXO0FBQ3hDLFdBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUE2QyxPQUE3QyxDQUR3QztDQUFYLENBRmpDO0FBS0EsU0FDRyxhQURILENBQ2lCLFFBRGpCLEVBRUcsZ0JBRkgsQ0FFb0IsWUFGcEIsRUFFa0MsWUFBVztBQUN6QyxXQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsU0FBakMsR0FBNkMsb0JBQTdDLENBRHlDO0NBQVgsQ0FGbEM7O0FBTUEsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3hCLE1BQUksTUFBTSxRQUFOLEdBQWlCLE1BQWpCLEtBQTRCLENBQTVCLEVBQStCO0FBQ2pDLFlBQVEsTUFBTSxLQUFOLENBRHlCO0dBQW5DO0FBR0EsU0FBTyxLQUFQLENBSndCO0NBQTFCOztBQVNBLFNBQVMsY0FBVCxDQUF3QixPQUF4QixFQUFpQztBQUMvQixNQUFJLFFBQVEsT0FBQyxHQUFVLEVBQVYsR0FBZ0IsR0FBakIsQ0FEbUI7QUFFL0IsTUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFYLENBRjJCO0FBRy9CLFdBQVMsS0FBVCxDQUFlLEtBQWYsR0FBdUIsTUFBTSxRQUFOLEtBQW1CLEdBQW5CLENBSFE7Q0FBakMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwic2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBjb25zdCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG5cbiAgY29uc3QgZm9ybWF0dGVkQ3VycmVudFRpbWUgPSBwYWROdW1iZXIoaG91cnMpICsgXCI6XCIgK1xuICAgIHBhZE51bWJlcihtaW51dGVzKSArIFwiOlwiICtcbiAgICBwYWROdW1iZXIoc2Vjb25kcyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIikuaW5uZXJIVE1MID0gZm9ybWF0dGVkQ3VycmVudFRpbWU7XG4gIHVwZGF0ZVRpbWVyQmFyKHNlY29uZHMpO1xuXG59LCAxMDAwKTtcblxubGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xubGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xubGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbmxldCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4vL1xubGV0IGZvcm1hdHRlZEN1cnJlbnRUaW1lID0gcGFkTnVtYmVyKGhvdXJzKSArIFwiOlwiICtcbiAgcGFkTnVtYmVyKG1pbnV0ZXMpICsgXCI6XCIgK1xuICBwYWROdW1iZXIoc2Vjb25kcyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpLmlubmVySFRNTCA9IGZvcm1hdHRlZEN1cnJlbnRUaW1lO1xudXBkYXRlVGltZXJCYXIoc2Vjb25kcyk7XG5cbmNvbnN0IGhleEhvdXJzID0gcGFkTnVtYmVyKGhvdXJzLnRvU3RyaW5nKDE2KSk7XG5jb25zdCBoZXhNaW51dGVzID0gcGFkTnVtYmVyKG1pbnV0ZXMudG9TdHJpbmcoMTYpKTtcbmNvbnN0IGhleFNlY29uZHMgPSBwYWROdW1iZXIoc2Vjb25kcy50b1N0cmluZygxNikpO1xuXG5jb25zdCBoZXhUaW1lID0gaGV4SG91cnMgKyBcIjpcIiArIGhleE1pbnV0ZXMgKyBcIjpcIiArIGhleFNlY29uZHM7XG5jb25zdCBoZXhCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5jb25zdCBoZXhUaW1lQ29sb3JDb2RlID0gXCIjXCIgKyBoZXhIb3VycyArIGhleE1pbnV0ZXMgKyBoZXhTZWNvbmRzO1xuXG5cblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgaGV4QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gaGV4VGltZUNvbG9yQ29kZTtcbiAgfSk7XG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgaGV4QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjNjZBOEExXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRDdXJyZW50VGltZTtcbiAgfSk7XG4gIFxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKS5pbm5lckhUTUwgPSBoZXhUaW1lO1xuICB9KTtcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpLmlubmVySFRNTCA9IGZvcm1hdHRlZEN1cnJlbnRUaW1lO1xuICB9KTtcblxuZnVuY3Rpb24gcGFkTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbHVlID0gXCIwXCIgKyB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cblxuXG5mdW5jdGlvbiB1cGRhdGVUaW1lckJhcihzZWNvbmRzKSB7XG4gIHZhciB3aWR0aCA9IChzZWNvbmRzIC8gNjApICogMTAwO1xuICB2YXIgdGltZXJCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVyQmFyXCIpO1xuICB0aW1lckJhci5zdHlsZS53aWR0aCA9IHdpZHRoLnRvU3RyaW5nKCkgKyBcIiVcIjtcbn1cbiJdfQ==
