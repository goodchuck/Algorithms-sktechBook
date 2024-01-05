var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`
let real = input.trim().split("\n");


async function solution(real) {
    let [first, ...arr] = real;
    let [N, M] = first.split(" ").map(Number);
    let d = arr.slice(0, N);
    let o = new Set(arr.slice(N, N + M));
    let results = [];
    for (let i = 0; i < d.length; i++) {
        if (o.has(d[i])) {
            results.push(d[i]);
        }
    }
    console.log(results.length);
    console.log(results.sort().join("\n"))
    // console.log({ d, o })

}
solution(real);