var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `11`
let real = input.trim().split(" ");



function solution(real) {
    let [first, ...second] = real;
    first = Number(first);
    let results = [];
    // 3
    let i = 0;
    // 5
    let j = 0;
    /**
     * 3x + 5y = first
     */
    while (true) {
        let a = 3 * i;
        let b = 5;

        if ((first - a) % b === 0) {
            let newB = Math.floor((first - a) / b);
            console.log({ i, newB });
            results.push(i + newB);
        }

        i++;
        if (3 * i > first) {
            break;
        }
    }
    if (results.length > 0) {
        console.log(Math.min(...results));
    } else {
        console.log(-1);
    }
}
solution(real);