var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`
let real = input.trim().split("\n");

const binarySearch = async (list, target, left, right) => {
    let mid = 0;

    while (left <= right) {
        // 가운데 인덱스
        mid = Math.floor((left + right) / 2);

        if (list[mid] === target) {
            return mid;
        }

        // 대소 비교로 범위 지정
        if (list[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

async function solution(real) {
    let [N, arrN, M, arrM] = real;
    arrN = arrN.split(" ").map(Number).sort((a, b) => a - b);
    arrM = arrM.split(" ").map(Number);
    let results = [];

    // let sortedArr = arrM.split(" ").map(Number).sort((a, b) => a - b);
    // for (let i = 0; i < sortedArr.length; i++) {
    //     let n = sortedArr[i];
    //     // console.log(n, results)
    //     let find = await binarySearch(results, n, 0, results.length);
    //     // console.log({ find })
    //     if (find === -1) {
    //         results.push(n);
    //     }
    // }

    let newR = [];
    // console.log(results)
    console.log(arrN, arrM);
    for (let j = 0; j < arrM.length; j++) {
        let find = await binarySearch(arrN, arrM[j], 0, arrN.length);
        // console.log({ find });
        if (find !== -1) {
            newR.push(1)
        } else {
            newR.push(0);
        }
    }

    console.log(newR.join(" "));



}
solution(real);