// for ( let i = 0;i<5;i++){
//     console.log(i)
// }


// program to add first n natural number
const prompt = require("prompt-sync")();

let sum = 0

let n = prompt("Enter the value of n : ")

n = Number.parseInt(n)
for (let i = 0; i < n; i++){ // let is used for block level elements 
    sum += (i+1)             //var is used for globel level we can access whenever require 
}
console.log("sum of first " + n + " natural number is " + sum)