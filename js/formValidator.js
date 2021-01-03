/*============================

    Fields verifications

============================*/
let emailField = document.querySelector("#email");
let emailHelper = document.querySelector("#emailHelper");

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



