var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1`
let real = input.trim().split(" ");



function solution(real) {
    let [N, sec] = real;
    let strN = N;
    let numN = Number(N);
    let count = 0;
    let i = 0;
    while (true) {
        let sum = [...i.toString()].reduce((acc, cv) => acc + Number(cv), 0);
        // console.log(i, sum, i + sum);
        if (i + sum === numN) {
            console.log(i)
            break;
        }
        i++;
        if (i === numN) {
            console.log(0);
            break;
        }
    }
}
solution(real);