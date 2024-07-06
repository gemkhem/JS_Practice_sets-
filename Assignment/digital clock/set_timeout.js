//method to use settimeout

// let a = setTimeout(() => {
//     alert("you are in danger")   
// }, 2000);

//eg 2

const sum = ((a,b,c,d)=>{
    console.log("yes i am runnig ", a+b+c+d)

})

setTimeout(sum,1000, 1,2,3,4)


//by using setinterval

// let b = setInterval(()=>{
//     alert("your in danger")
// },5000)

const a = ((e,f,g)=>{
    console.log("yes i am running", e+f+g)
})
setInterval(a,5000,5,4,6)