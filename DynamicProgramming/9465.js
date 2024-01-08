// 스티커 - 9465

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`
let real = input.trim().split("\n");
let arrs = [];
function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    for (let k = 0; k < rest.length; k += 3) {
        arrs = [];
        let n = rest[k];
        let top = rest[k + 1].split(" ").map(Number);
        let down = rest[k + 2].split(" ").map(Number);
        // console.log(n);
        // console.log(top);
        // console.log(down);
        arrs[0] = [0, top[0], down[0]];
        for (let i = 1; i < Number(n); i++) {
            arrs.push([])
            for (let j = 0; j <= 2; j++) {
                // 안뜯
                if (j === 0) {
                    arrs[i][j] = Math.max(...arrs[i - 1]);
                }
                // 위뜯
                else if (j === 1) {
                    arrs[i][j] = Math.max(arrs[i - 1][0], arrs[i - 1][2]) + top[i];
                }
                // 아래뜯
                else {
                    arrs[i][j] = Math.max(arrs[i - 1][0], arrs[i - 1][1]) + down[i];
                }
                // arrs[i][j] = arrs[i - 1].slice(j, 10).reduce((acc, cv) => (acc % mod) + (cv % mod), 0);
            }
        }
        // console.log(arrs);
        returns.push(Math.max(...arrs[n - 1]));
    }
    console.log(returns.join('\n'))

}
solution(real);
