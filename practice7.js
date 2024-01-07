/*
    Practice Problem 
    ---------**** Practice problem : 7 ****--------

    you are given three numbers 13,79 and 45. write a program that will print the largest number using if else statement.
*/

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is the largest number");
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is the largest number");
}
else {
    console.log(num3 + " is the largest number");
}

