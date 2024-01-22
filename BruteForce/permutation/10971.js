// 외판원 순회2
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
0 1 0 0
0 0 1 0
0 0 0 1
1 0 0 0`

let real = input.trim().split("\n");
let [N, ...rest] = real;
N = Number(N);
rest = rest.map((row) => {
    row = row.split(" ").map(Number);
    return row;
})
// sec = sec.trim().split(" ").map(Number);

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
    let arrs = [];
    for (let i = 1; i <= N; i++) {
        arrs.push(i);
    }

    let mins = Infinity;
    let isNP = null;
    // for(let i=0; i<N; i++){
    //     for(let j=0;)
    // }
    // returns.push(arrs.join(" "));
    do {
        let sum = 0;
        let isFind = false;
        for (let i = 0; i < N; i++) {
            let left = null;
            let right = null;
            if (i !== N - 1) {
                left = arrs[i]
                right = arrs[i + 1];
            }
            else {
                left = arrs[i]
                right = arrs[0];
            }
            // console.log({ left, right })
            let isAv = rest[left - 1][right - 1]
            if (isAv !== 0) {
                sum += isAv
            } else {
                isFind = true;
                break;
            }
        }
        if (!isFind) {
            mins = Math.min(mins, sum);
        }

        // console.log(mins, sum);
        isNP = await nextPermutation(arrs, N);
    }
    while (isNP)
    console.log(mins)
}
solution();