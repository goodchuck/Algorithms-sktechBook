// 이모티콘
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `997`

let [S, ...rests] = input.trim().split("\n");
S = Number(S);

function solution() {
    // let distances = Array.from({ length: 7000 + 1 }, () => Array.from({ length: 7000 + 1 }).fill(0))
    let distances = Array.from({ length: 10000 + 1 }, () => []);
    // let distances = Array.from({ length: 2500 + 1 }, () => Array.from({ length: 2500 + 1 }).fill(0));
    let que = [];


    que.push(`1_0`);
    distances[1][0] = 0;
    let ans = null;
    while (que.length !== 0) {
        // console.log({ que })
        let [left, right] = que.shift().split("_").map(Number);
        // checkArrays[left][right] = true;
        // console.log({ left, right }, distances[left][right])
        let tar = distances[left][right];
        if (left === S) {
            ans = tar;
            break;
        }
        // 화면에 있는 이모티콘을 모두 복사해서 클립보드에 저장
        if (!distances[left][left]) {
            // distances[left][left] = true;
            que.push(`${left}_${left}`);
            distances[left][left] = tar + 1
        }

        // 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기 한다.
        if (!distances[left + right][right] && tar) {
            que.push(`${left + right}_${right}`);
            // distances[left + right][right] = true;
            distances[left + right][right] = tar + 1
            if (left + right === S) {
                ans = tar + 1;
                break;
            }
        }

        // 화면에 있는 이모티콘 중 하나를 삭제한다.
        if (left - 1 >= 0 && !distances[left - 1][right] && tar) {
            que.push(`${left - 1}_${right}`);
            // distances[left - 1][right] = true;
            distances[left - 1][right] = tar + 1
        }

        // console.log('node,que,distances', node, que, distances[node])
    }
    console.log(ans)
}
solution();