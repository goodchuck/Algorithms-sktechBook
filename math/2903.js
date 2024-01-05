var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1`

let real = input.trim().split(" ");

function solution(real) {
    // let [T, ...sec] = real;
    let num = Number(real[0]);
    // N=1 3*3;
    // N=2 5*5;
    // N=3 9*9
    let x = 2 ** (num) + 1
    console.log(x ** 2);

}
solution(real);