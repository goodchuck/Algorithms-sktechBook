// 퇴사
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
5 50
4 40
3 30
2 20
1 10
1 10
2 20
3 30
4 40
5 50`

let real = input.trim().split("\n");
let [N, ...rest] = real;
N = Number(N);
let Ts = [];
let Ps = [];
rest.forEach((row) => {
    let [T, P] = row.trim().split(" ").map(Number);
    Ts.push(T);
    Ps.push(P);
})
let maxes = -Infinity;
function go(index, sum) {
    // console.log({ index, sum })
    if (index === N) {
        maxes = Math.max(maxes, sum);
    }
    if (index > N - 1) {
        return;
    }

    go(index + 1, sum);
    go(index + Ts[index], sum + Ps[index]);


}

async function solution() {
    go(0, 0);
    // console.log(returns.join("\n"))
    console.log(maxes);


}
solution();