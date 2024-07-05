const prompt = require('prompt-sync')();

let age = prompt("Enter your age"+"  ");

if(age<=18){
console.log("your are child")
}
else if(age>18 && age< 60){
console.log("you ae adult")
}
else{
console.log("you are elder citizen")
}