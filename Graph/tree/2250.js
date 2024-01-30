// 트리의 높이와 너비
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
5 -1 -1
1 -1 4
4 -1 -1
2 1 3
3 5 -1`

let [N, ...rests] = input.trim().split("\n");
N = Number(N);

function findRoot(arrs) {
    let graph = {};
    for (let row of arrs) {
        let [par, left, right] = row.split(" ");
        if (!graph[par]) graph[par] = 0;
        graph[par]++;
        if (left !== '-1') {
            if (!graph[left]) graph[left] = 0;
            graph[left]++;
        }
        if (right !== '-1') {
            if (!graph[right]) graph[right] = 0;
            graph[right]++;
        }
    }
    let mins = Infinity;
    let returns = null;
    for (let key in graph) {
        let value = graph[key];
        if (value < mins) {
            returns = key;
            mins = value;
        }
    }
    return returns;
}

function makeGraphForTree(arrs) {
    let graph = {};
    for (let row of arrs) {
        let [par, left, right] = row.split(" ");
        if (!graph[par]) graph[par] = { left: null, right: null };
        // if (!graph[left]) graph[left] = { left: null, right: null };
        graph[par]['left'] = left;
        // if (!graph[right]) graph[right] = { left: null, right: null };
        graph[par]['right'] = right;


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

function solution() {
    let rootNode = findRoot(rests);
    let graphForTree = makeGraphForTree(rests);
    inorder(graphForTree, rootNode, 1)
    // console.log("root", findRoot(graph['2']));
    console.log(returns.join(" "));
}
solution();