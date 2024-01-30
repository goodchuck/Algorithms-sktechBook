// 숨바꼭질 2
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1 4`

let [first] = input.trim().split("\n");
let [N, K] = first.split(" ").map(Number);

function solution() {
    let que = [];
    que.push(N);
    let max = 100000;
    let min = 0;
    let distances = [];
    let checkArrays = Array.from({ length: 100000 + 1 }).fill(false);
    let cntArrays = Array.from({ length: 100000 + 1 }).fill(0);
    distances[N] = 0;
    cntArrays[N] = 1;
    let ans = Infinity;
    let returnCount = 0;
    while (que.length !== 0) {
        let node = que.shift();
        checkArrays[node] = true;

        if (node === K && distances[K] <= ans) {
            // console.log("한번만 오지?")
            ans = distances[K];
            returnCount += cntArrays[K];
            break;
        }
        // console.log({ node, que })
        // X+1
        if (!checkArrays[node + 1] && node + 1 <= max) {
            que.push(node + 1);
            checkArrays[node + 1] = true;
            distances[node + 1] = distances[node] + 1
            cntArrays[node + 1] += cntArrays[node];
        }
        else if (distances[node + 1] === distances[node] + 1) {
            cntArrays[node + 1] += cntArrays[node];
        }

        // X-1
        if (!checkArrays[node - 1] && node - 1 >= min) {
            que.push(node - 1);
            checkArrays[node - 1] = true;
            distances[node - 1] = distances[node] + 1
            cntArrays[node - 1] += cntArrays[node];

        }
        else if (distances[node - 1] === distances[node] + 1) {
            cntArrays[node - 1] += cntArrays[node];
        }

        // 2*X
        if (!checkArrays[2 * (node)] && node * 2 <= max) {
            que.push(node * 2);
            checkArrays[node * 2] = true;
            distances[node * 2] = distances[node] + 1
            cntArrays[node * 2] += cntArrays[node];

        }
        else if (distances[node * 2] === distances[node] + 1) {
            cntArrays[node * 2] += cntArrays[node];
        }
        // console.log('node,que,distances', node, que, distances[node])
    }
    console.log(distances[K])
    console.log(cntArrays[K]);
}
solution();