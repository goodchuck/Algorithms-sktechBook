var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7`
let real = input.trim().split(" ");

function solution(real) {
    let [n, ...rest] = real.map(Number);
    console.log(n ** 2);
    console.log(2);
}
solution(real);