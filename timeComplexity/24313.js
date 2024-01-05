var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7 7
8
1`
let real = input.trim().split("\n");

function testFunction(a1, a0, c, n0) {
    // console.log(a1, a0, c, n0)
    if ((a1 * n0 + a0) > c * n0) {
        console.log(0)
    } else {
        let message = 1;
        for (let i = n0; i <= 100 - n0; i++) {
            if ((a1 * i + a0) > c * i) {
                message = 0;
                break;
            }
        }
        console.log(message);
    }
}

function solution(real) {
    let [n, ...rest] = real;
    let [a1, a0] = n.split(" ").map(Number);
    let [c, n0] = rest;
    testFunction(a1, a0, Number(c), Number(n0));

}
solution(real);