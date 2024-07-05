const prompt = require("prompt-sync")();

let num = prompt("Enter the number : ");

num = Number.parseInt(num)

if(num % 2 == 0 || num % 3 == 0){
    console.log("The number is divisible by 2 and 3");
}
else{
    console.log("The numbe is not divisible by 2 and 3");
}