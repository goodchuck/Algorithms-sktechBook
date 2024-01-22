// N과 M(11)
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 4
1 1 2 2`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
let numArray = rest[0].trim().split(" ").map(Number).sort((a, b) => a - b);
// console.log({ numArray })
let checksArray = Array.from({ length: N + 1 }).fill(false);
let returns = [];
let arr = [];
let prevans = null;
async function go(index, n, m) {
    if (index === m) {
        // arr.shift();
        let re = arr.join(" ");
        let find = returns.find((ans) => ans === re)
        if (find) {

        }
        else {
            returns.push(re);
        }
        // if (prevans === re) {

        // }
        // else {
        //     returns.push(re);
        //     prevans = re;
        // }

        // console.log(re, find, returns)
        return;
    }
    for (let i = 0; i < numArray.length; i++) {
        // if (checksArray[i]) continue;
        // if (arr[index] > numArray[i]) continue;
        // checksArray[i] = true;
        // console.log({ arr, numArray, i, index })
        if (arr[index - 1] > numArray[i]) continue;



        arr[index] = numArray[i];

        // if (arr[index] > numArray[i]) {
        //     let re = arr.join(" ");
        //     returns.push(re);
        //     continue;
        // };
        // console.log('after', arr);
        go(index + 1, n, m);
        // checksArray[i] = false;
    }

}

async function solution() {

    go(0, N, M);

    console.log(returns.join('\n'));
}
solution();