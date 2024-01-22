// 연결 요소의 개수
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
rest = rest.map((row) => {
    row = row.trim().split(" ").map(Number);
    return row;
})


const makeAdjacencyMatrix = (N, arrs) => {
    const AM = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }).fill(0));
    for (let i = 0; i < arrs.length; i++) {
        let left = arrs[i][0];
        let right = arrs[i][1];
        AM[left][right] = 1;
        AM[right][left] = 1;
    }
    return AM;
}

async function solution() {
    let graph = makeAdjacencyMatrix(N, rest);
    let checkArrays = Array.from({ length: N + 1 }).fill(false);
    let count = 0;
    const DFS2 = (x) => {
        checkArrays[x] = true;
        for (let i = 1; i <= N; i++) {
            if (graph[x][i] === 1 && checkArrays[i] === false) {
                DFS2(i);
            }
        }
    }

    for (let i = 1; i <= N; i++) {
        if (!checkArrays[i]) {
            DFS2(i);
            count++;
        }
    }
    console.log(count);
}
solution();