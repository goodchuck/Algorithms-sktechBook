// 스도쿠
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `0 0 0 0 0 0 0 0 9
0 0 0 0 0 0 0 0 8
0 0 0 0 0 0 0 0 7
0 0 0 0 0 0 0 0 6
0 0 0 0 0 0 0 0 5
0 0 0 0 0 0 0 0 4
0 0 0 0 0 0 0 0 3
0 0 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0 1`

let real = input.trim().split("\n");
let maze = real;
maze = maze.map(v => [...v.split(" ")].map(Number));

let width = maze[0].length;
let height = maze.length;


function checkZeroNums(maze) {
    let zeroCount = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (maze[i][j] === 0) {
                zeroCount++;
            }
        }
    }
    return zeroCount;
}
let count = checkZeroNums(maze);

function usedRow(y, num) {
    for (let i = 0; i < 9; i++) {
        if (maze[y][i] === num) {
            return true;
        }
    }
    return false;
}
function usedCol(x, num) {
    for (let i = 0; i < 9; i++) {
        if (maze[i][x] === num) {
            return true;
        }
    }
    return false;
}
function usedNine(x, y, num) {
    // 9칸 확인
    // 
    let nx = x % 9
    if (nx >= 0 && nx <= 2) {
        nx = 0;
    }
    else if (nx >= 3 && nx <= 5) {
        nx = 3;
    }
    else if (nx >= 6 && nx <= 8) {
        nx = 6;
    }
    let ny = y % 9
    if (ny >= 0 && ny <= 2) {
        ny = 0;
    }
    else if (ny >= 3 && ny <= 5) {
        ny = 3;
    }
    else if (ny >= 6 && ny <= 8) {
        ny = 6;
    }
    for (let i = ny; i < ny + 3; i++) {
        for (let j = nx; j < nx + 3; j++) {
            // console.log({ i, j }, maze[i][j]);
            if (maze[i][j] === num) {
                return true;
            }
        }
    }
    return false;
}

function check(index, x, y) {
    for (let num = 1; num <= 9; num++) {
        let findW = usedRow(y, num);
        let findH = usedCol(x, num);
        let findN = usedNine(x, y, num);
        if (!findW && !findH && !findN) {
            maze[y][x] = num;
            go(index + 1, x, y)
            maze[y][x] = 0;
        }
    }
    return false;
}
let returns = [];
function go(index, x, y) {
    if (index === count) {
        // console.log("무한루프 확인", index, maze)
        if (returns.length === 0) {
            returns.push(JSON.parse(JSON.stringify(maze)));
            return false;
        }
        return true;
    }

    for (let i = y; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (maze[i][j] === 0) {
                let num = check(index, j, i);
                if (!num) {
                    // console.log("못푸는 퍼즐")
                    return false;
                }
            }
        }
    }
}


async function solution() {
    // console.log(maze)
    go(0, 0, 0);
    let answer = [];
    returns[0].forEach(row => answer.push(row.join(" ")));
    console.log(answer.join("\n"));
}
solution();