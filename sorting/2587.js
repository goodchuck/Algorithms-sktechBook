var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
40
30
60
30`
let real = input.trim().split("\n");



function solution(real) {
    let arr = real.map(Number).sort((a, b) => a - b);
    let sum = arr.reduce((acc, cv) => acc + cv, 0);
    let avg = sum / arr.length;
    let mid = arr[2];

    console.log(avg)
    console.log(mid);
}
solution(real);