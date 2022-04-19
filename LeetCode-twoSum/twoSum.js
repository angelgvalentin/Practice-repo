// // @param {number[]} nums
// // @param {number} target
// // @return {number[]}

// // var twoSum = function (nums, target) {
// //     const previousValues = {};
// //     for (let i = 0; i < nums.length; i++) {
// //         const currentNumber = nums[i];
// //         const neededValue = target - currentNumber;
// //         const index2 = previousValues[neededValue];
// //         if (index2 != null) {
// //             return [index2.index];
// //         } else {
// //             previousValues[currentNumber] = i;
// //         }
// //     }
// // };

// // var twoSum = function (nums) {
// //     return [nums[0], nums[1]];
// // };
// let array = [2, 1, 5, 3, 4, 7, 8, 44, 3565, 22];

// const twoSum = (array, target) => {
//     // ? First we iterate over the number in the array
//     for (let i = 0; i < array.length; i++) {
//         // ? In each iteration of the numbers in the array, we check that the current index matches the difference of the target minus the value at the current index  of each iteration.
//         for (let j = i + 1; j < array.length; j++) {
//             // i = 1   j = 2    t = 4    arr[i] = 1
//             if (array[j] == target - array[i]) {
//                 return { i, j };
//             }
//         }
//     }
//     // In case there is no solution, we'll just return null
//     return null;
// };

// console.log(twoSum(array, 7));

// */* -------------------------------------------------------------------------- */
// */*                       USING A FOR LOOP IN A FOR LOOP                       */
// */* -------------------------------------------------------------------------- */

// ? The first loop iterates through each number in the array.
// ? At each index the second loop then compares with the rest of the numbers in the array to see if that index plus the other elements equal the target. Once that happens we return an array with the current index and the index that when summed with the current index matches the target.

// let array = [2, 1, 5, 3, 4, 6];

// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//              if (target === nums[j] + nums[i]) {
//                 return [i, j];
//             }
//         }
//     }
// };

// */* -------------------------------------------------------------------------- */
// */*     USING A HASHMAP, THIS WAY IS FASTER THAN THE FOR LOOP IN A FOR LOOP    */
// */* -------------------------------------------------------------------------- */

// ? in this one we use a for loop to iterate though the array and add the index and their values as key/value pairs to an empty array called indeces. Then we declare a variable called complement which will store the value of target - the index of each iteration. if complement is present in the indeces Object a

let array = [2, 1, 5, 3, 4, 6];

const twoSum = (nums, target) => {
    const indices = {};
    for (let i = 0; i < nums.length; i++) {
        indices[nums[i]] = i;
        console.log(indices);
        // ? in this loop we are adding all indices and values as key/value pairs in the indices object. This can then be checked out in the next loop
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // ? "complement" is what we now to need to check if it is present in our indices object.

        if (indices[complement] !== undefined && i !== indices[complement]) {
            return [i, indices[complement]];
            // ? if complement exist in our indices object return an array with the current index (i) and the value of complement in the indices object (indices[complement])
        }
    }
};

console.log(twoSum(array, 9));
