// 별 찍기 - 10
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `9`

let real = input.trim().split("\n");
let [k, ...rest] = real;
k = Number(k);



async function solution() {
    let BLANK = ' ';
    let STAR = '*';
    let answers = [];
    function go(answers, x, y, n, color) {
        // 빈칸일때
        if (color === BLANK) {
            for (let i = x; i < x + n; i++) {
                for (let j = y; j < y + n; j++) {
                    if (!answers[i]) {
                        answers[i] = [];
                    }
                    answers[i][j] = BLANK;
                }
            }
        }
        else {
            if (n === 1) {
                if (!answers[x]) {
                    answers[x] = [];
                }
                answers[x][y] = STAR;
            }
            else {
                let newColor = STAR;
                let m = Math.floor(n / 3);
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (i === 1 && j === 1) {
                            newColor = BLANK;
                        }
                        else {
                            newColor = STAR;
                        }
                        go(answers, x + m * i, y + m * j, m, newColor);
                    }
                }
            }
        }
    }

    go(answers, 0, 0, k, STAR);
    console.log(answers)
    for (let i = 0; i < k; i++) {
        console.log(answers[i].join(""));
    }

}

solution();
