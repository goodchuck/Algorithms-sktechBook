var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5`

let real = input.trim().split(" ");

function solution(real) {
    let num = real.map(Number)[0];
    let returns = [];
    for (let i = 1; i <= num; i++) {
        returns.push(i);
    }
    console.log(returns.join('\n'));

}
solution(real);