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
                let skills_explainations = document.querySelector('#skills--explainations');

                let svg = document.querySelector('#skills--explainations__svg');
                let svg_path = document.querySelector('#skills--explainations__svg path');
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


                // tl.to(html, {morphSVG:"#css"}, "+=1")
                //     .to(html, {morphSVG:"#js"}, "+=1")
                //     .to(html, {morphSVG:"#jquery"}, "+=1")
                //     .to(html, {morphSVG:"#php"}, "+=1")
                //     .to(html, {morphSVG:"#sass"}, "+=1")
                //     .to(html, {morphSVG:"#vue"}, "+=1")
                //     .to(html, {morphSVG:html}, "+=1");




                // let opacity = 1;
                // let fadeOut = setInterval(function(){
                //
                //     skills_explainations.style.opacity = opacity + '';
                //
                //
                //     //Fade out
                //     opacity -= 0.05;
                //     if(opacity < 0){
                //         svg_path.setAttribute('d', target.path);
                //         svg_path.setAttribute('fill', target.color);
                //         title.innerText = target.title;
                //
                //         desc.innerText = '';
                //         new Typed(desc, {
                //             blink: true,
                //             printErrors: false,
                //             blinkClasses: ["blinker"],
                //             blinkSpeed: 600
                //         })
                //             .type(target.description, {}, 10)
                //             .run();
                //
                //
                //         opacity = 0;
                //         let fadeIn = setInterval(function(){
                //
                //             //Fade In
                //             skills_explainations.style.opacity = Math.round(opacity) + '';
                //
                //
                //             //Ptite animation translate au changement
                //             svg.style.transform = 'translateX(' + ((1 - Math.round(opacity)) * 30) + '%)';
                //             title.style.transform = 'translateX(-' + ((1 - Math.round(opacity)) * 30) + '%)';
                //             desc.style.transform = 'translateY(-' + ((1 - Math.round(opacity)) * 30) + '%)';
                //
                //             opacity += 0.05;
                //             if(Math.round(opacity) > 1){
                //                 clearInterval(fadeIn);
                //             }
                //         },10);
                //         clearInterval(fadeOut);
                //     }
                // },10);

            });
        });
    });