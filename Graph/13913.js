// 숨바꼭질 4
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `24 300`

let [first] = input.trim().split("\n");
let [N, K] = first.split(" ").map(Number);

function solution() {
    let que = [];
    que.push(N);
    let max = 100000;
    let min = 0;
    let distances = [];
    let checkArrays = Array.from({ length: 10000 + 1 }).fill(false);
    let fromArrays = Array.from({ length: 100000 + 1 }).fill(-1);
    distances[N] = 0;
    let ans = null;
    let returnNode = null;
    while (que.length !== 0) {
        let node = que.shift();
        checkArrays[node] = true;
        if (node === K) {
            ans = distances[node];
            returnNode = node;
            break;
        }
        // X+1
        if (!checkArrays[node + 1] && node + 1 <= max) {
            que.push(node + 1);
            distances[node + 1] = distances[node] + 1
            checkArrays[node + 1] = true;
            fromArrays[node + 1] = node;
        }

        // X-1
        if (!checkArrays[node - 1] && node - 1 >= min) {
            que.push(node - 1);
            distances[node - 1] = distances[node] + 1
            checkArrays[node - 1] = true;
            fromArrays[node - 1] = node;
        }

        // 2*X
        if (!checkArrays[2 * (node)] && node * 2 <= max) {
            que.push(node * 2);
            distances[node * 2] = distances[node] + 1
            checkArrays[node * 2] = true;
            fromArrays[node * 2] = node;
        }
        // console.log('node,que,distances', node, que, distances[node])
    }
    // console.log({ distances })
    // console.log(fromArrays[returnNode]);
    let t = returnNode;
    let returns = [];
    while (t !== -1) {
        returns.push(t);
        t = fromArrays[t];
        // console.log({ t });
    }
    // console.log({ fromArrays }, t)
    console.log(ans)
    console.log(returns.reverse().join(" "))
}
solution();