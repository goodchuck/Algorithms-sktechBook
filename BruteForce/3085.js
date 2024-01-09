// 사탕 게임
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ`

let real = input.trim().split("\n");

function makeDoubleArr(arr) {
    let DA = [];
    for (let row of arr) {
        DA.push(row);
    }
    return DA;
}

async function checkMaxEat(DoubleArray) {
    let sum = 0;

    let lengths = DoubleArray.length;
    for (let i = 0; i < lengths; i++) {
        let cnt = 1;
        for (let j = 0; j < lengths; j++) {
            if (DoubleArray[i][j] === DoubleArray[i][j - 1]) {
                cnt++;
            } else {
                cnt = 1;
            }
            if (cnt > sum) sum = cnt;
        }
        cnt = 1;
        for (let j = 1; j < lengths; j++) {
            if (DoubleArray[j][i] === DoubleArray[j - 1][i]) {
                cnt++;
            } else {
                cnt = 1;
            }
            if (cnt > sum) sum = cnt;
        }
    }
    return sum;
}

async function solution(real) {
    let [T, ...rest] = real;
    T = Number(T);
    rest = rest.map((row) => {
        let newRow = [...row];
        return newRow;
    })
    let DA = makeDoubleArr(rest)
    // console.log(DA);
    let maxEat = 0;
    for (let i = 0; i < T; i++) {
        for (let j = 0; j < T; j++) {
            // console.log(DA[i][j], i, j)
            // console.log({ i, j, T })
            if (j + 1 < T) {
                let prevIJ = DA[i][j];
                let prevIJ1 = DA[i][j + 1];
                DA[i][j] = prevIJ1;
                DA[i][j + 1] = prevIJ;
                // 확인 로직
                let check = await checkMaxEat(DA);
                if (check > maxEat) maxEat = check;
                // console.log('첫번째', DA, i, j, check)
                DA[i][j] = prevIJ;
                DA[i][j + 1] = prevIJ1;
            }
            if (i + 1 < T) {
                let prevIJ = DA[i][j];
                let prevIJ1 = DA[i + 1][j];
                DA[i][j] = prevIJ1;
                DA[i + 1][j] = prevIJ;
                // 확인 로직
                let check = await checkMaxEat(DA);
                // console.log('두번째', DA, i, j, check)
                if (check > maxEat) maxEat = check;

                DA[i][j] = prevIJ;
                DA[i + 1][j] = prevIJ1;
            }
        }
    }
    console.log(maxEat);
}
solution(real);