// 병든 나이트
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2 7`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);


async function solution() {
    // N 세로
    // M 가로


    if (N === 1) {
        console.log(1);
    }

    else if (N === 2) {
        console.log(Math.min(4, Math.floor((M + 1) / 2)));
    }
    else if (N >= 3) {
        if (M >= 7) {
            console.log(M - 2)
        }
        else {
            console.log(Math.min(4, M));
        }

    }
}

solution();
