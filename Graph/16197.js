// 두 동전
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 3
###
.o.
###
.o.
###`

// o: 동전
// .: 빈칸
// #: 벽

let real = input.trim().split("\n");
let [first, ...rests] = real;
let maze = rests.map(v => [...v]);
let [N, M] = first.split(" ").map(Number);
let distanceArrays = Array.from({ length: N }, () => Array.from({ length: M }, () => Array.from({ length: N }, () => Array.from({ length: M }).fill(-1))));
let mins = Infinity;
let dx = [-1, 1, 0, 0]
let dy = [0, 0, 1, -1]
function check(coin1, coin2, count) {
    let newCoins = [];
    for (let i = 0; i < dx.length; i++) {
        let newCoin1 = { x: coin1.x + dx[i], y: coin1.y + dy[i] };
        let newCoin2 = { x: coin2.x + dx[i], y: coin2.y + dy[i] };
        let stateA = false;
        let stateB = false;
        // 좌표안에있다면
        if (newCoin1.x >= 0 && newCoin1.x < M && newCoin1.y >= 0 && newCoin1.y < N) stateA = true;
        if (newCoin2.x >= 0 && newCoin2.x < M && newCoin2.y >= 0 && newCoin2.y < N) stateB = true;
        // 둘중하나만 true
        if (stateA ^ stateB) {
            mins = Math.min(count, mins);
            return false;
        }
        // 둘다 true
        else if (stateA && stateB) {
            if (maze[newCoin1.y][newCoin1.x] === '#') {
                newCoin1 = coin1;
            }
            if (maze[newCoin2.y][newCoin2.x] === '#') {
                newCoin2 = coin2;
            }
            if (distanceArrays[newCoin1.y][newCoin1.x][newCoin2.y][newCoin2.x] === -1) {
                distanceArrays[newCoin1.y][newCoin1.x][newCoin2.y][newCoin2.x] = count;
                // console.log({ newCoin1, newCoin2 })
                newCoins.push([newCoin1, newCoin2]);
            }

        }
    }
    return newCoins
}

function getCoinCoord(maze) {
    let coins = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maze[i][j] === 'o') {
                coins.push({ x: j, y: i });
            }
        }
    }
    return coins;
}

// 두 동전중 하나만 떨어뜨려야함
// 10번이상누르게되면 -1
function solution() {
    let que = [];
    let coins = getCoinCoord(maze);
    que.push(coins);
    distanceArrays[coins[0].y][coins[0].x][coins[1].y][coins[1].x] = 0;
    // console.log(maze, coins, distanceArrays);
    while (que.length !== 0) {
        let [coin1, coin2] = que.shift();

        let count = distanceArrays[coin1.y][coin1.x][coin2.y][coin2.x];
        if (count >= 10) {
            // console.log("옴?")
            mins = -1;
            break;
        }
        let newCoins = check(coin1, coin2, count + 1);
        // console.log(coin1, coin2, count, newCoins)
        if (!newCoins) {
            break;
        }
        que.push(...newCoins);

        if (que.length === 0) {
            mins = -1;
            break;
        }
    }
    console.log(mins);
}
solution();