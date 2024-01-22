var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5`
let [first, ...rests] = input.trim().split("\n");
let [N, M] = first.split(" ").map(Number);
rests = rests.map(row => {
    return row.split(" ").map(Number);
})

function checkTetro(i, j) {
    // y:0 x:0
    // x:1 y:0
    // N : 4
    // M : 5
    let x = i;
    let y = j;
    // console.log({ x, y })
    // x = 0;
    // y = 1;

    // i = 0;
    // j = 1;
    // x = 1;
    // y = 0;

    // oooo
    let maxSum = -Infinity;
    // let prevI = i;
    // let prevJ = j;

    // i = prevJ;
    // j = prevI

    if (j + 3 < M) {
        let tet = rests[x][y] + rests[x][y + 1] + rests[x][y + 2] + rests[x][y + 3];
        maxSum = Math.max(maxSum, tet)
    }

    // o
    // o
    // o
    // o
    if (i + 3 < N) {
        let tet = rests[x][y] + rests[x + 1][y] + rests[x + 2][y] + rests[x + 3][y];
        maxSum = Math.max(maxSum, tet)
    }

    // o o
    // o o
    if (j + 1 < M && i + 1 < N) {
        let tet = rests[x][y] + rests[x + 1][y] + rests[x][y + 1] + rests[x + 1][y + 1];
        maxSum = Math.max(maxSum, tet);
    }

    // o
    // o
    // o o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y] + rests[x + 1][y] + rests[x + 2][y] + rests[x + 2][y + 1];
        maxSum = Math.max(maxSum, tet);
    }

    // o o o 
    // o
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y] + rests[x][y + 1] + rests[x][y + 2] + rests[x + 1][y];
        maxSum = Math.max(maxSum, tet);
    }

    // o o
    //   o
    //   o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y] + rests[x][y + 1] + rests[x + 1][y + 1] + rests[x + 2][y + 1]
        maxSum = Math.max(maxSum, tet);
    }


    //     o
    // o o o
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y + 2] + rests[x + 1][y] + rests[x + 1][y + 1] + rests[x + 1][y + 2]
        maxSum = Math.max(maxSum, tet);
    }

    //   o
    //   o
    // o o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y + 1] + rests[x + 1][y + 1] + rests[x + 2][y] + rests[x + 2][y + 1];
        maxSum = Math.max(maxSum, tet);
    }

    // o
    // o o o
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y] + rests[x + 1][y] + rests[x + 1][y + 1] + rests[x + 1][y + 2];
        maxSum = Math.max(maxSum, tet);
    }

    // o o
    // o
    // o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y] + rests[x][y + 1] + rests[x + 1][y] + rests[x + 2][y];
        maxSum = Math.max(maxSum, tet);
    }

    // o o o
    //     o
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y] + rests[x][y + 1] + rests[x][y + 2] + rests[x + 1][y + 2];
        maxSum = Math.max(maxSum, tet);
    }

    // o
    // o o
    //   o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y] + rests[x + 1][y] + rests[x + 1][y + 1] + rests[x + 2][y + 1]
        maxSum = Math.max(maxSum, tet);
    }

    //   o o
    // o o
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y + 1] + rests[x][y + 2] + rests[x + 1][y] + rests[x + 1][y + 1]
        maxSum = Math.max(maxSum, tet);
    }

    //   o
    // o o
    // o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y + 1] + rests[x + 1][y] + rests[x + 1][y + 1] + rests[x + 2][y]
        maxSum = Math.max(maxSum, tet);
    }

    // o o 
    //   o o
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y] + rests[x][y + 1] + rests[x + 1][y + 1] + rests[x + 1][y + 2]

        maxSum = Math.max(maxSum, tet);
    }

    // o o o
    //   o
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y] + rests[x][y + 1] + rests[x][y + 2] + rests[x + 1][y + 1]
        maxSum = Math.max(maxSum, tet);
    }

    //   o
    // o o
    //   o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y + 1] + rests[x + 1][y] + rests[x + 1][y + 1] + rests[x + 2][y + 1]
        maxSum = Math.max(maxSum, tet);
    }

    //   o
    // o o o 
    if (j + 2 < M && i + 1 < N) {
        let tet = rests[x][y + 1] + rests[x + 1][y] + rests[x + 1][y + 1] + rests[x + 1][y + 2]
        maxSum = Math.max(maxSum, tet);
    }

    // o
    // o o
    // o
    if (j + 1 < M && i + 2 < N) {
        let tet = rests[x][y] + rests[x + 1][y] + rests[x + 1][y + 1] + rests[x + 2][y]
        maxSum = Math.max(maxSum, tet);
    }
    // console.log({ x, y, i, j, maxSum })
    return maxSum
}

function solution() {
    // console.log({ N, M, rests })
    let maxSum = -Infinity;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            let results = checkTetro(i, j);
            maxSum = Math.max(maxSum, results);
        }
    }
    console.log(maxSum);
}
solution();