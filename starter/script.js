///////////////////////////////////////
// Lecture: Hoisting
/*
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
*/

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

//console.log(this);

/*
calcAge(1987);

function calcAge(year){
    console.log(2019 - year);
    console.log(this);
}
*/

var rodolfo = {
    name: 'Rodolfo',
    yearOfBirth: 1987,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        
        /*
        function inner(){
            console.log(this);
        }
        inner();
        */
    }
}

rodolfo.calculateAge();

var niel = {
    name: 'Niel',
    yearOfBirth: 1983,
    
};

niel.calculateAge = rodolfo.calculateAge;
niel.calculateAge();



