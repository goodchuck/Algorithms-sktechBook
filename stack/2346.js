// 2346문제는 node.js로 풀수 없는 문제라고 하는거같다.

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
3 2 1 -3 -1`
let real = input.trim().split("\n");

async function solution(real) {
    let [N, rest] = real;
    N = Number(N)
    let results = [];
    let arr = [];
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }
    // order
    let order = rest.split(" ").map(Number);
    let count = 0;
    let orderIndex = null;
    while (arr.length !== 0) {

        if (arr[0] === 1) {
            results.push(1);
            orderIndex = order[0];
        }

        if (orderIndex > 0) {
            let t = arr.shift();
            if (count === orderIndex - 1) {
                results.push(t);
                count = 0;
                orderIndex = order[t - 1];
                N--;
            } else if (t !== 1) {
                arr.push(t);
                count++;
            }
        }
        else if (orderIndex < 0) {
            let t = arr.pop();
            if (count === orderIndex + 1) {
                results.push(t);
                count = 0;
                orderIndex = order[t - 1];
                N--;
            } else if (t !== 1) {
                arr.unshift(t);
                count--;
            }
        }
        // console.log(t, arr, orderIndex);
    }
    console.log(results.join(' '))
}
solution(real);