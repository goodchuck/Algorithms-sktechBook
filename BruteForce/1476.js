// 날짜 계산 
// 알아두어야할 내용 메모리가 4mb로 되어있어서 node 로 풀수없어서
// 1476.py로 제출함

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `15 28 19`

let real = input.trim().split("\n");

async function solution(real) {
    let [first, ...rest] = real;
    let [E, S, M] = first.split(" ").map(Number);
    let c = 1;
    while (true) {
        if ((c - E) % 15 === 0 && (c - S) % 28 === 0 && (c - M) % 19 === 0) {
            break;
        }
        c++;
    }
    console.log(c);
}
solution(real);