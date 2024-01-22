// 계단 오르기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
10
20
15
25
10
20`
let real = input.trim().split("\n");

let [N, ...rest] = real;
N = Number(N);
rest = rest.map(Number);
// let returns = [];
let maxes = -Infinity
let arrs = [];
function go(index, sum) {

    let score = rest[index];
    go(index + 1, sum);

}

function solution() {
    go(0, 0);
    // console.log(returns.join("\n"))
}
solution();