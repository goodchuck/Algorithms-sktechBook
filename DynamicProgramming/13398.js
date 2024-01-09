// 연속합 2
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
10 -4 3 1 5 6 -35 12 21 -1`

let real = input.trim().split("\n");
let arrs = [];
let arrs_reverse = [];
let Vs = [];
function testF(N, rest, arrays) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;

    for (let i = 0; i < N; i++) {
        // let reArr = [];
        if (i === 0) {
            arrays[i] = rest[0];
        }
        else {
            let target = rest[i];
            let sum = arrays[i - 1] + target;
            // console.log({ target, sum }, Math.max(target, sum));
            if (target === sum) {
                arrays[i] = sum;
            }
            if (sum === Math.max(target, sum)) {
                arrays[i] = sum;
            } else {
                arrays[i] = target;
            }
        }
        // arrs.push(reArr);
    }
}


function solution(real) {
    let [T, sec] = real;
    let rest = sec.split(" ").map(Number);
    if (Number(T) === 1) {
        console.log(rest[0])
        return;
    }
    let restReverse = [...rest].reverse();
    testF(Number(T), rest, arrs)
    testF(Number(T), restReverse, arrs_reverse)
    arrs_reverse.reverse();
    // console.log(arrs);
    // console.log(arrs_reverse);
    let maxes = -Infinity;
    for (let i = 0; i < arrs.length; i++) {
        let t1;
        if (i === 0) {
            t1 = arrs_reverse[i + 1];
        }
        else if (i === arrs.length - 1) {
            t1 = arrs[i - 1];
        }
        else {
            t1 = arrs[i - 1] + arrs_reverse[i + 1]
        }

        // console.log({ t1 })
        maxes = Math.max(t1, t1 + rest[i], rest[i], maxes);
    }
    console.log(maxes);

}
solution(real);