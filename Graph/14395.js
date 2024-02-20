// 4연산
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2 1`


let real = input.trim().split("\n");
let [first, ...rests] = real;

let [s, t] = first.split(" ").map(Number);
let distanceArrays = [];

function check(node, count) {
    let newque = [];

    // *
    if (!distanceArrays[node * node] && node * node <= 10 ** 9) {
        distanceArrays[node * node] = `${count}*`;
        newque.push(node * node);
    }

    // +
    if (!distanceArrays[node + node] && node + node <= 10 ** 9) {
        distanceArrays[node + node] = `${count}+`;
        newque.push(node + node);
    }
    // -
    if (node !== 0 && !distanceArrays[node - node]) {
        distanceArrays[node - node] = `${count}-`;
        newque.push(node - node);
    }

    //  /
    if (node !== 0 && !distanceArrays[node / node]) {
        distanceArrays[node / node] = `${count}/`;
        newque.push(node / node);
    }

    return newque
}


function solution() {
    let que = [];
    que.push(s);
    distanceArrays[s] = '';
    let returns = [];
    if (s === t) {
        console.log(0);
        return;
    }
    while (que.length !== 0) {
        let node = que.shift();
        let count = distanceArrays[node];
        // console.log({ node, que })
        if (node === t) {
            returns.push(count);
            distanceArrays[node] = 0;
        }
        else {
            let newQues = check(node, count);
            que.push(...newQues);
        }
    }
    if (returns.length !== 0) {
        // console.log({ returns });
        console.log(returns.sort((a, b) => {
            if (a.length !== b.length) {
                return a.length - b.length;
            }
            else {
                return a.charCodeAt(0) - b.charCodeAt(0)
            }

        })[0]);
    }
    else {
        console.log(-1);
    }

}
solution();