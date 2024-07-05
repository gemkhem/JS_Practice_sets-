const prompt = require("prompt-sync")();

let num = prompt("Enter the number : ");

if(num % 2 == 0 && num % 3 == 0){
    console.log("the number is divisible by 2 and 3 ");

}

else{
    console.log("number is not divisible by 2 and 3");
}