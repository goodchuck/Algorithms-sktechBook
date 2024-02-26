// 움직이는 미로 탈출
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `........
........
........
........
........
.#######
#.......
........`

let real = input.trim().split("\n");
let maze = real;
maze = maze.map(v => [...v]);

// 상 좌 하 우 좌상 좌하 우상 우하 가만히 순
let dx = [0, -1, 0, 1, -1, -1, 1, 1, 0];
let dy = [-1, 0, 1, 0, -1, 1, -1, 1, 0];

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


// . : 빈칸
// # : 벽
// 체스판은 8 x 8
function solution() {

    // 사람 위치
    let person = { x: 0, y: 7 };
    let mazes = [maze];
    let maxCount = 0;
    function setWallsPlusY(maze) {
        let deepCopyMaze = JSON.parse(JSON.stringify(maze));
        let walls = [];
        for (let i = 0; i < deepCopyMaze.length; i++) {
            for (let j = 0; j < deepCopyMaze[0].length; j++) {
                let t = deepCopyMaze[i][j];
                if (t === '#') {
                    walls.push({ x: j, y: i })
                }
            }
        }
        walls.reverse();
        for (let wall of walls) {
            let { x, y } = wall;
            deepCopyMaze[y][x] = '.';
            if (y + 1 < 8) {
                deepCopyMaze[y + 1][x] = '#';
            }

        }


        mazes.push(deepCopyMaze);
        // console.log(mazes.length, mazes);
    }
    function isNoWall(maze) {
        // 모든게 빈칸인지 확인용
        let cnt = 0;
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[0].length; j++) {
                let t = maze[i][j];
                if (t === '#') {
                    cnt++;
                }
            }
        }
        if (cnt === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function BFS(x, y) {
        // let visitArray = Array.from({ length: 8 }, () => Array.from({ length: 8 }).fill(false));

        let que = new Queue();
        que.push({ x, y, cnt: 0 });
        // visitArray[y][x] = true;
        // 처음 미로에서부터 벽이 없을 때
        if (isNoWall(mazes[0])) {
            console.log(1);
            return;
        }
        while (que.size()) {
            let node = que.pop_left();
            let distance = node.cnt;

            // 골인지점 도착했을 때
            if (node.x === 7 && node.y === 0) {
                console.log(1);
                return;
            }

            // 벽은 무조건 한칸씩 내려가기때문에 7번이상하면 보드에 벽이 없어진다.
            if (distance > 7) {
                console.log(1);
                return;
            }

            // distance는 시간인데 가지고있던값보다 더 크게오면 새로 벽이 1초 흐른 보드를 만들어준다.
            if (distance > maxCount) {
                if (isNoWall(mazes[maxCount])) {
                    console.log(1);
                    return;
                }
                setWallsPlusY(mazes[maxCount]);
                maxCount = distance;
            }


            let targetMaze = mazes[distance];

            if (targetMaze[node.y][node.x] === '#') {
                continue;
            }

            for (let k = 0; k < dx.length; k++) {
                let newX = node.x + dx[k];
                let newY = node.y + dy[k];
                if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && targetMaze[newY][newX] !== '#') {
                    que.push({ x: newX, y: newY, cnt: distance + 1 });
                }
            }
        }
        console.log(0);
        return;
    }

    BFS(person.x, person.y);

}
solution();