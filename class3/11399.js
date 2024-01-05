var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
3 1 4 3 2`
let real = input.trim().split("\n");

async function solution(real) {
    let [first, sec] = real
    let results = [];
    let sum = 0;
    let count = 1;
    let arr = sec.split(" ").map(Number).sort((a, b) => a - b);
    for (let item of arr) {
        // console.log({ arr })
        let mSum = arr.slice(0, count).reduce((acc, cV) => acc + Number(cV), 0);
        // console.log(mSum);
        sum += mSum;
        count++;
    }
    console.log(sum);
}
solution(real);