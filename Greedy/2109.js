// 순회강연
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
3 3
2 3
1 3
100 4
90 4`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, K] = first.split(" ").map(Number);

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
    let newArray = [];
    rest = rest.sort((a, b) => {
        let [ad, ap] = a.split(" ").map(Number);
        let [bd, bp] = b.split(" ").map(Number);
        return bp - ap
    })
        .map(row => {
            return row.split(" ").map(Number);
        })
        .forEach((row, i, array) => {
            let next = array[i + 1];
            newArray.push(row);
            if (!next) {
                newArray.push(row[1]);
                let maxDay = row[1] - 1;
                while (maxDay > 0) {
                    newArray.push(maxDay);
                    maxDay--;
                }
            }
            else if (row[1] !== next[1]) {
                let maxDay = row[1];
                while (maxDay > next[1]) {
                    newArray.push(maxDay);
                    maxDay--;
                }

            }
        })
    // console.log(newArray)
    // console.log({ rest })
    let answer = 0;
    let restLength = newArray.length;
    for (let i = 0; i < restLength; i++) {
        let target = newArray[i];

        if (Array.isArray(target)) {
            hubo.insert(target[0]);
        }
        else {
            if (hubo.heap.length < 1) continue;
            let maxValue = hubo.getMax();
            answer += maxValue;
            // targetDay = Math.min(targetDay, target[1]);

            hubo.removeMax();
            // console.log({ maxValue, answer, hubo })
        }


        // console.log({ maxValue }, hubo)

    }
    console.log(answer);
}

solution();
