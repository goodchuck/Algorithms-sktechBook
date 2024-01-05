var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `11 12
BWWBWWBWWBWW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBWWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW`
let real = input.trim().split("\n");



function solution(real) {
    let [first, ...second] = real
    let [M, N] = first.split(" ").map(Number);
    // console.log(M, N);
    let boards = second.map((row) => [...row])
    // console.log(boards)

    let x = 0;
    let y = 0;
    let results = [];
    while (true) {
        let count = 0;
        let firstBoardColor = ['B', 'W'];
        for (let k = 0; k < firstBoardColor.length; k++) {
            for (let i = x; i < x + 8; i++) {
                for (let j = y; j < y + 8; j++) {
                    if (firstBoardColor[k] === 'B') {
                        if ((i + j + 2) % 2 === 0) {
                            if (boards[i][j] !== 'B') {
                                count++;
                            }
                        }
                        else {
                            if (boards[i][j] !== 'W') {
                                count++;
                            }
                        }
                    }
                    else {
                        if ((i + j + 2) % 2 === 0) {
                            if (boards[i][j] !== 'W') {
                                count++;
                            }
                        }
                        else {
                            if (boards[i][j] !== 'B') {
                                count++;
                            }

                        }
                    }
                }
            }
            // console.log(x, y, firstBoardColor, count);
            results.push(count);
            count = 0;
        }


        if (x + 1 + 8 > M) {
            if (y + 1 + 8 > N) {
                // console.log(results);
                console.log(Math.min(...results));
                break;
            } else {
                x = 0;
                y++;
                continue;
            }
        }
        x++;
    }

}
solution(real);