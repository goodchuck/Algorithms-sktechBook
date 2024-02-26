// 벽 부수고 이동하기 2
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1 1 4
0`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [N, M, K] = first.split(" ").map(Number);
let maze = rests.map(v => [...v]);
// console.log(N, M, maze)

class Node {
    constructor(x, y, w, c) {
        this.x = x;
        this.y = y;
        this.w = w;
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

    push(x, y, w, c) {
        let node = new Node(x, y, w, c);
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
function BFS(x, y) {
    let que = new Deque();
    // let visitedArray = Array.from({ length: K + 1 }, () => Array.from({ length: N }, () => Array.from({ length: M })))
    let visitedArray = Array.from({ length: N }, () => Array.from({ length: M }).fill(K + 1));
    que.push(x, y, 0, 1);
    visitedArray[y][x] = 0;
    // 상 하 좌 우
    let dx = [0, 0, -1, 1]
    let dy = [-1, 1, 0, 0]


    while (!que.isEmpty()) {
        let node = que.popleft();
        // console.log('que안에꺼', { x, y, wallCount, distance })
        if (node.x === M - 1 && node.y === N - 1) {
            console.log(node.c);
            return;
        }
        for (let i = 0; i < dx.length; i++) {
            let newX = node.x + dx[i];
            let newY = node.y + dy[i];
            if (newX >= 0 && newX < M && newY >= 0 && newY < N) {

                let nw = node.w + Number(maze[newY][newX]);
                if (nw >= visitedArray[newY][newX]) continue;
                // console.log({ newX, newY })
                visitedArray[newY][newX] = nw;
                que.push(newX, newY, nw, node.c + 1)



            }
        }

    }
    if (visitedArray[N - 1][M - 1] === K + 1) console.log(-1);
    return;
}


function solution() {
    BFS(0, 0);

}

solution();