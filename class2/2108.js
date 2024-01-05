var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
0
0
-1`
let real = input.trim().split("\n");

function solution(real) {
    let [N, ...rest] = real.map(Number);
    let returns = [];
    let arr = rest.sort((a, b) => a - b)
    let sum = arr.reduce((acc, cv) => acc + cv, 0) / N;

    let countMap = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    // console.log({ countMap })
    let m = -Infinity;
    let isD = false;
    Object.keys(countMap).forEach((key) => {
        if (countMap[key] > m) {
            m = countMap[key]
        } else if (countMap[key] === m) {
            // console.log('중복');
            isD = true;
        }
    })
    let bin = Object.keys(countMap).sort((a, b) => Number(a) - Number(b)).filter((key) => {
        return countMap[key] >= m
    })
    // console.log(bin, m);
    let third = null;
    if (bin.length > 1) {
        third = bin[1];
    } else {
        third = bin[0];
    }

    let max = Math.max(...arr);
    let min = Math.min(...arr);



    returns.push(Number(sum.toFixed()));
    returns.push(arr[Math.floor(N / 2)])
    returns.push(third);
    returns.push(max - min)
    console.log(returns.join('\n'))
}
solution(real);