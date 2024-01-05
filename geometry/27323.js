var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
3`
let real = input.trim().split("\n");

function solution(real) {
    let [A, B] = real.map(Number);
    console.log(A * B);

}
solution(real);