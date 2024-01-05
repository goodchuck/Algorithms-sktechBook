var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
3 7
15 7
5 2
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

function solution(rows) {
    let [first, ...array] = rows;
    let DA = Array(100).fill(0).map(() => Array(100).fill(0));

    let returns = 0;
    array.forEach((row) => {
        let [x, y] = row.split(" ").map(Number);
        let n = 0;
        for (let i = x; i <= x + 9; i++) {
            for (let j = y; j <= y + 9; j++) {
                if (DA[i][j] === 1) {

                } else if (DA[i][j] === 0) {
                    DA[i][j] = 1;
                    returns += 1;
                    n += 1;
                }

            }
        }
    })
    console.log(returns);

}
solution(rows);

