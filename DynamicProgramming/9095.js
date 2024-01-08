// 1,2,3 더하기

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
4
7
10`

let real = input.trim().split("\n");
let arrs = [];

function testF(N) {
    if (N === 0) {
        arrs[0] = 1;
        return 1;
    }
    else if (N === 1) {
        arrs[N - 1] = 1;
        return 1;
    }
    else if (N === 2) {
        arrs[N - 1] = 2;
        return 2;
    }
    else if (N === 3) {
        arrs[N - 1] = 4;
        return 4;
    }
    else {
        if (arrs[N - 1]) {
            return arrs[N - 1];
        }
        else {
            arrs[N - 1] = testF(N - 1) + (testF(N - 2) % (10007)) + (testF(N - 3))
            return arrs[N - 1]
        }

    }
}

function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    for (let row of rest) {
        row = Number(row);
        returns.push(testF(row))
    }
    console.log(returns.join("\n"));
}
solution(real);