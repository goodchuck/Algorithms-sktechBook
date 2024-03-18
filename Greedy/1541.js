// 잃어버린 괄호
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `00009-00009`

let real = input.trim().split("\n");
let [first, rest] = real;



function solution() {
    let numArrays = [];
    let targetNum = '';
    for (let t = 0; t < first.length; t++) {
        let target = first[t];
        // console.log(target)
        if (target !== '-' && target !== '+') {
            targetNum += target;
            // console.log({ targetNum })
            if (t === first.length - 1) {
                numArrays.push(targetNum);
            }
        }
        else {
            numArrays.push(targetNum);
            numArrays.push(target);

            targetNum = '';
        }
    }

    // console.log(numArrays);

    let answer = 0;
    let isMinus = false;
    for (let i = 0; i < numArrays.length; i++) {
        let target = numArrays[i];
        if (i === 0) {
            answer += Number(target);
        }
        else if (target === '-') {
            isMinus = true;
        }
        else if (target === '+') {
            if (isMinus) continue;
            isMinus = false;
        }
        else {
            if (isMinus) {
                answer -= Number(target);
                continue;
            }
            answer += Number(target);
        }
    }
    console.log(answer)
}

solution();
