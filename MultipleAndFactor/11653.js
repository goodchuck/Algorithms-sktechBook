var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `9991`

let real = input.trim().split(" ");

function solution(real) {
    let [N, ...rest] = real.map(Number);
    let returnArrays = []
    let i = 2;
    while (N > 1) {
        // console.log(N, i)
        if (N % i === 0) {
            returnArrays.push(i);
            N = N / i
            i = 1;
        }
        i++;
    }
    console.log(returnArrays.join('\n'));

}
solution(real);