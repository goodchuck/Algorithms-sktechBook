// 연구소
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7 7
2 0 0 0 1 1 0
0 0 1 0 1 2 0
0 1 1 0 1 0 0
0 1 0 0 0 0 0
0 0 0 0 0 1 1
0 1 0 0 0 0 0
0 1 0 0 0 0 0`

let real = input.trim().split("\n");
let [T, ...rests] = real;
let [N, M] = T.split(" ").map(Number);
let maze = rests.map((row) => row.split(" ").map(Number));

function birusAttack(node, que, maze, zeroCount) {
    let [hei, wid] = node.split("_").map(Number);

    // left
    if (wid - 1 >= 0 && maze[hei][wid - 1] === 0) {
        maze[hei][wid - 1] = 2;
        que.push(`${hei}_${wid - 1}`);
        zeroCount--;
    }

    // right
    if (wid + 1 < M && maze[hei][wid + 1] === 0) {
        maze[hei][wid + 1] = 2;
        que.push(`${hei}_${wid + 1}`);
        zeroCount--;
    }

    // top
    if (hei + 1 < N && maze[hei + 1][wid] === 0) {
        maze[hei + 1][wid] = 2;
        que.push(`${hei + 1}_${wid}`);
        zeroCount--;
    }

    // bottom
    if (hei - 1 >= 0 && maze[hei - 1][wid] === 0) {
        maze[hei - 1][wid] = 2;
        que.push(`${hei - 1}_${wid}`);
        zeroCount--;
    }

    return [que, zeroCount];
}

let maxes = -Infinity;
function go(index, x, y, wallsArray) {
    if (index === 3) {
        let que = [];
        let newMaze = JSON.parse(JSON.stringify(maze));
        // console.log('newMaze Start', newMaze);
        let zeroCount = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (newMaze[i][j] === 0) {
                    zeroCount++;
                }
                if (newMaze[i][j] === 2) {
                    que.push(`${i}_${j}`);
                }
            }
        }
        while (que.length !== 0) {
            let node = que.shift();
            [que, zeroCount] = birusAttack(node, que, newMaze, zeroCount);
        }
        if (zeroCount > maxes) {
            maxes = zeroCount;
        }
        // console.log({ wallsArray })
        return;
    }

    for (let i = 0; i < N; i++) {
        for (let j = x; j < M; j++) {
            if (maze[i][j] === 0) {
                maze[i][j] = 1;
                go(index + 1, j, i, [...wallsArray, { x: j, y: i }])
                maze[i][j] = 0;
            }
        }
    }
}

function solution() {
    // console.log(maze)
    go(0, 0, 0, []);
    console.log(maxes)

}
solution();