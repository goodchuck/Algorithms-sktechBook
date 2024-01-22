// 서울 지하철 2호선
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `12
1 3
3 4
4 5
5 6
6 7
7 8
8 4
2 3
7 9
9 12
7 10
10 11`

let [T, ...rests] = input.trim().split("\n");
T = Number(T)

function makeGraph(N, arrs) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        if (!graph[String(i + 1)]) {
            graph[String(i + 1)] = [];
        }
    }
    for (let i = 0; i < arrs.length; i++) {
        let [left, right] = arrs[i].split(" ");
        graph[String(left)].push(String(right));
        graph[String(right)].push(String(left));
        // graph[String(left)].sort((a, b) => Number(a) - Number(b))
        // graph[String(right)].sort((a, b) => Number(a) - Number(b))
    }
    return graph;
}


function bfs(graph, start) {
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

                // console.log({ start, neighbor })
                // if (cycle.find((c) => c === neighbor)) {
                //     return distance[neighbor];
                // }
            }
        }
        // console.log({ distance })
    }

    return distance

    // If the target is not reachable from the start node
    return -1;
}
function solution() {
    let cycleArrays = [];
    let isFind = false;
    let flag = 0;
    let graph = makeGraph(T, rests);
    let checkArrays = Array.from({ length: T + 1 }).fill(0);
    function dfs(L, idx) {
        if (flag) return;

        for (let x of graph[idx]) {
            if (!checkArrays[x]) {
                checkArrays[x] = 1; // 체크 배열은 방문시 체크하고 빠져나올 때 해제해 줘야 한다.
                dfs(L + 1, x);
                checkArrays[x] = 0;
            } else if (L >= 3 && x === start) {
                flag = 1;    // 방문한 노드가 3개 이상이며, 다음 노드가 시작 노드라면 사이클이다.
                cycleArrays = checkArrays.slice(); // 탈출 시 체크 배열을 복사한다.
                return;
            }
        }
    }
    let start = null;
    for (let graphKey in graph) {
        start = graphKey;
        checkArrays[Number(graphKey)] = 1;
        dfs(1, Number(graphKey))
        checkArrays[Number(graphKey)] = 0;
        if (isFind) break;
    }
    // console.log({ cycleArrays })

    let returns = Array.from({ length: T }).fill(Infinity);
    for (let i = 1; i <= T; i++) {
        if (!cycleArrays[i]) {
            let distances = bfs(graph, String(i), cycleArrays);
            for (let key in distances) {
                if (cycleArrays[Number(key)]) {
                    returns[i - 1] = Math.min(returns[i - 1], distances[key])
                }
            }
        }
        else {
            returns[i - 1] = 0;
        }

    }
    console.log(returns.join(" "));
}
solution();