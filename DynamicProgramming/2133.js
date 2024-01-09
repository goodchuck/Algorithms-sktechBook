// 타일 채우기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `8`

let real = input.trim().split("\n");
let arrs = [1];
function testF(N, rest, arrays) {
    // for (let i = 0; i < 1; i++) arrs[0][i] = 1;

    for (let i = 1; i <= N; i++) {
        if (i === 2) {
            arrays[i] = 3;
        }
        else if (i % 2 !== 0) {
            arrays[i] = 0;
        }
        else {
            arrays[i] = 0;
            // i === 4
            let l = i - 2;
            while (l !== -2) {
                // console.log({ l, i })
                if (l === (i - 2)) {
                    arrays[i] += 3 * arrays[l];
                } else {
                    arrays[i] += 2 * arrays[l];
                }
                l -= 2;
            }
        }
    }
}


function solution(real) {
    let [T, sec] = real;
    // let rest = sec.split(" ").map(Number);
    if (Number(T) % 2 !== 0) {
        console.log(0)
        return;
    }
    testF(Number(T), 0, arrs)
    console.log(arrs)
    console.log(arrs[arrs.length - 1])

}
solution(real);