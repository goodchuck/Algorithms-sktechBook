var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3`
let real = input.trim().split(" ");

function solution(real) {
    let [n, ...rest] = real;
    console.log(4 * n);
}
solution(real);