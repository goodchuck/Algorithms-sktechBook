var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `8 16
32 4
17 5
0 0`

let real = input.trim().split("\n");

function solution(real) {

    real.forEach((o) => {
        let [a, b] = o.split(" ").map(Number);

        if (a !== 0 && b !== 0) {
            if (a % b !== 0 && b % a !== 0) {
                console.log('neither');
            }
            else if (a > b) {
                console.log('multiple');
            } else {
                console.log('factor');
            }
        }

    })

}
solution(real);