// 이전 순열
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
5 4 3 2 1`

let real = input.trim().split("\n");
let [N, sec] = real;
N = Number(N);
sec = sec.trim().split(" ").map(Number);

function swap(arr, index1, index2) {
    // 임시 변수를 사용하여 두 값을 교환
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
async function prevPermutation(arr, n) {
    let i = n - 1;
    while (i > 0 && arr[i - 1] <= arr[i]) i -= 1;
    if (i <= 0) return false;
    let j = n - 1;
    while (arr[j] >= arr[i - 1]) j -= 1;
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

    if (await prevPermutation(sec, N)) {
        console.log(sec.join(" ") + '\n')
    }
    else {
        console.log(-1);
    }
}
solution();