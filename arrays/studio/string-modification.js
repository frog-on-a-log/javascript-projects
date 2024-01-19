const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strTwo = str.slice(0, 3);
console.log(strTwo);
let strThree = str.slice(3, 10);

let strNew = strThree.concat(strTwo);
console.log(strNew);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original string was ${str}. I used two slice methods and a concat to make the new string ${strNew}!`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
numInput = input.question('Please enter a number:');
strTwo = str.slice(0, numInput);
// console.log(strTwo);
// strThree = str.slice(3, 10);


// console.log(strNew);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
strNew = strThree.concat(strTwo);
if (numInput > str.length ){
    console.log(strNew);
}
else {
    console.log(strNew);
}

