var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10 2`

let real = input.trim().split(" ");

function printUppercaseAlphabet() {
    let result = '';
    for (let i = 0; i < 26; i++) {
        let uppercaseChar = String.fromCharCode(65 + i);
        result += uppercaseChar + ' ';
    }
    return result.trim();
}

function solution(real) {
    let [first, sec] = real.map(Number);
    let d = 10;
    let upAl = printUppercaseAlphabet();
    let realUpAl = upAl.split(' ').join('')

    // console.log({ first, sec })
    let returns = [];
    let count = 0;
    while (first / sec > 0) {
        // console.log({ first })
        let r = Math.floor(first / sec);
        let c = first % sec
        if (c > 9) {
            c = realUpAl[c - d];
        }

        // console.log({ r, c, realUpAl })
        first = r;
        returns.push(c);
        count++;
    }
    console.log(returns.reverse().join(''));
}
solution(real);