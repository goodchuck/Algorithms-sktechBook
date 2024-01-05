var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
2
2
0
1
6
6
22`

let real = input.trim().split("\n");
let arrs = [[1, 0], [0, 1]];
function fibonacci(N) {
    if (N === 0) {
        return [1, 0];
    }
    else if (N === 1) {
        return [0, 1];
    } else {
        let left = arrs[N - 1] ? arrs[N - 1] : fibonacci(N - 1);
        let right = arrs[N - 2] ? arrs[N - 2] : fibonacci(N - 2);
        let [a, b] = [left[0] + right[0], left[1] + right[1]];
        arrs[N] = [a, b];
        return arrs[N];
    }
}

function solution(real) {
    let [words, ...rest] = real;
    let returns = [];
    for (let row of rest) {
        let [a, b] = fibonacci(Number(row));
        returns.push(`${a} ${b}`)
    }
    console.log(returns.join('\n'));
    // console.log(arrs)
}
solution(real);