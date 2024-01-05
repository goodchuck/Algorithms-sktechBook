var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
15 13`
let real = input.trim().split("\n");

function solution(real) {
    let [T, ...rest] = real;
    let xs = [];
    let ys = [];
    let arrays = rest.map((n) => {
        let [x, y] = n.split(" ").map(Number);
        xs.push(x);
        ys.push(y);
        return [x, y];
    })
    let area = (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys))
    if (T === 1) {
        console.log(0)
    } else {
        console.log(area);
    }

}
solution(real);