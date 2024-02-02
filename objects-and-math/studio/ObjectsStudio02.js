// Code your orbitCircumference function here:
let radius = 2000 //km
let orbitalSpeed = 28000 //km/hr
let numOrbitsCompleted = 0
function findCircumference(radius){
  let Circumference = Math.ceil(2*(Math.PI*radius))
  return Circumference;
} console.log(findCircumference(radius))

// Code your missionDuration function here:
function missionDuration(numOrbitsCompleted, orbitRadius, orbitalSpeed){
let time = 0
let singleOrbit = findCircumference(orbitRadius)
for (i=0; i<numOrbitsCompleted;i++)
time += singleOrbit/orbitalSpeed
time = Math.round(time*100)/100
return time
}
console.log(missionDuration(5,radius,orbitalSpeed));
// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 