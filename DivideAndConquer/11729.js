// 하노이 탑 이동 순서
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3`

let real = input.trim().split("\n");
let [N, ...rest] = real;

`
원판 3개
7
1 3 -> 
1 2 -> 
3 2 -> 
1 3 -> 
2 1 -> 
2 3 -> 
1 3
`
async function solution() {
    let answers = [0, []];
    let board = [1, 2, 3]
    function getRemain(x, y) {
        let result = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === x || board[i] === y) continue;
            result = board[i]
        }
        return result;
    }

    // n개의 원판을 x에서 y로 이동
    function solve(n, x, y) {
        if (n === 0) return;
        let remain = getRemain(x, y);
        console.log('remain', remain)
        solve(n - 1, x, remain);

        // 마지막수 이동
        answers[0] += 1;
        answers[1].push(`${x} ${y}`);
        solve(n - 1, remain, y)
    }
    solve(Number(N), 1, 3);
    console.log(answers[0])
    console.log(answers[1].join("\n"))
}

solution();
