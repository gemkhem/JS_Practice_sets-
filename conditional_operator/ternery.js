const prompt = require("prompt-sync")();

let age = prompt("Enter your age : ");

age = Number.parseInt(age)

let x = age>18?"you can drive":"you are eligible for driving"
    console.log(x)