// 유기농 배추
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`

let real = input.trim().split("\n");
let [T, ...rests] = real;
function makeMaze(M, N, arr) {
    let maze = Array.from({ length: N }, () => Array.from({ length: M }).fill('0'));
    // console.log(maze);
    for (let row of arr) {
        let [i, j] = row.split(" ").map(Number);
        maze[j][i] = '1';
    }
    return maze;
}

function makeGraph(N, M, maze) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            let name = `${i * M + j}`;
            if (maze[i][j] === '1') {
                if (!graph[name]) {
                    graph[name] = [];
                }
                // left
                if (j - 1 >= 0 && maze[i][j - 1] === '1') {
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
                if (j + 1 < M && maze[i][j + 1] === '1') {
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

const DFS = (graph, x, team, checkArrays) => {
    // console.log({ graph, x })
    checkArrays[x] = team;
    let len = graph[x].length;
    if (len === 0) return;
    for (let i = 0; i < len; i++) {
        let t = graph[x][i];
        if (checkArrays[Number(t)] === 0) {
            DFS(graph, t, team, checkArrays);
        }
    }
}
function solution() {
    let index = 0;
    let returns = [];
    while (index < rests.length) {
        let [M, N, K] = rests[index].split(" ").map(Number);
        let checkArrays = Array.from({ length: M * N }).fill(0);
        let rows = rests.slice(index + 1, index + 1 + K);
        // rows = rows.map((row) => {
        //     return row.split(" ")
        // })
        let maze = makeMaze(M, N, rows);
        let graph = makeGraph(N, M, maze);
        // console.log({ maze, graph });
        // console.log({ w, h, rows, graph });

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
                        DFS(graph, row, team, checkArrays);
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

        let counts = 0;
        for (let key in results) {
            let tar = results[key];
            // console.log({ key })
            if (key === '0') continue;
            counts++;

        }
        // console.log({ results })
        returns.push(counts);
        index += K + 1;



    }

    // console.log({ graph })
    console.log(returns.join("\n"));
}
solution();