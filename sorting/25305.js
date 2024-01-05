var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 2
100 76 85 93 98`
let real = input.trim().split("\n");



function solution(real) {
    let [first, sec] = real;
    let [N, k] = first.split(" ").map(Number);
    let targetArr = sec.split(" ").map(Number).sort((a, b) => b - a);
    console.log(targetArr[k - 1]);

}
solution(real);