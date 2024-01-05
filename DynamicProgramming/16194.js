var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
3 5 15 16`

let real = input.trim().split("\n");
let arrs = [];
let pis = [];
function testF(N) {
    if (N === 0) {
        return 0;
    }
    else {
        if (arrs[N - 1]) {
            return arrs[N - 1];
        }
        else {
            let ps = [];
            for (let i = 0; i < N; i++) {
                ps.push(testF(N - 1 - i) + pis[i]);
            }
            if (ps.length === 0) {
                arrs[N - 1] = pis[0];
            }
            else {
                arrs[N - 1] = Math.min(...ps)
            }

            // console.log('pis', N, arrs[N - 1], ps, arrs)
            return arrs[N - 1]
        }

    }
    // else {
    //     if (arrs[N - 1]) {
    //         return arrs[N - 1];
    //     }
    //     else {
    //         let ps = [];
    //         for (let i = 0; i < N - 1; i++) {
    //             ps.push(testF(N - 1 - i) + pis[i]);
    //         }

    //         arrs[N - 1] = Math.max(...ps)
    //         console.log('N', N, arrs[N - 1], ps, arrs)
    //         return arrs[N - 1]
    //     }
    // }


}

function solution(real) {
    let [num, sec] = real;
    num = Number(num);
    sec = sec.trim().split(" ").map(Number);
    // console.log(sec)
    let returns = []
    for (let i = 0; i < sec.length; i++) {
        pis[i] = sec[i];
    }
    // returns.push(testF(1))
    // returns.push(testF(2))
    // returns.push(testF(3))
    // returns.push(testF(4))
    returns.push(testF(num))
    console.log(returns.join("\n"))
}
solution(real);