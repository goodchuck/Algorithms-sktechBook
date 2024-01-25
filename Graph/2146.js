// 다리 만들기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
1 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 1
0 0 0 0 1`

let [N, ...rests] = input.trim().split("\n");
N = Number(N);
let checkArrays = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))
let distanceArrays = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))
let teamArrays = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))
let maze = rests.map(row => {
    return row.split(" ").map(Number);
})

function makeGraph(N, M, maze, team = 1) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // let name = `${i}_${j}`;
            let name = `${i}_${j}`;
            if (maze[i][j] === 1) {
                if (!graph[name]) {
                    graph[name] = [];
                }
                // left
                if (j - 1 >= 0 && maze[i][j - 1] === team) {
                    graph[name].push(`${i}_${j - 1}`);
                }
                // right
                if (j + 1 < M && maze[i][j + 1] === team) {
                    graph[name].push(`${i}_${j + 1}`);
                }
                // bottom
                if (i + 1 < N && maze[i + 1][j] === team) {
                    graph[name].push(`${i + 1}_${j}`);
                }
                // top
                if (i - 1 >= 0 && maze[i - 1][j] === team) {
                    graph[name].push(`${i - 1}_${j}`);
                }
                graph[name].sort()
            } else {

            }
        }
    }
    return graph;
}

function makeLand(N, M, left, right, distance, que, team) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let tarCheck = checkArrays[left][right]
    // left
    if (right + dx[0] >= 0 && !checkArrays[left + dy[0]][right + dx[0]]) {
        // checkArrays[left + dy[0]][right + dx[0]] = team;
        if (teamArrays[left + dy[0]][right + dx[0]] && teamArrays[left + dy[0]][right + dx[0]] !== team) {
            return false;
        }
        if (maze[left + dy[0]][right + dx[0]] === 1) {
            que.unshift(`${left + dy[0]}_${right + dx[0]}`)
            checkArrays[left + dy[0]][right + dx[0]] = team;
            distanceArrays[left + dy[0]][right + dx[0]] = distance;
        }
        if (maze[left + dy[0]][right + dx[0]] === 0) {
            que.push(`${left + dy[0]}_${right + dx[0]}`)
            distanceArrays[left + dy[0]][right + dx[0]] = distance + 1;
            checkArrays[left + dy[0]][right + dx[0]] = team;
            // maze[left + dy[0]][right + dx[0]] = team
        }

    }

    // right
    if (right + dx[1] < N && !checkArrays[left + dy[1]][right + dx[1]]) {
        // checkArrays[left + dy[1]][right + dx[1]] = team;

        if (teamArrays[left + dy[1]][right + dx[1]] && teamArrays[left + dy[1]][right + dx[1]] !== team) {
            return false;
        }
        if (maze[left + dy[1]][right + dx[1]] === 1) {
            que.unshift(`${left + dy[1]}_${right + dx[1]}`)
            checkArrays[left + dy[1]][right + dx[1]] = team;
            distanceArrays[left + dy[1]][right + dx[1]] = distance;
        }
        if (maze[left + dy[1]][right + dx[1]] === 0) {
            que.push(`${left + dy[1]}_${right + dx[1]}`)
            distanceArrays[left + dy[1]][right + dx[1]] = distance + 1;
            checkArrays[left + dy[1]][right + dx[1]] = team;
            // maze[left + dy[1]][right + dx[1]] = team
        }
    }
    // top
    if (left + dy[2] >= 0 && !checkArrays[left + dy[2]][right + dx[2]]) {
        // checkArrays[left + dy[2]][right + dx[2]] = team;

        if (teamArrays[left + dy[2]][right + dx[2]] && teamArrays[left + dy[2]][right + dx[2]] !== team) {
            return false;
        }
        if (maze[left + dy[2]][right + dx[2]] === 1) {
            que.unshift(`${left + dy[2]}_${right + dx[2]}`)
            checkArrays[left + dy[2]][right + dx[2]] = team;
            distanceArrays[left + dy[2]][right + dx[2]] = distance;
        }
        if (maze[left + dy[2]][right + dx[2]] === 0) {
            que.push(`${left + dy[2]}_${right + dx[2]}`)
            distanceArrays[left + dy[2]][right + dx[2]] = distance + 1;
            checkArrays[left + dy[2]][right + dx[2]] = team;
            // maze[left + dy[2]][right + dx[2]] = team
        }
    }
    // bottom
    if (left + dy[3] < M && !checkArrays[left + dy[3]][right + dx[3]]) {
        // checkArrays[left + dy[3]][right + dx[3]] = team;
        if (teamArrays[left + dy[3]][right + dx[3]] && teamArrays[left + dy[3]][right + dx[3]] !== team) {
            return false;
        }
        if (maze[left + dy[3]][right + dx[3]] === 1) {
            que.unshift(`${left + dy[3]}_${right + dx[3]}`)
            checkArrays[left + dy[3]][right + dx[3]] = team;
            distanceArrays[left + dy[3]][right + dx[3]] = distance;
        }
        if (maze[left + dy[3]][right + dx[3]] === 0) {
            que.push(`${left + dy[3]}_${right + dx[3]}`)
            distanceArrays[left + dy[3]][right + dx[3]] = distance + 1;
            checkArrays[left + dy[3]][right + dx[3]] = team;
            // maze[left + dy[3]][right + dx[3]] = team;
        }
    }
    return que;
}
function solution() {
    // console.log(maze)
    let graph = makeGraph(N, N, maze);
    let team1 = 1;

    // console.log({ graph })
    let teamQue = [];
    for (let key in graph) {
        let node = key;
        let [outLeft, outRight] = node.split("_").map(Number);
        if (teamArrays[outLeft][outRight]) continue;
        teamQue.push(node);
        while (teamQue.length !== 0) {
            let node = teamQue.shift();
            let [left, right] = node.split("_").map(Number);
            teamArrays[left][right] = team1;
            for (let innerNode of graph[node]) {
                let [inLeft, inRight] = innerNode.split("_").map(Number);
                if (!teamArrays[inLeft][inRight]) {
                    teamArrays[inLeft][inRight] = team1;
                    teamQue.push(innerNode);
                }
            }
        }
        team1++;
    }

    // console.log({ teamArrays })

    let que = [];
    let mins = Infinity;
    let team = 1
    for (let key in graph) {
        let node = key;
        // console.log({ node, key, team })
        let [outLeft, outRight] = node.split("_").map(Number);
        if (teamArrays[outLeft][outRight] !== team) continue;
        que.push(node);
        checkArrays[outLeft][outRight] = team;
        while (que.length !== 0) {
            let node = que.shift();
            let [left, right] = node.split("_").map(Number);
            let distance = distanceArrays[left][right];
            checkArrays[left][right] = team;
            // console.log('확인', left, right, maze[left][right], checkArrays[left][right])

            // console.log({ node, que, distance })
            que = makeLand(N, N, left, right, distance, que, team);
            if (!que) {
                // console.log("찾음", distance);
                mins = Math.min(distance, mins);
                que = [];
                break;
            }
        }
        team++;
        checkArrays = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))
        distanceArrays = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))
    }
    console.log(mins)
    // console.log({ maze })
}
solution();