// 벽 부수고 이동하기 4
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 3
101
010
101`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [N, M] = first.split(" ").map(Number);
let maze = rests.map(v => [...v].map(Number));
// console.log(N, M, maze)

class Node {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;

        this.c = c;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        if (this.length === 0) return true;
        else return false;
    }

    push(x, y, c) {
        let node = new Node(x, y, c);
        if (this.length === 0) this.head = node;
        else this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    popleft() {
        let item = this.head;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return item;
    }

}

// 상 하 좌 우
let dx = [0, 0, -1, 1]
let dy = [-1, 1, 0, 0]

let visitedArray = Array.from({ length: N }, () => Array.from({ length: M }));
let cycleArray = Array.from({ length: N }, () => Array.from({ length: M }).fill(-1));
let cycleSize = [];
function BFS(x, y, idx) {
    let que = new Deque();

    que.push(x, y, 1);
    visitedArray[y][x] = 1;

    let maxDistance = 1;
    while (!que.isEmpty()) {
        let node = que.popleft();
        cycleArray[node.y][node.x] = idx;
        // console.log('que안에꺼', node)
        for (let i = 0; i < dx.length; i++) {
            let newX = node.x + dx[i];
            let newY = node.y + dy[i];
            if (newX >= 0 && newX < M && newY >= 0 && newY < N && cycleArray[newY][newX] === -1) {
                if (maze[newY][newX] === 1) continue;
                visitedArray[newY][newX] = 1;
                cycleArray[newY][newX] = idx;
                que.push(newX, newY, node.c + 1)
                maxDistance++;
            }
        }

    }
    cycleSize.push(maxDistance);
}
function solution() {
    let returns = [];
    let idx = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maze[i][j] === 0 && cycleArray[i][j] === -1) {
                BFS(j, i, idx);
                idx++
            }
        }
    }

    for (let i = 0; i < N; i++) {
        let row = '';
        for (let j = 0; j < M; j++) {
            if (maze[i][j] === 1) {
                let sum = 1;
                let usedCycleIdx = [];
                for (let k = 0; k < dx.length; k++) {
                    let newX = j + dx[k];
                    let newY = i + dy[k];
                    if (newX >= 0 && newX < M && newY >= 0 && newY < N && cycleArray[newY][newX] >= 0) {
                        if (usedCycleIdx.find(v => Number(v) === Number(cycleArray[newY][newX])) > -1) continue;
                        // console.log(i, j, usedCycleIdx)
                        sum += cycleSize[cycleArray[newY][newX]];
                        usedCycleIdx.push(cycleArray[newY][newX])
                        // console.log(sum, cycleArray[newY][newX])
                    }

                }
                // console.log({ i, j, sum })
                row += sum % 10;
            } else {
                row += 0;
            }
        }
        returns.push(row);
    }

    // console.log({ cycleArray, cycleSize, returns })

    console.log(returns.join("\n"))

}

solution();