// Two Dots
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 4
AAAA
AACA
BBDA`

let [first, ...rests] = input.trim().split("\n");
let [N, M] = first.split(" ").map(Number);

function makeMaze(arr) {
    let maze = [];
    for (let slice of arr) {
        let row = [...slice]
        maze.push(row);
    }
    // console.log(maze);
    return maze;
}

function makeGraph(N, M, maze, team) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // let name = `${i}_${j}`;
            let name = `${i * M + j}`;
            if (maze[i][j] === team) {
                if (!graph[name]) {
                    graph[name] = [];
                }
                // left
                if (j - 1 >= 0 && maze[i][j - 1] === team) {
                    graph[name].push(`${i * M + j - 1}`);
                }
                // // left top
                // if (j - 1 >= 0 && i - 1 >= 0 && maze[i - 1][j - 1] === '1') {
                //     graph[name].push(`${(i - 1) * M + j - 1}`);
                // }
                // // left bottom
                // if (j - 1 >= 0 && i + 1 < N && maze[i + 1][j - 1] === '1') {
                //     graph[name].push(`${(i + 1) * M + j - 1}`);
                // }
                // right
                if (j + 1 < M && maze[i][j + 1] === team) {
                    graph[name].push(`${i * M + j + 1}`);
                }
                // // right top
                // if (j + 1 < M && i - 1 >= 0 && maze[i - 1][j + 1] === '1') {
                //     graph[name].push(`${(i - 1) * M + j + 1}`);
                // }
                // // right bottom
                // if (j + 1 < M && i + 1 < N && maze[i + 1][j + 1] === '1') {
                //     graph[name].push(`${(i + 1) * M + j + 1}`);
                // }
                // bottom
                if (i + 1 < N && maze[i + 1][j] === team) {
                    graph[name].push(`${(i + 1) * M + j}`);
                }
                // top
                if (i - 1 >= 0 && maze[i - 1][j] === team) {
                    graph[name].push(`${(i - 1) * M + j}`);
                }
                graph[name].sort()
            } else {

            }
        }
    }
    return graph;
}
let count = 0;
let hasCycle = 'No';
const DFS = (graph, x, team, checkArrays, count, cntArrays) => {
    // console.log({ graph, x })
    checkArrays[x] = team;
    cntArrays[x] = count;
    let len = graph[x].length;
    if (len === 0) return count;

    for (let i = 0; i < len; i++) {
        let t = graph[x][i];

        if (checkArrays[Number(t)] === team && count - cntArrays[Number(t)] >= 3) {

            hasCycle = 'Yes';
            return;
        }
        if (checkArrays[Number(t)] === 0) {
            DFS(graph, t, team, checkArrays, count + 1, cntArrays);
        }

    }
    return count;
}
function solution() {

    rests = rests.map(_ => [..._])
    let teams = {}
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // console.log({ i, j })
            let team = rests[i][j];
            if (!teams[team]) {
                teams[team] = 1;
            }
        }
    }
    // let graphs = [];
    hasCycle = 'No';
    for (let key in teams) {

        let graph = makeGraph(N, M, rests, key);
        let checkArrays = Array.from({ length: N * M }).fill(0);
        let cntArrays = Array.from({ length: N * M }).fill(0);
        count = 0;
        for (let graphKey in graph) {
            if (!checkArrays[Number(graphKey)]) {
                count = DFS(graph, Number(graphKey), 1, checkArrays, count, cntArrays);
            }
        }
        // console.log({ key, graph, cntArrays })
        // graphs.push(graph);
    }
    // console.log({ N, M, rests, teams, })
    // console.log(returns.join("\n"));
    console.log(hasCycle);
}
solution();