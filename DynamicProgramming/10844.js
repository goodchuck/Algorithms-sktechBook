var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2`

let real = input.trim().split("\n");
let arrs = [[0]];

function testF(N, mod) {
    for (let i = 1; i < 10; i++) arrs[0][i] = 1;
    for (let i = 1; i < N; i++) {
        let reArr = [];
        for (let j = 0; j <= 9; j++) {

            let sum = 0;
            if (j - 1 >= 0) sum += arrs[i - 1][j - 1];
            if (j + 1 <= 9) sum += arrs[i - 1][j + 1];
            sum %= mod;
            console.log({ j, sum })            // console.log(sum)
            reArr.push(sum);
        }
        arrs.push(reArr);
    }
}

function solution(real) {
    let [T, ...rest] = real;
    let mod = (1000000000)
    testF(Number(T), mod)
    // console.log(arrs)
    console.log((arrs[T - 1].reduce((acc, cv) => acc + cv, 0)) % mod)
}
solution(real);