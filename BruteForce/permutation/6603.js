// 로또
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `8 1 2 3 5 8 13 21 34
0`

let real = input.trim().split("\n");
let rest = real;
// rest = rest.map((row) => {
//     row = row.split(" ").map(Number);
//     return row;
// })
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
    let returns = [];

    for (let row of rest) {
        if (row === '0') break;
        let [T, ...rests] = row.trim().split(" ").map(Number);
        let Array_01 = [];
        for (let i = 0; i < rests.length; i++) {
            if (i < 6) {
                Array_01.push(1);
            }
            else {
                Array_01.push(0);
            }
        }
        Array_01.reverse();
        // console.log({ Array_01 })
        let isNP = null;
        let innerReturns = [];
        let size = 0;
        do {
            let ans = [];
            Array_01.forEach((n, i) => {
                if (n === 1) {
                    ans.push(rests[i]);
                }
            })
            // console.log({ ans, Array_01 })
            innerReturns.push(ans.join(" "));
            size++;
            isNP = await nextPermutation(Array_01, T);

        }
        while (isNP)
        innerReturns.reverse();
        returns.push(...innerReturns, " ");
        // console.log({ innerReturns })
    }

    console.log(returns.join("\n"))


}
solution();