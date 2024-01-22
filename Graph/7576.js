// 토마토
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);
let checkArrays = Array.from({ length: N * M }).fill(0);
function checkAllOnes(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === '0') {
                return false; // 1이 아닌 값이 발견되면 false 반환
            }
        }
    }
    return true; // 모든 요소가 1이면 true 반환
}
function checkTomato(maze, num) {
    let N = maze[0].length;
    let M = maze.length;
    num = Number(num);
    let d = Math.floor(num / N);
    let r = num % N;
    // console.log({ num, d, r })
    let newTomatos = [];
    // top
    if (d > 0 && maze[d - 1][r] === '0') {
        maze[d - 1][r] = '1';
        let top = num - N
        // graph[num].push(top)

        // if (!graph[top]) {
        //     graph[top] = [];
        // }
        // graph[top].push(num)
        newTomatos.push(top);
    }
    // bottom
    if (d < M - 1 && maze[d + 1][r] === '0') {
        maze[d + 1][r] = '1';
        let bottom = (num + N)
        newTomatos.push(bottom);
        // graph[num].push(bottom)

        // if (!graph[bottom]) {
        //     graph[bottom] = [];
        // }
        // graph[bottom].push(num)
    }
    // left
    if (r > 0 && maze[d][r - 1] === '0') {
        maze[d][r - 1] = '1';
        let left = num - 1
        newTomatos.push(left);
        // graph[num].push(left)

        // if (!graph[left]) {
        //     graph[left] = [];
        // }
        // graph[left].push(num)
    }
    // right
    if (r < N && maze[d][r + 1] === '0') {
        maze[d][r + 1] = '1';
        let right = num + 1;
        newTomatos.push(right);
        // graph[num].push(right)

        // if (!graph[right]) {
        //     graph[right] = [];
        // }
        // graph[right].push(num)
    }
    return newTomatos
}
function solution() {

    // let maze = makeMaze(rest);
    let maze = rest.map(row => {
        return row.split(" ");
    })

    // console.log({ graph })
    let day = 0;
    let firedTomato = [];
    while (true) {
        if (checkAllOnes(maze)) {
            console.log(day);
            break;
        }
        // let prevTomatoLen = firedTomato.length;
        // firedTomato = [];
        if (day === 0) {
            for (let i = 0; i < M; i++) {
                for (let j = 0; j < N; j++) {
                    // console.log('i,j', i, j, maze[i][j])
                    if (maze[i][j] === '1' && checkArrays[i * N + j] === 0) {
                        firedTomato.push(i * N + j);
                    }
                }
            }
        }

        let count = 0;
        let newTos = [];
        while (firedTomato.length !== 0) {
            // console.log(firedTomato)
            let tomato = firedTomato.pop();
            let toNewTos = checkTomato(maze, tomato);
            newTos.push(...toNewTos);
            checkArrays[tomato] = 1;
            count++;
        }

        firedTomato = newTos;
        // console.log({ maze })
        if (count === 0) {
            console.log(-1);
            break;
        }

        day++;
    }

}
solution();