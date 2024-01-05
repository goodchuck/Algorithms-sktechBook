var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
124
25
194`

let real = input.trim().split("\n");

function solution(real) {
    let [T, ...sec] = real;
    let returns = [];
    let Q = 25;
    let D = 10;
    let N = 5;
    let P = 1;
    let a = [Q, D, N, P];
    [...sec].map(Number).forEach((row) => {
        let rR = [];
        a.forEach((b) => {
            // console.log(row)
            let q = Math.floor(row / b);
            let c = row % b;
            // console.log({ q, c });
            row = c;
            rR.push(q);
        })
        returns.push(rR.join(" "))
    })
    console.log(returns.join('\n'))
}
solution(real);