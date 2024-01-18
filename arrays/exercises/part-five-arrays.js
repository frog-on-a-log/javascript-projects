let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split('e')); 
/* what you put inside the () determines what elements the string is split into! 
Example:
str.split() returns an array with the entire string as one element in the array. 
str.split('') returns an array where each character (including spaces) becomes an individual element in the array.
str.split(' ') returns an array where each group of characters-between-spaces become individual elements in the array.
str.split('e') returns an array with each instance of 'e' replaced with a comma (making the string of the characters between each instance of 'e' into inividual elements in the array).
*/

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
arr = ['B', 'n', 'n', 5]
console.log(arr.join('a'));

/* arr.join() returns a string with each element of the array separated by a comma.
arr.join('') returns a string with each element of the array not separated by anything.
arr.join(' ') returns a string with each element of the array separated by a space.
arr.join('a') returns a string with each element of the array separated by an 'a' with no commas or spaces (Unless they are already part of an element in the array).

*/

/*3) Do split or join change the original string/array? 
console.log(arr);
No they do not.
*/

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join());

