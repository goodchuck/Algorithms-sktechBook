// N과 M(3)
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 2`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
let checksArray = Array.from({ length: N + 1 }).fill(false);
let returns = [];
let arr = [];

async function go(index, n, m) {
    if (index === m) {
        // arr.shift();
        returns.push(arr.join(" "));
        return;
    }

    for (let i = 1; i <= n; i++) {
        // if (checksArray[i]) continue;
        // checksArray[i] = true;
        arr[index] = i;
        // console.log({ index, i, arr, checksArray })
        go(index + 1, n, m);
        // checksArray[i] = false;
    }
}

async function solution() {

    go(0, N, M);

    console.log(returns.join('\n'));
}
solution();