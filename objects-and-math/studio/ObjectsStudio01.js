// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function randomEntry(arr){
  let index=Math.floor(Math.random()*arr.length);
  return arr[index]
}
// console.log(randomEntry(idNumbers));

// Code your buildCrewArray function here:
let crew = []
while (crew.length<3){
  randomSelection = randomEntry(idNumbers)
  if (!crew.includes(randomSelection)){
  crew.push(randomSelection)
  } 
}console.log(crew);


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function buildCrew(arr1, arr2){
  let selectedCrew = [];
  for (let i = 0; i < arr2.length; i++){
    if (arr1.includes(arr2[i].astronautID)){
      selectedCrew.push(arr2[i]);
    }
  }
  return selectedCrew;
} let completedCrew = buildCrew(crew, animals);

// Code your template literal and console.log statements:
console.log(`${completedCrew[0].name}, ${completedCrew[1].name} and ${completedCrew[2].name} are going to space!`);
console.log(completedCrew);