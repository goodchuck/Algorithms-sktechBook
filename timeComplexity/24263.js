var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1`
let real = input.trim().split(" ");

function solution(real) {
    let [n, ...rest] = real.map(Number);
    console.log(n);
    console.log(1);
}
solution(real);