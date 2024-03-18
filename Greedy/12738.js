// 가장 긴 증가하는 부분 수열 3
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `9
10 20 50 10 11 12 13 14 15`

let real = input.trim().split("\n");
let [first, rest] = real;
let [N, K] = first.split(" ").map(Number);
rest = rest.split(" ").map(Number);

function lowerBound(arr, target, low, high) {
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low; // target 이상의 값이 처음으로 나타나는 위치
}


function solution() {
    let answer = [];
    for (let i = 0; i < rest.length; i++) {
        let num = rest[i];
        if (i === 0) {
            answer.push(num);
        }
        else {
            let loB = lowerBound(answer, num, 0, answer.length);
            answer[loB] = num;
        }

    }
    console.log(answer.length);
}

solution();
