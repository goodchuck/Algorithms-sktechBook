// 연산자 끼워넣기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
1 2 3 4 5 6
2 1 1 1`

let real = input.trim().split("\n");
let [N, sec, rest] = real;
N = Number(N);
let numArray = sec.split(" ").map(Number);
// + - x % 순
rest = rest.split(" ").map(Number);

let mins = Infinity;
let maxes = -Infinity;
function go(index, sum, rest) {
    if (index === numArray.length - 1) {
        maxes = Math.max(maxes, sum);
        mins = Math.min(mins, sum);

        return;
    }

    if (rest[0] !== 0) {
        rest[0] -= 1
        go(index + 1, sum + numArray[index + 1], rest)
        rest[0] += 1
    }
    if (rest[1] !== 0) {
        rest[1] -= 1
        go(index + 1, sum - numArray[index + 1], rest)
        rest[1] += 1
    }
    if (rest[2] !== 0) {
        rest[2] -= 1
        go(index + 1, sum * numArray[index + 1], rest)
        rest[2] += 1
    }
    if (rest[3] !== 0) {
        rest[3] -= 1
        let newSum;
        if (sum >= 0) {
            newSum = Math.floor(sum / numArray[index + 1])
        }
        else {
            newSum = -Math.floor(Math.abs(sum) / numArray[index + 1])
        }
        go(index + 1, newSum, rest)
        rest[3] += 1
    }
}

async function solution() {
    go(0, numArray[0], rest);
    let returns = [maxes, mins];
    console.log(returns.join("\n"));
}
solution();