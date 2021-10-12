// function doctorize(firstName){
//     return `Dr. ${firstname}`;
// }

//# Anon Function
// function (firstName){
//     return `Dr. ${firstname}`;
// }

//# Function Expression
// const doctorize = function(firstName){
//     return `Dr. ${firstName}`;
// }

//# Arrow Function
// const inchToCM = inches => inches * 2.54;

// const add = (a, b = 3) => a + b;

//# Returning an Object

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

// const makeABaby = (first, last) => ({name: `${first} ${last}`,age: 0});

//# IIFE
//# Immediately Invoked Function Expression

// (function() {
//     console.log('Running the Anon function')
//     return 'You are cool';
// })();

//# Methods!

// const colin = {
//     name: 'Colin Smith',
//# Method
    // sayHi: function(){
    //     console.log('Hey Colin');
    //     return 'Hey Colin';
    // },
//# Short hand Method
    // yellHi(){
    //     console.log('HEY COLINNNN');
    // },
//# Arrow function
//     whisperHi: () => {
//         console.log('hii colinnn im a mouse')
//     }
// }

//# Callback Functions

//# click callback

// const button = document.querySelector('.clickMe');

// function handleClick(){
//     console.log('Great Clicking!!');
// }
// button.addEventListener('click', function() {
//     console.log('Nice Job!')
// });

//# Timer Callback
// setTimeout(function() {
//     console.log('Done! Time to eat')
// }, 1000);