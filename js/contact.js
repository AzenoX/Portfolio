let form = document.querySelector("#contactForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    let data = new FormData(form);

    console.log(data);

    // fetch("../php/sendMail.php",
    //     {
    //         body: data,
    //         method: "post"
    //     });
})