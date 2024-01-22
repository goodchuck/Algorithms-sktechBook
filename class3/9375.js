// 패션왕 신해빈
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
0`

let real = input.trim().split("\n");
let [T, ...rests] = real;
T = Number(T)

// console.log({ N, S, rest });

async function solution() {
    let returns = [];
    for (let i = 0; i < rests.length; i++) {
        // let maps = new Map();

        if (Number(rests[i]) > 0) {
            let wears = {}
            let innerT = Number(rests[i]);
            for (let j = 0; j < innerT; j++) {
                // console.log(rests[i + 1 + j]);
                let [left, right] = rests[i + 1 + j].split(" ");
                if (!wears[right]) {
                    wears[right] = [];
                }
                wears[right].push(left);
                // maps.set(left, right);
            }
            // console.log(wears)
            let clothCounts = [];
            for (let key in wears) {
                clothCounts.push(wears[key].length + 1);
            }
            let sums = clothCounts.reduce((acc, cv) => acc * cv, 1);
            let ans = sums - 1;
            // console.log({ sums })
            returns.push(ans);
        }
        else if (Number(rests[i]) === 0) {
            returns.push(0)
        }
        else continue;
    }

    if (returns.length > 0) {
        console.log(returns.join("\n"));
    }
    else {
        console.log(0)
    }


}
solution();