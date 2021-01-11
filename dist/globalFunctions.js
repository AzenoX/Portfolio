"use strict";
/*============================

    Function - Write Typing

============================*/

function writeIntoText(el, text) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var typeSpeed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var element = document.getElementById(el);
  var type = new Typed(element, {
    blink: true,
    printErrors: false,
    blinkClasses: ["blinker"]
  }).pause(delay).type(text, {}, typeSpeed).run();
}

function writeIntoText_HTML(element, text) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var typeSpeed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var blinkClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "blinker";
  var type = new Typed(element, {
    blink: true,
    printErrors: false,
    blinkClasses: [blinkClass]
  }).pause(delay).type(text, {}, typeSpeed).run();
}

function getRandom() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 ? arguments[1] : undefined;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//# sourceMappingURL=globalFunctions.js.map