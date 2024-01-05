var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6 8 10
25 52 60
5 12 13
0 0 0`
let real = input.trim().split("\n");



function solution(real) {
    let arr = real;
    arr = arr.map((row) => {
        let [a, b, c] = row.split(" ").map(Number);
        let sorted = [a, b, c].sort((a, b) => a - b);
        let message = 'wrong';
        if (sorted[0] ** 2 + sorted[1] ** 2 === sorted[2] ** 2) {
            message = 'right';
        }
        return message;
    })
    arr.pop();
    console.log(arr.join('\n'))
}
solution(real);