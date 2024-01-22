// 카잉 달력
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
10 12 3 9
10 12 7 2
13 11 5 6`

let real = input.trim().split("\n");

function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    for (let row of rest) {
        let [M, N, x, y] = row.split(" ").map(Number);
        // console.log({ M, N, x, y });
        let isFind = false;
        for (let i = x; i <= 40000 * 40000; i += M) {
            if ((i - 1) % N === y - 1) {
                returns.push(i)
                isFind = true;
                break;
            }
        }
        if (!isFind) {
            returns.push(-1);
        }

    }
    console.log(returns.join("\n"))

}
solution(real);