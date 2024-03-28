// 별 찍기 - 11
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6`

let real = input.trim().split("\n");
let [k, ...rest] = real;
k = Number(k);



async function solution() {
    let BLANK = ' ';
    let STAR = '*';
    let answers = Array.from({ length: k }, () => Array.from({ length: 2 * k }).fill(STAR));
    function go(answers, x, y, n, color) {
        console.log({ answers, x, y, n, color })
        // 빈칸일때
        if (color === BLANK) {
            let m = Math.floor(2 * n - 1);
            for (let i = x; i < x + n; i++) {
                for (let j = 0; j < m; j++) {
                    if (!answers[x]) answers[x] = [];
                    answers[i][j + i - x + y] = BLANK;
                }
                m -= 2;
            }
        }
        else {
            if (n !== 1) {
                let m = Math.floor(n / 2);
                go(answers, x, y, m, STAR);
                go(answers, x + m, y - m, m, STAR);
                go(answers, x + m, y + m, m, STAR);
                if (n === 3) {
                    go(answers, x + 1, y, 1, BLANK);
                }
                else {
                    go(answers, x + m, y - m + 1, m, BLANK);
                }
            }
        }
    }

    go(answers, 0, k - 1, k, STAR);

    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k - i - 1; j++) {
            answers[i][j] = BLANK;
            answers[i][2 * k - j - 2] = BLANK;
        }
        answers[i][2 * k - 1] = BLANK;
    }
    // console.log(answers)
    for (let i = 0; i < k; i++) {
        console.log(answers[i].join(""));
    }

}

solution();
