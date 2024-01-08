// 동물원

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `100000`
let real = input.trim().split("\n");
let arrs = [[3, 2, 2]];
let mod = 9901
function solution(real) {
    let [T, ...rest] = real;

    for (let i = 1; i < Number(T); i++) {
        arrs.push([])
        for (let j = 0; j <= 2; j++) {
            // 없
            if (j === 0) {
                arrs[i][j] = arrs[i - 1][0] % mod + arrs[i - 1][1] % mod + arrs[i - 1][2] % mod
            }
            // 왼쪽
            else if (j === 1) {
                arrs[i][j] = arrs[i - 1][0] % mod + arrs[i - 1][2] % mod
            }
            // 오른쪽
            else {
                arrs[i][j] = arrs[i - 1][0] % mod + arrs[i - 1][1] % mod
            }
        }
    }
    console.log(arrs)
    if (Number(T) === 1) {
        console.log(3)
    }
    else {
        console.log(arrs[T - 2].reduce((acc, cv) => acc + cv, 0) % mod)
    }

}
solution(real);