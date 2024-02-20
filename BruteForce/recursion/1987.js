// 알파벳
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 5
IEFCJ
FHFKC
FFALF
HFGCF
HMCHH`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [R, C] = first.trim().split(" ").map(Number);
let maze = rests.map(row => [...row]);
let alphaCheckArrays = Array.from({ length: 26 + 1 }).fill(false);
function findAlphabetPosition(alphabet) {
    // 대문자로 변환 후 아스키 코드 값을 이용하여 위치 계산
    const position = alphabet.charCodeAt() - 65;
    return position
}
let dx = [1, -1, 0, 0];
let dy = [0, 0, -1, 1];
function go(index, x, y) {
    let maxCnt = index;
    let word = maze[y][x];

    alphaCheckArrays[findAlphabetPosition(word)] = true;
    for (let i = 0; i < 4; i++) {
        let newX = x + dx[i];
        let newY = y + dy[i];
        if (newX >= 0 && newX < C && newY >= 0 && newY < R && !alphaCheckArrays[findAlphabetPosition(maze[newY][newX])]) {
            maxCnt = Math.max(go(index + 1, newX, newY), maxCnt)
        }
    }
    alphaCheckArrays[findAlphabetPosition(word)] = false;

    return maxCnt;
}

async function solution() {

    console.log(go(1, 0, 0));
    // console.log(maxes)

}
solution();