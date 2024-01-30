// 종이 조각
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2 2
10
01`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [N, M] = first.split(" ").map(Number);
rests = rests.map((rest) => {
    return [...rest].map(Number)
})
// console.log({ N, M, rests });

async function solution() {
    let maxes = -Infinity;
    // 0은가로 1은 세로
    // 디폴트 0부터 시작
    for (let i = 0; i < (1 << (N * M)); i++) {
        let state = i.toString(2).padStart(N * M, '0')
        let checksArray = Array.from({ length: N * M }).fill(false);
        let sum = 0;

        for (let k = 0; k < N; k++) {
            let cur = 0;
            for (let j = 0; j < M; j++) {
                let u = k * M + j;
                if (state[u] === '0') {
                    cur = cur * 10 + Number(rests[k][j]);
                }
                else {
                    sum += cur;
                    cur = 0;
                }
            }
            sum += cur;
        }
        for (let j = 0; j < M; j++) {
            let cur = 0;
            for (let k = 0; k < N; k++) {
                let u = k * M + j;
                if (state[u] === '1') {
                    cur = cur * 10 + Number(rests[k][j]);
                }
                else {
                    sum += cur;
                    cur = 0;
                }
            }
            sum += cur;
        }

        maxes = Math.max(maxes, sum);

    }
    console.log(maxes);
}
solution();