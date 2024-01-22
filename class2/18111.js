var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 4 11
29 51 54 44
22 44 32 62
25 38 16 2`
let real = input.trim().split("\n");

// function makeDoubleArray(arr) {
//     let DA = [];
//     for (let row of arr) {
//         DA.push(row);
//     }
//     return DA;
// }

function solution(real) {
    let [first, ...rest] = real
    let [N, M, B] = first.trim().split(" ").map(Number);
    let blockHeights = Array.from({ length: 256 }).fill(0);
    let newArr = rest.map((row) => {
        row = row.split(" ").map(Number);
        return row;
    })

    let height = 0;
    let answer = [Infinity, 0] //첫번째 시간, 두번째 높이
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            height = newArr[i][j];
            // console.log({ height })
            if (!blockHeights[height]) {
                blockHeights[height] = 1;
            }
            else {
                blockHeights[height]++;
            }

            // console.log(blockHeights[height]);
        }
    }
    // console.log({ blockHeights })

    let area = M * N;
    // 높이가 0부터 최고높이까지 반복
    for (let k = 0; k <= blockHeights.length; k++) {
        // console.log({ k })
        let blocks = B;
        let time = 0;
        let noFind = false;
        // console.log({ blocks, k, noFind })
        for (let j = 0; j < blockHeights.length; j++) {
            // if (!hei) continue;
            let hei = blockHeights[j]
            if (k === j) {
                continue;
            };
            // console.log({ hei, index })
            if (j > k) {
                time += (hei * (j - k)) * 2
                blocks += (hei * (j - k));
                // console.log('높', { blocks, j, k })
            }
            else if (j < k) {
                time += (Math.abs(j - k) * hei)
                blocks -= (Math.abs(j - k) * hei);
                // console.log('낮', { blocks, j, k, hei })
            }


        }
        if (blocks < 0) {
            continue;
        }
        // console.log({ time, k })
        answer[0] = Math.min(answer[0], time);
        if (time === answer[0]) {
            answer[1] = k;
        }
    }

    console.log(answer.join(" "))
}
solution(real);
