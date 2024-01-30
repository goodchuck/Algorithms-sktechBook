// 트리의 지름
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
1 2 1
1 3 5
1 4 2`

let [N, ...rests] = input.trim().split("\n");
N = Number(N);

function makeGraph(arrs, weightArray) {
    let graph = {}
    for (let row of arrs) {
        let [left, right, weight] = row.split(" ");
        if (!graph[left]) {
            graph[left] = [];
        }
        graph[left].push([right, Number(weight)]);
        if (!graph[right]) {
            graph[right] = [];
        }
        graph[right].push([left, Number(weight)]);
        // weightArray[right] = Number(weight);
    }
    return graph;
}

let checkArrays = Array.from({ length: N + 1 }).fill(false);
async function solution() {
    let graph = makeGraph(rests);

    if (N === 1) {
        console.log(0);
        return;
    }
    let max = { node: null, distance: 0 }
    await dfs('1', 0);
    checkArrays.fill(false);
    max.distance = 0;
    await dfs(max.node, 0);

    async function dfs(startNode, distance) {
        checkArrays[startNode] = true;
        if (distance > max.distance) {
            max.distance = distance;
            max.node = startNode;
        }
        for (let [i, weight] of graph[startNode]) {
            if (!checkArrays[i]) {
                checkArrays[i] = true;
                dfs(i, distance + weight);
                checkArrays[i] = false;
            }

        }
    }

    console.log(max.distance)
}
solution();