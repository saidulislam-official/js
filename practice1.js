/*
    Practice Problem 1

Harry's mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka Harry's mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
Sample Input:
1000
700
Output:
300

*/

var harryMomGivenMoney = 1000;
console.log("Harry's mom gave him money:",harryMomGivenMoney);
var totalProductPrice = 700;
console.log("Total Product Price:",totalProductPrice);

var shopkeeperWillReturn = harryMomGivenMoney - totalProductPrice;

console.log("shopkeeper will return:",shopkeeperWillReturn);


