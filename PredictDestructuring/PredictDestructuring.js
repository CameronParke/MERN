// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // PREDICTED OUTPUT: Tesla
console.log(otherRandomCar) // PREDICTED OUTPUT: Mercedes

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; 
//Predict the output
console.log(name); // PREDICTED OUTPUT: SyntaxError name is not defined -> was actually ReferenceError name is not defined
console.log(otherName); // PREDICTED OUTPUT: doesn't run because of error on line above, but would be Elon if the above line was removed or modified to get rid of the ReferenceError.

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // PREDICTED OUTPUT: 12345
console.log(hashedPassword); // PREDICTED OUTPUT: undefined (hashedPassword is a Value to the Key password, but no value is ever assigned to hashedPassword)


// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // PREDICTED OUTPUT: false (first is numbers[1], which = 2, second is numbers[3], which = 5)
console.log(first == third); // PREDICTED OUTPUT: true (first is numbers[1], which = 2, third is numbers[8], which = 2)


// // Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // PREDICTED OUTPUT: value
console.log(secondKey); // PREDICTED OUTPUT: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // PREDICTED OUTPUT: 1
console.log(willThisWork); // PREDICTED OUTPUT: 5

