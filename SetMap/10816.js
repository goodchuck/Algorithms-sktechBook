var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
let real = input.trim().split("\n");


async function solution(real) {
    let [N, arrN, M, arrM] = real;

    arrN = arrN.split(" ").sort((a, b) => a - b);
    arrM = arrM.split(" ")

    let myMap = new Map();
    for (let r of arrN) {
        if (!myMap.has(r)) {
            myMap.set(r, 1);
        } else {
            myMap.set(r, myMap.get(r) + 1)
        }
    }

    let newR = [];
    for (let k of arrM) {
        if (myMap.has(k)) {
            newR.push(myMap.get(k));
        } else {
            newR.push(0);
        }
    }
    console.log(newR.join(" "));



}
solution(real);