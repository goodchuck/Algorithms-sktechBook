var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 6
101111
101010
101011
111011`
let real = input.trim().split("\n");

function makeMaze(arr) {
    let newArr = arr;
    newArr = arr.map((row) => {
        let returns = [];
        [...row].forEach((num) => {
            returns.push(num);
        })
        return returns;
    })
    return newArr;
}

async function solution(real) {
    let [first, ...rest] = real
    let [N, K] = first.split(" ").map(Number);
    let maze = makeMaze(rest);
    console.log(maze);

}
solution(real);