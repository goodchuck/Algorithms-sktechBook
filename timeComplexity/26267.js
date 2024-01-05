var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7`
let real = input.trim().split(" ");

// function testCode(n) {
//     let count = 0;
//     for (let i = 1; i <= n - 2; i++) {
//         console.group()
//         console.log(`i : ${i}번째`,)
//         for (let j = i + 1; j <= n - 1; j++) {
//             console.log(`j : ${j}번째`)
//             for (let k = j + 1; k <= n; k++) {
//                 console.log(`k: ${k}번째`)
//                 count += 1
//             }
//         }
//         console.groupEnd();
//     }
//     console.log(count);
// }

function testCode2(n) {
    let sum = BigInt(0);
    for (let i = 1; i <= n - 2; i++) {
        let t = BigInt((i * (i + 1)) / 2)
        sum += t;
    }
    console.log(sum.toString());
}

function solution(real) {
    let [n, ...rest] = real.map(Number);
    testCode2(n);

    // console.log((bN ** BigInt(3)).toString());
    console.log(3);
}
solution(real);