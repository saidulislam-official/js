// 3! = 1 * 2 * 3 = 6

function factorial(number){
    let result = 1;
    for (let i = 1; i <= number; i++ ) {
        result = result * i;
        // console.log(i , factorial);
    }
    return result;
}

const fact = factorial(3);

console.log(fact);
