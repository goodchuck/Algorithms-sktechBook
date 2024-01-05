var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
1
3
5
4
0
0
7
0
0
6`
let real = input.trim().split("\n");

function makeArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr[i] = i;
    }
    return arr;
}


function solution(real) {
    let [T, ...rest] = real;
    let arr = [];
    for (let row of rest) {
        let numRow = Number(row);
        if (numRow === 0) {
            arr.pop();
        }
        else {
            arr.push(Number(row));
        }

    }
    console.log(arr.reduce((acc, cv) => acc + cv, 0))

}
solution(real);