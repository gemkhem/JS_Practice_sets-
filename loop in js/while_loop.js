// syntex for while loop

/* while(condition){
...code to be executed
} 

note : if the condition never becomes a false the loop 
will never end and this might cresh the runtime*/

/* while loop is used to repeat specific block of code 
an unknown number of times, unitll a condition is met,

while loop is used when we don't known the number of
 times it will repeat the condition*/


 //while loop example

// const prompt = require("prompt-sync")();

// let n = prompt("Enter the value of n : ")
// n = Number.parseInt(n)

// let i = 0;
// while(i<n){
//     console.log(i)
//     i++;
// }


//do_while loop example

/**the statements inside the loop
 *  body will be executed at least once 
 * even if the condition is never true. The */

const prompt = require("prompt-sync")();

let n = prompt("Enter the value of n : ")
n = Number.parseInt(n)

let i = 0;
do{
 console.log(i)
 i++;
}
while(i<n)
