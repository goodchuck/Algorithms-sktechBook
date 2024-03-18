// 수 묶기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
4
4
4
4`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ");


function solution() {
    let answer = 0;
    rest = rest.map(Number).sort((a, b) => a - b);
    let minusArray = rest.filter(r => r <= 0);
    let plusArray = rest.filter(r => r > 0).reverse();

    let minusIndex = 0;
    while (minusIndex < minusArray.length) {
        let current = minusArray[minusIndex];
        let next = minusArray[minusIndex + 1];
        // console.log('minus', current, next);
        if (next <= 0) {
            answer += current * next
            minusIndex += 2;
        }
        else {
            answer += current;
            minusIndex++;
        }
        // console.log({ minusIndex })
    }

    let plusIndex = 0;
    while (plusIndex < plusArray.length) {
        let current = plusArray[plusIndex];
        let next = plusArray[plusIndex + 1];
        // console.log('plus', current, next);
        if (next > 1) {
            answer += current * next
            plusIndex += 2;
        }
        else {
            answer += current;
            plusIndex++;
        }
        // console.log({ plusIndex })
    }

    // console.log({ answer, rest, minusArray, plusArray })
    console.log(answer)
}

solution();
