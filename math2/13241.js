var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `121 199`
let real = input.trim().split(" ");

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
    let [A, B] = real.map(Number);
    console.log(uclid(Math.max(A, B), Math.min(A, B)));


}
solution(real);