var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
4 10 20 30 40
3 7 5 12
3 125 15 25`

let real = input.trim().split("\n");

const getGCD = (a, b) => {
    if (a % b === 0) return b;
    return getGCD(b, a % b);
};
function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    for (let row of rest) {
        let [n, ...arr] = row.split(" ").map(Number);
        let i = 0;
        let j = 1;
        let sum = 0;
        while (true) {
            let gcd = getGCD(arr[i], arr[j]);
            sum += gcd;
            // console.log(sum, gcd, arr[i], arr[j])
            if (j === arr.length - 1) {
                i++;
                j = i;
                if (i === arr.length - 1) {
                    returns.push(sum);
                    break;
                }
            }
            j++;
        }
    }
    console.log(returns.join('\n'));

}
solution(real);