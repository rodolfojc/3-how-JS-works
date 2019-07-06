///////////////////////////////////////
// Lecture: Hoisting

calcAge(1987);

//FUNCTIONS
function calcAge(year) {
    console.log(2019 - year);
}

//retirement(1988);

var retirement = function(year){
    console.log(65 - (2019-year));
}

retirement(1988);

// VARIABLES

console.log(age);
var age = 32;
console.log(age);

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









