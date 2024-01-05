var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `baekjoon`

let real = input.trim().split("\n");

function solution(real) {
    let [words, ...rest] = real;
    let stack = [];
    for (let i = 0; i < [...words].length; i++) {
        let word = words.slice(i, words.length);
        stack.push(word);
    }
    let t = stack.sort()
    console.log(t.join('\n'))
}
solution(real);