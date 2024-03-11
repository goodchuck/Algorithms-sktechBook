// 레이저 통신
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7 8
.......
......C
......*
*****.*
....*..
....*..
.C..*..
.......`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [W, H] = first.split(" ").map(Number);
let maze = rests.map(v => [...v.trim()]);
// console.log(maze)
class Node {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
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

    push(x, y, d) {
        let node = new Node(x, y, d);
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

function getC(maze) {
    let array = [];
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            let target = maze[i][j];
            if (target === 'C') {
                array.push({ x: j, y: i });
            }
        }
    }
    return array;
}

// . 빈칸
// * 벽
// c 레이저로 연결해야 하는 칸
// 거울은 '/' , '\' 설치가능
let visitedArray = Array.from({ length: 4 }, () => Array.from({ length: H }, () => Array.from({ length: W }).fill(9999)))
let Cs = getC(maze);

let dx = [0, 0, -1, 1]
let dy = [-1, 1, 0, 0]

// 상 하 좌 우
// 0 1 2 3 
function BFS(x, y) {
    let que = new Deque();
    let mins = Infinity;
    // 방향은 초기에 4개의 방향 상 하 좌 우가있다.
    // up,down,left,right
    que.push(x, y, 0);
    que.push(x, y, 1);
    que.push(x, y, 2);
    que.push(x, y, 3);

    visitedArray[0][y][x] = 0;
    visitedArray[1][y][x] = 0;
    visitedArray[2][y][x] = 0;
    visitedArray[3][y][x] = 0;
    // console.log(Cs, Cs[0], Cs[1].x, Cs[1].y);

    while (!que.isEmpty()) {
        let { x, y, d } = que.popleft();
        // let { x, y, c, d, w } = node;
        // console.log('que안에꺼', { x, y, c, d })

        let nx;
        let ny;

        if (y === Cs[1].y && x === Cs[1].x) {
            mins = Math.min(mins, visitedArray[d][y][x]);
            continue;
        }

        for (let k = 0; k < 4; k++) {
            nx = x + dx[k];
            ny = y + dy[k];


            if (nx < 0 || nx >= W || ny < 0 || ny >= H) {
                continue;
            }

            if (maze[ny][nx] === '*') continue;
            // 다른 방향일 때
            if (d !== k && visitedArray[d][y][x] + 1 < visitedArray[k][ny][nx]) {
                visitedArray[k][ny][nx] = visitedArray[d][y][x] + 1;
                que.push(nx, ny, k)
            }
            // 같은 방향일 때
            else if (d === k && visitedArray[d][y][x] < visitedArray[k][ny][nx]) {
                visitedArray[k][ny][nx] = visitedArray[d][y][x];
                que.push(nx, ny, k)
            }

        }
    }
    console.log(mins)
    return;
}

function solution() {
    // BFS(0, 0);
    // console.log({ Cs })
    BFS(Cs[0].x, Cs[0].y)
}

solution();
