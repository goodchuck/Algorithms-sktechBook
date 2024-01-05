var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
3 4
1 1
1 -1
2 2
3 3`
let real = input.trim().split("\n");

async function solution(real) {
    let [first, ...arr] = real;
    let newArr = arr
        .map((a) => {
            let [x, y] = a.split(" ").map(Number);
            return [x, y];
        })
        .sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0]
            } else {
                return a[1] - b[1]
            }
        })
        .map((a) => {
            return `${a[0]} ${a[1]}`
        })
    console.log(newArr.join('\n'))


}
solution(real);