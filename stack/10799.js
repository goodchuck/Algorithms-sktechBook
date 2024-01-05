var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `(((()(()()))(())()))(()())`
let real = input.trim().split("\n");

async function solution(real) {
    let [N, ...rest] = real;
    N = [...N]
    let stacks = [];
    let sums = 0;
    for (let i = 0; i < N.length; i++) {
        let row = N[i];
        if (row === '(') {
            if (N[i + 1] === ')') {

            }
            else {
                let stack = ['('];
                stacks.push(stack);
            }

        }
        else if (row === ')') {

            if (N[i - 1] === '(') {
                sums += stacks.length;
            } else {
                let targetStack = stacks[stacks.length - 1];
                targetStack.pop();
                if (stacks[stacks.length - 1].length === 0) {

                    stacks.pop();
                    sums += 1;
                }
            }
        }
    }

    console.log(sums)
}
solution(real);