/*============================

    Function - Write Typing

============================*/
function writeIntoText(el, text, delay = 1000, typeSpeed = 100){
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


function getRandom(min = 0, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
