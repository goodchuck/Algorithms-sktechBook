// 전구와 스위치
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7
1101000
1111111`

let real = input.trim().split("\n");
let [first, second, third] = real;
let [N, M] = first.split(" ").map(Number);
let A = [...second].map(Number);
let B = [...third].map(Number);
function solution() {

    // 0번이 바뀌는조건
    // 0번, 1번
    // 0번이 같아지는조건
    // 아예 안바꾸기 or 0 and 1번

    let newA = JSON.parse(JSON.stringify(A));
    let answers = [];
    let answer = 0;

    // 처음부터 같을 때
    let isAnswer = true;
    for (let i = 0; i < N; i++) {
        if (A[i] !== B[i]) {
            isAnswer = false;
        }
    }
    if (isAnswer) {
        console.log(0);
        return
    }
    //



    for (let i = 0; i < N; i++) {
        // 0번 누를때
        if (i === 0) {
            A[i] = 1 - A[i];
            A[i + 1] = 1 - A[i + 1];
            answer += 1
        }
        // N번 누를때
        else if (i === N - 1) {
            if (A[i - 1] !== B[i - 1]) {
                A[i - 1] = 1 - A[i - 1];
                A[i] = 1 - A[i];
                answer += 1
            }

        }

        else {
            if (A[i - 1] !== B[i - 1]) {
                A[i - 1] = 1 - A[i - 1];
                A[i] = 1 - A[i];
                A[i + 1] = 1 - A[i + 1];
                answer += 1
            }

        }
    }

    for (let i = 0; i < N; i++) {
        if (A[i] !== B[i]) {
            answers.push(-1);
            break;
        }
    }
    if (answers.length === 0) {
        answers.push(answer);
    }

    A = newA;
    answer = 0;
    for (let i = 0; i < N; i++) {
        // N번 누를때
        if (i === N - 1) {
            // console.log({ i })
            if (A[i - 1] !== B[i - 1]) {
                A[i - 1] = 1 - A[i - 1];
                A[i] = 1 - A[i];
                answer += 1
            }

        }

        else {
            if (A[i - 1] !== B[i - 1]) {
                // console.log({ i })
                A[i - 1] = 1 - A[i - 1];
                A[i] = 1 - A[i];
                A[i + 1] = 1 - A[i + 1];
                answer += 1
            }

        }
    }

    for (let i = 0; i < N; i++) {
        if (A[i] !== B[i]) {
            answers.push(-1);
            break;
        }
    }
    if (answers.length === 1) {
        answers.push(answer);
    }

    if (answers[0] === -1 && answers[1] === -1) {
        console.log(-1);
    }
    else {
        // console.log(answers);
        console.log(Math.min(...answers.filter(v => v > 0)));
    }
}

solution();
