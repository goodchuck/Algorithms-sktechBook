var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `161 181 762 375`
let real = input.trim().split(" ");

function solution(real) {
    let [x, y, w, h] = real.map(Number);

    let l = (w - x);
    let l0 = Math.abs(0 - x);
    let u = (h - y);
    let u0 = Math.abs(0 - y);
    let returns = Math.min(l, u, l0, u0);
    console.log(returns);

}
solution(real);