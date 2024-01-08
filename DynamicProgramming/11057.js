// 오르막수

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3`
let real = input.trim().split("\n");
let arrs = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
let mod = 10007
function solution(real) {
    let [T, ...rest] = real;

    for (let i = 1; i < Number(T); i++) {
        arrs.push([])
        for (let j = 0; j < 10; j++) {

            arrs[i][j] = arrs[i - 1].slice(j, 10).reduce((acc, cv) => (acc % mod) + (cv % mod), 0);
        }
    }
    // console.log(arrs)
    console.log(arrs[T - 1].reduce((acc, cv) => acc + cv, 0) % mod)

}
solution(real);