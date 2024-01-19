//Part Three section one

    let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

    console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

// 1. (realized I didn't use method chaining):   
    // let initials = language.charAt(0, 1) + language.charAt(4, 5);

// 2. (was trying to understand method chaining but this one is incredibly long and clunky!):
    // initials = language.replace(language[1], "").replace(language[2], "").replace(language[3], "").replace(language[5], "").replace(language[6], "").replace(language[7], "").replace(language[8], "").replace(language[9], "");

// 3. (It worked but I wanted to try doing it using the string's indices only lol):
    // let initials = language.replace("ava", "").replace("cript", "");

// 4. (Very happy with this one!):
    let initials = language.substring(0, 1).concat(language.substring(4, 5));
    console.log(initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

// 1. (I dont think I used bracket notation. Oops!)
    // console.log(`The abbreviation for '${language}' is ${initials}.`);

// 2. (Much happier with this one)
    console.log(`The abbreviation for ${language} is ${language[0].concat(language[4])}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

// I was really strugging with method chaining. I am still kinda grasping at it and I think it's slowly coming together in my brain (yay!)
    let word = "coffee Beans"
    console.log(word[0].toUpperCase().concat(word.substring(1, 7)).concat(word.substring(7, 12)));

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

    let nonTitleCase = "title case";
    let trueTitleCase = nonTitleCase[0].toUpperCase().concat(nonTitleCase.substring(1, 6)).concat(nonTitleCase[6].toUpperCase()).concat(nonTitleCase.substring(7, 10));

    console.log(trueTitleCase);