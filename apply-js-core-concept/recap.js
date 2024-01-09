
// 1. Variable
var myName = 'Khan';

// math operation : +, -, *, /, %
// shorthand math operation : +=, -=, *=, /=, %=

// 2. Array
var friends = ['Khan', 'Shuvo', 'Rahim', 'Karim'];

var thirdFriend = friends[2];
friends[3] = 'Jodu';

// 3. Conditionals 
//  basic conditionals : >, <, ==, !=, <=, >= , ===, !==

if (friends.length < 2){
    console.log('You have very few friends.');
}
else{
    console.log('You have a lot of friends.');
}

// 4. Loop
// while, for

var number = 0;
while (number <= 10) {
    console.log(number);
    number++;
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

// 5. Function
function isMoonUp(time){
    if (time >= 19 && time <= 5){
        return true;
    }
    return false;
}

// 6. Object

var book = {
    title: 'Start with why',
    autor : 'Simon Sinek',
    price : 200,
    pages : 246,
    publisher : 'penguin'
};
    

