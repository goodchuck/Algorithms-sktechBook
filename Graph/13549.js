// 숨바꼭질 3
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 6`
let [first] = input.trim().split("\n");
let [N, K] = first.split(" ").map(Number);

function solution() {
    let que = [];
    que.push(N);
    let max = 100000;
    let min = 0;
    let distances = [];
    let checkArrays = Array.from({ length: 10000 + 1 }).fill(false);
    distances[N] = 0;
    let ans = null;
    while (que.length !== 0) {
        let node = que.shift();
        if (node === K) {
            ans = distances[node];
            break;
        }
        // 2*X
        if (!checkArrays[2 * (node)] && node * 2 <= max) {
            que.unshift(node * 2);
            distances[node * 2] = distances[node]
            checkArrays[node * 2] = true;
        }
        // X-1
        if (!checkArrays[node - 1] && node - 1 >= min) {
            que.push(node - 1);
            distances[node - 1] = distances[node] + 1
            checkArrays[node - 1] = true;
        }
        // X+1
        if (!checkArrays[node + 1] && node + 1 <= max) {
            que.push(node + 1);
            distances[node + 1] = distances[node] + 1
            checkArrays[node + 1] = true;
        }



        // console.log('node,que,distances', node, que, distances[node])
    }
    // console.log({ distances })
    console.log(ans)
}
solution();