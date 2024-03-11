// 동전 뒤집기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
HHT
THH
THT`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
let maze = rest.map(v => [...v]);

function Flip(al) {
    if (al === 'H') {
        return 'T'
    } else {
        return 'H';
    }
}

function solution() {
    // console.log(maze);
    // 위 H
    // 아래 T
    // 목표 T 최소 

    let mins = Infinity

    // 행갯수만큼 반복
    let originMaze = JSON.parse(JSON.stringify(maze));
    for (let i = 0; i < 2 ** N; i++) {
        let numTo2 = parseInt(i.toString(2).padStart(N, '0'), 2);
        // numTo2 = [...numTo2.padStart(N, '0')].map(Number);
        // console.log(numTo2);

        let sum = 0;
        for (let i = 0; i < N; i++) {
            let cnt = 0;
            for (let j = 0; j < N; j++) {
                let cur = originMaze[i][j];
                if ((numTo2 & (1 << j)) !== 0) {

                    cur = Flip(cur);
                }
                if (cur === 'T') {
                    cnt += 1;
                }
            }
            sum += Math.min(cnt, N - cnt);
        }
        mins = Math.min(mins, sum);
    }
    console.log(mins);
}

solution();
