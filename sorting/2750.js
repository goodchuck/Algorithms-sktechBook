var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
6
1
4
9
7`
let real = input.trim().split("\n");



function solution(real) {
    let [first, ...array] = real;
    let sortedArr = array.map(Number).sort((a, b) => a - b);
    let results = [];
    sortedArr.forEach((n) => {
        let find = results.find((t) => t === n)
        if (!find) {
            results.push(n)
        }

    })
    console.log(results.join('\n'))

}
solution(real);