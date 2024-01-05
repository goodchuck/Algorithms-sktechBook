var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
6
1
4
9
7`
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
    // let [first, ...array] = real;
    let sortedArr = real.map(Number).sort((a, b) => a - b);
    let results = [];
    for (let i = 0; i < sortedArr.length; i++) {
        let n = sortedArr[i]
        let find = await binarySearch(results, n, 0, results.length);
        // console.log(sortedArr, results, find, n);
        if (find === -1) {
            results.push(n)
        }


    }

    console.log(results.join('\n'))

}
solution(real);