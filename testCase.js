var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin')
let input = `4
4 4 1
6 12 10
6 12 6
30 50 30 `

let [tc, ...remain] = input.toString().trim().split('\n');
// remain = remain.replace(/[\\]/g, '\\\\')
async function TestCase(T) {
    let consoles = [];
    for (let i = 0; i < T; i++) {
        let res = await solution(remain[i]);
        consoles.push(res);
    }
    console.log(consoles.join('\n'));
}

async function solution(x) {
    let [H, W, N] = x.split(" ").map((n) => Number(n));

    let t = Math.floor(N / (H));
    // if (t === 0) {
    //     t += 1
    // }
    let r = N % (H);
    if (r === 0) {
        r = H;
        t -= 1;
    }
    console.log({ H, W, N, t, r });
    let floor = r;
    let room = (t + 1);
    if (room < 10) {
        room = '0' + room.toString();
    }
    else {
        room = room.toString();
    }
    let result = Number(floor.toString() + room.toString());
    return result;
}
TestCase(tc)