
const prompt = require("prompt-sync")();
let fruit = prompt("which fruit do you want to buy?")

// let fruit = "mango";          // reference statement 

switch(fruit){
    case "apple":
        console.log("100 per kg");
        break;
    case "banana":
        console.log("50 per kg")
        break;
    case "mango":
        console.log("150 per kg");
        break;
    default:
        console.log("i don't know");       
}