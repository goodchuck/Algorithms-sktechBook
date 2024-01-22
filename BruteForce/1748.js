// 수 이어쓰기 1
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `120`

let real = input.trim().split("\n");

function solution(real) {
    let [N, ...rest] = real;
    let strLen = N.length;
    N = Number(N);
    let count = 0;

    // 1-9
    let c = 1 * (10 ** (strLen - 1));
    for (let j = 0; j < strLen - 1; j++) {
        count += 9 * (10 ** j) * (j + 1);
        // console.log(j, count)
    }
    count += (N - c + 1) * strLen

    console.log(count)
}
solution(real);