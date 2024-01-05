var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `ababc`
let real = input.trim().split(" ");


async function solution(real) {
    let [first, ...rest] = real;
    let S = new Set();
    let wordlength = 1;
    let i = 0;
    while (true) {
        let word = first.slice(i, i + wordlength);
        // console.log(word, i, wordlength);
        S.add(word);
        i++;
        if (i + wordlength > first.length) {
            wordlength++;
            if (wordlength > first.length) {
                break;
            }
            i = 0;
        }
    }
    console.log(S.size);
}
solution(real);