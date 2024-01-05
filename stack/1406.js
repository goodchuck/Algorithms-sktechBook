var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`
let real = input.trim().split("\n");

async function solution(real) {
    let [words, T, ...rest] = real
    // console.log(words, T)
    let cursor = null;
    let left = [];
    for (let word of words) {
        left.push(word);
    }
    let right = [];
    for (let row of rest) {
        // console.log(row);
        if (row.indexOf("P") !== -1) {
            let [a, b] = row.split(" ");
            left.push(b);
        }
        else if (row.indexOf("L") !== -1) {
            if (left.length === 0) continue;
            let t = left.pop();
            right.push(t)
        }
        else if (row.indexOf("B") !== -1) {
            if (left.length === 0) continue;
            let t = left.pop();
        }
        else if (row.indexOf("D") !== -1) {
            if (right.length === 0) continue;
            let t = right.pop();
            left.push(t)
        }
    }
    while (left.length !== 0) {
        let p = left.pop();
        right.push(p);
    }
    let results = '';
    while (right.length !== 0) {
        let r = right.pop();
        results += r;
    }
    console.log(results);
}
solution(real);