// 30
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `996270`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ");


async function solution() {


    let numArray = [...first].map(Number).sort((a, b) => b - a)
    let sums = numArray.reduce((acc, v) => acc + v, 0);
    if (!numArray.includes(0)) {
        console.log(-1);
    }
    else if (sums % 3 !== 0) {
        console.log(-1)
    }
    else {
        console.log(numArray.join(""))
    }


}

solution();
