// 연속합
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
-5`

let real = input.trim().split("\n");
let arrs = [];
let Vs = [];
function testF(N, rest) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;

    for (let i = 0; i < N; i++) {
        // let reArr = [];
        if (i === 0) {
            arrs[i] = rest[0];
        }
        else {
            let target = rest[i];
            let sum = arrs[i - 1] + target;
            if (target === sum) {
                arrs[i] = sum;
            }
            if (sum === Math.max(target, sum)) {
                arrs[i] = sum;
            } else {
                arrs[i] = target;
            }
        }
        // arrs.push(reArr);
    }
}

function solution(real) {
    let [T, sec] = real;

    let rest = sec.split(" ").map(Number);
    testF(Number(T), rest)
    console.log(arrs);
    console.log(Math.max(...arrs));

}
solution(real);