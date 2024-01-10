/*
function getSumOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        console.log(index, element);
    }
}

*/

/*
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        // console.log(i , element, sum);
        // console.log(sum);
    }
    console.log(sum);
    return sum;
}

*/

/*

function getOddNumberOfAnArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if(element % 2 !== 0){
            console.log(index, element);
            // console.log(element, ': is odd number');
        }
        else{
            // console.log(element, ': is even number');
        }
    }
}

*/

function getOddNumberOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if(element % 2 !== 0){
           oddNumbers.push(element);
        }
    }
    return oddNumbers;
}



const myNumbers = [12, 67, 68, 34, 95, 11, 91, 78];

const oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);

// getOddNumberOfAnArray(myNumbers);

// getSumOfAnArray(myNumbers);

