"use strict";
/*============================

    Projects Tabs

============================*/

var panel = document.querySelector('#panel-wrapper--content--earth__project__wrapper');
var title = document.querySelector('#panel-wrapper--content--earth__project__description .projects__title');
var description = document.querySelector('#panel-wrapper--content--earth__project__description .projects__description');
var link = document.querySelector('#panel-wrapper--content--earth__project__description .projects__link');
var img = document.querySelector('#panel-wrapper--content--earth__project__img .projects__img');
var prev = document.querySelector('#projects_svg__prev');
var next = document.querySelector('#projects_svg__next');
var footer = document.querySelector('#projects_footer__text');
var index = 0;

function apply(e_title, e_description, e_link, e_img) {
  writeIntoText_HTML(title, e_title, 0);
  writeIntoText_HTML(description, e_description, 0, 10);
  link.href = e_link;
  img.src = e_img;
}

function change(projects, selected) {
  footer.innerText = index + 1 + "/" + Object.keys(projects).length;
  var opacity = 1;
  var scale = 1;
  var angle = 50;
  var fadeOut_interval = setInterval(function () {
    //Remove last char
    panel.style.opacity = opacity + '';
    img.style.transform = "translateX(-30%) rotateY(-" + angle + "deg) scale(" + scale + ")"; //Increment and check the end of the loop

    angle += 2.5;
    opacity -= 0.05;
    scale -= 0.02;

    if (opacity <= 0) {
      img.style.transform = "translateX(-30%) rotateY(-90deg) scale(" + scale + ")";
      selected = Object.keys(projects)[index];
      apply(projects[selected].title, projects[selected].description, projects[selected].url, projects[selected].img);
      var _opacity = 0;
      var _angle = 90;
      var fadeIn_interval = setInterval(function () {
        //Remove last char
        panel.style.opacity = _opacity + '';
        img.style.transform = "translateX(-30%) rotateY(-" + _angle + "deg) scale(" + scale + ")"; //Increment and check the end of the loop

        _angle -= 2.5;
        scale += 0.02;
        _opacity += 0.05;

        if (_opacity >= 1) {
          img.style.transform = "translateX(-30%) rotateY(-30deg) scale(" + scale + ")";
          clearInterval(fadeIn_interval);
        }
      }, 5);
      clearInterval(fadeOut_interval);
    }
  }, 5);
} //Fetch skills from JSON file


fetch('json/projects.json').then(function (response) {
  return response = response.json();
}).then(function (response) {
  var projects = response.projects;
  var selected = Object.keys(projects)[index];
  footer.innerText = index + 1 + "/" + Object.keys(projects).length;
  apply(projects[selected].title, projects[selected].description, projects[selected].url, projects[selected].img);
  prev.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (index > 0) {
      index--;
    } else {
      index = Object.keys(projects).length - 1;
    }

    change(projects, Object.keys(projects)[index]);
  });
  next.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (index < Object.keys(projects).length - 1) {
      index++;
    } else {
      index = 0;
    }

    change(projects, Object.keys(projects)[index]);
  });
});
//# sourceMappingURL=projects.js.map