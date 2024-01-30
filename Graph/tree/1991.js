// 트리 순회
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`

let [N, ...rests] = input.trim().split("\n");
N = Number(N);
let checkArrays = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))

let preorderResults = '';
let inorderResults = '';
let postorderResults = '';
function preorder(graph, x) {
    if (x === '.') return;
    preorderResults += x;
    preorder(graph, graph[x].left);
    preorder(graph, graph[x].right);
}
function inorder(graph, x) {
    if (x === '.') return;
    inorder(graph, graph[x].left);
    inorderResults += x;
    inorder(graph, graph[x].right);
}

function postorder(graph, x) {
    if (x === '.') return;
    postorder(graph, graph[x].left);
    postorder(graph, graph[x].right);
    postorderResults += x;
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

function solution() {
    let graph = makeGraphForTree(rests);
    let returns = [];
    preorder(graph, 'A')
    inorder(graph, 'A')
    postorder(graph, 'A')
    returns.push(preorderResults);
    returns.push(inorderResults);
    returns.push(postorderResults);
    console.log(returns.join("\n"))
}
solution();