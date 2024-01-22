// 리모콘
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `944 
7
2 3 4 5 6 7 9`

let real = input.trim().split("\n");

function solution(real) {
    let [N, M, rest] = real;
    let NArr = [...N.trim()].map(Number);
    N = Number(N);
    M = Number(M);
    if (M > 0) {
        rest = rest.split(" ").map(Number);
    }
    let ans = 0;
    let mi = Math.abs(100 - N);
    ans = mi;
    // console.log({ NArr });
    let currentCh = '';
    let count = 0;
    if (N === 100) {
        console.log(0);
        return;
    }


    for (let i = 0; i < NArr.length; i++) {
        let r = NArr[i];
        console.log({ r, NArr })
        let find = null;
        let bI = -Infinity;
        if (M > 0) {
            find = rest.find((_) => _ === r);
        }

        // console.log({ r, find })
        if (find > -1 && M > 0) {
            let inMins = Infinity;
            let num = 0;
            for (let j = 0; j < 10; j++) {
                if (rest.find(_ => _ === j) > -1) continue;
                if (Math.abs(r - j) === Math.min(Math.abs(inMins), Math.abs(r - j))) {
                    num = j
                    inMins = Math.abs(r - j)
                }
            }

            bI = i;
            if ((currentCh === '' || [...currentCh].every((str) => str === '0')) && r === 0) {

            } else if (i === NArr.length - 1 && [...currentCh].every((str) => str === '0')) {
                count++;
            }
            else {
                count++;
            }
            currentCh += String(num);


        }
        else if (M > 0 && bI > -1 && Number([...currentCh][bI]) !== NArr[bI]) {
            if (Number([...currentCh][bI] < NArr[bI])) {
                let inMins = -Infinity;
                let num = 0;
                for (let j = 0; j < 10; j++) {
                    if (rest.find(_ => _ === j) > -1) continue;

                    if (j === Math.max(inMins, j)) {
                        num = j
                        inMins = Math.abs(j)
                    }
                }

                if (i === 0 && num === 0 || [...currentCh][currentCh.length - 1] === '0' && num === 0) {

                } else {
                    count++;
                }
                currentCh += String(num);
            }
            else {
                let inMins = Infinity;
                let num = 0;
                for (let j = 0; j < 10; j++) {
                    if (rest.find(_ => _ === j) > -1) continue;
                    if (Math.abs(r - j) === Math.min(Math.abs(inMins), Math.abs(r - j))) {
                        num = j
                        inMins = Math.abs(r - j)
                    }
                }
                count++;
                // console.log({ inMins })
                currentCh += String(num);
            }
        }
        else {
            if ((currentCh === '' || [...currentCh].every((str) => str === '0')) && r === 0) {

            } else if (i === NArr.length - 1 && [...currentCh].every((str) => str === '0')) {
                // console.log("옴1?")
                count++;
            }
            else {
                count++;
            }
            currentCh += String(r)
        }
        // console.log({ r, currentCh, rest })
    }
    console.log({ currentCh })
    if (Number(currentCh) !== N) {
        let mi = Number(currentCh) - N;
        // console.log({ mi, currentCh })
        count += Math.abs(mi);
        if (N === 0) {
            count++;
        }
    }
    else if (N === 0) {
        count++;
    }
    console.log(Math.min(count, ans))
    // let rest = sec.split(" ").map(Number);
}
solution(real);