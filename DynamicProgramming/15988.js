// 1,2,3 더하기 3

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
0
7
11
5000
10000
100000
`
let mod = 1000000009
let real = input.trim().split("\n");
let arrs = [0, 1, 2, 4];

function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    rest = rest.map(Number);
    let maxes = Math.max(...rest)
    for (let j = 4; j <= maxes; j++) {
        arrs[j] = (arrs[j - 1] + arrs[j - 2] + arrs[j - 3]) % mod;
    }
    for (let row of rest) {
        row = Number(row);
        if (row === 0) {
            returns.push(0)
        } else {
            returns.push(arrs[row])
        }

    }
    // console.log(arrs)
    console.log(returns.join("\n"));
}
solution(real);