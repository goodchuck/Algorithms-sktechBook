// RGB거리

var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19
`
let real = input.trim().split("\n");
let arrs = [];

function solution(real) {
    let [T, ...rest] = real;
    let newArr = rest.map((row) => {
        let sp = row.split(" ").map(Number);
        return [sp[0], sp[1], sp[2]]
    })

    for (let i = 0; i < Number(T); i++) {
        arrs.push([])
        for (let j = 0; j <= 2; j++) {
            // console.log({ i, j })
            if (i === 0) {
                arrs[i][j] = newArr[i][j]
            }
            else {
                if (j === 0) {
                    arrs[i][j] = Math.min(arrs[i - 1][1], arrs[i - 1][2])
                }
                else if (j === 1) {
                    arrs[i][j] = Math.min(arrs[i - 1][0], arrs[i - 1][2])
                }
                else {
                    arrs[i][j] = Math.min(arrs[i - 1][0], arrs[i - 1][1])
                }
                arrs[i][j] += newArr[i][j]
            }

        }
    }

    console.log(Math.min(...arrs[T - 1]))
}
solution(real);