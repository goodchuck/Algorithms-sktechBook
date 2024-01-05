var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `25 4`

let real = input.trim().split(" ");

function solution(real) {
    let [N, K] = real.map(Number);
    let factors = [];
    for (let i = N; i >= 1; i--) {
        // factors.push(N % i);
        if (N % i === 0) {
            factors.push(Math.floor(N / i));
        }
    }
    if (factors.length > 0) {
        if (factors.length < K) {
            console.log(0)
        }
        else {
            console.log(factors[K - 1])
        }

    } else {
        console.log(0)
    }
}
solution(real);