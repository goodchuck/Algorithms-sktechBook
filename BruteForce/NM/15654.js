// N과 M(5)
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 4
1231 1232 1233 1234`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
let numArray = rest[0].split(" ").map(Number).sort((a, b) => a - b);
// console.log({ numArray })
let checksArray = Array.from({ length: N + 1 }).fill(false);
let returns = [];
let arr = [];

async function go(index, n, m) {
    if (index === m) {
        // arr.shift();
        returns.push(arr.join(" "));
        return;
    }

    for (let i = 0; i < numArray.length; i++) {
        if (checksArray[i]) continue;
        checksArray[i] = true;
        arr[index] = numArray[i];
        go(index + 1, n, m);
        checksArray[i] = false;
    }
}

async function solution() {

    go(0, N, M);

    console.log(returns.join('\n'));
}
solution();