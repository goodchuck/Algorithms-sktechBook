// 버블 소트
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
10
1
5
2
3`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);

async function solution() {
    let arrs = rest.map((r, i) => [Number(r), i]).sort((a, b) => a[0] - b[0]);
    let ans = 0
    for (let i = 0; i < N; i++) {
        if (arrs[i][1] - i > ans) {
            ans = arrs[i][1] - i
        }
    }
    console.log(ans + 1);
}

solution();
