var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
4
7
10`

let real = input.trim().split("\n");
let arrs = [];

function testF(N) {
    if (N === 0) {
        arrs[0] = 1;
        return 1;
    }
    else if (N === 1) {
        arrs[N - 1] = 1;
        return 1;
    }
    else if (N === 2) {
        arrs[N - 1] = 2;
        return 2;
    }
    else if (N === 3) {
        arrs[N - 1] = 4;
        return 4;
    }
    else {
        if (arrs[N - 1]) {
            return arrs[N - 1];
        }
        else {
            arrs[N - 1] = testF(N - 1) + (testF(N - 2) % (10007)) + (testF(N - 3))
            return arrs[N - 1]
        }

    }
}

function testFF(N) {
    let i = N - 1;
    // if (i === 0) {
    //     if (arrs[i]) {
    //         return arrs[i]
    //     }
    //     arrs.push([]);
    //     arrs[i][0] = 0;
    //     arrs[i][1] = 0;
    //     arrs[i][2] = 0;
    //     return arrs[i];
    // }
    if (N === 0) {
        return [0, 0, 0];
    }
    if (N === 1) {
        if (arrs[i]) {
            return arrs[i]
        }
        arrs[N - 1] = [1, 0, 0];
        return arrs[N - 1];
    }
    else if (N === 2) {
        if (arrs[i]) {
            return arrs[i]
        }
        arrs[N - 1] = [0, 1, 0];
        return arrs[N - 1];
    }
    else if (N === 3) {
        if (arrs[i]) {
            return arrs[i]
        }
        arrs[N - 1] = [1, 1, 1];
        return arrs[N - 1];
    }
    else {
        if (arrs[i]) {
            return arrs[i]
        }
        let testArr = [];
        // arrs.push([]);
        let sums = 0;
        for (let k = 0; k < 3; k++) {
            let ak = testFF(N - k - 1);
            testArr.push(ak[0] % (1000000009) + ak[1] % (1000000009) + ak[2] % (1000000009) - ak[k] % (1000000009))
        }
        arrs[N - 1] = testArr;
        // console.log(arrs[i]);
        return arrs[N - 1];
    }
}

function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    for (let row of rest) {
        row = Number(row);
        // console.log(testFF(row));
        returns.push(testFF(row).reduce((acc, cv) => acc + cv, 0) % (1000000009))
    }
    console.log(returns.join("\n"));
}
solution(real);