// ABCDE
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6 5
0 1
0 2
0 3
0 4
0 5`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
rest = rest.map((row) => {
    row = row.trim().split(" ").map(Number);
    return row;
})

function makeGraph(N, arrs) {
    const graph = {};
    for (let i = 0; i < N; i++) {
        if (!graph[String(i)]) {
            graph[String(i)] = [];
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
    let graph = makeGraph(N, rest);
    // console.log(N, graph)
    let returns = 0;
    for (let i = 0; i < N; i++) {
        let A = String(i);
        for (let B of graph[String(i)]) {
            if (B === A) continue;
            for (let C of graph[B]) {
                if (C === B || C === A) continue;
                for (let D of graph[C]) {
                    if (D === C || D === B || D === A) continue;
                    for (let E of graph[D]) {
                        if (E === D || E === C || E === B || E === A) continue;
                        // console.log({ A, B, C, D, E })
                        returns = 1;
                        break;

                    }
                }
            }

        }
    }


    console.log(returns);

}
solution();