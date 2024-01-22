// 차이를 최대로
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
20 1 15 8 4 10`

let real = input.trim().split("\n");
let [N, sec] = real;
N = Number(N);
sec = sec.trim().split(" ").map(Number).sort((a, b) => a - b);

function swap(arr, index1, index2) {
    // 임시 변수를 사용하여 두 값을 교환
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
async function nextPermutation(arr, n) {
    let i = n - 1;
    while (i > 0 && arr[i - 1] >= arr[i]) i -= 1;
    if (i <= 0) return false;
    let j = n - 1;
    while (arr[j] <= arr[i - 1]) j -= 1;
    // console.log({ i, j })
    // console.log('1', arr);
    swap(arr, i - 1, j);
    // console.log('2', arr);
    j = n - 1;
    while (i < j) {
        swap(arr, i, j);
        // console.log('3', arr);
        i += 1; j -= 1;
    }
    return true;
}

async function solution() {
    let isNP = null;
    let maxes = -Infinity;

    do {
        let sum = 0;
        for (let i = 0; i < N - 1; i++) {
            let left = sec[i];
            let right = sec[i + 1];
            sum += Math.abs(left - right);
        }
        maxes = Math.max(maxes, sum);
        isNP = await nextPermutation(sec, N);
        // console.log("반복중임?", isNP);
    }
    while (isNP)
    console.log(maxes);
}
solution();