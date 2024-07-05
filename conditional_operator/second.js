//function overriding is occure due to the same functin name

function wish(){
    console.log("Good morning")
}
wish()
 function wish(){
    console.log("Good Afternoon")
 }
wish()


//function overriding is handle by using fat arrow function 

var wish = () =>{
    console.log("Good morning")
}
wish()

var wish = ()=>{
    console.log("Good Afternoon")
}
wish()