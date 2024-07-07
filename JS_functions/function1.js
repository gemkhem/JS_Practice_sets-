// progarm to find the mean of 5 number


function mean (a,b,c,d,e){
   return a+b+c+d+e/5;

}
let r = mean(1,2,3,4,5)
let r1 = mean(4,5,6,7,3)
console.log(r);
console.log(r1);


// fat arrow function method

const mean = ( a, b, c, d)=>{
    return (a + b + c + d)/4
}
let r2 = mean(1,2,3,4);
console.log(r2);