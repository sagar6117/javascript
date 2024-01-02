console.log( `-----------------------Step 1-------------------------------`);
console.log("");

function greaterNumber(num1,num2)
{
    var res=num1>num2 ? num1 : num2;
    console.log("The Number is:", num1, num2);
    console.log(`The Greater Numbers is: ${res}`);
   

}

greaterNumber(10,-10)
console.log("");
greaterNumber(800,899)

console.log("");

console.log( `-----------------------Step 2-------------------------------`);
console.log("");

function isEvenOrOddNum(num){
    var result = num%2;
    var resultValue = result == 0 ? console.log(`${num} is Even Number`) : console.log(`${num} is ODD Number`) ;
    
}
isEvenOrOddNum(29)
isEvenOrOddNum(44)
isEvenOrOddNum(0)
isEvenOrOddNum(101)

console.log( `-----------------------Step 3-------------------------------`);
console.log("");

function wordLength(num){
    var totalOfLength = num.length;
    var res= totalOfLength%2;
    console.log(`${num}`);
    console.log(`The Total of Word Length is: ${totalOfLength}`);
    var resultValue = res == 0 ? console.log(`${num} Length is Even Number `): console.log(`${num} The Length is Odd Number `);
    console.log("");
    
}

wordLength("JavaScript")
wordLength("Developer");
wordLength("Google");
wordLength("Web Devloper");
wordLength("Code Mind");