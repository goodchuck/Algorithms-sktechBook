// 소수 경로
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
1033 8179
1373 8017
1033 1033`


let real = input.trim().split("\n");
let [T, ...rests] = real;
let gSOEArray = Array.from({ length: 10000 }, (v, k) => k);

let gSOE = getSieveOfEratosthenes(0, 9999, gSOEArray);
// console.log(gSOE);
function replaceDigitWithZero(number, position) {
    // 입력된 숫자를 문자열로 변환하여 처리
    let numStr = number.toString();

    // 위치가 올바른지 확인
    if (position < 0 || position >= numStr.length) {
        return "올바르지 않은 위치입니다.";
    }

    // 문자열의 해당 위치의 문자를 '0'으로 변경
    let resultStr = numStr.substring(0, position) + '0' + numStr.substring(position + 1);

    // 변경된 문자열을 숫자로 변환하여 반환
    return parseInt(resultStr);
}


function getSieveOfEratosthenes(start, end, arr) {
    for (let i = 2; i <= end; i++) {
        if (arr[i] === 0) continue;

        for (let j = i * 2; j <= end; j += i) {
            arr[j] = 0;
        }
    }
    // return arr.filter(n => n !== 0 && n !== 1 && n >= 1000);
    return arr;
}

function check(num, distance, checkArrays, min, max) {
    let newQue = [];
    // 일의 자리수 변환
    for (let i = 0; i < 10; i++) {
        let newNum = replaceDigitWithZero(num, 3);
        newNum += i;
        // if (newNum > max || newNum < min) continue;
        if (gSOE[newNum] !== 0 && !checkArrays[newNum]) {

            checkArrays[newNum] = distance;
            newQue.push(newNum);
        }
    }

    // 10의 자릿수 변환
    for (let i = 0; i < 10; i++) {
        let newNum = replaceDigitWithZero(num, 2);
        newNum += i * 10;
        // if (newNum > max || newNum < min) continue;
        if (gSOE[newNum] && !checkArrays[newNum]) {
            checkArrays[newNum] = distance;
            newQue.push(newNum);
        }
    }

    // 100의 자릿수 변환
    for (let i = 0; i < 10; i++) {
        let newNum = replaceDigitWithZero(num, 1);
        newNum += i * 100;
        // if (newNum > max || newNum < min) continue;
        if (gSOE[newNum] && !checkArrays[newNum]) {
            checkArrays[newNum] = distance;
            newQue.push(newNum);
        }
    }
    // 1000의 자릿수 변환
    for (let i = 0; i < 10; i++) {
        let newNum = replaceDigitWithZero(num, 0);
        newNum += i * 1000;
        // if (newNum > max || newNum < min) continue;
        if (String(newNum).length !== 4) continue;
        if (gSOE[newNum] && !checkArrays[newNum]) {
            checkArrays[newNum] = distance;
            newQue.push(newNum);
        }
    }

    return newQue;
}

function solution() {
    let returns = [];

    for (let row of rests) {
        let checkArrays = Array.from({ length: 10000 }).fill(0);
        let [n1, n2] = row.split(" ").map(Number);
        let que = [];
        que.push(n1);
        checkArrays[n1] = 1;
        while (que.length !== 0) {
            let node = que.shift();
            let distance = checkArrays[node];
            // console.log({ node, distance })
            if (node === n2) {
                // console.log({ node, distance, row })
                returns.push(distance - 1)
                break;
            }
            let newQue = check(node, distance + 1, checkArrays, n1, n2)
            que.push(...newQue);
        }
    }
    console.log(returns.join("\n"));

}
solution();