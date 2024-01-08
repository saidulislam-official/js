var shoopingCart = {
    shirt: 2,
    pant: 3,
    shoes: 1,
    watch: 1,
    pen: 5
};

const keys = Object.keys(shoopingCart);
// console.log(keys);
const values = Object.values(shoopingCart); 
// console.log(values);

// var keys = [ 'shirt', 'pant', 'shoes', 'watch', 'pen' ]

/*
for (var i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    // var key = keys[i];
    // var value = shoopingCart[key];
    // console.log(key, value);
}
*/

for (var propertyName in shoopingCart){
    const value = shoopingCart[propertyName];
    console.log(propertyName, value);
}