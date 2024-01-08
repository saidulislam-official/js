// continue statement in loops

var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 12, 32, 45, 67, 1, 9];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 40) {
        continue;
    }
    console.log(number);
    
}