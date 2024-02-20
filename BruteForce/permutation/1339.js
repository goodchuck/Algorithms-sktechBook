// 단어 수학
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
GCF
ACDEB`

let real = input.trim().split("\n");
let [N, ...rests] = real;
N = Number(N);
rests = rests.map(v => [...v]);
let numsArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

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

let alphaArray = [];
for (let row of rests) {
    for (let alpha of row) {
        if (!alphaArray.find(al => al === alpha)) {
            alphaArray.push(alpha);
        }
    }
}
let slicedNumsArray = numsArray.slice(0, alphaArray.length)
let sNALength = slicedNumsArray.length;
async function solution() {
    let maxes = -Infinity;
    let alphaBetObject = {};
    do {
        // console.log(slicedNumsArray)

        let sums = 0;
        // 알파벳에 값 대입
        for (let i = 0; i < alphaArray.length; i++) {
            alphaBetObject[alphaArray[i]] = slicedNumsArray[i];
        }


        for (let i = 0; i < rests.length; i++) {
            let row = rests[i];
            let innerSums = 0;
            for (let j = 0; j < row.length; j++) {
                let targetAlphaBet = row[j];
                let nums = alphaBetObject[targetAlphaBet];
                innerSums = innerSums * 10 + nums;
            }
            sums += innerSums;
        }
        if (sums > maxes) {
            maxes = sums;
        }
    }
    while (await prevPermutation(slicedNumsArray, sNALength))
    console.log(maxes);
}
solution();