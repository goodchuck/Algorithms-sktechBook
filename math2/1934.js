var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
1 45000
6 10
6 6
6 12
14 21
13 17`
let real = input.trim().split("\n");

function uclid(A, B) {
    // console.log(A, B)
    // A가 B보다 크다고 가정
    let originA = A;
    let originB = B;
    let prevB = 0;
    let GCM = 0;
    if (A === 1 || B === 1) {
        if (A === 1) {
            return B
        } else if (B === 1) {
            return A
        }
    }
    if (A % B === 0) {
        return B * Math.floor(A / B);
    }
    while (true) {
        prevB = B;
        B = A % B;

        A = prevB;
        // console.log(A, B)
        if (A % B === 0) {
            GCM = B;
            break;
        }
    }
    return (originA / GCM) * (originB / GCM) * GCM;

}

async function solution(real) {
    let [T, ...rest] = real;

    let arr = rest.map((row) => {
        let [A, B] = row.split(" ").map(Number);
        if (A === B) return A;
        return uclid(Math.max(A, B), Math.min(A, B));
    })
    console.log(arr.join('\n'))

}
solution(real);