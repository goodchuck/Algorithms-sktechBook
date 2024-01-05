var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4`

let real = input.trim().split(" ");

function solution(real) {
    // let [T, ...sec] = real;
    let num = Number(real[0]);

    let first = 1;
    let i = 1;
    let isFind = false;
    while (!isFind) {
        let t = (i - 1);

        first += t;
        let last = 1;
        if (i > 1) {
            last = first + (i - 1);
        }
        console.log({ first, last, t, i });
        if (num === 1) {
            isFind = true;
            console.log(`${1}/${1}`)
        }
        else if (num >= first && num <= last) {
            let numIndex = num - first;
            isFind = true;
            // console.log({ numIndex })
            let [x, y] = [];
            //짝수
            if (i % 2 === 0) {
                [x, y] = [1 + numIndex, t - numIndex + 1]
                console.log(`${x}/${y}`);
            }
            //홀수
            else {
                [x, y] = [1 + numIndex, t - numIndex + 1]
                console.log(`${y}/${x}`);
            }


        }

        i++;
    }

}
solution(real);