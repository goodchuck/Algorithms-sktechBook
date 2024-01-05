var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7 3`
let real = input.trim().split("\n");

async function solution(real) {
    let [A, B] = real[0].split(" ").map(Number);
    // console.log(A, B);
    let arr = [];
    for (let i = 1; i <= A; i++) {
        arr.push(i);
    }
    // console.log(arr)
    let count = 0;
    let results = [];
    while (arr.length !== 0) {

        let t = arr.shift();
        if (count === B - 1) {
            results.push(t);
            count = 0;
        } else {
            arr.push(t);
            count++;
        }

    }
    console.log(`<${results.join(', ')}>`);
}
solution(real);