// A와 B
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `AB
ABB`

let real = input.trim().split("\n");
let [S, T] = real;


/**
 * 문자열 바꾸는 조건
 * 1. 문자열의 뒤에 A추가
 * 2. 문자열을 뒤집고 뒤에 B를 추가
 * S의 길이 < T의 길이
 * 바꿀수있으면 1 아니면 0
 */
async function solution() {
    // T에서 S를 만들어보자
    let arrT = [...T];
    while (arrT.length !== S.length) {
        if (arrT.at(-1) === 'A') {
            arrT.pop();
        }
        else {
            arrT.pop();
            arrT.reverse();
        }
    }
    // console.log(S, T, arrT);
    if (S === arrT.join("")) {
        console.log(1);
    }
    else {
        console.log(0);
    }
}

solution();
