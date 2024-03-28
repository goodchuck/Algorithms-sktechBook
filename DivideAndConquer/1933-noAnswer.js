// 스카이라인
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// let input = `7
// 5 3 2 9 7 4 1`
let input = `8
1 11 5
2 6 7
3 13 9
12 7 16
14 3 25
19 18 22
23 13 29
24 4 28`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);


async function solution() {
    let skyLines = [{ left: 0, right: 0, height: 0, arrs: [] }];

    for (let [index, row] of Object.entries(rest)) {
        let [L, H, R] = row.split(" ").map(Number);

        let next = rest[Number(index) + 1];
        // index = Number(index);
        let targetSkyLine = skyLines.at(-1);
        console.log({ L, H, R, targetSkyLine })
        if (index === '0') {
            skyLines[0].left = L;
            skyLines[0].right = R;
            skyLines[0].height = H;
            skyLines[0].arrs.push([L, H]);
        }

        else if (L < targetSkyLine.right) {


            if (H > targetSkyLine.height) {
                targetSkyLine.arrs.push([L, H])
            }

            else {
                targetSkyLine.arrs.push([targetSkyLine.right, H])
            }
            targetSkyLine.height = H

            if (R > targetSkyLine.right) {
                targetSkyLine.right = R;
            }

            if (next) {
                // console.log({ next })
                next = next.split(" ").map(Number);

                if (next[0] > targetSkyLine.right) {
                    console.log(R, targetSkyLine.height)
                    if (R === targetSkyLine.right) {
                        targetSkyLine.arrs.push([R, 0]);
                    }
                    else {
                        targetSkyLine.arrs.push([R, targetSkyLine.height]);
                    }

                }
                else if (next[1] > targetSkyLine.arrs.at(-1)[1]) {
                    targetSkyLine.arrs.pop();

                }

            }
            else {
                targetSkyLine.arrs.push([targetSkyLine.right, 0]);
            }
        }
        else if (L > targetSkyLine.right) {
            skyLines.push({ left: L, right: R, height: H, arrs: [[L, H]] });
        }
    }
    // console.log(skyLines)
    for (let row of skyLines) {
        console.log(row.left, row.right, row.height, row.arrs);
    }
}

solution();
