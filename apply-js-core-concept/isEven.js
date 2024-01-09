
/*
function isEven(n) {
   return n % 2 === 0;
 }

console.log(isEven(8));
*/

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumber = isEven(1642);
console.log(myNumber);

const yourNumber = isEven(1643);
console.log(yourNumber);