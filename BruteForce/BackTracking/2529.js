// 부등호
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
< >`

let real = input.trim().split("\n");
let [k, sec] = real;
k = Number(k)
let checksArray = Array.from({ length: 10 }).fill(false);
let bu = sec.trim().split(" ");
let maxes = -Infinity;
let mines = Infinity;
function go(index, arrs) {
    if (index === k + 1) {
        maxes = Math.max(maxes, Number(arrs.join("")));
        mines = Math.min(mines, Number(arrs.join("")));
        // console.log({ arrs })
        return;
    }
    for (let i = 0; i < 10; i++) {

        if (index !== 0) {
            let targetBu = bu[index - 1];
            if (targetBu === '>') {
                if (arrs[arrs.length - 1] < i) continue;
                if (!checksArray[i]) {
                    checksArray[i] = true;
                    arrs.push(i);
                    go(index + 1, arrs);
                    checksArray[i] = false;
                    arrs.pop();
                }
            }
            else {
                if (arrs[arrs.length - 1] > i) continue;
                if (!checksArray[i]) {
                    checksArray[i] = true;
                    arrs.push(i);
                    go(index + 1, arrs);
                    checksArray[i] = false;
                    arrs.pop();
                }
            }
        }
        else if (!checksArray[i]) {
            checksArray[i] = true;
            arrs.push(i);
            go(index + 1, arrs);
            checksArray[i] = false;
            arrs.pop();
        }
    }
}

async function solution() {

    go(0, []);
    if (String(maxes).length !== k + 1) {
        maxes = "0".repeat(k + 1 - String(maxes).length) + String(maxes);
    }
    console.log(maxes);
    if (String(mines).length !== k + 1) {
        mines = "0".repeat(k + 1 - String(mines).length) + String(mines);
    }
    console.log(mines);
}
solution();