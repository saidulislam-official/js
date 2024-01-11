// 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040

// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24


function multiplicationOfNumbers(number){
    let multiplication = 1;
    for (let i = 1; i <= number; i++) {
        multiplication = multiplication * i;
        // console.log(i , multiplication);
    }
    return multiplication;
}
// multiplicationOfNumbers(4);

const multiplication = multiplicationOfNumbers(5);
console.log(multiplication);