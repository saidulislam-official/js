/*
    student is Object name
    id, name, marks, phone, isPassed are Properties or Keys
    301, 'Sakib', 75, 01712345678, true are Values

*/
var student = {
    id : 301,
    name : 'Sakib',
    marks : 75,
    phone : 8801712345678,
    isPassed : true,
}

var mobile = {
    color : 'black',
    price : 19000,
    screenSize : 5,
    storage : '16GB',
    isAvailable : true,
}

var computer = {
    brand : 'HP',
    color : 'black',
    processor : 'i5',
    price : 19000,
    screenSize : 5,
    storage : '16GB',
    
}
// console.log(computer);
console.log(computer)
computer.brand = 'Dell';
// console.log(computer.brand);
// console.log(computer['brand']);
console.log(computer);