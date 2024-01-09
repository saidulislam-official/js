/*
function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        console.log("Leap Year", year);
    }
    else{
        console.log("Not a Leap Year", year);
    }
}
isLeapYear(2004);
*/

/*
function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
*/

function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    return false;  
}

const isMyYear = isLeapYear(2004);
console.log("my year is :",isMyYear);

