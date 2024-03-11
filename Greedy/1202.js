// 보석 도둑
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 3
20 12
0 20
16 16
17
14
7`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, K] = first.split(" ").map(Number);

// 무게 M
// 가격 V
// 가방 K개
// 보석 N개
// 

// w가 0이면 보석
// 1이면 가방

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // 부모 노드의 인덱스를 반환
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // 왼쪽 자식 노드의 인덱스를 반환
    leftChild(index) {
        return 2 * index + 1;
    }

    // 오른쪽 자식 노드의 인덱스를 반환
    rightChild(index) {
        return 2 * index + 2;
    }

    // 최대 힙 속성 유지
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
            // 부모와 자식 노드를 교환
            [this.heap[index], this.heap[this.parent(index)]] = [this.heap[this.parent(index)], this.heap[index]];
            index = this.parent(index);
        }
    }

    // 삽입
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // 최대값 반환 후 삭제
    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    // 최대 힙 속성 유지
    heapifyDown(index) {
        let maxIndex = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);
        const size = this.heap.length;

        if (left < size && this.heap[left] > this.heap[maxIndex]) {
            maxIndex = left;
        }
        if (right < size && this.heap[right] > this.heap[maxIndex]) {
            maxIndex = right;
        }

        if (index !== maxIndex) {
            [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
            this.heapifyDown(maxIndex);
        }
    }

    // 최대값 반환
    getMax() {
        return this.heap[0];
    }

    // 최대값 삭제
    removeMax() {
        return this.extractMax();
    }
}
function solution() {
    let hubo = new MaxHeap();
    let newArrays = [];
    for (let row of rest) {
        if (row.split(" ").length > 1) {
            let [m, v] = row.split(" ").map(Number);
            newArrays.push({ m, v, w: 0 })
        }
        else {
            newArrays.push({ m: Number(row), v: 0, w: 1 })
        }
    }
    newArrays = newArrays.sort((a, b) => {
        if (a.m === b.m) {
            if (a.w === b.w) {
                return a.v - b.v
            } else {
                return a.w - b.w
            }

        } else {
            return a.m - b.m;
        }

    })
    // console.log({ newArrays })
    let answer = 0;
    let restLength = rest.length;
    for (let i = 0; i < restLength; i++) {
        let target = newArrays[i];
        // console.log({ target, hubo })

        if (target.w === 1) {
            if (hubo.heap.length === 0) {
                continue;
            }
            let maxValue = hubo.getMax();

            // console.log({ maxValue }, hubo)
            answer += maxValue;
            hubo.removeMax();

        } else {
            hubo.insert(target.v);
        }
    }
    console.log(answer);
}

solution();
