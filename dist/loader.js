"use strict";
/*============================

    Hide Loader

============================*/

window.addEventListener('DOMContentLoaded', function () {
  var loader = document.querySelector('#loader-wrapper');
  setTimeout(function () {
    loader.classList.add('loader-complete');
    setTimeout(function () {
      loader.parentNode.removeChild(loader);
    }, 1000);
  }, 500);
});
/*============================

    Animation Loader

============================*/

var mercury = document.querySelector('#loader--svg-mercury');
var mercury_g = document.querySelector('#loader--svg-mercury > g');
var venus = document.querySelector('#loader--svg-venus');
var venus_g = document.querySelector('#loader--svg-venus > g');
var earth = document.querySelector('#loader--svg-earth');
var earth_g = document.querySelector('#loader--svg-earth > g');
var mars = document.querySelector('#loader--svg-mars');
var mars_g = document.querySelector('#loader--svg-mars > g');
var sun = document.querySelector('#loader--svg-sun');
var sun_g = document.querySelector('#loader--svg-sun > g');
var animation = [{
  transform: 'rotate(0deg)'
}, {
  transform: 'rotate(360deg)'
}];
mercury_g.animate(animation, {
  duration: 2000,
  iterations: Infinity
});
venus_g.animate(animation, {
  duration: 3000,
  iterations: Infinity
});
earth_g.animate(animation, {
  duration: 4000,
  iterations: Infinity
});
mars_g.animate(animation, {
  duration: 5000,
  iterations: Infinity
});
sun_g.animate(animation, {
  duration: 10000,
  iterations: Infinity
});
var wW = window.innerWidth;
var wH = window.innerHeight;
var radius = wW / 3;
var me = Math.floor(Math.random() * Math.floor(4));
var ve = Math.floor(Math.random() * Math.floor(4));
var ea = Math.floor(Math.random() * Math.floor(4));
var ma = Math.floor(Math.random() * Math.floor(4));
setInterval(function () {
  var mercury_x = Math.cos(me) * (radius / 4);
  var mercury_y = Math.sin(me) * (radius / 4);
  var venus_x = Math.cos(ve) * (radius / 2.6);
  var venus_y = Math.sin(ve) * (radius / 2.6);
  var earth_x = Math.cos(ea) * (radius / 2);
  var earth_y = Math.sin(ea) * (radius / 2);
  var mars_x = Math.cos(ma) * (radius / 1.6);
  var mars_y = Math.sin(ma) * (radius / 1.6);
  mercury.style.transform = "translate(-50%, -50%) translateY(" + mercury_y + "px) translateX(" + mercury_x + "px)";
  venus.style.transform = "translate(-50%, -50%) translateY(" + venus_y + "px) translateX(" + venus_x + "px)";
  earth.style.transform = "translate(-50%, -50%) translateY(" + earth_y + "px) translateX(" + earth_x + "px)";
  mars.style.transform = "translate(-50%, -50%) translateY(" + mars_y + "px) translateX(" + mars_x + "px)";
  me += 0.020;
  ve += 0.012;
  ea += 0.006;
  ma += 0.002;
}, 10);
//# sourceMappingURL=loader.js.map