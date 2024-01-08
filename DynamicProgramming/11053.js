// 가장 긴 증가하는 부분 수열
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
10 20 10 30 20 50`

let real = input.trim().split("\n");
let arrs = [];

function testF(N, rest) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;

    for (let i = 0; i < N; i++) {
        // let reArr = [];
        if (i === 0) {
            arrs[i] = 1
        }
        else {
            arrs[i] = 1;
            let sliced = rest.slice(0, i);
            let filtered = [];
            for (let j = 0; j < sliced.length; j++) {
                let r = sliced[j];
                // console.log(rest[i], r, rest.slice(0, i));
                if (rest[i] > r) {
                    filtered.push(arrs[j]);
                }
            }
            if (filtered.length > 0) {
                arrs[i] = Math.max(...filtered) + 1
            }

        }
        // arrs.push(reArr);
    }
}

function solution(real) {
    let [T, sec] = real;

    let rest = sec.split(" ").map(Number);
    testF(Number(T), rest)

    // console.log(arrs)
    console.log(Math.max(...arrs))
}
solution(real);