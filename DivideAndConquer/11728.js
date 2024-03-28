// 배열 합치기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2 2
3 5
2 9`


let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);


async function solution() {
    let answer = [];
    let A = rest[0].split(" ").map(Number);
    let B = rest[1].split(" ").map(Number);

    let AIndex = 0;
    let BIndex = 0;

    while (AIndex < N || BIndex < M) {
        if (AIndex === N) answer.push(B[BIndex++]);
        else if (BIndex === M) answer.push(A[AIndex++]);
        else if (A[AIndex] < B[BIndex]) answer.push(A[AIndex++])
        else answer.push(B[BIndex++]);
    }

    console.log(answer.join(" "));
}

solution();
