let form = document.querySelector("#contactForm");
form.addEventListener("submit", function(e){
    let data = new FormData(e.currentTarget);

    console.log(data);

    // fetch("../php/sendMail.php",
    //     {
    //         body: data,
    //         method: "post"
    //     });
})