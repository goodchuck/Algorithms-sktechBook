// 가장 긴 바이토닉 부분 수열
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
1 5 2 1 4 3 4 5 2 1`

let real = input.trim().split("\n");
let arrs = [];
let arrsLow = [];

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

function testF2(N, rest) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;
    let newRest = rest.reverse();
    for (let i = 0; i < N; i++) {
        // let reArr = [];
        if (i === 0) {
            arrsLow[i] = 1
        }
        else {
            arrsLow[i] = 1;

            let sliced = newRest.slice(0, i);
            // console.log({ i, sliced, newRest });
            let filtered = [];
            for (let j = 0; j < sliced.length; j++) {
                let r = sliced[j];
                // console.log(rest[i], r, arrsLow);
                if (rest[i] > r) {
                    filtered.push(arrsLow[j]);
                }
            }
            // console.log({ filtered })
            if (filtered.length > 0) {
                arrsLow[i] = Math.max(...filtered) + 1
            }

        }
        // arrs.push(reArr);
    }
}

function solution(real) {
    let [T, sec] = real;

    let rest = sec.split(" ").map(Number);
    if (Number(T) === 1) {
        console.log(sec[0]);
        return;
    }
    testF(Number(T), rest)
    testF2(Number(T), rest)

    let reArrL = arrsLow.reverse();

    const result = arrs.map((value, index) => value + reArrL[index] - 1);
    // console.log(arrs)
    // console.log(arrsLow)
    // console.log(result);
    console.log(Math.max(...result))
}
solution(real);