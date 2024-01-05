var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
1 3 5 7`

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
    let [T, ...arrays] = real
    let returns = arrays.map((array) => {
        let count = 0;
        let nums = array.split(" ").map(Number);
        // console.log(nums);
        nums.forEach((num) => {
            if (num === 1) {

            } else {
                let factors = getFactors(num);
                // console.log({ num, factors })
                if (factors.length === 2) {
                    count++
                }
            }
        })
        return count;
    })
    console.log(returns.join(''));
}
solution(real);