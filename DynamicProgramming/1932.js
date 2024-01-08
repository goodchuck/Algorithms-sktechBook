// 정수 삼각형
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
7`

let real = input.trim().split("\n");
let arrs = [0];

function testF(N, rest) {
    for (let i = arrs.length; i <= N; i++) {
        arrs.push([]);
        let row = rest[i - 1];
        for (let j = 0; j < row.length; j++) {
            if (j === 0) {
                arrs[i][j] = arrs[i - 1][j];
            }
            else if (j === row.length - 1) {
                arrs[i][j] = arrs[i - 1][j - 1];
            }
            else {
                arrs[i][j] = Math.max(arrs[i - 1][j - 1], arrs[i - 1][j]);
            }
            arrs[i][j] = arrs[i][j] + rest[i - 1][j]
        }
    }
}

function solution(real) {
    let [T, ...rest] = real;
    rest = rest.map((row) => {
        let a = row.split(" ").map(Number);
        return a
    });
    if (rest.length === 1) {
        console.log(rest[0][0])
        return;
    }
    arrs.push(rest[0][0]);
    arrs.push([rest[0][0] + rest[1][0], rest[0][0] + rest[1][1]])
    // console.log({ rest });
    testF(Number(T), rest)
    // console.log({ arrs })
    console.log(Math.max(...arrs[T]));
}
solution(real);