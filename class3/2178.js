var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 6
101111
101010
101011
111011`

let real = input.trim().split("\n");
let arrs = [];

function makeMaze(arr) {
    let maze = [];
    for (let slice of arr) {
        let row = [...slice]
        maze.push(row);
    }
    console.log(maze);
    return maze;
}

function makeGraph(N, M, maze) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            let name = `${i}_${j}`;
            if (maze[i][j] === '1') {
                if (!graph[name]) {
                    graph[name] = [];
                }
                // left
                if (j - 1 >= 0 && maze[i][j - 1] === '1') {
                    graph[name].push(`${i}_${j - 1}`);
                }
                // right
                if (j + 1 < M && maze[i][j + 1] === '1') {
                    graph[name].push(`${i}_${j + 1}`);
                }
                // bottom
                if (i + 1 < N && maze[i + 1][j] === '1') {
                    graph[name].push(`${i + 1}_${j}`);
                }
                // top
                if (i - 1 >= 0 && maze[i - 1][j] === '1') {
                    graph[name].push(`${i - 1}_${j}`);
                }
                graph[name].sort()
            } else {

            }
        }
    }
    console.log({ graph })
    return graph;
}
// graph 자료구조와 startNode를 입력
const BFSTarget = (graph, startNode, targetNode) => {
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        console.log({ needVisit })
        const node = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
        console.log({ node });
        if (!visited.includes(node)) { // 해당 노드 방문이 처음이라면,
            visited.push(node);
            if (node === targetNode) {
                return visited;
            }
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return "Node not found";
};
function solution(real) {
    let [first, ...rest] = real;
    let [N, M] = first.split(" ").map(Number);
    let maze = makeMaze(rest);
    let graph = makeGraph(N, M, maze);
    // console.log(BFSTarget(graph, '0_0', `${N - 1}_${M - 1}`));
    let result = BFSTarget(graph, '0_0', `${N - 1}_${M - 1}`);
    let count = 0;
    console.log(count);
    console.log(result.length);
}
solution(real);