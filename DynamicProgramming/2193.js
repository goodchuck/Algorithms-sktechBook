// 이친수
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `90`

let real = input.trim().split("\n");
let arrs = [[BigInt(0), BigInt(1)], [BigInt(1), BigInt(0)]];

function testF(N, mod) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;
    for (let i = arrs.length; i < N; i++) {
        let reArr = [];
        for (let j = 0; j < 2; j++) {
            let sum = BigInt(0);
            if (j === 0) {
                sum += arrs[i - 1][0] + arrs[i - 1][1];
            } else {
                sum += arrs[i - 1][0];
            }
            reArr.push(sum);
        }
        arrs.push(reArr);
    }
}

function solution(real) {
    let [T, ...rest] = real;
    testF(Number(T))
    // console.log(arrs)
    console.log((arrs[T - 1].reduce((acc, cv) => acc + cv, BigInt(0))).toString())
}
solution(real);