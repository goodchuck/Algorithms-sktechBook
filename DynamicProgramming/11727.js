var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `12`

let real = input.trim().split("\n");
let arrs = [];

function testF(N) {
    if (N === 1) {
        arrs[N - 1] = 1;
        return 1;
    }
    else if (N === 2) {
        arrs[N - 1] = 3;
        return 3;
    }
    else {
        if (arrs[N - 1]) {
            return arrs[N - 1];
        }
        else {
            arrs[N - 1] = testF(N - 1) % (10007) + 2 * (testF(N - 2) % (10007))
            return arrs[N - 1]
        }

    }
}

function solution(real) {
    let [num, sec] = real;
    num = Number(num);
    console.log(testF(num) % (10007))
}
solution(real);