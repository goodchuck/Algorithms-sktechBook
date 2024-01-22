// 리모콘
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5457
3
6 7 8`

let real = input.trim().split("\n");


function solution(real) {
    let [N, M, rest] = real;
    // let bools = Array.from({ length: 10 }).fill(false);
    // let NArr = [...N].map(Number);
    if (Number(N) === '100') return console.log(0);
    let brokenBtn = rest?.split(' ') || [];
    let answer = Math.abs(100 - N); //100에서 +,-버튼만으로 N까지 간 경우
    for (let i = 0; i < 1000000; i++) {
        const str = i.toString();
        let isValid = true;

        for (let j = 0; j < str.length; j++) {
            if (brokenBtn?.includes(str[j])) {

                isValid = false;
                break;
            }
        }
        if (isValid) {
            //모든 값중 가장 작은 값 구하기
            answer = Math.min(answer, Math.abs(i - N) + str.length);
        }
    }
    console.log(answer);
}
solution(real);