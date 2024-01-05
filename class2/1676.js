var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3`
let real = input.trim().split("\n");



function solution(real) {
    let [first, ...array] = real;
    first = Number(first);
    let count = 0;
    let i = 1;
    let j = 1;
    while (true) {
        if (Math.floor(first / (5 ** j)) > 0) {
            let r = Math.floor((i / 5 ** j));

            if (r > 0 && i % (5 ** j) === 0) {
                count += 1;
            }
            i++;
            if (i === first + 1) {
                j++;
                i = 1;
            }
        }
        else {
            break;
        }

    }
    console.log(count)
}
solution(real);