// 암호 만들기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 5
a e i o u`

let real = input.trim().split("\n");
let [first, sec] = real;
let [L, C] = first.trim().split(" ").map(Number);
sec = sec.trim().split(" ").sort();
// console.log({ sec })
let checksArray = Array.from({ length: C }).fill(false);
let returns = [];
function check(str) {
    let mo = ['a', 'i', 'e', 'o', 'u']
    let isMo = false;
    if (str.length < 3) return false;
    let jaLength = str.length;
    for (let al of str) {
        let moFind = mo.find(m => m === al);
        if (moFind) {
            isMo = true
            jaLength--;
        };

    }
    if (isMo && jaLength >= 2) return true;
}
function go(index, str) {
    // console.log({ index, str })
    if (index === L) {
        if (check(str)) {
            returns.push(str);
        }
        return;
    }
    for (let i = 0; i < sec.length; i++) {
        if (sec[i] < str[str.length - 1]) continue;
        if (!checksArray[i]) {
            checksArray[i] = true;
            str += sec[i];
            go(index + 1, str);
            str = str.slice(0, -1);
            checksArray[i] = false;
        }
    }

}

async function solution() {
    go(0, '');
    console.log(returns.join("\n"))


}
solution();