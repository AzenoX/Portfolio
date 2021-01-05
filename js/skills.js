/*============================

    Skills Tabs

============================*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let skills_svg = document.querySelectorAll('.skill_icon');

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