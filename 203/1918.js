var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `A+B*C`

let real = input.trim().split("\n");

function solution(real) {
    let [words, ...rest] = real;
    let stack = [];
    let returns = '';
    for (let i = 0; i < words.length; i++) {
        let row = words[i]
        let stackLen = stack.length;
        if (row === '(') {
            stack.push(row)
        }
        else if (row === ')') {
            let t = null;
            while (true) {
                t = stack.pop();
                if (t === '(') {
                    break;
                }
                returns += t;
            }

        }
        else if (row === '*' || row === '/') {
            while (stack.length && stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/') {
                returns += stack.pop();
                stackLen--
            }
            stack.push(row);
        }
        else if (row === '+' || row === '-') {
            while (stack.length && stack[stackLen - 1] !== '(') {
                returns += stack.pop();
                stackLen--
            } stack.push(row);

        }
        else {
            returns += row;
        }

        // console.log(stack)
    }
    while (stack.length !== 0) {
        returns += stack.pop();
    }
    console.log(returns.trim());
}
solution(real);