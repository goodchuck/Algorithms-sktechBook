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
    let [first, sec] = real;
    let c = 10;
    let upAl = printUppercaseAlphabet();
    let realUpAl = upAl.split(' ').join('')
    let stringArray = [...first].reverse();
    let reals = 0;
    stringArray.forEach((word, i) => {
        let wf = 0;
        if (!Number.isNaN(Number(word))) {
            wf = Number(word);
        }
        else {
            wf = Number(realUpAl.indexOf(word) + c);
        }

        let returns = wf * (Number(sec) ** i);
        reals += returns;
        console.log({ wf, returns });
    })
    console.log(reals)
}
solution(real);