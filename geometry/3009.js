var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 5
5 7
7 5`
let real = input.trim().split("\n");

function solution(real) {
    let xCount = {};
    let yCount = {};
    let points = real.map((coords) => {
        let [x, y] = coords.split(" ").map(Number);
        if (!xCount[x]) {
            xCount[x] = 1;
        } else {
            xCount[x] += 1;
        }
        if (!yCount[y]) {
            yCount[y] = 1;
        } else {
            yCount[y] += 1;
        }
        return [x, y];
    });
    let xArray = Object.entries(xCount).sort((a, b) => a[1] - b[1]);
    let yArray = Object.entries(yCount).sort((a, b) => a[1] - b[1]);
    // console.log({ xCount, yCount })
    console.log(`${xArray[0][0]} ${yArray[0][0]}`)

}
solution(real);