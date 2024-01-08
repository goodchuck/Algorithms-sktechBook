// 합분해 2225
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6 4`

let real = input.trim().split("\n");
let arrs = [];
function testF(N, K, mod) {
    for (let i = 0; i <= K; i++) {
        for (let j = 0; j <= N; j++) {
            for (let l = 0; l <= j; l++) {
                if (i - 1 >= 0) {
                    arrs[i][j] += arrs[i - 1][j - l];
                    arrs[i][j] %= mod;
                }
            }
        }
    }
}

function solution(real) {
    let [first, sec] = real;
    let [N, K] = first.split(" ").map(Number);
    // console.log(N, K)
    arrs = new Array(K + 1).fill(0);
    // k개로 N을 만드는 경우의 수
    let mod = 1000000000;
    for (let i = 0; i <= K; i++) {
        arrs[i] = [];
        for (let j = 0; j <= N; j++) {
            arrs[i][j] = 0;
        }
    }

    arrs[0][0] = 1
    testF(N, K, mod);
    console.log(arrs[K][N]);
}
solution(real);