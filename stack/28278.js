var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `9
4
1 3
1 5
3
2
5
2
2
5`
let real = input.trim().split("\n");

async function solution(real) {
    let [N, ...rest] = real;
    let arr = [];
    let size = 0;
    let returns = [];
    for (let row of rest) {
        if (row.indexOf('1 ') !== -1) {
            let [a, b] = row.split(" ");
            arr.push(b);
            size++;
        }
        // pop
        else if (row === '2') {
            if (size !== 0) {
                let t = arr.pop();
                returns.push(t);
                size--;
            } else {
                returns.push(-1);
            }
        }
        // pop
        else if (row === '3') {
            returns.push(size);
        }
        // pop
        else if (row === '4') {
            if (size === 0) {
                returns.push(1);
            } else {
                returns.push(0);
            }
        }
        // pop
        else if (row === '5') {
            if (size !== 0) {
                let t = arr[arr.length - 1];
                returns.push(t);
            } else {
                returns.push(-1);
            }
        }
    }
    console.log(returns.join('\n'))
}
solution(real);