console.log("=========================== Assign 2 ===========================");
console.log("");

function marriageEligiblity(gender,age){
    if (gender=="Male" && age>=21 || gender=="Female" && age>=18 || gender==isNaN && age>=isNaN) {
        console.log(`You are ${gender} and your age is ${age} so you are Eligible for Marraige`);
    } else {
        console.log(`You are ${gender} and your age is ${age} so you are not Eligible for Marraige`);
    }
}



marriageEligiblity("Male",17)
console.log("");
marriageEligiblity("Male",25)
console.log("");
marriageEligiblity("Female",28)
console.log("");
marriageEligiblity("Female",16)
console.log("");
marriageEligiblity("Female",16)
console.log("");
marriageEligiblity("Other",35)
console.log("");
marriageEligiblity("Other",41)
console.log("");