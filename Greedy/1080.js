// 행렬
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `18 3
001
100
100
000
011
010
100
100
010
010
010
110
101
101
000
110
000
110
001
100
011
000
100
010
011
100
101
101
010
001
010
010
111
110
111
001`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [N, M] = first.split(" ").map(Number);
let A = rests.slice(0, N).map(v => [...v].map(Number));
let B = rests.slice(N, 2 * N).map(v => [...v].map(Number));
function solution() {
    // console.log({ A, B })
    let answer = 0;
    for (let i = 0; i < N - 2; i++) {
        for (let j = 0; j < M - 2; j++) {
            // console.log({ i, j });
            let ATarget = A[i][j];
            let BTarget = B[i][j];
            // console.log(ATarget, BTarget, ATarget !== BTarget)
            if (ATarget !== BTarget) {
                // console.log({ i, j, answer })
                for (let u = i; u < i + 3; u++) {
                    for (let v = j; v < j + 3; v++) {
                        A[u][v] = 1 - A[u][v];
                        // console.log(u, v, i, j)
                    }
                }
                answer += 1;
            }
        }
    }
    // console.log({ A, B });
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (A[i][j] !== B[i][j]) {
                console.log(-1)
                return;
            }
        }
    }
    console.log(answer);
}

solution();
