// DFS 스페셜 저지
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
1 2
1 3
2 4
1 2 4 3`

let real = input.trim().split("\n");
let [first, ...rests] = real;


function makeGraph(arr) {
    let graph = {};
    for (let row of arr) {
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


function solution() {
    let lastInput = rests.pop().split(" ").map(Number);
    let graph = makeGraph(rests);
    let visitedArray = Array.from({ length: Number(first) + 1 }).fill(false);
    let idx = 1;
    let flag = true;
    function dfs(x) {
        if (visitedArray[x]) {
            return;
        }
        visitedArray[x] = true;

        let newSet = new Set();
        for (let y of graph[x]) {
            if (!visitedArray[y]) {
                newSet.add(Number(y));
            }
        }
        // console.log({ newSet }, newSet.size)
        // console.log(x, idx, lastInput[idx], lastInput)
        if (newSet.size === 0) return;

        if (newSet.has(lastInput[idx])) {

            dfs(lastInput[idx++]);
        }
        else {
            flag = false;
        }
    }
    dfs(1);
    if (flag) {
        console.log(1);
    }
    else {
        console.log(0);
    }
}

solution();