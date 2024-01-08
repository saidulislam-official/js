function getAverage(assignment1, assignment2, assignment3) {
  var average = (assignment1 + assignment2 + assignment3) / 3;
  return average;
}

const assignment1Marks = 80;
const assignment2Marks = 70;
const assignment3Marks = 90;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(myAverage);