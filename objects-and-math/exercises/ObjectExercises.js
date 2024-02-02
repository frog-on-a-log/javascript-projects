let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function (){return Math.floor(math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function (){return Math.floor(math.random()*11)}
};

let Chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function (){return Math.floor(math.random()*11)}
};

let Beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function (){return Math.floor(math.random()*11)}
};

let Tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function (){return Math.floor(math.random()*11)}
};
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crewMembers = [superChimpOne, salamander, Chimpanzee, Beagle, Tardigrade]
// Print out the relevant information about each animal.
function crewReports(crewMember){
   return `${crewMember} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.` 
}
// function getAllCrewInfo(){
//    for (i=0; i<crewMembers.length;i++){
//    let report = [crewReports(crewMembers[i])]
//    let reports = []
//    reports = reports.push(report) 
//    return reports
// }}
// console.log(getAllCrewInfo(crewMembers));
// Start an animal race!