/*============================
******************************
    Hide Loader
******************************
============================*/
window.addEventListener('DOMContentLoaded', function(){
    let loader = document.querySelector('#loader-wrapper');

    loader.classList.add('loader-complete');
    setTimeout(function(){
        loader.parentNode.removeChild(loader);
    },1000);

});



/*============================
******************************
    Functions
******************************
============================*/
//Use Typed to write a text
function writeIntoText(el, text, delay = 1000, typeSpeed = 100, blinkClass = "blinker"){
    let element = document.getElementById(el);
    let type = new Typed(element, {
        blink: true,
        printErrors: false,
        blinkClasses: ["blinker"]
    })
        .pause(delay)
        .type(text, {}, typeSpeed)
        .run();
}
//Use Typed to write a text in an HTMl element
function writeIntoText_HTML(element, text, delay = 1000, typeSpeed = 100, blinkClass = "blinker"){
    let type = new Typed(element, {
        blink: true,
        printErrors: false,
        blinkClasses: [blinkClass]
    })
        .pause(delay)
        .type(text, {}, typeSpeed)
        .run();
}

//Return random Number
function getRandom(min = 0, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}



/*============================
******************************
    ParticleJS Init and Manager
******************************
============================*/

/*----------------------
     Functions
-----------------------*/
//Increase ParticleJS speed
function increaseSpeed(reset){
    let speed = 0.4;
    let interval = setInterval(function(){
        window.pJSDom[0].pJS.particles.move.speed = speed;
        speed += 0.2;
        if(speed >= 80){
            clearInterval(interval);
        }
    },4);

    if(reset){
        setTimeout(function(){
            let speed = 80;
            let interval = setInterval(function(){
                window.pJSDom[0].pJS.particles.move.speed = speed;
                speed -= 0.2;
                if(speed <= 0){
                    window.pJSDom[0].pJS.particles.move.speed = 0.4;
                    clearInterval(interval);
                }
            },4);
        },8000)
    }
}


/*----------------------
     Declarations
-----------------------*/
let default_config = {
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


/*----------------------
     Events
-----------------------*/
//Init ParticleJS
window.addEventListener("load", function(){
    //Particles JS
    particlesJS("particles-js", default_config);
})
//Change speed on press key
window.addEventListener("keyup", function(e){
    if(e.code === "KeyF"){
        increaseSpeed(true);
    }
});




/*============================
******************************
    Fields verifications
******************************
============================*/

/*----------------------
     Declarations
-----------------------*/
let emailField = document.querySelector("#email");
let emailHelper = document.querySelector("#emailHelper");


/*----------------------
     Events
-----------------------*/
emailField.addEventListener('keyup', function(){
    let value = emailField.value;
    let emailRegex = /[a-z0-9._-]+@[a-z0-9]+[.][a-z]{1,8}/;

    if(emailRegex.test(value.toString().toLowerCase())){
        emailHelper.classList.remove('error');
        emailHelper.classList.add('valid');

        emailHelper.innerText = "Adresse email valide.";
    }
    else{
        emailHelper.classList.remove('valid');
        emailHelper.classList.add('error');

        emailHelper.innerText = "Adresse email invalide !";
    }
});




/*=====================================

    Titles Typewriting

=====================================*/

/*----------------------
     Declarations
-----------------------*/
let subtitle_writer = document.querySelector('#subtitle_writer');


/*----------------------
     Executions
-----------------------*/
new Typed(subtitle_writer, {
    blink: true,
    printErrors: false,
    blinkClasses: ["blinker"],
    blinkSpeed: 600
})
    .type("Développeur")
    .type(" Front End", {color:"#3f51b5"})
    .pause(2000)
    .delete(8)
    .pause(1000)
    .type("Back End", {color: "#ff9800"})
    .pause(2000)
    .delete(7)
    .pause(1000)
    .type("FullStack", {fontWeight: "bold", color: "#f44336"})
    .run();




/*============================
******************************
    Sun Animation
******************************
============================*/

/*----------------------
     Declarations
-----------------------*/
let sun_svg = document.querySelector("#sun-svg");
let sun_svg__death = document.querySelector("#sun-svg--death");
let sun_svg__outline = document.querySelector("#sun--outline");
let sun_svg__ellipse = document.querySelector("#sun--ellipse");
let sun_svg__pathinside = document.querySelector("#sun--path--inside");
let anim_steps = 0;
let sunToggle = true;


/*----------------------
     Events
-----------------------*/
window.addEventListener("keyup", function(e){
    if(e.key === "s"){
        if(sunToggle){
            sun_svg.style.transform = "scale(0)";
            sun_svg__death.style.transform = "scale(1)";
            setTimeout(function(){
                sun_svg__death.classList.add("scaled");
            },2000)

            sunToggle = false;
        }
        else{
            sun_svg.style.transform = "scale(1)";
            sun_svg__death.style.transform = "scale(1)";
            setTimeout(function(){
                sun_svg__death.classList.remove("scaled");
            },200)
            setTimeout(function(){
                sun_svg__death.style.transform = "scale(0)";
            },300)

            sunToggle = true;
        }
    }
})
sun_svg.addEventListener("click", function(e){
    //to white star
    if(anim_steps === 0){
        anim_steps = -1;
        sun_svg.style.transform = "scale(10)";

        sun_svg__outline.style.fill = "#FF5722";
        sun_svg__ellipse.style.fill= "#B71C1C";
        sun_svg__pathinside.style.fill= "#C62828";

        setTimeout(function(){
            sun_svg__outline.style.display = "none";
            sun_svg.style.transform = "scale(1)";

            sun_svg__outline.style.fill = "#fff";
            sun_svg__ellipse.style.fill= "#F5F5F5";
            sun_svg__pathinside.style.fill= "#EEEEEE";

            setTimeout(function(){
                sun_svg.classList.add("scaled");
                anim_steps = 1;
            },2000)
        },2000)
    }

    //to black hole
    else if(anim_steps === 1){
        let wrapper = sun_svg.parentNode;

        wrapper.style.bottom = "50%";
        setTimeout(function(){
            sun_svg.classList.remove("scaled");
            sun_svg.classList.add("scaledx2");
        },500)
        setTimeout(function(){
            sun_svg.classList.remove("scaledx2");
            sun_svg.classList.add("scaledx4");
        },2500)
        setTimeout(function(){
            sun_svg.classList.remove("scaledx4");
            sun_svg.classList.add("scaled");

            sun_svg__outline.style.fill = "#000";
            sun_svg__ellipse.style.fill= "#000";
            sun_svg__pathinside.style.fill= "#000";

            let filters = [
                {filter: 'drop-shadow(-5px -5px 2px #FF8F00)'},
                {filter: 'drop-shadow(5px -5px 2px #EF6C00)'},
                {filter: 'drop-shadow(5px 5px 2px #D84315)'},
                {filter: 'drop-shadow(-5px 5px 2px #EF6C00)'},
                {filter: 'drop-shadow(-5px -5px 2px #FF8F00)'}
            ]

            sun_svg.animate(
                filters,
                {
                    duration: 300,
                    iterations: Infinity
                }
            );

            setTimeout(function(){
                let coords = {
                    mercury: {
                        top: '45%',
                        left: '150%'
                    },
                    venus: {
                        top: '25%',
                        left: '140%'
                    },
                    earth: {
                        top: '-5%',
                        left: '100%'
                    },
                    mars: {
                        top: '-30%',
                        left: '60%'
                    },
                    neptune: {
                        top: '45%',
                        left: '-150%'
                    },
                    uranus: {
                        top: '25%',
                        left: '-140%'
                    },
                    saturne: {
                        top: '-5%',
                        left: '-100%'
                    },
                    jupiter: {
                        top: '-30%',
                        left: '-60%'
                    }
                }
                let planets = document.querySelectorAll(".menu_planet");
                let dText = document.querySelector("#disappearingText");


                increaseSpeed(false);

                let i = 0;
                planets.forEach(function(planet){
                    let animation = [
                        {
                            top: '0%',
                            left: '0%'
                        },
                        {
                            top: coords[Object.keys(coords)[i]].top,
                            left: coords[Object.keys(coords)[i]].left
                        }
                    ];
                    setTimeout(function(){
                        dText.animate(
                            [
                                {
                                    opacity: '0'
                                },
                                {
                                    opacity: '1'
                                }
                            ],
                            {
                                duration: getRandom(200, 250),
                                iterations: 1,
                                fill: "forwards",
                                easing: "ease-in-out"
                            });
                        planet.animate(
                            animation,
                            {
                                duration: getRandom(1000, 1500),
                                iterations: 1,
                                fill: "forwards",
                                easing: "ease-in-out"
                            }
                        );
                    }, getRandom(400, 800))

                    i++;
                });


                let titles = document.querySelector(".home__titles");
                titles.animate(
                    [
                        {
                            top: '0%',
                            transform: 'scale(0.9) rotate(0deg)',
                            translate: 'transform 0.1s ease-in-out'
                        },
                        {
                            top: '25%',
                            transform: 'scale(0.1) rotate(45deg)'
                        }
                    ],
                    {
                        duration: Math.floor(Math.random() * (1000 - 600 + 1)) + 600,
                        iterations: 1,
                        fill: "forwards",
                        easing: "ease-in-out"
                    }
                );

                setTimeout(function(){
                    let body = document.querySelector('body');
                    body.animate(
                        [
                            {opacity: '1'},
                            {opacity: '0'}
                        ],
                        {
                            duration: 2000,
                            iterations: 1,
                            fill: "forwards",
                            easing: "ease-in-out"
                        }
                    );

                    setTimeout(function(){
                        document.location.reload();
                    },3000);
                },getRandom(4000, 4500))
            },1000)

        },4000)

    }
});




/*============================
******************************
    Menu
******************************
============================*/

/*----------------------
     Functions
-----------------------*/
//Toggle background opacity
function toggleOpacity(){
    if(opacity_bg.style.opacity === "0.9"){
        opacity_bg.style.opacity = "0";
        setTimeout(function(){
            opacity_bg.style.zIndex = "-1";
        },400);
    }
    else{
        opacity_bg.style.opacity = "0.9";
        opacity_bg.style.zIndex = "5";
    }
}
//Open Panel
function openWindow(name, text){
    if(name !== "saturn"){
        writeIntoText('panel-wrapper--title--'+name, text, 100);
    }
    else{
        let el = document.querySelector('#panel-wrapper--title--'+name);
        new Typed(el, {
            blink: true,
            printErrors: false,
            blinkClasses: ["blinker"],
            blinkSpeed: 600
        })
            .pause(100)
            .type(text)
            .pause(20000)
            .delete(2)
            .type("AAAAAAAAAAAUX")
            .pause(2000)
            .delete(12)
            .type("AUX")
            .run();
    }

    let titles = document.querySelector(".home__titles");
    titles.style.opacity= "0";

    let panel = document.querySelector('#panel-wrapper--'+name);
    panel.style.transform = "scale(1)";
    panel.style.opacity = "1";
    toggleOpacity();
}
//Close Panel
function closeWindow(name){
    let titles = document.querySelector(".home__titles");
    titles.style.opacity= "1";

    let panel = document.querySelector('#'+name);
    panel.style.opacity = "0";
    panel.style.transform = "scale(0)";
    toggleOpacity();
}
//Set current opened panel in variable
function setOpenedPanel(){
    let panels = document.querySelectorAll('.futurepanel');
    current_panel__id = "";
    panels.forEach(function(panel){
        if(panel.style.opacity > 0){
            current_panel__id = panel.id;
        }
    });
}
//Get current opened panel from variable
function getOpenedPanel(){
    return current_panel__id;
}
//true if a panel is open
function isOpenedPanel(){
    return current_panel__id !== "";
}


/*----------------------
     Declarations
-----------------------*/
let current_panel__id = "";
let opacity_bg = document.querySelector('#opacity-bg');
let closeBtns = document.querySelectorAll('.futurepanel__header > span:last-child');
let svgs = document.querySelectorAll('.menu_svg');


/*----------------------
     Events
-----------------------*/
//Open window depending of the svg
svgs.forEach(function(svg){
    svg.addEventListener("click", function(el){
        let name = svg.getAttribute('name');
        let text = svg.getAttribute('data-text');
        openWindow(name, text);
    })
})
//Listen Escape key to close panel
window.addEventListener("keyup", function(e){
    if(e.code === "Escape"){
        setOpenedPanel();
        setTimeout(function(){
            if(isOpenedPanel()){
                let panel_id = getOpenedPanel();
                closeWindow(panel_id);
            }
        },50);
    }
});
//Click event on overlay when panel is open, used to close the panel
opacity_bg.addEventListener('click', function(e) {
    e.preventDefault();

    setOpenedPanel();
    setTimeout(function(){
        if (isOpenedPanel()) {
            let panel_id = getOpenedPanel();

            const el = document.getElementById(name);
            let target;

            while(target){
                if(target === el){
                    return;
                }
                target = target.parentNode;
            }

            closeWindow(panel_id);
        }
    },50);
});
//Close on button click
closeBtns.forEach(function(closeBtn){
    closeBtn.addEventListener("click", function(el){
        setOpenedPanel();
        setTimeout(function(){
            if(isOpenedPanel()){
                let panel_id = getOpenedPanel();
                closeWindow(panel_id);
            }
        },50);
    })
})



/*============================
******************************
    Skills Tabs
******************************
============================*/

/*----------------------
     Functions
-----------------------*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/*----------------------
     Declarations
-----------------------*/
let skills_svg = document.querySelectorAll('.skill_icon');


/*----------------------
     Executions
-----------------------*/
//Fetch skills from JSON file
fetch('json/skills.json')
    .then((response) => response = response.json())
    .then((response) => {
        skills_svg.forEach(function(ssvg){
            ssvg.addEventListener("click", function(){
                let title = document.querySelector('#skills--explainations__title');
                let desc = document.querySelector('#skills--explainations__desc');

                let name = this.getAttribute('data-name');

                let target = response.skills[name];



                //Fadeout title and description
                title.animate({
                    opacity: [1, 0],
                }, {
                    duration: 500,
                    iterations: 1,
                    fill: 'forwards'
                });
                let animation = desc.animate({
                    opacity: [1, 0],
                }, {
                    duration: 500,
                    iterations: 1
                });

                //Animate SVG
                let tl = gsap.timeline({defaults: {duration: 1}}),
                    svgPath = document.getElementById("skillsHtml");
                tl.to(svgPath, {
                    morphSVG:"#skills"+capitalizeFirstLetter(name),
                    fill: target.color
                });


                animation.finished.then(
                    function() {

                        //Change title and reshow it
                        title.innerText = target.title;
                        title.animate({
                            opacity: [0, 1],
                        }, {
                            duration: 500,
                            iterations: 1,
                            fill: 'forwards'
                        });

                        //Change description and start typewriting
                        desc.innerText = '';
                        desc.animate({
                            opacity: [0, 1],
                        }, {
                            duration: 500,
                            iterations: 1
                        });
                        new Typed(desc, {
                            blink: true,
                            printErrors: false,
                            blinkClasses: ["blinker"],
                            blinkSpeed: 600
                        })
                            .type(target.description, {}, 10)
                            .run();

                    }
                );

            });
        });
    });





/*============================
******************************
    Social
******************************
============================*/

/*----------------------
     Functions
-----------------------*/
function rotate(d){
    if(d === "n"){
        currdeg = currdeg - rot;
    }
    if(d === "p"){
        currdeg = currdeg + rot;
    }
    carousel.style.transform = "rotateY("+currdeg+"deg)";
}


/*----------------------
     Declarations
-----------------------*/
let carousel = document.querySelector('.socialCarousel');
let socialPrev = document.querySelector('.socialCarousel-prev');
let socialNext = document.querySelector('.socialCarousel-next');
let currdeg = 0;
let startX = 0;
let rot = 360 / document.querySelectorAll('.socialItem').length;


/*----------------------
     Events
-----------------------*/
//Prev/Next buttons
socialPrev.addEventListener('click', function(){
    rotate("p");
});
socialNext.addEventListener('click', function(){
    rotate("n");
});
//Drag slides
carousel.addEventListener("mousedown", function(e){
    startX = e.clientX;
})
window.addEventListener("mouseup", function(e){
    // > 0 means that the mouse was down on carousel
    if(startX > 0){
        //Next
        if((startX - e.clientX) > 200){
            rotate("n");
        }
        //Prev
        else if((startX - e.clientX) < -200){
            rotate("p");
        }
        startX = 0;
    }
})
//Arrow keyboard
document.addEventListener('keydown', function(e){
    let wrapperSaturn = document.querySelector('#panel-wrapper--saturn');

    if(wrapperSaturn.style.opacity > 0){
        if(e.key === "ArrowRight"){
            rotate("n");
        }
        else if(e.key === "ArrowLeft"){
            rotate("p");
        }
    }
})





/*============================
******************************
    GitHub
******************************
============================*/
let div = document.querySelector("#github--wrapper");
//AJAX
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200){
            div.innerHTML = this.response;
        }
        else{
            console.log("Error when fetching GitHub API !");
        }
    }
};
xhttp.open("GET", "php/githubRepos.php", true);
xhttp.send();








/*============================
******************************
    Contact
******************************
============================*/

/*----------------------
     Declarations
-----------------------*/
let form = document.querySelector("#contactForm");


/*----------------------
     Events
-----------------------*/
form.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/sendMail.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            console.log(this.responseText);
        }
    }
    xhr.send("email="+email+"&subject="+subject+"&message="+message);
})









