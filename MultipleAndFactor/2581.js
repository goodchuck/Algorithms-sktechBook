var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `64
65`

let real = input.trim().split("\n");

function getFactors(num) {
    let factors = [];
    for (let i = num; i >= 1; i--) {
        // factors.push(N % i);
        if (num % i === 0) {
            if (!factors.find((o) => o === Math.floor(num / i))) {
                factors.push(Math.floor(num / i));
            }

        }
    }
    return factors.sort((a, b) => a - b);
}

function getIsPrimeNumber(num) {
    let bool = false;
    if (num === 1) {
        return bool;
    } else {
        let factors = getFactors(num);
        // console.log({ num, factors })
        if (factors.length === 2) {
            let bool = true;
            return bool;
        }
        return bool
    }
}
function solution(real) {
    let [M, N] = real.map(Number);
    let returns = [];
    let sums = 0;
    for (let i = M; i <= N; i++) {
        let isPN = getIsPrimeNumber(i);
        if (isPN) {
            sums += i;
            returns.push(i);
        }
    }
    if (returns.length > 0 && sums > 0) {
        console.log(sums);
        console.log(Math.min(...returns));
    } else {
        console.log(-1);
    }

}
solution(real);