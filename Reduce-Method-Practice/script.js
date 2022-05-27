// * The goal is to output the total pice of all the items with a reduce() method.

const items = [
    {name: "Rice", price: 5},
    {name: "Book", price: 20},
    {name: "Chicken", price: 10},
    {name: "Monitor", price: 100},
];

// * -------------------------- USING reduce() method ------------------------- /

// ? reduce() method thakes in two parameters. The first is a function and the second is the starting point which in this case is 0.

// ? the funtion takes in a couple different parameters. The first parameter it takes is the accumulator (the thing that we are acumulating, is what we are reducing our value down to. In this case the total). The second parameter in the function is each individual item.

const totalPrice = items.reduce((total, item) => {
    // console.log(`Total: ${total} + ${item.price}`);
    return total + item.price; // in each iteration what is returned gets accumulated in the accumulator in the function. In its first parameter.
}, 0);

// ! *  -------------------------- Using a forEach loop -------------------------- */
// let totalPrice = 0;
// items.forEach((item) => {
//     totalPrice += item.price;
// });

// console.log(totalPrice);

//* -------------------------------------------------------------------------- */
//*                         SECOND reduce() METHOD EXAMPLE                     */
//* -------------------------------------------------------------------------- */

// ? HIn this example we want to group the people by age.

//LIKE:
// {
// 42:['Sally','3111'],
// 26:['Kyle']
// }

const people = [
    {name: "Kyle", age: 26},
    {name: "John", age: 31},
    {name: "Sally", age: 42},
    {name: "Jill", age: 42},
];

const result = people.reduce((groupedPeople, person) => {
    const age = person.age;
    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {});

// console.log(result);

//* -------------------------------------------------------------------------- */
//*                         THIRD reduce() METHOD EXAMPLE                      */
//* -------------------------------------------------------------------------- */

// ? reduce() method takes a total of four parameters. most of the time the first two are the ones we will use the most.

// ? The third parameter is index. It's value is simply the index for each iteration.

// ? The fourth parameter is array. And it's value is the same array7 that you're actually looping or iterating over.

// ! NOTE: if no default parameter is set to the second argument in the reduce method, the first value in the array is gonne act as the default starting value. THIS IS NOT RECOMMENDED BECAUSE IF THE ARRAY IS STARTING OUT EMPTY IT"LL ERROR OUT BECAUSE THE STARTING VALUE WOULD BE UNDEFINED

const numbers = [13, 2, 5];

const sum = numbers.reduce((total, number, index, array) => {
    console.log(index);
    console.log(array);
    return total + number;
}, 0);

console.log(sum);
