console.log("=========================== Assign 3 ===========================");

function stringHandsOn(){

var message = "    Hey you are doing good, keep it up    ";
console.log(`1. ${message}`);

var lengthMessage = message.length;
console.log(`2. The String Lenght is: ${lengthMessage}`);


var trimResult = message.trim(" ");
console.log(`3. The String Trim is: ${trimResult}`);

var extraSpace = lengthMessage - trimResult.length;
console.log(`4. The String Extra Space is: ${extraSpace}`);

var first = trimResult.charAt(0);
var last = trimResult.charAt(trimResult.length-1);
console.log(`5. The String First and Last Character is: ${first}, ${last}`);

var totalWord = trimResult.split(" ");
console.log(`6. Total words in the string is: ${totalWord.length}`);

var indexOfgood = trimResult.indexOf("good")
console.log(`7. Index of good is:, ${indexOfgood}`);

var result = trimResult.substring(22);
var result = trimResult.slice(22);
console.log(`8. Substring Starting From Index 22 is= ${result}   Slice Starting From Index 22 is= ${result} `);

var result= trimResult.endsWith("up");
console.log(`9. String ends with word "up"= ${result}`);

var result= trimResult.startsWith("Hey");
console.log(`10. String Start with word "Hey"= ${result}`);

}

stringHandsOn()