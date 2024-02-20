// 가르침
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1 7
antatica`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [N, K] = first.split(" ").map(Number);
let words = rests;

function findAlphabets(words) {
    let alphas = { a: '1', n: '1', t: '1', i: '1', c: '1' };
    for (let word of words) {
        for (let alpha of word) {
            if (alphas[alpha]) continue;
            else {
                alphas[alpha] = alpha;
            }
        }
    }
    return alphas;
}

function findOnes(strNum) {
    let count = 0;
    for (let num of strNum) {
        if (num === '1') {
            count++;
        }
    }
    return count;
}

async function solution() {
    let fAbs = findAlphabets(words);
    let keys = Object.keys(fAbs);
    let maxes = -Infinity;
    // console.log({ keys });
    if (K <= 0) {
        console.log(0);
        return;
    } else if (K < 5) {
        console.log(0);
        return;
    }
    else if (K === 26) {
        console.log(N);
        return;
    }
    for (let i = 0; i < (1 << (keys.length - 5)); i++) {
        let state = i.toString(2).padStart(keys.length - 5, '0')
        let oneCount = findOnes(state);
        // console.log({ state, oneCount })
        if (oneCount !== Math.min(K - 5, keys.length - 5)) continue;
        for (let j = 0; j < state.length; j++) {
            fAbs[keys[j + 5]] = state[j];
        }
        let count = 0;
        // console.log({ fAbs })
        // 남극 언어들
        for (let word of words) {
            let isWordFind = true;
            // 언어의 알파벳
            for (let alpha of word) {
                let isAlphaFind = true;

                // 비트마스킹으로 1이된건지 확인
                if (fAbs[alpha] === '0') {
                    isAlphaFind = false;
                }

                if (!isAlphaFind) {
                    isWordFind = false;
                    break;
                };

            }
            if (isWordFind) count++;
        }
        maxes = Math.max(maxes, count);
    }
    console.log(maxes);
}
solution();