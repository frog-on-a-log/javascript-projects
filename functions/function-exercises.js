// Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size){
    let line = "";
    for (let i = 0; i<size; i++){
    line += "#";
    }
    return line;
}
// console.log(makeLine(5));

function makeSqaure(width){
    let square = ""
    for (i=0; i<width; i++){
    square += (`${makeLine(width)}"\n`)
    }
   return square;
} 
console.log(makeSqaure(4));

function makeRectangle(size, height){
    let rectangle = "";
    for (let i = 0;i<height;i++){
        rectangle += (makeLine(size)+"\n")
    }
    return rectangle;
}
console.log(makeRectangle(8, 4));

function makeDownwardStairs(height){
    let stairs = ""
    for (i=0;i<height+1;i++){
        stairs +="\n"+makeLine(i)
    }
    return stairs
}
console.log(makeDownwardStairs(7));

function makeSpaces(length){
    let spaces = ""
    for (i=0;i<length+1;i++){
        spaces+= " "
    }
    return spaces
}
function makeSpaceLine(numSpaces, numChars){
    // for (i=0;i <numSpaces;i++)
    let spaceLine = makeSpaces(numSpaces)+makeLine(numChars)+makeSpaces(numSpaces)
    return spaceLine
}
console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height){
    let triangle =""
    for (i=1;i<height;i++){
        triangle += (makeSpaceLine(height-i-1, 2*i+1)+ "\n")
    }
    return triangle.slice(0,-1);
}
console.log(makeIsoscelesTriangle(9));