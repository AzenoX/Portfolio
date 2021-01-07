/*=====================================

    Typewriting

=====================================*/
let subtitle_writer = document.querySelector('#subtitle_writer');

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

    Sun Animation

============================*/
let sun_svg = document.querySelector("#sun-svg");
let sun_svg__death = document.querySelector("#sun-svg--death");
let sun_svg__outline = document.querySelector("#sun--outline");
let sun_svg__ellipse = document.querySelector("#sun--ellipse");
let sun_svg__pathinside = document.querySelector("#sun--path--inside");
let anim_steps = 0;
let sunToggle = true;
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
                },getRandom(2000, 2500))
            },1000)

        },4000)

    }
});



