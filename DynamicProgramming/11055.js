// 가장 긴 증가하는 부분 수열
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
1 100 2 50 60 3 5 6 7 8`

let real = input.trim().split("\n");
let arrs = [];

function testF(N, rest) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;

    for (let i = 0; i < N; i++) {
        // let reArr = [];
        if (i === 0) {
            arrs[i] = rest[0]
        }
        else {
            arrs[i] = rest[i];
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
                arrs[i] = Math.max(...filtered) + rest[i]
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