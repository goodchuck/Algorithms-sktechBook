// 이분 그래프
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
5 4
1 2
3 4
4 5
5 3`

let real = input.trim().split("\n");
let [T, ...rest] = real;
T = Number(T)
rest = rest.map((row) => {
    row = row.trim().split(" ").map(Number);
    return row;
})

function makeGraph(N, arrs) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        if (!graph[String(i + 1)]) {
            graph[String(i + 1)] = [];
        }
    }
    for (let i = 0; i < arrs.length; i++) {
        let left = arrs[i][0];
        let right = arrs[i][1];
        graph[String(left)].push(String(right));
        graph[String(right)].push(String(left));
    }
    return graph;
}
async function solution() {
    let index = 0;
    let returns = [];
    let rl = rest.length;
    let checkArrays = null;
    let edges = null;
    let graph = null;
    let [V, E] = [null, null];
    const DFS = (x, team) => {
        // console.log({ graph, x })
        checkArrays[x] = team;
        let len = graph[x].length;
        if (len === 0) return;
        for (let i = 0; i < len; i++) {
            let t = graph[x][i];
            if (checkArrays[Number(t)] === 0) {
                DFS(t, 3 - team);
            }
        }
    }
    while (index < rl) {
        let isDivid = 'YES';
        [V, E] = rest[index];
        checkArrays = Array.from({ length: V + 1 }, () => 0)
        // console.log(V, E);
        edges = rest.slice(index + 1, index + E + 1);
        // graph = makeAdjacencyMatrix(V, edges);
        graph = makeGraph(V, edges);
        // console.log({ edges, graph })

        for (let key of Object.keys(graph).sort()) {
            let t = graph[key];
            // console.log({ graph, key, t })
            for (let row of t) {
                if (checkArrays[Number(row)] === 0) {
                    DFS(row, 1);
                }
            }

        }

        // console.log({ checkArrays })
        // console.log({ graph })
        for (let key of Object.keys(graph).sort()) {
            let i = key;
            for (let j of graph[key]) {
                if (checkArrays[i] === checkArrays[j]) {
                    isDivid = "NO";
                    break;
                }
            }
            if (isDivid === "NO") break;
        }

        returns.push(isDivid)
        index += E + 1;
    }
    console.log(returns.join("\n"))
}
solution();