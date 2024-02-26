// 벽 부수고 이동하기
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 8
01000000
01010000
01010000
01010011
00010010`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [N, M] = first.split(" ").map(Number);
let maze = rests.map(v => [...v]);
// console.log(N, M, maze)

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
            return this.rear - this.front + 1
        }
    }
}

function BFS(x, y) {
    let que = new Queue();
    let visitedArray = Array.from({ length: N }, () => Array.from({ length: M }, () => Array.from({ length: 2 }).fill(0)))
    que.push({ x, y, wallCount: 1 });
    visitedArray[y][x][1] = 1;
    // 상 하 좌 우
    let dx = [0, 0, -1, 1]
    let dy = [-1, 1, 0, 0]
    function check(x, y, wallCount, distance, visitedArray) {
        let newQue = [];
        // console.log('check', { x, y, wallCount, distance })
        for (let i = 0; i < dx.length; i++) {
            let newX = x + dx[i];
            let newY = y + dy[i];
            if (newX >= 0 && newX < M && newY >= 0 && newY < N && !visitedArray[newY][newX][wallCount]) {
                // console.log({ newX, newY }, maze[newY][newX])

                // 벽을 부술 기회가있고 벽이 있을 때
                if (maze[newY][newX] === '1' && wallCount === 1) {
                    visitedArray[newY][newX][0] = distance;
                    newQue.push({ x: newX, y: newY, wallCount: 0 });
                }
                else if (maze[newY][newX] === '0') {
                    visitedArray[newY][newX][wallCount] = distance;
                    newQue.push({ x: newX, y: newY, wallCount });
                }

            }
        }
        // console.log({ newQue })
        return newQue;
    }


    while (que.size()) {
        let { x, y, wallCount } = que.pop_left();
        let distance = visitedArray[y][x][wallCount];
        // console.log('que안에꺼', { x, y, wallCount, distance })
        if (x === M - 1 && y === N - 1) {
            console.log(distance);
            return;
        }
        let newQue = check(x, y, wallCount, distance + 1, visitedArray)
        // que.push(...newQue);
        for (let row of newQue) {
            que.push(row);
        }
    }
    console.log(-1);
    return;
}


function solution() {
    BFS(0, 0);

}

solution();