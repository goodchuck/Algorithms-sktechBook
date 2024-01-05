var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 2`
let real = input.trim().split(" ");

function fac(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}

function solution(real) {
    let [N, K] = real.map(Number);
    let sol = null;
    let nF = fac(N);
    let nmkF = fac(N - K);
    let kF = fac(K);
    // console.log({ nF, nmkF, kF })
    sol = nF / (nmkF * kF);
    console.log(sol);

}
solution(real);