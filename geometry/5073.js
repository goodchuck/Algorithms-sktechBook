var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7 7 7
10 1 1
6 5 4
3 2 5
6 2 6
4 5 4
3 3 3
25 25 50
0 0 0`
let real = input.trim().split("\n");

function solution(real) {
    let arrays = real;
    let returns = [];
    arrays.map((t) => {
        let row = t.trim().split(" ").map(Number).sort((a, b) => a - b);
        console.log(row, Math.max(...row), Math.min(...row));
        if (row[0] === 0 && row[1] === 0 && row[2] === 0) {

        }
        // 세변의 길이가 같은 조건
        else if (row[0] === row[1] && row[0] === row[2] && row[1] === row[2]) {
            returns.push('Equilateral')
        }
        //삼각형 안되는 조건
        else if ((row[0] + row[1]) <= row[2]) {
            returns.push('Invalid')
        } else if (row[0] === row[1] || row[0] === row[2] || row[1] === row[2]) {
            returns.push('Isosceles')
        } else {
            returns.push('Scalene')
        }

    })
    console.log(returns.length);
    console.log(returns.join("\n"))
}
solution(real);