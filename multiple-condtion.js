// multiple condition
var isGraduated = true;
var salary = 50000;
var car = 1;

// if (isGraduated == true && salary > 50000) {
//     console.log("You are eligible for the job");
// }
// else {
//     console.log("You are not eligible for the job");
// }

// if (isGraduated == true ||( salary > 50000 || car > 1)) {
//     console.log("You are eligible for the job");
// }
// else {
//     console.log("You are not eligible for the job");
// }

if (isGraduated == true &&  salary <= 50000 && car >= 1) {
    console.log("You are eligible for the job");
}
else {
    console.log("You are not eligible for the job");
}


