"use strict";

document.getElementById("logInForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(document.getElementById("emailTextField").value);
    console.log(document.getElementById("passWordTextField").value);
    console.log(document.getElementById("Website").value);
});


