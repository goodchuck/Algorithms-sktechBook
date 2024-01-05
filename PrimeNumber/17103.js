var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
6
8
10
12
4
100`
let real = input.trim().split("\n");

function getSieveOfEratosthenesNew(N) {
    let prime = []; //소수 저장
    let pn = 0; //소수의 개수
    let check = Array.from({ length: N }, () => false);
    // console.log(check, N)
    for (let i = 2; i <= N; i++) {
        if (check[i] === false) {

            prime.push(i);
            for (let j = i + i; j <= N; j += i) {
                check[j] = true;
            }
        }
    }
    return { prime, check };
}

async function solution(real) {
    let [T, ...arr] = real;
    let returns = [];
    let { prime, check } = getSieveOfEratosthenesNew(1_000_000 + 1);
    for (let row of arr) {
        if (Number(row) === 0) break;
        let nRow = Number(row)
        let count = 0;
        for (let j = 2; j < nRow; j++) {
            if (!check[j] && !check[nRow - j]) {
                // console.log(j, nRow - j, nRow)
                // if (j === (nRow - j)) continue;
                if (j < (nRow - j)) continue;
                if (nRow - j === 1) continue;
                count++;
            }

        }
        returns.push(count)

    }

    console.log(returns.join("\n"));
}
solution(real);