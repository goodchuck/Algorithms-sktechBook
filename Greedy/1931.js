// 회의실 배정
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`

let real = input.trim().split("\n");
let [first, ...rests] = real;


function solution() {
    let arrays = [];
    rests.forEach(row => {
        let [start, end] = row.split(" ").map(Number);
        arrays.push({ start, end });
    })
    arrays.sort((a, b) => {
        if (a.end === b.end) {
            return a.start - b.start;
        } else {
            return a.end - b.end;
        }
    })
    // console.log(arrays)

    let answer = 0;
    let startTime = 0;
    for (let i = 0; i < arrays.length; i++) {
        let { start, end } = arrays[i];
        if (startTime <= start) {
            startTime = end;
            answer += 1;
        }
    }
    console.log(answer)
}

solution();
