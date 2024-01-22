// DFS 재귀 함수 버전
const DFS2 = (x) => {
    check[x] = true;
    for (let i = 1; i <= n; i++) {
        if (a[x][i] === 1 && check[i] === false) {
            DFS2(i);
        }
    }
}

const makeAdjacencyMatrix = (N, arrs) => {
    const AM = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }).fill(0));
    for (let i = 0; i < arrs.length; i++) {
        let left = arrs[i][0];
        let right = arrs[i][1];
        AM[left][right] = 1;
        AM[right][left] = 1;
    }
    return AM;
}











// const graph = {
//     A: ['B', 'C'],
//     B: ['A', 'D'],
//     C: ['A', 'G', 'H', 'I'],
//     D: ['B', 'E', 'F'],
//     E: ['D'],
//     F: ['D'],
//     G: ['C'],
//     H: ['C'],
//     I: ['C', 'J'],
//     J: ['I']
//   };

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

// graph 자료구조와 startNode를 입력
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

// graph 자료구조와 startNode를 입력
const BFSTarget = (graph, startNode, targetNode) => {
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
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