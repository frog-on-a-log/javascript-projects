// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
let nameOfSpaceShuttle = "Determination"
let shuttleSpeedMPH = 17500
let distanceToMarsKM = 225000000;
let distanceToMoonKM = 384400;
const milesPerKilometer = 0.621;

let milesToMars = distanceToMarsKM * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24;
console.log (nameOfSpaceShuttle, 'will take', daysToMars , 'days to reach mars');
let milesToMoon = distanceToMoonKM * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;
console.log (nameOfSpaceShuttle, 'will take', daysToMoon, 'days to reach the moon' );