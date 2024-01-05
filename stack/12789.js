var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
5 4 3 2 1 10 9 8 7 6`
let real = input.trim().split("\n");

async function solution(real) {
    let [N, rest] = real;
    let arr = rest.trim().split(" ").map(Number);
    let stack = [];
    let ind = 1;
    let message = 'Nice';
    while (arr.length !== 0) {


        if (stack[stack.length - 1] === ind) {
            stack.pop();
            ind++;
        } else {
            let t = arr.shift();
            if (stack[stack.length - 1] < t) {
                message = 'Sad'
                break;
            }
            stack.push(t);
        }

        // console.log(stack);
    }
    console.log(message)
}
solution(real);