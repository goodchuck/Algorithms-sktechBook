var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `60
70
50`
let real = input.trim().split("\n");

function solution(real) {
    let [A, B, C] = real.map(Number);
    if (A === 60 & B === 60 & C === 60) {
        console.log('Equilateral')
    } else if (A + B + C !== 180) {
        console.log('Error')
    } else {
        if (A !== B && A !== C & B !== C) {
            console.log('Scalene')
        }
        else {
            console.log('Isosceles')
        }
    }
}
solution(real);