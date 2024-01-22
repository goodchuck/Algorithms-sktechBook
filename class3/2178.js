var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2 25
1011101110111011101110111
1110111011101110111011101`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
let count = 0;
let checkArrays = Array.from({ length: N * M + 1 }).fill(false);
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

function bfs(graph, start, target) {
    const queue = [start];
    const visited = new Set([start]);
    const distance = { [start]: 0 };

    while (queue.length > 0) {
        const current = queue.shift();

        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                distance[neighbor] = distance[current] + 1;
                queue.push(neighbor);

                if (neighbor === target) {
                    return distance[neighbor];
                }
            }
        }
        // console.log({ distance })
    }

    // If the target is not reachable from the start node
    if (target) {
        return -1;
    }
    else {
        return distance
    }

}

function solution(real) {

    let maze = makeMaze(rest);
    let graph = makeGraph(N, M, maze);
    // let result = BFSTarget(graph, '0', `${N * M - 1}`);
    // console.log(graph)
    // let result = BFS(graph, '0', '23');
    let result = bfs(graph, '0', String(N * M - 1));
    // let find = result.findIndex(n => n === String(N * M - 1));


    console.log(result + 1);
}
solution(real);