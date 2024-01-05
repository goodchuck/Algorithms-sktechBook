var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 1 1
2 3`
let real = input.trim().split("\n");
const DFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            needVisit = [...graph[`${node}`], ...needVisit];
        }
    }
    return visited;
};

const BFS = (graph, startNode) => {
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
        if (!visited.includes(node)) { // 해당 노드 방문이 처음이라면,
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
};
async function solution(real) {
    let [first, ...rest] = real
    let [N, M, V] = first.split(" ").map(Number);
    // console.log(N, M, V)
    let results = [];
    let graph = {}
    for await (let row of rest) {
        let [left, right] = row.split(" ");
        if (!graph[left]) {
            graph[left] = [];
            graph[left].push(right);
        }
        else {
            graph[left].push(right);
        }

        if (!graph[right]) {
            graph[right] = [];
            graph[right].push(left);
        }
        else {
            graph[right].push(left);
        }
        graph[left].sort((a, b) => Number(a) - Number(b));
        graph[right].sort((a, b) => Number(a) - Number(b));
    }
    if (!graph[String(V)]) {
        console.log(V);
        console.log(V);
    }
    else if (V > N) {
        // results.push(V);
        // results.push(V);
        // console.log(results.join('\n'));
    }
    else if (Object.keys(graph).length === 0) {
        results.push(V);
        results.push(V);
        console.log(results.join('\n'));
    }
    else {
        // console.log(graph);
        let DFSResult = DFS(graph, String(V));
        results.push(DFSResult.join(' '));
        let BFSResult = BFS(graph, String(V));
        results.push(BFSResult.join(' '));
        console.log(results.join('\n'));
    }
}
solution(real);