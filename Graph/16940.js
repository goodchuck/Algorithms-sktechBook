// BFS 스페셜 저지
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
1 2
1 3
2 4
1 3 2 4`
let real = input.trim().split("\n");
let [T, ...rests] = real;
T = Number(T)
let checkArrays = Array.from({ length: T }, () => Array.from({ length: T }).fill(false))
let distanceArrays = Array.from({ length: T }, () => Array.from({ length: T }).fill(0))
function makeGraph(T, arr) {
    let graph = {}
    for (let i = 1; i <= T; i++) {
        if (!graph[i]) {
            graph[i] = [];
        }
    }
    for (let row of arr) {
        let [left, right] = row.split(" ");
        graph[left].push(right);
        graph[right].push(left);
    }
    return graph
}

function solution() {
    // console.log({ N, M, maze })
    let s = rests.pop();
    s = s.split(" ").map(Number);
    let graph = makeGraph(Number(T), rests);
    let que = [];
    que.push('1');
    if (graph['1'].length === 0 || s[0] !== 1) {
        console.log(0);
        return;
    }
    checkArrays[1] = true;
    fromArrays[1] = 0;

    let m = 1;
    for (let i = 0; i < s.length; i++) {
        let node = que.shift();
        let cnt = 0;

        for (let innerNode of graph[node]) {
            if (!checkArrays[innerNode]) {
                fromArrays[innerNode] = Number(node);
                cnt++;
            }
        }
        for (let j = 0; j < cnt; j++) {
            if (m + j >= s.length || fromArrays[s[m + j]] !== Number(node)) {
                console.log(0);
                return;
            }
            que.push(s[m + j]);
            checkArrays[s[m + j]] = true;
        }
        m += cnt;
    }

    let ans = 1;
    console.log(ans);
}
solution();