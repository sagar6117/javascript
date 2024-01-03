console.log( `-----------------------Step 1-------------------------------`);
console.log("");

var isEvenOrOdd = function (num) 
{
    if (num % 2 == 0) 
    {
      returnValue = "Even Number";
      console.log(`${num} Number is ${returnValue}`); 
    } 
    else 
    {
      returnValue = "Odd Number";
      console.log(`${num} Number is ${returnValue}`); 
    }    

  };
 

  isEvenOrOdd(45);
  console.log("");
  isEvenOrOdd(70);
  console.log("");
  isEvenOrOdd(67);
  console.log("");
  isEvenOrOdd(98);

console.log( `-----------------------Step 2-------------------------------`);
console.log("");

var voteEligible = function (age){
    if (age>=18) {
        console.log(`Your age is ${age} So, You are Eligible`);
        
    } else {
        console.log(`Your age is ${age} So, You are Not Eligible`);
    }
}

voteEligible(18)
console.log("");
voteEligible(20)
console.log("");
voteEligible(17)
console.log("");
voteEligible(40)

console.log( `-----------------------Step 3-------------------------------`);
console.log("");

var stringLength = function(word){
    if (word.length>=10) {
        console.log(`${word}: Word Length is more than 10 character`);
    } else {
        console.log(`${word}: Word Length is less than 10 character`);
    }
}

stringLength("JavaScript - ES6")

console.log( `-----------------------Step 4-------------------------------`);
console.log("");

var wordStartsWith = function (word) {
    if (word.startsWith("Java")) {
      console.log(`Given word is ${word} : It start with the word Java`);
    } else {
      console.log(`Given word is ${word} : It does not start with the word Java`);
    }
  };
  
  wordStartsWith("Javascript Language");


