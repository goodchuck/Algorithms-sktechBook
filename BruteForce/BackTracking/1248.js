// Guess
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
-`

let real = input.trim().split("\n");
let [k, sec] = real;
k = Number(k)
let arrs = [];
let ind = 0;
let newK = k;
while (true) {
    if (arrs.length === k) break;
    let arr = sec.slice(ind, ind + newK);
    ind += newK;
    arrs.push([...'n'.repeat(k - newK), ...arr]);
    newK--;


}
// console.log({ arrs });
let answer = [];

function checkJo(As, index) {
    // console.log({ bus })
    let asSlicedSum = As.reduce((acc, cv) => acc + cv, 0);

    for (let i = 0; i < As.length - 1; i++) {
        let bu = arrs[i][index];

        // let asSliced = As.slice(i, As.length);
        if (i > 0) asSlicedSum -= As[i - 1]
        // console.log({ asSlicedSum, As, index, bu })
        if (bu === '0') {
            if (asSlicedSum !== 0) return false;
        } else if (bu === '-') {
            if (asSlicedSum >= 0) return false;
        }
        else if (bu === '+') {
            if (asSlicedSum <= 0) return false;
        }
    }
    // console.log("통과한놈", As)
    return true;
}
let isFind = false;
async function go(index, As) {
    if (index === k) {
        // console.log({ index, As })
        answer = [...As];
        return
    }

    // console.log({ index, bus, As })
    for (let i = -10; i <= 10; i++) {
        // console.log(i, index, arrs[index][index], isFind)
        if (isFind) {
            return;
        }
        if (arrs[index][index] === '0') {
            if (i !== 0) continue;
        }
        else if (arrs[index][index] === '-') {
            if (i > -1) continue;
        }
        else {
            if (i < 1) continue;
        }
        if (k === 1) {
            answer = [i]
            isFind = true;
            return
        }
        let check = checkJo([...As, i], index)

        if (index > 0 && !check) {
            continue;
        } else if (index > 0 && [...As, i].length === k) {
            answer = [...As, i];
            // console.log({ answer })
            isFind = true;
            // console.log("여기온거지?")
            return;
        }
        As.push(i);
        go(index + 1, As);
        As.pop();


    }
}

async function solution() {
    await go(0, []);
    if (answer.length > 0) {
        console.log(answer.join(" "));
    }

    // go(0, []);
}
solution();