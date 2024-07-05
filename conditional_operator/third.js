function onepluseAvg(p,q){ //  by creating a singe function u can call same function multiple time
    console.log("done")
    return 1+(a+b)/2
}
let a = 10;
let b = 20;
let c = 30;

console.log("onepluse Average of a and b",onepluseAvg(a,b));
console.log("onepluse Average of b and c1",onepluseAvg(b,c))


//fat arrow funciton formate

let Average = (p,q)=>{
    return (p+q)/2
}
var e = 10;
var f = 20;
var g = 30;

console.log("Average of two number",Average(e,f))