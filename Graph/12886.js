// 돌 그룹
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1 1 2`


let real = input.trim().split("\n");
let [first] = real;
let stones = first.split(" ").map(Number)
let checkArrays = Array.from({ length: 1501 }, () => Array.from({ length: 1501 }).fill(0));

class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = -1;
    }

    size() {
        if (this.front > this.rear) {
            return 0;
        }
        else {
            return this.rear - this.front + 1;
        }
    }

    push(value) {
        this.rear += 1;
        this.storage[this.rear] = value;
    }

    pop_left() {
        let value = this.storage[this.front];
        if (this.size()) {
            this.front += 1;
        }
        return value;
    }
}

function solution() {
    let que = new Queue();
    que.push(stones);
    checkArrays[stones[0]][stones[1]] = 1;
    checkArrays[stones[1]][stones[0]] = 1;
    checkArrays[stones[0]][stones[2]] = 1;
    checkArrays[stones[2]][stones[0]] = 1;
    checkArrays[stones[1]][stones[2]] = 1;
    checkArrays[stones[2]][stones[1]] = 1;
    let sum = stones[0] + stones[1] + stones[2];
    if ((sum) % 3 !== 0) {
        console.log(0);
        return;
    }
    while (que.size()) {
        let node = que.pop_left();
        // console.log({ node, que })
        if (node[0] === node[1] && node[1] === node[2]) {
            console.log(1);
            return;
        }
        node = node.sort((a, b) => a - b)

        // 1과 2
        if (node[0] !== node[1]) {
            // let mi = node[0]
            // let ma = node[1]
            let mins = node[1] - node[0];
            let maxs = node[0] * 2;
            if (!checkArrays[mins][maxs]) {
                if (mins === maxs && maxs === node[2]) {
                    console.log(1);
                    return;
                }
                checkArrays[mins][maxs] = 1;
                checkArrays[maxs][mins] = 1;
                que.push([mins, maxs, node[2]]);
            }
        }

        //1과 3
        if (node[0] !== node[2]) {
            // let mi = node[0]
            // let ma = node[2]
            let mins = node[2] - node[0];
            let maxs = node[0] * 2;
            if (!checkArrays[mins][maxs]) {
                if (mins === maxs && maxs === node[1]) {
                    console.log(1);
                    return;
                }
                checkArrays[mins][maxs] = 1;
                checkArrays[maxs][mins] = 1;
                que.push([mins, maxs, node[1]]);
            }
        }

        // 2과 3
        if (node[1] !== node[2]) {
            // let mi = node[1]
            // let ma = node[2]
            let mins = node[2] - node[1];
            let maxs = node[1] * 2;
            if (!checkArrays[mins][maxs]) {
                if (mins === maxs && maxs === node[0]) {
                    console.log(1);
                    return;
                }
                checkArrays[mins][maxs] = 1;
                checkArrays[maxs][mins] = 1;
                que.push([mins, maxs, node[0]]);

            }
        }
    }

    console.log(0);
}

solution();
