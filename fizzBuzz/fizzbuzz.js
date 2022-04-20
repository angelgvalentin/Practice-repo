// *    Problem Statement
// *    You need to write a program that prints the numbers from 1 to   100 such that:

// *    If the number is a multiple of 3, you need to print "Fizz" instead of that number.
// *    If the number is a multiple of 5, you need to print "Buzz" instead of that number.
// *    If the number is a multiple of both 3 and 5, you need to print "FizzBuzz" instead of that number.

// ? First write program that print 1 to 100

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
