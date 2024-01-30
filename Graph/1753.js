// 최단 경로
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6`

let [first, startNode, ...rests] = input.trim().split("\n");
let [V, E] = first.split(" ").map(Number);

function makeGraph(arrs) {
    let graph = {}
    for (let row of arrs) {
        let [left, right, weight] = row.split(" ");
        if (!graph[left]) {
            graph[left] = [];
        }
        graph[left].push([right, Number(weight)]);
    }
    return graph;
}

let checkArrays = Array.from({ length: V + 1 }).fill(false);
async function solution() {
    let graph = makeGraph(rests);
    console.log(graph)
    let que = [];
    que.push(startNode);
    let returns = [0];
    let ind = 1;
    while (que.length !== 0) {
        let node = que.shift();
        for (let innerNode of graph[node]) {
            if (Number(innerNode) === ind) {

            }
        }
    }
}
solution();