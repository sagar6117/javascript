console.log("=========================== Assign 1 ===========================");
console.log("");

function monthOfYear(month){
switch(month){
    case 1:
        console.log(` Month Number ${month} ==> January`);
    break;

    case 2:
        console.log(` Month Number ${month} ==> February`);
    break;

    case 3:
        console.log(` Month Number ${month} ==> March`);
    break;

    case 4:
        console.log(` Month Number ${month} ==> April`);
    break;

    case 5:
        console.log(` Month Number ${month} ==> May`);
    break;

    case 6:
        console.log(` Month Number ${month} ==> June`);
    break;

    case 7:
        console.log(` Month Number ${month} ==> July`);
    break;

    case 8:
        console.log(` Month Number ${month} ==> August`);
    break;

    case 9:
        console.log(` Month Number ${month} ==> September`);
    break;

    case 10:
        console.log(` Month Number ${month} ==> October`);
    break;

    case 11:
        console.log(` Month Number ${month} ==> November`);
    break;

    case 12:
        console.log(` Month Number ${month} ==> December`);
    break;

    default:
          console.log(` Invalid Input ==> Month Number ${month}`);
    break;

    
}
}

monthOfYear(0)
console.log("");
monthOfYear(2)
console.log("");
monthOfYear(5)
console.log("");
monthOfYear(12)
console.log("");
monthOfYear(15)
console.log("");
monthOfYear(100)
console.log("");
monthOfYear(null)
console.log("");
monthOfYear(undefined)
console.log("");