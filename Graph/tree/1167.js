// 트리의 지름
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7
1 2 1 3 1 4 1 5 1 -1
2 1 1 6 5 7 5 -1
3 1 1 -1
4 1 1 -1
5 1 1 -1
6 2 5 -1
7 2 5 -1`

let [N, ...rests] = input.trim().split("\n");
N = Number(N);

function makeGraph(arrs) {
    let graph = {}
    for (let row of arrs) {
        let [par, ...rests] = row.split(" ");
        let ind = 0;
        while (rests[ind] !== '-1') {
            // console.log(rests[ind])
            let node = rests[ind];
            let weight = rests[ind + 1];
            if (!graph[par]) {
                graph[par] = [];
            }
            // if (!graph[node]) {
            //     graph[node] = [];
            // }
            graph[par].push([node, Number(weight)]);
            // graph[node].push([par, Number(weight)]);
            ind += 2;
        }
    }
    return graph;
}

let checkArrays = Array.from({ length: N + 1 }).fill(false);
async function solution() {
    let graph = makeGraph(rests);
    // console.log(graph)
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