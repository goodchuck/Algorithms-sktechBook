// 나이트의 이동
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
4
0 0
1 2`

let real = input.trim().split("\n");
let [T, ...rest] = real;
function checkNightMove(maze, num) {
    let N = maze[0].length;
    let M = maze.length;
    num = Number(num);
    let d = Math.floor(num / N);
    let r = num % N;
    // console.log({ maze, num, d, r })
    let newNights = [];
    // (x-2,y-1)
    if (d > 0 && r > 1 && maze[d - 1][r - 2] === '0') {
        maze[d - 1][r - 2] = '1';
        let ans = num - N - 2
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // (x-1, y-2)
    if (d > 1 && r > 0 && maze[d - 2][r - 1] === '0') {
        maze[d - 2][r - 1] = '1';
        let ans = num - N * 2 - 1
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // (x+1, y-2)
    if (d > 1 && r < N && maze[d - 2][r + 1] === '0') {
        maze[d - 2][r + 1] = '1';
        let ans = num - N * 2 + 1
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // (x+2, y-1)
    if (d > 0 && r < N - 1 && maze[d - 1][r + 2] === '0') {
        maze[d - 1][r + 2] = '1';
        let ans = num - N * 1 + 2
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // (x-2, y+1)
    if (d < M - 1 && r > 1 && maze[d + 1][r - 2] === '0') {
        maze[d + 1][r - 2] = '1';
        let ans = num + N * 1 - 2
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // (x-1, y+2)
    if (d < M - 2 && r > 0 && maze[d + 2][r - 1] === '0') {
        maze[d + 2][r - 1] = '1';
        let ans = num + N * 2 - 1
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // (x+1, y+2)
    if (d < M - 2 && r < N && maze[d + 2][r + 1] === '0') {
        maze[d + 2][r + 1] = '1';
        let ans = num + N * 2 + 1
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // (x+2, y+1)
    if (r < N - 1 && d < M - 1 && maze[d + 1][r + 2] === '0') {
        maze[d + 1][r + 2] = '1';
        let ans = num + N * 1 + 2
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newNights.push(ans);
    }
    // console.log({ newNights })
    return newNights
}

function makeMaze(N) {
    let maze = Array.from({ length: N }, () => Array.from({ length: N }).fill('0'));
    return maze;
}
function solution() {
    let index = 0;
    let rl = rest.length;
    let returns = [];
    while (index !== rl) {
        let I = Number(rest[index]);
        let [cux, cuy] = rest[index + 1].split(" ").map(Number);
        let [tax, tay] = rest[index + 2].split(" ").map(Number);
        let currentNum = (cux * I) + cuy;
        // if (currentNum === -1) currentNum = 0
        let targetNum = (tax * I) + tay;
        // if (targetNum === -1) targetNum = 0
        // console.log(I, currentNum, targetNum)
        let checkArrays = Array.from({ length: I * I }).fill(0);
        let maze = makeMaze(I);

        maze[cux][cuy] = 1;
        checkArrays[currentNum] = true;
        // let nights = [];
        let count = 0;
        let newNights = [];
        let nN = [];
        let isFind = false;
        while (true) {
            newNights = [];
            if (currentNum === targetNum) {
                returns.push(0);
                isFind = true;
                break;
            }
            if (count === 0) {
                nN = checkNightMove(maze, currentNum);
                // console.log(nN)
                for (let night of nN) {
                    if (night === targetNum) {
                        returns.push(1);
                        isFind = true;
                        break;
                    }
                }
            }
            if (isFind) {
                break;
            }
            while (nN.length !== 0) {
                let night = nN.pop();
                if (night === targetNum) {
                    returns.push(count + 1);
                    isFind = true;
                    break;
                }
                let cNM = checkNightMove(maze, night);
                checkArrays[night] = 1;
                newNights.push(...cNM)
            }
            count++;
            // console.log({ newNights });
            nN = newNights;
            if (isFind) {
                break;
            }
        }
        // console.log({ I, current, target, maze })
        // break;
        index += 3;
    }
    console.log(returns.join("\n"))
    return;
}
solution();