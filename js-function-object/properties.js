var shoppingCart = {
    books : 3,
    sunglasses : 2,
    shoes : 1,
    mouse : 2,
    pen : 5
}
/* Find out Properties name and Values */

var propertiesName = Object.keys(shoppingCart);
// console.log(propertiesName);
var propertiesValue = Object.values(shoppingCart);
// console.log(propertiesValue);


/* Find out Properties values using 3 system process */

var penCountProcess1 = shoppingCart.pen;
// console.log(penCount);
var penCountProcess2 = shoppingCart['pen'];
// console.log(penCountProcess2);

var process3 = 'pen';
var penCountProcess3 = shoppingCart[process3];
// console.log(penCountProcess3);

/* 
Update or set a new value to a property
*/
console.log(shoppingCart);

shoppingCart.pen = 10;
// console.log(shoppingCart);

shoppingCart['pen'] = 15;
// console.log(shoppingCart);

var newPenCount = 'pen';
shoppingCart[newPenCount] = 20;
// console.log(shoppingCart);
