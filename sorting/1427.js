var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `999998999`
let real = input.trim().split(" ");

async function solution(real) {
    let N = real[0];
    let arr = [...N].map((w) => {
        return Number(w);
    })
        .sort((a, b) => b - a)
    console.log(arr.join(''));


}
solution(real);