var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `8
20
42
0`
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
    let arr = real;
    let returns = [];
    let { prime, check } = getSieveOfEratosthenesNew(1_000_000 + 1);
    for (let row of arr) {
        if (Number(row) === 0) break;
        let nRow = Number(row)
        let isFind = false;
        for (let j = 3; j < nRow; j += 2) {
            if (!check[j] && !check[nRow - j]) {
                isFind = true;
                returns.push(`${nRow} = ${j} + ${nRow - j}`)
                break;
            }

        }
        if (!isFind) {
            returns.push("Goldbach's conjecture is wrong.");
        }


    }

    console.log(returns.join("\n"));
}
solution(real);