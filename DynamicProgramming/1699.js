// 제곱수의 합

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `0`

let real = input.trim().split("\n");
let arrs = [];

function testF(N) {
    if (N === 0) {
        arrs[0] = 0
        return 0;
    }
    if (N === 1) {
        arrs[N] = 1;
        return 1;
    }
    else if (N === 2) {
        arrs[N] = 2;
        return 2;
    }
    else if (N === 3) {
        arrs[N] = 3;
        return 3;
    }
    else if (N === 4) {
        arrs[N] = 1;
        return 1;
    }
    else {
        if (arrs[N]) {
            return arrs[N];
        }
        else {
            // console.log({ arrs })
            let t = [];
            for (let i = 1; i <= Math.sqrt(N); i++) {
                if (i * i <= N) {
                    t.push(testF(N - (i * i)));
                }
            }
            // console.log({ t });
            arrs[N] = Math.min(...t) + 1
            return arrs[N]
        }

    }
}

function solution(real) {
    let [T, ...rest] = real;

    console.log(testF(Number(T)));
    // console.log(arrs)
}
solution(real);
