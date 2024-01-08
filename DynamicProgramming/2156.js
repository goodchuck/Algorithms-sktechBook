// 포도주시식
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
6
10
13
9
8
1`

let real = input.trim().split("\n");
let arrs = [0];

function testF(N, rest) {
    for (let i = 3; i <= N; i++) {
        arrs.push([]);
        arrs[i] = arrs[i - 1];
        if (arrs[i] < arrs[i - 2] + rest[i - 1]) {
            arrs[i] = arrs[i - 2] + rest[i - 1];
        }
        if (arrs[i] < arrs[i - 3] + rest[i - 1] + rest[i - 2]) {
            arrs[i] = arrs[i - 3] + rest[i - 1] + rest[i - 2]
        }
    }
}

function solution(real) {
    let [T, ...rest] = real;
    rest = rest.map(Number);
    arrs.push(rest[0]);
    arrs.push(rest[0] + rest[1])
    testF(Number(T), rest)
    // console.log(arrs)
    console.log(arrs[T]);
}
solution(real);