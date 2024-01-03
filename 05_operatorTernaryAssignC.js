console.log( `-----------------------Step 1-------------------------------`);
console.log("");

var maleMarriageEligiblity = function(gender,age,boyName)

{
    
 var result = gender="Male" && age >= 21 
 ? `Hey ${boyName} You are Eligible for Marriage` 
 : `Sorry..!!! You are not Eligible for Marriage, Please Try Next Time.\n` ; 
 console.log(result);
    
}

maleMarriageEligiblity("Male",24,"BillGates");
console.log("");
maleMarriageEligiblity("Male", 17, "Stew Jobs");
console.log("");

console.log( `-----------------------Step 2-------------------------------`);
console.log("");

var femaleMarriageEligiblity = function(gender,age,girlName)

{
    
 var result = gender="Female" && age >= 18 
 ? `Hey ${girlName} You are Eligible for Marriage` 
 : `Sorry..!!! You are not Eligible for Marriage, Please Try Next Time.\n` ; 
 console.log(result);
    
}

maleMarriageEligiblity("Female",16,"Jenifer");
console.log("");
maleMarriageEligiblity("Female", 27, "Malinda Gates");
console.log("");

