// AB
// 해당문제는 비트연산을시도해보려는것으로 정답이 아닌 파일임
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10 12`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, K] = first.split(" ").map(Number);

function getNextBitPattern(current, max, count) {
    let maxPattern = (1 << max) - 1;
    let next = current;
    while (next <= maxPattern) {
        next++;
        if (countBits(next) === count) return next;
    }
    return null; // 더 이상의 패턴이 없음
}

function countBits(x) {
    let bits = 0;
    while (x !== 0) {
        bits += x & 1;
        x >>>= 1;
    }
    return bits;
}

// 문자열의길이 N
// B는 A보다 뒤에나옴
async function solution() {
    if (K === 0) {
        let answer = '';
        for (let i = 0; i < N; i++) {
            if (i === 0) answer += 'B';
            else answer += 'A'
        }
        console.log(answer);
        return;
    }

    for (let a = 0; a <= N; a++) {
        let string2 = ((1 << a) - 1).toString(2).padStart(N, '0');
        let b = N - a;
        if ((a * b) < K) continue;

        // console.log(string2);
        let nextPattern = string2;
        do {
            let answer = 0;
            let ACount = 0;


            nextPattern = nextPattern.toString(2).padStart(N, '0');
            for (let j = 0; j < N; j++) {
                let target = nextPattern[j];
                // A란뜻
                if (target === '0') {
                    ACount += 1;
                }
                else if (target === '1') {
                    answer += ACount;
                }
            }
            // console.log(K)
            if (answer === K) {
                let answerString = '';
                for (let alpha of [...nextPattern]) {
                    // console.log({ alpha })
                    if (alpha === '0') {
                        answerString += 'A';
                    }
                    else if (alpha === '1') {
                        answerString += 'B';
                    }

                }
                console.log(answerString)
                return;
            }
            nextPattern = getNextBitPattern(parseInt(nextPattern, 2), N, a)
        }
        while (nextPattern !== null)
    }
    console.log(-1)
}

solution();
