 // CodeWithMosh - Swapping Variables

// let a = 'red';
// let b = 'blue';

// let c = a; //create 3rd variable 'c' to temporarily store what is in 'a' so now 'a' becomes empty
// a = b; //now swap the variable from 'b' to 'a' so now 'b' is empty
// b = c; //now bring the temporary storage 'c' to 'b'
 
//  console.log(a);
//  console.log(b);

// CodeWithMosh - Write a function that takes two numbers and returns the maximum of the two.

// let number = maxOfTwo (2, 10);
// console.log(number);

// function maxOfTwo(a, b) {
//     if (a > b) {
//         return a
//     }
//     else if (a < b) {
//         return b
//     }
//     else if (a === b) {
//         return a
//     }
// }

// Another concise way of writing function

// function maxOfTwo(a, b) {
//     return (a > b) ? a : b
// }

// CodeWithMosh - Landscape or Portrait

// let parameter = isLandscape(1000, 800);
// console.log(parameter);

// function isLandscape(width, height) {
//     return (width > height) //don't have to explicitly write out the ternary operator because by default it states true or false.
// }

// CodeWithMosh - FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 and 5 => input
// Input is not a number => 'Not a number'

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;

//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//     if (input % 3 === 0)
//         return 'Fizz';

//     if (input % 5 === 0)
//         return 'Buzz';

//     return input;
// }

// CodeWithMosh - Demerit Points 

// Speed Limit = 70
// 5 above speed limit = 1 demerit point
// Math.floor() function always rounds down and returns the largest integer less than or equal to a given number
// More than 12 demerit points = license suspended

checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) 
        console.log('Ok');
    
    else {
        const points = (Math.floor((speed - speedLimit) / kmPerPoint));
        if (points >= 12)
            console.log('License suspended!');
        else
            console.log('points', points);
    }
}

