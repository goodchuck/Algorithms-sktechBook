var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
1
3
2
3
5
4`
let real = input.trim().split("\n");

function solution(real) {
    let [first, ...second] = real.map(Number);
    for (let i = 0; i < second.length - 1; i += 2) {
        let k = second[i];
        let n = second[i + 1];
        let returns = [];
        for (let j = 0; j <= k; j++) {
            let a = [];
            for (let u = 1; u <= n; u++) {
                if (j > 0) {
                    a.push(returns[j - 1].slice(0, u).reduce((acc, vc) => acc + vc, 0));
                }
                else {
                    a.push(u);
                }

            }
            returns.push(a)
        }
        console.log(returns);
        console.log(returns[k][n - 1])
    }
}
solution(real);