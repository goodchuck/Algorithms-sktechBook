var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `0 4 2 5 6`

let real = input.trim().split(" ");

function solution(real) {
    let inputArrays = real.map(Number);
    let count = 0;
    inputArrays.forEach((num) => {
        let newNum = num ** 2;
        count += newNum;
    })
    console.log(count % 10);

}
solution(real);