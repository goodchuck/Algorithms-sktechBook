var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
((
))
())(()`
let real = input.trim().split("\n");


function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    for (let row of rest) {
        console.log(row)
        let words = [...row];
        let arr = [];
        let message = 'YES';
        for (let word of words) {
            if (word === ')') {
                // let findIndex = arr.findIndex((w) => w === '(');
                // console.log(arr, findIndex);
                if (arr.length === 0 || arr[arr.length - 1] !== '(') {
                    message = 'NO';
                    break;
                } else {
                    arr.pop();
                }
            } else {
                arr.push(word);
            }
            console.log(arr);
        }
        if (arr.length > 0) {
            message = 'NO'
        }
        returns.push(message);

        // console.log(row, linkedList.toString(), linkedList.getSize())
    }
    console.log(returns.join('\n'))
}
solution(real);