// 부분수열의 합
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6 6
1 2 3 4 5 6`

let real = input.trim().split("\n");
let [first, rest] = real;
let [N, S] = first.split(" ").map(Number);
rest = rest.split(" ").map(Number);

// console.log({ N, S, rest });

async function solution() {
    let returns = 0;
    for (let i = 1; i < 2 ** N; i++) {
        let i2 = i.toString(2).padStart(N, '0')
        let fi = [...i2].map((bit, i) => {
            if (bit === '1' || bit === 1) {
                return Number(rest[i])
            }
            else {
                return 0
            }
        })
        let sum = fi.reduce((acc, cv) => acc + cv, 0)

        if (sum === S) {
            returns++;
        }
    }

    console.log(returns);

}
solution();