/*============================

    Hide Loader

============================*/
window.addEventListener('DOMContentLoaded', function(){
    let loader = document.querySelector('#loader-wrapper');


    setTimeout(function(){
        loader.classList.add('loader-complete');
        setTimeout(function(){
            loader.parentNode.removeChild(loader);
        },1000);
    },500);

});





/*============================

    Animation Loader

============================*/
let mercury = document.querySelector('#loader--svg-mercury');
let mercury_g = document.querySelector('#loader--svg-mercury > g');

let venus = document.querySelector('#loader--svg-venus');
let venus_g = document.querySelector('#loader--svg-venus > g');

let earth = document.querySelector('#loader--svg-earth');
let earth_g = document.querySelector('#loader--svg-earth > g');

let mars = document.querySelector('#loader--svg-mars');
let mars_g = document.querySelector('#loader--svg-mars > g');


let sun = document.querySelector('#loader--svg-sun');
let sun_g = document.querySelector('#loader--svg-sun > g');


let animation = [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(360deg)'}
]

mercury_g.animate(
animation,
{
    duration: 2000,
    iterations: Infinity
}
);

venus_g.animate(
animation,
{
    duration: 3000,
    iterations: Infinity
}
);
earth_g.animate(
animation,
{
    duration: 4000,
    iterations: Infinity
}
);
mars_g.animate(
animation,
{
    duration: 5000,
    iterations: Infinity
}
);

sun_g.animate(
animation,
{
    duration: 10000,
    iterations: Infinity
}
);



let wW = window.innerWidth;
let wH = window.innerHeight;

let radius = wW / 3;


let me = Math.floor(Math.random() * Math.floor(4));
let ve = Math.floor(Math.random() * Math.floor(4));
let ea = Math.floor(Math.random() * Math.floor(4));
let ma = Math.floor(Math.random() * Math.floor(4));
setInterval(function(){
    let mercury_x = Math.cos(me) * (radius / 4);
    let mercury_y = Math.sin(me) * (radius / 4);

    let venus_x = Math.cos(ve) * (radius / 2.6);
    let venus_y = Math.sin(ve) * (radius / 2.6);

    let earth_x = Math.cos(ea) * (radius / 2);
    let earth_y = Math.sin(ea) * (radius / 2);

    let mars_x = Math.cos(ma) * (radius / 1.6);
    let mars_y = Math.sin(ma) * (radius / 1.6);


    mercury.style.transform = "translate(-50%, -50%) translateY(" + mercury_y +
    "px) translateX(" + mercury_x +
    "px)";

    venus.style.transform = "translate(-50%, -50%) translateY(" + venus_y + "px) translateX("
    + venus_x +
    "px)";

    earth.style.transform = "translate(-50%, -50%) translateY(" + earth_y + "px) translateX("
    + earth_x +
    "px)";

    mars.style.transform = "translate(-50%, -50%) translateY(" + mars_y + "px) translateX(" +
    mars_x +
    "px)";


    me += 0.020;
    ve += 0.012;
    ea += 0.006;
    ma += 0.002;
},10);