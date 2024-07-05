const prompt = require("prompt-sync")();

let day = prompt("Enter the day?")

switch(day){
    case "Monday":
    case "Tusday":
        console.log("you need to wakeup at 5:00Am you have early jobs");
        break;
    case "Wednesday":
    case "Thusday":
        console.log("hey, you have to wakeup little early you have work at 6:00AM");
    break;
    case "friday":
    case "saturday":
        console.log("you can wakeup easily there no work at morning");
    break;
    case "sunday":
        console.log("no need to wakeup it's holiday");
    break;
    default:
        console.log("Not a valid day");

}