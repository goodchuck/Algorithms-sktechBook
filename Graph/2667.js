// 단지번호붙이기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
10101
01010
10101
01010
10101`

let real = input.trim().split("\n");
let [N, ...rest] = real;
N = Number(N);
let checkArrays = Array.from({ length: N * N + 1 }).fill(0);
function makeMaze(arr) {
    let maze = [];
    for (let slice of arr) {
        let row = [...slice]
        maze.push(row);
    }
    // console.log(maze);
    return maze;
}

function makeGraph(N, M, maze) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // let name = `${i}_${j}`;
            let name = `${i * M + j}`;
            if (maze[i][j] === '1') {
                if (!graph[name]) {
                    graph[name] = [];
                }
                // left
                if (j - 1 >= 0 && maze[i][j - 1] === '1') {
                    graph[name].push(`${i * M + j - 1}`);
                }
                // right
                if (j + 1 < M && maze[i][j + 1] === '1') {
                    graph[name].push(`${i * M + j + 1}`);
                }
                // bottom
                if (i + 1 < N && maze[i + 1][j] === '1') {
                    graph[name].push(`${(i + 1) * M + j}`);
                }
                // top
                if (i - 1 >= 0 && maze[i - 1][j] === '1') {
                    graph[name].push(`${(i - 1) * M + j}`);
                }
                graph[name].sort()
            } else {

            }
        }
    }
    return graph;
}

const DFS = (graph, x, team) => {
    // console.log({ graph, x })
    checkArrays[x] = team;
    let len = graph[x].length;
    if (len === 0) return;
    for (let i = 0; i < len; i++) {
        let t = graph[x][i];
        if (checkArrays[Number(t)] === 0) {
            DFS(graph, t, team);
        }
    }
}
function solution() {

    let maze = makeMaze(rest);
    let graph = makeGraph(N, N, maze);
    // console.log({ graph })
    let team = 1;
    for (let key of Object.keys(graph).sort()) {
        let t = graph[key];
        // console.log({ key, t })
        if (t.length === 0) {
            checkArrays[Number(key)] = team;
            team++;
        }
        else {
            for (let row of t) {
                if (checkArrays[Number(row)] === 0) {
                    DFS(graph, row, team);
                    team++;
                }
            }
        }


    }
    let results = checkArrays.reduce((acc, cv) => {

        cv = String(cv);
        // console.log({ acc, cv })
        if (cv === 0) {
        }
        else if (!acc[cv]) {
            acc[cv] = 1;
        }
        else {
            acc[cv] = acc[cv] + 1;
        }
        return acc
    }, {})

    let returns = [];
    returns.push(Object.keys(results).length - 1);
    let sums = [];
    for (let key in Object.keys(results)) {
        let tar = results[key];
        if (key === '0') continue;
        sums.push(tar);

    }
    sums = sums.sort((a, b) => a - b);
    for (let row of sums) {
        returns.push(row)
    }
    console.log(returns.join("\n"));
}
solution();