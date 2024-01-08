var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
10 20 10 30 20 50`

let real = input.trim().split("\n");
let arrs = [];
let Vs = [];
function testF(N, rest) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;

    for (let i = 0; i < N; i++) {
        // let reArr = [];
        if (i === 0) {
            arrs[i] = 1
            Vs[i] = -1;
        }
        else {
            arrs[i] = 1;
            Vs[i] = -1;
            let sliced = rest.slice(0, i);
            let filtered = [];
            let maxes = -Infinity;
            for (let j = 0; j < sliced.length; j++) {
                let r = sliced[j];
                // console.log(rest[i], r, rest.slice(0, i));
                if (rest[i] > r) {
                    // maxes = Math.max(maxes, arrs[j]);
                    if (arrs[j] === Math.max(maxes, arrs[j])) {
                        arrs[i] = arrs[j] + 1;
                        Vs[i] = j
                        maxes = arrs[j]
                    }
                }
            }
        }
        // arrs.push(reArr);
    }
}

function solution(real) {
    let [T, sec] = real;

    let rest = sec.split(" ").map(Number);
    testF(Number(T), rest)

    let maxValues = Math.max(...arrs)
    let find = arrs.findIndex((t) => t === maxValues);
    // console.log('arrs,vs', arrs, Vs, find)
    let results = [];
    if (find > -1) {
        while (true) {
            results.push(rest[find]);
            find = Vs[find];
            if (find === -1) {
                break;
            }
        }
    }
    let returns = [Math.max(...arrs), results.reverse().join(" ")]
    console.log(returns.join('\n'))
}
solution(real);