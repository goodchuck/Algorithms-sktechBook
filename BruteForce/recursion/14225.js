// 부분수열의 합
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
2 1 2 7`

let real = input.trim().split("\n");
let [N, S] = real;
N = Number(N);
let numArray = S.split(" ").map(Number).sort((a, b) => a - b);
let numArrayLength = numArray.length;
let maxSum = numArray.reduce((acc, cv) => acc + cv, 0);
let checkArray = Array.from({ length: maxSum }).fill(false);
let boolArray = Array.from({ length: numArray.length }).fill(false);

function go(index, sum, cnt) {
    if (index === numArrayLength + 1) return;
    for (let i = cnt; i < numArrayLength; i++) {
        if (boolArray[i]) continue;
        let num = sum + numArray[i];
        boolArray[i] = true;
        checkArray[num - 1] = true;
        go(index + 1, num, i);
        boolArray[i] = false;
    }
}

async function solution() {
    go(0, 0, 0);
    let index = 0;
    while (true) {
        if (!checkArray[index]) {
            console.log(index + 1)
            return;
        }
        index++;
    }

}
solution();