// 트리의 부모 찾기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7
1 6
6 3
3 5
4 1
2 4
4 7`

let [N, ...rests] = input.trim().split("\n");
N = Number(N);

function makeGraph(arrs) {
    let graph = {}
    for (let row of arrs) {
        let [left, right] = row.split(" ");
        if (!graph[left]) {
            graph[left] = [];
        }
        graph[left].push(right);
        if (!graph[right]) {
            graph[right] = [];
        }
        graph[right].push(left);

    }
    return graph;
}

let returns = [1, 1];
let inorderResults = [null];
let xInd = 1;
function inorder(graph, x, height) {
    if (x === '-1') return;
    if (!inorderResults[height]) inorderResults.push([]);
    inorder(graph, graph[x].left, height + 1);
    inorderResults[height].push(xInd);
    xInd++;
    if (height === 1) {

    }
    else {
        let ans = (Math.max(...inorderResults[height]) - Math.min(...inorderResults[height])) + 1;
        if (ans > returns[1]) {
            returns[1] = ans;
            returns[0] = height;
        }
        else if (ans === returns[1]) {
            if (height < returns[0]) {
                returns[1] = ans;
                returns[0] = height;
            }
        }
    }


    inorder(graph, graph[x].right, height + 1);
}
let checkArrays = Array.from({ length: N + 1 }).fill(false);
let parentArray = Array.from({ length: N + 1 }).fill(-1);
function solution() {
    let graph = makeGraph(rests);
    let que = [];
    que.push('1');
    checkArrays[1] = true;
    parentArray[1] = 0;
    while (que.length !== 0) {
        let node = que.shift();
        for (let innerNode of graph[node]) {
            if (!checkArrays[innerNode]) {
                checkArrays[innerNode] = true;
                que.push(innerNode);
                parentArray[innerNode] = Number(node);
            }
        }
    }

    let returns = [];
    for (let i = 2; i <= N; i++) {
        returns.push(parentArray[i]);

    }
    console.log(returns.join("\n"))
}
solution();