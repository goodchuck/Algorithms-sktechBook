// DSLR
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
1234 3412
1000 1
1 16`

let real = input.trim().split("\n");
let [T, ...rests] = real;

function check(node, distance, distanceArrays) {
    let newQue = [];

    // D
    let Dn = (node * 2) % 10000
    if (!distanceArrays[Dn]) {
        newQue.push(Dn);
        distanceArrays[Dn] = distance + 'D'
    }

    // S
    let Sn = node - 1
    if (Sn === -1) {
        Sn = 9999;
    }
    if (!distanceArrays[Sn]) {
        newQue.push(Sn);
        distanceArrays[Sn] = distance + 'S'
    }

    let Ln = (node % 1000) * 10 + Math.floor(node / 1000);
    if (!distanceArrays[Ln]) {
        newQue.push(Ln);
        distanceArrays[Ln] = distance + 'L'
    }


    // R
    let Rn = Math.floor(node / 10) + (node % 10) * 1000;
    if (!distanceArrays[Rn]) {
        newQue.push(Rn);
        distanceArrays[Rn] = distance + 'R'
    }

    return newQue
}


class Queue {
    constructor() {
        this.store = {};
        this.rear = -1;
        this.front = 0;
    }

    push(value) {
        this.rear += 1;
        this.store[this.rear] = value;
    }

    pop_left() {
        let target = this.store[this.front];
        if (this.size()) {
            this.front += 1;
        }
        return target;
    }

    size() {
        if (this.front > this.rear) {
            return 0;
        }
        else {
            return this.rear - this.front + 1;
        }
    }
}

function solution() {
    let returns = [];
    for (let row of rests) {
        let distanceArrays = [];
        let [left, right] = row.split(" ").map(Number);
        let que = new Queue();
        que.push(left);
        distanceArrays[left] = '';
        while (que.size()) {
            let node = que.pop_left();
            // console.log({ node })
            let distance = distanceArrays[node];
            if (node === right) {
                returns.push(distance);
                break;
            }
            let newQue = check(node, distance, distanceArrays);
            for (let r of newQue) {
                que.push(r);
            }

        }
    }
    console.log(returns.join("\n"))


}
solution();