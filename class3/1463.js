var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `642`

let real = input.trim().split("\n");
let arrs = [];

function testF(N) {
    if (N === 1) {
        arrs[N - 1] = 0;
        return 0;
    }
    else if (N === 2) {
        arrs[N - 1] = 1;
        return 1;
    }
    else if (N === 3) {
        arrs[N - 1] = 1;
        return 1;
    }
    // else if (N === 4) {
    //     arrs[N - 1] = 2;
    //     return 2;
    // }
    // else if (N === 5) {
    //     arrs[N - 1] = 2;
    //     return 2;
    // }
    // else if (N === 6) {
    //     arrs[N - 1] = 2;
    //     return 2;
    // }
    // else if (N === 7) {
    //     arrs[N - 1] = 3;
    //     return 3;
    // }
    // else if (N === 8) {
    //     arrs[N - 1] = 3;
    //     return 3;
    // }
    // else if (N === 9) {
    //     arrs[N - 1] = 2;
    //     return 2;
    // }
    // else if (N === 10) {
    //     arrs[N - 1] = 3;
    //     return 3;
    // }
    else {
        // let t1 = Infinity, t2 = Infinity, t3 = Infinity;
        if (N % 2 === 0 && N % 3 === 0) {
            // t4 = arrs[N / 6] ? arrs[N / 6] : testF(N / 6);
            arrs[N] = Math.min(arrs[N / 3] || testF(N / 3), arrs[N / 2] || testF(N / 2), arrs[N - 1] || testF(N - 1)) + 1
        }
        else if (N % 3 === 0) {
            // t1 = arrs[N / 3] ? arrs[N / 3] : testF(N / 3);
            arrs[N] = Math.min(arrs[N / 3] || testF(N / 3), arrs[N - 1] || testF(N - 1)) + 1
        }
        else if (N % 2 === 0) {
            // t2 = arrs[N / 2] ? arrs[N / 2] : testF(N / 2);
            arrs[N] = Math.min(arrs[N / 2] || testF(N / 2), arrs[N - 1] || testF(N - 1)) + 1
        } else {
            // t3 = arrs[N - 1] ? arrs[N - 1] : testF(N - 1);
            arrs[N] = (arrs[N - 1] || testF(N - 1)) + 1
        }
        // console.log(N, arrs[N]);
        return arrs[N];
    }
}

function solution(real) {
    let [num, sec] = real;
    num = Number(num);
    console.log(testF(num))
    // sec = sec.split(" ").map(Number);
    // let returns = [];
    // for (let row of sec) {
    //     returns.push(`row :${row}, value : ${testF(row)}`);
    // }
    // console.log(returns.join(" "));
    // console.log(arrs);
}
solution(real);