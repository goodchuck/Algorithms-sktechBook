var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `19 3`
let real = input.trim().split("\n");
function createArrayFrom1ToN(N) {
    const array = [];
    for (let i = 1; i <= N; i++) {
        array.push(i);

    }
    return array;
}

const binarySearch = (list, target, left, right) => {
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
function solution(real) {
    let [N, K] = real[0].split(" ").map(Number);
    let arr = createArrayFrom1ToN(N);
    let length = arr.length;
    // console.log(arr);
    let index = K - 1;
    let returns = [];
    while (length !== 0) {
        if (index >= length) {
            index = (index % length);
            // console.log("넘", index)
        }
        // console.log('arr,arrindex', arr, length, index, arr[index]);
        let fi = binarySearch(arr, arr[index], 0, length - 1);
        returns.push(arr[fi]);
        arr.splice(fi, 1);

        length--;
        index += (K - 1)
    }
    console.log(`<${returns.join(", ")}>`);
}
solution(real);