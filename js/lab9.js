/* 

*/

"use strict";

console.log("QUESTION NUMBER 1")
console.log("-----------------")

const person = {
    name: "",
    dateOfBirth: "",

    getName: function () {
        return this.name;
    },
    setName: function (incomingName) {
        this.name = incomingName;
    }
}

//creating the peson John
const person1 = Object.create(person);
person1.setName("John");
person1.dateOfBirth = new Date(1998, 11, 10);

//displaying the output
console.log("The person’s name is" + " " + person1.getName());
console.log(person1.getName() + " " + " was born on" + " " + person1.dateOfBirth);


console.log("QUESTION NUMBER 2")
console.log("-----------------")

const employee = {
    salary: 0,
    hireDate: new Date(),
    doJob: function(jobTitle){
        console.log(this.name + " is a " + jobTitle + " who earns $" + this.salary); 
    },
    __proto__:person
}


//creating the employee Ann
const employee1 = Object.create(employee);
employee1.setName("Ann");
employee1.dateOfBirth = new Date(2000, 11, 10);
employee1.salary = 249995.50 ;

//displaying the output
console.log(employee1.doJob("Programmer"));


console.log("QUESTION NUMBER 3")
console.log("-----------------")

function persons (newName, birthDate) {
    this.name = newName;
    this.dateOfBirth = birthDate;
    toString = function(){
        return "Name: " + this.name + "," + " Date of Birth: " + this.dateOfBirth;
    }
}

//creating the peson Peter using constructor method
const person2 = new persons("Peter", new Date(1985, 10, 10));
console.log(person2.toString());