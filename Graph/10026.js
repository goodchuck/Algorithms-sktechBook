// 적록색약
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`


let real = input.trim().split("\n");
let [N, ...rests] = real;
rests = rests.map(v => [...v]);

// 일반사람
let checkArrays = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))

// 적록색약 사람
let checkArrays_CB = Array.from({ length: N }, () => Array.from({ length: N }).fill(0))
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
function check(x, y, team, alphabet, isCB = false) {
    let newque = [];

    if (isCB) {
        for (let i = 0; i < 4; i++) {
            let newY = y + dy[i];
            let newX = x + dx[i];
            if (newX >= 0 && newX < N && newY >= 0 && newY < N && checkArrays_CB[newY][newX] === 0) {
                if ((alphabet === 'R' || alphabet === 'G') && (rests[newY][newX] === 'R' || rests[newY][newX] === 'G') || alphabet === rests[newY][newX]) {
                    checkArrays_CB[newY][newX] = team;
                    newque.push(`${newX}_${newY}`)
                }

            }
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            let newY = y + dy[i];
            let newX = x + dx[i];
            if (newX >= 0 && newX < N && newY >= 0 && newY < N && checkArrays[newY][newX] === 0 && alphabet === rests[newY][newX]) {
                checkArrays[newY][newX] = team;

                newque.push(`${newX}_${newY}`)
            }
        }
    }


    return newque
}



// 적록색약이 아닌사람 맞는사람 순
// 적록색약은 R=G로 봐야됨
function solution() {

    let teamArray = 1;
    let teamArray_CB = 1;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let al = rests[i][j];

            // 적록색약
            if (!checkArrays_CB[i][j]) {
                let que = [];
                que.push(`${j}_${i}`);
                checkArrays_CB[i][j] = teamArray_CB;

                while (que.length !== 0) {
                    let [jnd, ind] = que.shift().split("_").map(Number);
                    let team = checkArrays_CB[ind][jnd];
                    // console.log({ jnd, ind, que })
                    let newQues = check(jnd, ind, team, al, true);
                    // console.log({ newQues })
                    que.push(...newQues);
                }
                teamArray_CB++;
            }

            // 일반사람
            if (!checkArrays[i][j]) {
                let que = [];
                que.push(`${j}_${i}`);
                checkArrays[i][j] = teamArray;

                while (que.length !== 0) {
                    let [jnd, ind] = que.shift().split("_").map(Number);
                    let team = checkArrays[ind][jnd];
                    // console.log({ jnd, ind, que })
                    let newQues = check(jnd, ind, team, al);
                    // console.log({ newQues })
                    que.push(...newQues);
                }
                teamArray++;
            }
        }
    }
    console.log(`${teamArray - 1} ${teamArray_CB - 1}`)



}
solution();