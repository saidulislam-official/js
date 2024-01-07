/*
    Practice Problem on Array
    ---------**** Practice problem : 1 ****--------

    you are given array :  var fruits = ["Banana", "Orange", "Kiwi", "Mango"];

    a. Find the index of "Kiwi" and replace 'Kiwi' with 'Apple'
    b. Remove 'Orange' and add 'Watermelon'

*/
var fruits = ["Banana", "Orange", "Kiwi", "Mango"];
console.log(fruits);
var index1 = fruits.indexOf("Kiwi");
console.log(index1);
fruits[index1] = "Apple";
console.log(fruits);
var index2 = fruits.indexOf("Orange");
console.log(index2);
fruits.splice(index2, 1, "Watermelon");
console.log(fruits);