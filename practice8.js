/*
    Practice Problem 
    ---------**** Practice problem : 8 ****--------

    you are given a triangle with the sides 9,8,9. Write a program to check whether a triangle is Isoscles or not using if else statement.

        Isosceles => two sides are equal
 */

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 && side1 == side3) {
    console.log("This is an Equilateral Triangle");
}
else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("This is an Isosceles Triangle");
}
else {
    console.log("This is a Scalene Triangle");
}


