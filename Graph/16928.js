// 뱀과 사다리 게임
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1 5
2 92
94 3
95 4
96 5
97 6
98 7`

let [first, ...rests] = input.trim().split("\n");
let [N, M] = first.split(" ").map(Number);
// 사다리
let goods = rests.slice(0, N);
// 뱀들
let snakes = rests.slice(N, N + M);


function solution() {
    let que = [1];
    let countArray = Array.from({ length: 101 }).fill(0);
    let checkArrays = Array.from({ length: 101 }).fill(false);
    checkArrays[1] = true;
    while (que.length !== 0) {
        let node = que.shift();
        let isGood = false;
        let isEvil = false;
        // console.log({ node, que }, countArray[node])
        if (node === 100) {
            // console.log({ node })
            console.log(countArray[node]);
            return;
        }
        for (let k = 1; k <= 6; k++) {
            let innerNode = node + k;
            // console.log('ca inner', countArray[innerNode], node, innerNode);
            if (!checkArrays[innerNode] && innerNode <= 100) {
                for (let good of goods) {
                    let [left, right] = good.split(" ").map(Number);
                    if (left === innerNode) {
                        if (checkArrays[right]) {
                            isGood = true;
                            break;
                        }
                        que.push(right);
                        countArray[right] = countArray[node] + 1;
                        checkArrays[right] = true;
                        isGood = true;
                        break;
                    }
                }
                if (isGood) {
                    isGood = false;
                    continue;
                };
                for (let snake of snakes) {
                    let [left, right] = snake.split(" ").map(Number);
                    if (left === innerNode) {
                        if (checkArrays[right]) {
                            isEvil = true;
                            break;
                        }
                        que.push(right);
                        countArray[right] = countArray[node] + 1;
                        checkArrays[right] = true;
                        isEvil = true;
                        break;
                    }
                }
                if (isEvil) {
                    isEvil = false;
                    continue;
                };
                que.push(innerNode);
                checkArrays[innerNode] = true;
                countArray[innerNode] = countArray[node] + 1
            }
        }
    }
}
solution();