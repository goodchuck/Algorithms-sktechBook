// 숨바꼭질
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

let [first] = input.trim().split("\n");
let [N, K] = first.split(" ").map(Number);

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
    let que = [];
    que.push(N);
    let max = 100000;
    let min = 0;
    let distances = [];
    let checkArrays = Array.from({ length: 10000 + 1 }).fill(false);
    distances[N] = 0;
    let ans = null;
    while (que.length !== 0) {
        let node = que.shift();
        checkArrays[node] = true;
        if (node === K) {
            ans = distances[node];
            break;
        }
        // X+1
        if (!checkArrays[node + 1] && node + 1 <= max) {
            que.push(node + 1);
            distances[node + 1] = distances[node] + 1
            checkArrays[node + 1] = true;
        }

        // X-1
        if (!checkArrays[node - 1] && node - 1 >= min) {
            que.push(node - 1);
            distances[node - 1] = distances[node] + 1
            checkArrays[node - 1] = true;
        }

        // 2*X
        if (!checkArrays[2 * (node)] && node * 2 <= max) {
            que.push(node * 2);
            distances[node * 2] = distances[node] + 1
            checkArrays[node * 2] = true;
        }
        // console.log('node,que,distances', node, que, distances[node])
    }
    // console.log({ distances })
    console.log(ans)
}
solution();