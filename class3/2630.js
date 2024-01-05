var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`
let real = input.trim().split("\n");

function makeMaze(arr) {
    let newArr = arr;
    newArr = arr.map((row) => {
        let returns = [];

        row.split(" ").forEach((num) => {
            returns.push(num);
        })
        return returns;
    })
    return newArr;
}

async function solution(real) {
    let [first, ...rest] = real
    let [N, K] = first.split(" ").map(Number);
    let paper = makeMaze(rest);
    N /= 2;
    let returns = [];
    while (true) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                returns.push()
            }
        }


    }

}
solution(real);