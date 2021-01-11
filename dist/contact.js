"use strict";

var form = document.querySelector("#contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#subject").value;
  var message = document.querySelector("#message").value; // fetch("../php/sendMail.php",
  //     {
  //         body: `email=${email}&subject=${subject}&message=${message}`,
  //         method: "post"
  //     }).then((response) => console.log(response));

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../php/sendMail.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log(this.responseText);
    }
  };

  xhr.send("email=" + email + "&subject=" + subject + "&message=" + message);
});
//# sourceMappingURL=contact.js.map