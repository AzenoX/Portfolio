"use strict";
/*============================

    Social

============================*/

var carousel = document.querySelector('.socialCarousel');
var currdeg = 0;
var socialPrev = document.querySelector('.socialCarousel-prev');
var socialNext = document.querySelector('.socialCarousel-next');
var startX = 0;
carousel.addEventListener("mousedown", function (e) {
  startX = e.clientX;
});
window.addEventListener("mouseup", function (e) {
  // > 0 means that the mouse was down on carousel
  if (startX > 0) {
    //Next
    if (startX - e.clientX > 200) {
      rotate("n");
    } //Prev
    else if (startX - e.clientX < -200) {
        rotate("p");
      }

    startX = 0;
  }
});
socialPrev.addEventListener('click', function () {
  rotate("p");
});
socialNext.addEventListener('click', function () {
  rotate("n");
});
document.addEventListener('keydown', function (e) {
  var wrapperSaturn = document.querySelector('#panel-wrapper--saturn');

  if (wrapperSaturn.style.opacity > 0) {
    if (e.key === "ArrowRight") {
      rotate("n");
    } else if (e.key === "ArrowLeft") {
      rotate("p");
    }
  }
});
var rot = 360 / document.querySelectorAll('.socialItem').length;

function rotate(d) {
  if (d === "n") {
    currdeg = currdeg - rot;
  }

  if (d === "p") {
    currdeg = currdeg + rot;
  }

  carousel.style.transform = "rotateY(" + currdeg + "deg)";
}
//# sourceMappingURL=social.js.map