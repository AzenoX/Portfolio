/*============================

    Projects Tabs

============================*/

let panel = document.querySelector('#panel-wrapper--content--earth__project__wrapper');
let title = document.querySelector('#panel-wrapper--content--earth__project__description .projects__title');
let description = document.querySelector('#panel-wrapper--content--earth__project__description .projects__description');
let link = document.querySelector('#panel-wrapper--content--earth__project__description .projects__link');
let img = document.querySelector('#panel-wrapper--content--earth__project__img .projects__img');

let prev = document.querySelector('#projects_svg__prev');
let next = document.querySelector('#projects_svg__next');

let footer = document.querySelector('#projects_footer__text');

let index = 0;


function apply(e_title, e_description, e_link, e_img){
    writeIntoText_HTML(title, e_title, 0);
    writeIntoText_HTML(description, e_description, 0, 10);

    link.href = e_link;
    img.src = e_img;
}
function change(projects, selected){

    footer.innerText = (index + 1) + "/" + Object.keys(projects).length;

    let opacity = 1;
    let scale = 1;
    let angle = 50;
    let fadeOut_interval = setInterval(() => {
        //Remove last char
        panel.style.opacity = opacity + '';
        img.style.transform = "translateX(-30%) rotateY(-"+angle+"deg) scale("+scale+")";

        //Increment and check the end of the loop
        angle += 2.5;
        opacity -= 0.05;
        scale -= 0.02;
        if(opacity <= 0){
            img.style.transform = "translateX(-30%) rotateY(-90deg) scale("+scale+")";

            selected = Object.keys(projects)[index];
            apply(projects[selected].title, projects[selected].description, projects[selected].url, projects[selected].img);

            let opacity = 0;
            let angle = 90;
            let fadeIn_interval = setInterval(() => {
                //Remove last char
                panel.style.opacity = opacity + '';
                img.style.transform = "translateX(-30%) rotateY(-"+angle+"deg) scale("+scale+")";

                //Increment and check the end of the loop
                angle -= 2.5;
                scale += 0.02;
                opacity += 0.05;
                if(opacity >= 1){
                    img.style.transform = "translateX(-30%) rotateY(-30deg) scale("+scale+")";
                    clearInterval(fadeIn_interval);
                }
            }, 5);

            clearInterval(fadeOut_interval);
        }
    }, 5);
}


//Fetch skills from JSON file
fetch('json/projects.json')
    .then((response) => response = response.json())
    .then((response) => {
        let projects = response.projects;
        let selected = Object.keys(projects)[index];

        footer.innerText = (index + 1) + "/" + Object.keys(projects).length;

        apply(projects[selected].title, projects[selected].description, projects[selected].url, projects[selected].img);


        prev.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if(index > 0){
                index--;
            }
            else{
                index = Object.keys(projects).length - 1;
            }
            change(projects, Object.keys(projects)[index]);
        });
        next.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if(index < (Object.keys(projects).length - 1)){
                index++;
            }
            else{
                index = 0;
            }
            change(projects, Object.keys(projects)[index]);
        });
    });