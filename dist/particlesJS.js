"use strict";

var default_config = {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
window.addEventListener("load", function () {
  //Particles JS
  particlesJS("particles-js", default_config);
}); //Change speed on press key

window.addEventListener("keyup", function (e) {
  if (e.code === "KeyF") {
    increaseSpeed(true);
  }
});

function increaseSpeed(reset) {
  var speed = 0.4;
  var interval = setInterval(function () {
    window.pJSDom[0].pJS.particles.move.speed = speed;
    speed += 0.2;

    if (speed >= 80) {
      clearInterval(interval);
    }
  }, 4);

  if (reset) {
    setTimeout(function () {
      var speed = 80;
      var interval = setInterval(function () {
        window.pJSDom[0].pJS.particles.move.speed = speed;
        speed -= 0.2;

        if (speed <= 0) {
          window.pJSDom[0].pJS.particles.move.speed = 0.4;
          clearInterval(interval);
        }
      }, 4);
    }, 8000);
  }
}
//# sourceMappingURL=particlesJS.js.map