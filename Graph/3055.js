// 탈출
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 4
.D.*
....
..X.
S.*.
....`

// D: 비버의 굴
// .: 빈칸
// *: 물이찬 지역
// S: 고슴도치
// X: 돌

let real = input.trim().split("\n");
let [first, ...rests] = real;
let maze = rests.map(v => [...v]);
let [N, M] = first.split(" ").map(Number);
let distanceArrays = Array.from({ length: N }, () => Array.from({ length: M }).fill(-1));
let mins = Infinity;
let dx = [-1, 1, 0, 0]
let dy = [0, 0, 1, -1]

// 비버굴
let Dcoord = getTargetCoord(maze, 'D');

// 물
let Wcoord = getTargetCoord(maze, '*');

// 돌
let StoneCoord = getTargetCoord(maze, 'X');

let maxCount = -Infinity;
let mases = [maze];


function check(x, y, distance, maze) {
    let newQue = [];
    for (let i = 0; i < dx.length; i++) {
        let newCoord = { x: x + dx[i], y: y + dy[i] }

        if (newCoord.x >= 0 && newCoord.x < M && newCoord.y >= 0 && newCoord.y < N) {
            if (distanceArrays[newCoord.y][newCoord.x] === -1 && (maze[newCoord.y][newCoord.x] === '.' || maze[newCoord.y][newCoord.x] === 'D')) {
                distanceArrays[newCoord.y][newCoord.x] = distance
                // console.log({ newCoord })
                newQue.push(newCoord);
            }
        }
    }
    // console.log({ x, y, distance, maze, newQue })
    return newQue
}

function flowWater(inputMaze) {
    let newDistanceArrays = Array.from({ length: N }, () => Array.from({ length: M }).fill(-1));
    let maze = JSON.parse(JSON.stringify(inputMaze));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (newDistanceArrays[i][j] === -1 && maze[i][j] === '*') {
                newDistanceArrays[i][j] = 1;
                for (let k = 0; k < dx.length; k++) {
                    let newCoord = { x: j + dx[k], y: i + dy[k] }
                    if (newCoord.x >= 0 && newCoord.x < M && newCoord.y >= 0 && newCoord.y < N) {
                        if (newDistanceArrays[newCoord.y][newCoord.x] === -1 && maze[newCoord.y][newCoord.x] === '.') {
                            newDistanceArrays[newCoord.y][newCoord.x] = 1
                            maze[newCoord.y][newCoord.x] = '*'
                        }
                    }

                }
            }
        }
    }
    // console.log(maze)
    mases.push(maze);
}

function getTargetCoord(maze, target) {
    let coins = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maze[i][j] === target) {
                coins.push({ x: j, y: i });
            }
        }
    }

    return coins;

}

function solution() {
    let que = [];
    // 고슴도치 
    let Scoord = getTargetCoord(maze, 'S');
    que.push(Scoord[0]);
    distanceArrays[Scoord[0].y][Scoord[0].x] = 0
    while (que.length !== 0) {
        let node = que.shift();
        let { x, y } = node;

        let distance = distanceArrays[y][x];
        // console.log({ x, y, distance, maxCount });
        if (Dcoord[0].x === x && Dcoord[0].y === y) {
            console.log(distance);
            // console.log(mases);
            return;
        }
        if (distance > maxCount) {
            flowWater(mases.at(-1), distanceArrays);
            // console.log(mases);
            maxCount = distance;
        }
        let newQue = check(x, y, distance + 1, mases[distance + 1]);
        // console.log(newQue)
        que.push(...newQue);
        // check(node)
    }
    console.log('KAKTUS');
}
solution();