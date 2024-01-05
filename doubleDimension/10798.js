var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `AABCDD
afzz
09121
a8EWg6
P5h3kx
`

// let [T, ...words] = input.trim().split("\n");


let rows = input.trim().split("\n");

function makeDimensionArray(arrays) {
    let DA = [];
    let N = 0;
    arrays.forEach((row) => {
        let r = row.trim().split("")
        DA.push(r);
        if (r.length > N) {
            N = r.length;
        }
    })
    return { DA, M: DA.length, N }
}

function solution(words) {
    let { DA, M, N } = makeDimensionArray(words);
    console.log({ DA, M, N });
    // let maxNum = -Infinity;
    // let returnIndex = [];
    let returns = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            console.log({ i, j })
            // console.log(DA[j][i])
            if (DA[j][i]) {
                returns.push(DA[j][i])
            }

        }
    }
    console.log(returns.join(""));
    // console.log(maxNum)
    // console.log(returnIndex.join(" "));
}
solution(rows);

