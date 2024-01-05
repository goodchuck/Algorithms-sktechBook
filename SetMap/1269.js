var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 5
1 2 4
2 3 4 5 6`
let real = input.trim().split("\n");


async function solution(real) {
    let [first, A, B] = real;
    let [al, bl] = first.split(" ").map(Number);
    A = A.split(" ");
    B = B.split(" ");
    let SA = new Set(A);
    // 교집합
    let count = 0;
    for (let b of B) {
        if (SA.has(b)) {
            count++;
        }
    }
    console.log(new Set([...A, ...B]).size - count);

}
solution(real);