// 1
// console.log(hello);                                   
// var hello = 'world';                                 

// AFTER HOISTING BY THE INTERPRETER
var hello; // the declaration gets hoisted to the top of the scope by itself
console.log(hello); // logs undefined
hello = 'world'; // the assignment stays where it was


// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// AFTER HOISTING BY THE INTERPRETER
var needle; // needle is a declaration, it's global and gets hoisted
function test(){ // the test() function also gets hoisted to the top
var needle; // needle is declared within test() and gets hoisted to the top of its scope in the function
needle = 'magnet'; // we assign a value to our function scoped needle
console.log(needle); // when test() is called we log it as 'magnet'
}
needle = 'haystack' // here we assign a value to the global needle
test(); // test is called, the console.log within it runs and logs magnet


// 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER
var brendan; // brendan is a declaration, it's global, and gets hoisted
function print(){ // the print() function also gets hoisted to the top
brendan = 'only okay' // we assign a value to our function scoped brendan
console.log(brendan); // when print() is called we log it as 'only okay'
}
brendan = 'super cool' // here we assign a value to the global brendan
console.log(brendan); // we log the global brendan, print() is never called 


// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// // AFTER HOISTING BY THE INTERPRETER
var food; // food is a declaration, it's global, and gets hoisted
function eat(){ // the eat() function also gets hoisted to the top
var food; // here food is declared within eat() and gets hoisted to the top of its scope
food = 'half-chicken'; // we assign a value to our function scoped food
console.log(food); // we log it as half-chicken
food = 'gone'; // we assign another value to our function scoped food
}
food = 'chicken'; // we assign a value to the global food
console.log(food); // we log the global food as chicken
eat(); // we invoke the eat() function which logs the scoped food that is assigned before the console.log, logs half-chicken


// 5
// mean();
// console.log(food2);
// var mean = function() {
//     food2 = "chicken";
//     console.log(food2);
//     var food2 = "fish";
//     console.log(food2);
// }
// console.log(food2);

// AFTER HOISTING BY THE INTERPRETER
// var mean; // mean is a declaration, gets hoisted to the top
// mean(); // mean is not a function. The variable mean got hoisted to the top and we tried to invoke it before we assigned a function to it
// console.log(food2); // food is undefined outside of the scope of the function
// mean = function(){ // mean is assigned the value of the function
// var food2; // food is declared within function() and gets hoisted to the top
// food2 = 'chicken' // here we assign a value to our function scoped food
// console.log(food2); // we log food as chicken
// food2 = 'fish'; // here we assign another value to our function scoped food 
// console.log(food2); // we log food as fish
// }
// console.log(food2) // food is undefined outside of the scope of the function
// // Nothing runs due to the mean variable being hoisted to the top and the mean function being invoked before it was assigned



// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// AFTER HOISTING BY THE INTERPRETER
var genre; // genre is a declaration and gets hoisted to the top
function rewind(){ // the rewind() function also gets hoisted to the top
var genre; // here genre is declared within rewind() and gets hoisted to the top of its scope
genre = "rock" // we assign a value to our function scoped genre
console.log(genre); // we log the function scoped value of genre, which is "rock"
genre = "r&b"; // we assign another value to our function scoped genre
console.log(genre); // we log the new function scoped value of genre, which is "r&b"
}
console.log(genre) // logs undefined as genre has not been assigned a value
genre = "disco" // we assign a value to the global genre
rewind(); // we invoke the rewind() function and log "rock" and "r&b"
console.log(genre); // we log the global genre "disco"


// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// AFTER HOISTING BY THE INTERPRETER
function learn(){ // the learn() function gets hoisted to the top
var dojo; // here dojo is declared within learn() and gets hoisted to the top of its scope
dojo = "seattle"; // here we assign a value to our function scoped dojo
console.log(dojo); // we log the function scoped value of genre, which is "seattle"
dojo = "burbank"; // here we assign another value our function scoped dojo
console.log(dojo); // we log the new function scoped value of genre, which is "burbank"
}
dojo = "san jose"; // we assign a value to our global variable dojo
console.log(dojo); // we log the global dojo "san jose"
learn(); // invokes the learn() function and logs "seattle" and "burbank"
console.log(dojo); // we log the global dojo "san jose" again


// 8 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students){ // the makeDojo(name, students) function gets hoisted to the top
// 