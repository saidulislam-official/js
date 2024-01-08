/*
    Write a function called make_avg() which will take an three integers and return the average of those values.

*/
function make_avg(num1, num2, num3){
    var avg = (num1 + num2 + num3) / 3;
    return avg;
}
var totalAverage = make_avg(60, 90, 10);
console.log(totalAverage);