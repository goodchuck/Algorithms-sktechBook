var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10 500
93 181 245 214 315 36 185 138 216 295`
let real = input.trim().split("\n");


function solution(real) {
    let [n, sec] = real;
    let [N, M] = n.split(" ").map(Number);
    // let cards = sec.split(" ").map(Number).sort((a, b) => a - b);
    let cards = sec.split(" ").map(Number);
    // console.log({ cards });
    let maxNum = -1;

    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                let sum = cards[i] + cards[j] + cards[k];
                if (sum <= M) {
                    if (Math.max(maxNum, sum) !== maxNum) {
                        maxNum = sum;
                    }
                }
                else {
                    continue;
                }

            }
        }
    }
    console.log(maxNum);


}
solution(real);