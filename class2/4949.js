var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `(
)
.`
let real = input.trim().split("\n");

function solution(real) {
    let rest = real;
    let returns = [];
    for (let words of rest) {
        if (words === '.') continue;
        let arr = [];
        let message = 'yes';
        for (let al of words) {
            if (al === '(') {
                arr.push(al)
            }
            else if (al === ')') {
                if (arr[arr.length - 1] === '(') {
                    arr.pop();
                } else {
                    message = 'no';
                    break;
                }
            }
            else if (al === '[') {
                arr.push(al)
            }
            else if (al === ']') {
                if (arr[arr.length - 1] === '[') {
                    arr.pop();
                } else {
                    message = 'no';
                    break;
                }
            }
        }
        if (arr.length > 0) {
            message = 'no'
        }
        returns.push(message);
    }
    console.log(returns.join('\n'))
}
solution(real);