var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `24 18`
let real = input.trim().split(" ");

// 약수들을 찾아주는 함수 정렬포함
function getFactors(num) {
    let factors = [];
    for (let i = num; i >= 1; i--) {
        // factors.push(N % i);
        if (num % i === 0) {
            if (!factors.find((o) => o === Math.floor(num / i))) {
                factors.push(Math.floor(num / i));
            }

        }
    }
    return factors.sort((a, b) => a - b);
}

function getT(num) {
    let i = 1;
    let results = [];
    while (true) {
        if (i !== 1) {
            if (num % i === 0) {
                results.push(i);

                num = Math.floor(num / i);
                console.log(num, i)
                i = 1;
                if (num === 1) {
                    break;
                }
            }
        }
        i++;
    }
    return results;
}

function getDoubleLCMGCM(a, b) {
    let i = 1;
    let results = [];
    while (true) {
        if (i !== 1) {
            if (a % i === 0 && b % i === 0) {
                results.push(i);

                a = Math.floor(a / i);
                b = Math.floor(b / i);
                i = 1;
            } else if (i >= a || i >= b) {
                break;
            }
        }
        i++;
    }
    let LCM = results.reduce((acc, cv) => acc * cv, 1);
    // console.log(results, LCM)
    let GCM = LCM * a * b
    // console.log(results, LCM, GCM)
    return [LCM, GCM];
}


function solution(real) {
    let [first, second] = real.map(Number);
    let results = getDoubleLCMGCM(first, second)
    console.log(results.join('\n'))
}
solution(real);