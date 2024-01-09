// 일곱 난쟁이
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `11 
12
13
14
15
16
17
18
19`

let real = input.trim().split("\n");
let found = false;
function solution(real) {
    let arr = real;
    arr = arr.map(Number).sort((a, b) => a - b);
    // console.log(arr)
    let sum = arr.reduce((acc, cv) => acc + cv, 0);
    let returns = [];
    for (let i = 0; i < 9; i++) {
        for (let j = i + 1; j < 9; j++) {

            if (sum - arr[i] - arr[j] === 100) {
                // console.log({ i, j })
                for (let k = 0; k < 9; k++) {
                    if (k === i) {

                    } else if (k === j) {

                    }
                    else {
                        returns.push(arr[k]);
                        // console.log(arr[k])
                    }

                }
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    console.log(returns.join('\n'))
}
solution(real);