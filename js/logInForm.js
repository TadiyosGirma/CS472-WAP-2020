"use strict";


//this one is for assignment5 14a
document.getElementById("logInForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("---------------------------")
    console.log("ASSIGNMENT 5, QUESTION 14a using plain javascript")
    console.log("---------------------------")
    console.log(document.getElementById("emailTextField").value);
    console.log(document.getElementById("passWordTextField").value);
    console.log(document.getElementById("Website").value);
});


//this one is for assignment5 4a
$(document).ready(
    function () {

        $("#logInForm").on("submit", function (event) {
            console.log("---------------------------")
            event.preventDefault();
            console.log("ASSIGNMENT 9, QUESTION 4a using Jquery")
            console.log("---------------------------")
            console.log($("#emailTextField").val());
            console.log($("#passWordTextField").val());
            console.log($("#Website").val());
        });
    }
)