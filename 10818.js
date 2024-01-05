var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// let input = `8
// 4
// 3
// 6
// 8
// 7
// 5
// 2
// 1`
let input = `5
1
2
5
3
4
`

let [N, ...array] = input.toString().trim().split("\n")

async function solution(N, array) {
    let stack = [];
    let count = 0;
    let que = 1;
    let consoles = [];
    // console.log(que, Number(N), array);
    while (count !== array.length) {
        // console.log(que, stack[stack.length - 1]);
        // console.log(que);

        if (que === Number(N + 1) && count !== array.length) {
            // console.log("여기옴?", que === Number(N), que, count);
            consoles = "NO";
            break;
        }

        if (stack[stack.length - 1] === Number(array[count])) {
            stack.pop();
            consoles.push("-")
            ++count;
        } else {
            stack.push(que);
            consoles.push("+")
            ++que;
        }

    }
    if (Array.isArray(consoles)) {
        console.log(consoles.join('\n'));
    } else {
        console.log(consoles)
    }
}
solution(N, array);