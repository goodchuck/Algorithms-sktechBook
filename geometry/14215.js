var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 3 4`
let real = input.trim().split(" ");

function solution(real) {
    let arr = real.map(Number);
    let [a, b, c] = arr.sort();
    let max = Math.max(a, b, c);
    if (max >= a + b + c - max) {
        console.log(2 * (a + b + c - max) - 1)
    }
    else if (max < a + b + c - max) {
        console.log(a + b + c)
    }

}
solution(real);