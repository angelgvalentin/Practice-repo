// function countBy(x, n) {
//     let z = [];
//     for (i = 1; z.length < n; i++) {
//         if (i % x == 0) {
//             z.push(i);
//         }
//     }
//     console.log(z);
// }

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    console.log(z);
}

countBy(1, 10);
countBy(2, 5);
countBy(3, 12);
countBy(2, 4);
