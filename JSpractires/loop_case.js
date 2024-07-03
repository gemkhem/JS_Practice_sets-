// for loop example in js

let marks = {
    harry :98,
    rohan : 78,
    khem : 79,
    prem :75
}

for (let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])

}

// for in loop example 
// for (b in obj){
//console.log("mark of " + b + " is " + obj[b])
// }