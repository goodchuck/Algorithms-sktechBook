var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80
`

// let [T, ...words] = input.trim().split("\n");


let rows = input.trim().split("\n");

function makeDimensionArray(arrays) {
    let DA = [];
    arrays.forEach((row) => {
        DA.push(row.trim().split(" ").map(Number));
    })
    return DA
}

function solution(words) {
    let DA = makeDimensionArray(words);
    let maxNum = -Infinity;
    let returnIndex = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (DA[i][j] > maxNum) {
                maxNum = DA[i][j];
                returnIndex = [i + 1, j + 1];
            }
        }
    }
    console.log(maxNum)
    console.log(returnIndex.join(" "));
}
solution(rows);

