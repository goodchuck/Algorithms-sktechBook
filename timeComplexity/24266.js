var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7`
let real = input.trim().split(" ");


function solution(real) {
    let [n, ...rest] = real.map(Number);
    let bN = BigInt(n);
    console.log((bN ** BigInt(3)).toString());
    console.log(3);
}
solution(real);