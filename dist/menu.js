"use strict";
/*============================

    Open/Close Panels

============================*/

var opacity_bg = document.querySelector('#opacity-bg');

function toggleOpacity() {
  if (opacity_bg.style.opacity === "0.9") {
    opacity_bg.style.opacity = "0";
    setTimeout(function () {
      opacity_bg.style.zIndex = "-1";
    }, 400);
  } else {
    opacity_bg.style.opacity = "0.9";
    opacity_bg.style.zIndex = "5";
  }
}

function openWindow(name, text) {
  if (name !== "saturn") {
    writeIntoText('panel-wrapper--title--' + name, text, 100);
  } else {
    var el = document.querySelector('#panel-wrapper--title--' + name);
    new Typed(el, {
      blink: true,
      printErrors: false,
      blinkClasses: ["blinker"],
      blinkSpeed: 600
    }).pause(100).type(text).pause(20000)["delete"](2).type("AAAAAAAAAAAUX").pause(2000)["delete"](12).type("AUX").run();
  }

  var titles = document.querySelector(".home__titles");
  titles.style.opacity = "0";
  var panel = document.querySelector('#panel-wrapper--' + name);
  panel.style.transform = "scale(1)";
  panel.style.opacity = "1";
  toggleOpacity();
}

function closeWindow(name) {
  var titles = document.querySelector(".home__titles");
  titles.style.opacity = "1";
  var panel = document.querySelector('#' + name);
  panel.style.opacity = "0";
  panel.style.transform = "scale(0)";
  toggleOpacity();
}

var current_panel__id = "";

function setOpenedPanel() {
  var panels = document.querySelectorAll('.futurepanel');
  current_panel__id = "";
  panels.forEach(function (panel) {
    if (panel.style.opacity > 0) {
      current_panel__id = panel.id;
    }
  });
}

function getOpenedPanel() {
  return current_panel__id;
}

function isOpenedPanel() {
  return current_panel__id !== "";
} //Open window in function of svg


var svgs = document.querySelectorAll('.menu_svg');
svgs.forEach(function (svg) {
  svg.addEventListener("click", function (el) {
    var name = svg.getAttribute('name');
    var text = svg.getAttribute('data-text');
    openWindow(name, text);
  });
}); //Listen Escape key to close panel

window.addEventListener("keyup", function (e) {
  if (e.code === "Escape") {
    setOpenedPanel();
    setTimeout(function () {
      if (isOpenedPanel()) {
        var panel_id = getOpenedPanel();
        closeWindow(panel_id);
      }
    }, 50);
  }
}); //Click event on overlay when panel is open, used to close the panel

opacity_bg.addEventListener('click', function (e) {
  e.preventDefault();
  setOpenedPanel();
  setTimeout(function () {
    if (isOpenedPanel()) {
      var panel_id = getOpenedPanel();
      var el = document.getElementById(name);
      var target;

      while (target) {
        if (target === el) {
          return;
        }

        target = target.parentNode;
      }

      closeWindow(panel_id);
    }
  }, 50);
}); //Close on button click

var closeBtns = document.querySelectorAll('.futurepanel__header > span:last-child');
closeBtns.forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function (el) {
    setOpenedPanel();
    setTimeout(function () {
      if (isOpenedPanel()) {
        var panel_id = getOpenedPanel();
        closeWindow(panel_id);
      }
    }, 50);
  });
});
//# sourceMappingURL=menu.js.map