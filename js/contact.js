let form = document.querySelector("#contactForm");
form.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value;

    fetch("../php/sendMail.php",
        {
            body: {
                email: email,
                subject: subject,
                message: message
            },
            method: "post"
        }).then((response) => console.log(response));
})