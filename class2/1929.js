var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1 7`
let real = input.trim().split("\n");

function makeArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr[i] = i;
    }
    return arr;
}

function getSieveOfEratosthenes(start, end, arr) {
    for (let i = 2; i <= end; i++) {
        if (arr[i] === 0) continue;

        for (let j = i * 2; j <= end; j += i) {
            arr[j] = 0;
        }
    }

    return arr.filter(n => n !== 0 && n !== 1)
}

function solution(real) {
    let [M, N] = real[0].trim().split(" ").map(Number);
    let arr = makeArray(M, N);
    let sieve = getSieveOfEratosthenes(M, N, arr);
    console.log(sieve.join('\n'))

}
solution(real);