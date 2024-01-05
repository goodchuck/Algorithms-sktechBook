var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7`
let real = input.trim().split(" ");


function solution(real) {
    let [n, ...rest] = real.map(Number);
    // testFunction(n);
    let t = (n - 1) * (n) / 2;
    console.log(t)
    console.log(2);
}
solution(real);