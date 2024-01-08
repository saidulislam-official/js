
/*
function add(number1 , number2){
    var sum = number1 + number2;
    return sum;
}

var total = add(10, 20);
console.log('Total is :', total);
*/

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log("Eating singaras : ", singaras);