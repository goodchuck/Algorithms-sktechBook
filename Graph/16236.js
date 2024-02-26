// 아기 상어
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6
1 1 1 1 1 1
2 2 6 2 2 3
2 2 5 2 2 3
2 2 2 4 6 3
0 0 0 0 0 6
0 0 0 0 0 9`

let real = input.trim().split("\n");
let [N, ...rests] = real;
let maze = rests.map(v => v.split(" ").map(Number));
// 상 좌 하 우 순
let dx = [0, -1, 0, 1];
let dy = [-1, 0, 1, 0];

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

function getSharkCoord(target, maze) {
    let returns = [];
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            let t = maze[i][j];
            if (t === target) {
                returns.push({ x: j, y: i });
                maze[i][j] = 0;
            }
        }
    }
    return returns;
}

function check(x, y, shark, maze, distance, distanceArrays, fishes) {
    let { level, reExp } = shark;
    // console.log({ x, y, shark })
    let newQue = [];

    for (let k = 0; k < dx.length; k++) {
        let newShark = { x: x + dx[k], y: y + dy[k], level, reExp };
        // console.log({ k, newShark })

        // 물고기가 상어보다 같거나 작을 때
        if (newShark.x >= 0 && newShark.x < N && newShark.y >= 0 && newShark.y < N && maze[newShark.y][newShark.x] <= level) {

            // 방문한적이 없는 곳이여야함
            if (distanceArrays[newShark.y][newShark.x] === -1) {
                distanceArrays[newShark.y][newShark.x] = distance;

                newQue.push({ x: newShark.x, y: newShark.y })
                // 물고기가 상어랑 같은레벨이면 상어는 지나갈 수 는 있어야됨
                if (maze[newShark.y][newShark.x] === level) {

                }
                // 물고기가 상어보다 레벨이 낮은 경우
                else if (maze[newShark.y][newShark.x] !== 0) {
                    fishes.push({ x: newShark.x, y: newShark.y, distance })
                }
            }
        }

    }
    // console.log({ newQue, fishes })
    return [newQue, fishes]
}


function solution() {

    // 먹을 수 있는 물고기
    let fishes = [];
    let shark = getSharkCoord(9, maze)[0];
    // x, y, level, reExp
    shark = {
        ...shark,
        level: 2,
        reExp: 2,
    }

    function BFS(x, y) {
        let distanceArrays = Array.from({ length: 21 }, () => Array.from({ length: 21 }).fill(-1));

        fishes = [];

        let que = new Queue();
        que.push({ x, y });
        distanceArrays[y][x] = 0;

        while (que.size()) {
            let node = que.pop_left();
            let distance = distanceArrays[node.y][node.x];

            let [newQue, newFish] = check(node.x, node.y, shark, maze, distance + 1, distanceArrays, fishes);
            for (let r of newQue) {
                que.push(r);
            }
        }
        // console.log({ distanceArrays })
    }

    let answer = 0;
    BFS(shark.x, shark.y);
    // 먹을수 있는 물고기가 있는 동안
    while (fishes.length !== 0) {
        // console.log({ fishes })
        if (fishes.length === 1) {
            shark.y = fishes[0].y;
            shark.x = fishes[0].x;
            maze[shark.y][shark.x] = 0;
            shark.reExp--;
            if (shark.reExp === 0) {
                shark.level++;
                shark.reExp = shark.level;
            }
            answer += fishes[0].distance;
            fishes.shift();
            BFS(shark.x, shark.y);
        }
        else if (fishes.length >= 2) {
            fishes.sort((a, b) => {
                let A = a.distance;
                let B = b.distance;
                if (A < B) return -1;
                else if (A > B) return 1;
                else {
                    A = a.y;
                    B = b.y;
                    if (A < B) return -1;
                    else if (A > B) return 1;
                    else {
                        A = a.x;
                        B = b.x;
                        if (A < B) return -1;
                        else if (A > B) return 1;
                        else return 0;
                    }
                }
            })
            shark.y = fishes[0].y;
            shark.x = fishes[0].x;
            maze[shark.y][shark.x] = 0;
            shark.reExp--;
            if (shark.reExp === 0) {
                shark.level++
                shark.reExp = shark.level;
            }
            answer += fishes[0].distance;
            fishes.shift();
            BFS(shark.x, shark.y);
        }
    }
    if (fishes.length === 0) {
        return console.log(answer);
    }


}
solution();