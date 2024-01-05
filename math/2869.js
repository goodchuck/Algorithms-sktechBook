var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 1 6`

let real = input.trim().split(" ");

function solution(real) {
    let [A, B, V] = real.map(Number);


    let c = Math.floor((V - A) / (A - B));
    let r = (V - A) % (A - B);

    console.log({ c, r })
    if (r === 0) {
        console.log(c + 1);
    } else {
        console.log(c + 2);
    }

}
solution(real);