// 벽 부수고 이동하기 3
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 4 1
0011
0111
1111
0000`

let real = input.trim().split("\n");
let [first, ...rests] = real;
let [N, M, K] = first.split(" ").map(Number);
let maze = rests.map(v => [...v.trim()].map(Number));
class Node {
    constructor(x, y, c, d, w) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.d = d;
        this.w = w;
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

    push(x, y, c, d, w) {
        let node = new Node(x, y, c, d, w);
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


let dx = [1, -1, 0, 0]
let dy = [0, 0, 1, -1]

let visitedArray = Array.from({ length: N }, () => Array.from({ length: M }).fill(K + 1));
function BFS(x, y) {
    let que = new Deque();

    que.push(x, y, 1, true, 0);
    visitedArray[y][x] = 0;

    while (!que.isEmpty()) {
        let node = que.popleft();
        // let { x, y, c, d, w } = node;
        // console.log('que안에꺼', { x, y, c, d, w })
        if (node.x === M - 1 && node.y === N - 1) {
            console.log(node.c);
            break;
        }
        for (let i = 0; i < 4; i++) {
            let newX = node.x + dx[i];
            let newY = node.y + dy[i];
            if (newX < 0 || newX >= M || newY < 0 || newY >= N) continue;
            let nw = node.w + maze[newY][newX];
            if (nw >= visitedArray[newY][newX]) continue;

            if (maze[newY][newX] === 1 && !node.d) {
                que.push(node.x, node.y, node.c + 1, !node.d, node.w)
                continue;
            }

            visitedArray[newY][newX] = nw;
            que.push(newX, newY, node.c + 1, !node.d, nw)
        }

    }
    if (visitedArray[N - 1][M - 1] === K + 1) console.log(-1);
    return;
}

function solution() {
    BFS(0, 0);

}

solution();