// 바이러스
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`

let real = input.trim().split("\n");
let [N, M, ...rest] = real;
N = Number(N);
M = Number(M);
rest = rest.map((row) => {
    row = row.trim().split(" ").map(Number);
    return row;
})
const DFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
};

function makeGraph(N, arrs) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        if (!graph[String(i + 1)]) {
            graph[String(i + 1)] = [];
        }
    }
    for (let i = 0; i < arrs.length; i++) {
        let left = arrs[i][0];
        let right = arrs[i][1];
        graph[String(left)].push(String(right));
        graph[String(right)].push(String(left));
    }
    return graph;
}

async function solution() {
    let graph = makeGraph(N, rest);
    let dfs = DFS(graph, '1');
    // console.log({ graph, dfs })


    console.log(dfs.length - 1);

}
solution();