var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2 5 8 3 -4 -11`
let real = input.trim().split(" ");



function solution(real) {
    let [a, b, c, d, e, f] = real.map(Number);
    let x = 0;
    let y = 0;
    // Y구하기
    let [na, nb, nc] = [a, b, c].map((n) => n * d);
    let [nd, ne, nf] = [d, e, f].map((n) => n * a);
    y = (nc - nf) / (nb - ne)
    // X구하기
    let [ma, mb, mc] = [a, b, c].map((n) => n * e);
    let [md, me, mf] = [d, e, f].map((n) => n * b);
    x = (mc - mf) / (ma - md)
    console.log(`${x} ${y}`);
}
solution(real);