// 카드
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
123
321
123
321
5
5`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);

async function solution() {
    let arr = rest.map(r => BigInt(r)).sort((a, b) => {
        return a.toString().localeCompare(b.toString());
    })
    let index = 0;
    let maxes = -Infinity;
    let ans = 1;
    let answer;
    while (index < N) {
        let targetNum = arr[index];
        if (index === 0) {
            maxes = 1;
            answer = targetNum
        } else {
            let prev = arr[index - 1];
            if (targetNum === prev) {
                ans += 1;
            } else {
                ans = 1;
            }

            if (maxes < ans) {
                maxes = ans;
                answer = targetNum
            }
            else if (maxes === ans) {
                if (targetNum < answer) {
                    answer = targetNum
                }
            }
        }
        index++;
    }
    console.log(answer.toString());
}

solution();
