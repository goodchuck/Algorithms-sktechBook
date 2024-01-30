// N-Queen
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4`

let real = input.trim().split("\n");
let [k, ...rests] = real;
let N = Number(k)
let checksArray = Array.from({ length: N }, () => Array.from({ length: N }).fill(0));

function checkAttack(x, y) {
    // 가로줄 확인
    for (let i = 0; i < N; i++) {
        if (checksArray[y][i] === 1) {
            return false;
        }
    }

    // 세로줄 확인
    for (let j = 0; j < N; j++) {
        if (checksArray[j][x] === 1) {
            return false;
        }
    }

    // 좌측 상단
    let leftUpX = x;
    let leftUpY = y;
    while (leftUpX > 0 && leftUpY > 0) {
        leftUpX -= 1;
        leftUpY -= 1;
        if (checksArray[leftUpY][leftUpX] === 1) {
            return false;
        }

    }

    // 좌측 하단
    let leftDownX = x;
    let leftDownY = y;
    while (leftDownX > 0 && leftDownY < N - 1) {
        leftDownX -= 1;
        leftDownY += 1;
        if (checksArray[leftDownY][leftDownX] === 1) {
            return false;
        }

    }

    // 우측 상단
    let rightX = x;
    let rightY = y;
    while (rightX < N && rightY > 0) {
        rightX += 1;
        rightY -= 1;
        if (checksArray[rightY][rightX] === 1) {
            return false;
        }

    }

    // 우측 하단
    let rightDownX = x;
    let rightDownY = y;
    while (rightDownX < N - 1 && rightDownY < N - 1) {
        rightDownX += 1;
        rightDownY += 1;
        if (checksArray[rightDownY][rightDownX] === 1) {
            return false;
        }

    }


    return true;
}

// function checkAttack(x, y, targetX, targetY) {

//     if (x === targetX && y === targetY) return false;
//     // 방향 (좌,우,상,하,좌상,좌하,우상,우하)
//     dx = [-1, 1, 0, 0, -1, -1, 1, 1]
//     dy = [0, 0, -1, 1, -1, 1, -1, 1]

//     for (let i = 0; i < dx.length; i++) {
//         let innerIndex = 0;
//         let innerX = x;
//         let innerY = y;
//         while (true) {
//             let tDx = dx[i];
//             let tDy = dy[i];
//             if (innerX + tDx >= 0 && innerX + tDx < N && innerY + tDy >= 0 && innerY + tDy < N) {
//                 if (innerX + tDx === targetX && innerY + tDy === targetY) {
//                     return false;
//                 }
//                 // console.log('변화는좌표', innerX + tDx, innerY + tDy)
//                 // if (checksArray[innerY + tDy][innerX + tDx] === -1) {
//                 //     checksArray[innerY + tDy][innerX + tDx] = index;
//                 // }
//                 // else if (isReset && checksArray[innerY + tDy][innerX + tDx] === index) {
//                 //     checksArray[innerY + tDy][innerX + tDx] = -1;
//                 // }

//                 innerX += tDx;
//                 innerY += tDy;
//                 innerIndex++;
//             }
//             else {
//                 break;
//             }

//         }
//     }
//     return true;
// }
let count = 0;
function go(index) {
    if (index >= N) {
        // console.log('정답일때', index, { checksArray })
        count++;
        return;
    }
    for (let i = 0; i < N; i++) {
        if (checkAttack(i, index)) {
            checksArray[index][i] = 1;
            go(index + 1)
            checksArray[index][i] = 0;
        }
    }


}


async function solution() {
    go(0, []);

    console.log(count);
    // go(0, []);
}
solution();