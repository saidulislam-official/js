// 3! = 3 * 2 * 1 = 6

function factorial(number){
    let result = 1;
    for (let i = number; i >= 1; i-- ) {
        result = result * i;
        // console.log(i , factorial);
    }
    return result;
}

const result = factorial(3);

console.log(result);
