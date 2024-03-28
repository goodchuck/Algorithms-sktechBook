// 종이의 개수
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1`

let real = input.trim().split("\n");
let [N, ...rest] = real;

let board = rest.map(v => v.split(" ").map(Number));
async function solution() {
    // console.log(board);
    let cnt = [0, 0, 0];
    // 처음 0 0 9
    function solve(x, y, n) {
        if (same(x, y, n)) {
            cnt[board[y][x] + 1] += 1;
            return;
        }

        let m = Math.floor(n / 3);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                solve(x + i * m, y + j * m, m);
            }
        }
    }

    function same(x, y, n) {
        for (let i = y; i < y + n; i++) {
            for (let j = x; j < x + n; j++) {
                if (board[y][x] !== board[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
    solve(0, 0, N);
    console.log(cnt.join("\n"));
}

solution();
