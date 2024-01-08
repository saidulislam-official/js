/*
    Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(numArray, size){
    var sum = 0;
    for (var i = 0; i < size; i++){
        sum += numArray[i];
    }
    var avg = sum / size;
    return avg;
}

var numArray = [1, 2, 3, 4, 5];
var size = numArray.length;
var totalAverage = make_avg(numArray, size);
console.log(totalAverage);
