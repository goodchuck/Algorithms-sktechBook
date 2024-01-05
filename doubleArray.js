var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100
`

// let [T, ...words] = input.trim().split("\n");


let [firstRow, ...words] = input.trim().split("\n");
let [N, M] = firstRow.trim().split(" ").map(Number);
function solution(words) {
    let arrayCount = Math.floor(words.length / N);
    // console.log({ words, arrayCount })
    let hangs = [];
    for (let i = 0; i < arrayCount; i++) {
        let splices = words.slice(i * N, N + i * N).map((w) => {
            let a = w.trim().split(" ").map(Number);
            return a
        });
        // console.log({ splices })
        hangs.push(splices);
    }
    let resultArray = [];
    for (let i = 0; i < N; i++) {
        resultArray.push([]);
        for (let j = 0; j < M; j++) {
            let count = 0;
            hangs.forEach((h) => {
                count += h[i][j]
            })
            resultArray[i].push(count);
        }
    }
    console.log(resultArray.map((a) => a.join(" ")).join('\n'))


}
solution(words);

