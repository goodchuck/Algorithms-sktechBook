var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
12
28
100
-1`

let real = input.trim().split("\n");

function getFactors(num) {
    let factors = [];
    for (let i = num; i >= 1; i--) {
        // factors.push(N % i);
        if (num % i === 0) {
            if (!factors.find((o) => o === Math.floor(num / i))) {
                factors.push(Math.floor(num / i));
            }

        }
    }
    return factors.sort((a, b) => a - b);
}

function solution(real) {
    let nums = real.map(Number).filter((o) => o !== -1);
    let factors = nums.map((num) => {
        let factorsNotNum = getFactors(num).filter((factor) => factor !== num);
        console.log({ factorsNotNum })
        let sum = factorsNotNum.reduce((acc, currentValue) => {
            return acc + currentValue
        }, 0)
        if (factorsNotNum.length > 0 && sum === num) {
            return (`${num} = ${factorsNotNum.join(' + ')}`)
        } else {
            return (`${num} is NOT perfect.`)
        }
    })
    console.log(factors.join('\n'));
}
solution(real);