var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2 4
50
200`
let real = input.trim().split("\n");

function isBool(arr, x, n) {
    let arrX = arr.map((num) => Math.floor(num / x))
    let sum = arrX.reduce((acc, cv) => acc + cv, 0);
    if (sum >= n) {
        return true;
    } else {
        return false;
    }
}

function mt(arr, n) {
    let maxN = Math.max(...arr);
    let left = 1;
    let right = maxN;
    let result = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (isBool(arr, mid, n)) {
            result = (Math.max(result, mid));
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return result;
}

function solution(real) {
    let [first, ...rest] = real
    let arr = rest.map(Number);
    console.log(arr);
    let [K, N] = first.trim().split(" ").map(Number);
    console.log(mt(arr, N));
}
solution(real);