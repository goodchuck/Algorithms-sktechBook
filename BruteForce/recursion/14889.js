// 스타트와 링크
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`

let real = input.trim().split("\n");
let [N, ...rest] = real;
N = Number(N);
rest = rest.map((row) => {
    row = row.trim().split(" ").map(Number);
    return row;
})
// console.log({ rest })
let mins = Infinity;
function go(index, team, startTeam, linkTeam, startSum, linkSum) {
    if (team === 'start' && startTeam.length > N / 2) return;
    if (team === 'link' && linkTeam.length > N / 2) return;
    if (index === N) {
        if (startTeam.length > N / 2) return;
        if (linkTeam.length > N / 2) return;
        // console.log({ index, team, startTeam, linkTeam, startSum, linkSum })
        mins = Math.min(mins, Math.abs(startSum - linkSum))
        return;
    }
    if (team === 'start') {
        startTeam.push(index + 1);
        if (startTeam.length > 1) {
            // console.log({ startTeam })
            for (let i = 0; i < startTeam.length; i++) {
                startSum += rest[startTeam[i] - 1][index];
                startSum += rest[index][startTeam[i] - 1];
            }
        }
    }
    if (team === 'link') {

        linkTeam.push(index + 1);
        if (linkTeam.length > 1) {
            for (let i = 0; i < linkTeam.length; i++) {
                linkSum += rest[linkTeam[i] - 1][index];
                linkSum += rest[index][linkTeam[i] - 1];
            }
        }
    }
    // console.log({ index, team, startTeam, linkTeam, startSum, linkSum })
    go(index + 1, 'start', startTeam, linkTeam, startSum, linkSum);
    go(index + 1, 'link', startTeam, linkTeam, startSum, linkSum);

    if (team === 'start') {
        startTeam.pop();
    }

    if (team === 'link') {
        linkTeam.pop();
    }
}

async function solution() {
    go(0, 'start', [], [], 0, 0);
    go(0, 'link', [], [], 0, 0);
    console.log(mins);


}
solution();