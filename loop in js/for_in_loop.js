// example of (for_in) loop

let object ={
    ram : 40,   // data are in key value pairs
    hari : 50,
    shyam : 60,
    prem : 70
}

// for in loop 
for ( let a in object){ //variable       accesing value using key         
    console.log("marks of " + a + " are " + object[a] )
}

// for_of loop example

for (let b of "khem"){
    console.log(b);
}