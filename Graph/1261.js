// 알고스팟
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `6 6
001111
010000
001111
110001
011010
100010`

let real = input.trim().split("\n");
let [T, ...rests] = real;
let [N, M] = T.split(" ").map(Number);
let maze = rests.map(row => [...row]);
let checkArrays = Array.from({ length: M }, () => Array.from({ length: N }).fill(false))
let distanceArrays = Array.from({ length: M }, () => Array.from({ length: N }).fill(0))
let isFind = false
function checkWalls(left, right, distance, que) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    // left
    if (right + dx[0] >= 0 && !checkArrays[left + dy[0]][right + dx[0]]) {
        checkArrays[left + dy[0]][right + dx[0]] = true;

        if (maze[left + dy[0]][right + dx[0]] === '0') {
            que.unshift(`${left + dy[0]}_${right + dx[0]}`)
            distanceArrays[left + dy[0]][right + dx[0]] = distance;
        }
        else if (maze[left + dy[0]][right + dx[0]] === '1') {
            que.push(`${left + dy[0]}_${right + dx[0]}`)
            distanceArrays[left + dy[0]][right + dx[0]] = distance + 1;
        }

    }
    // right
    if (right + dx[1] < N && !checkArrays[left + dy[1]][right + dx[1]]) {
        checkArrays[left + dy[1]][right + dx[1]] = true;
        if (maze[left + dy[1]][right + dx[1]] === '0') {
            que.unshift(`${left + dy[1]}_${right + dx[1]}`)
            distanceArrays[left + dy[1]][right + dx[1]] = distance;
        }
        else if (maze[left + dy[1]][right + dx[1]] === '1') {
            que.push(`${left + dy[1]}_${right + dx[1]}`)
            distanceArrays[left + dy[1]][right + dx[1]] = distance + 1;
        }
    }
    // top
    if (left + dy[2] >= 0 && !checkArrays[left + dy[2]][right + dx[2]]) {
        checkArrays[left + dy[2]][right + dx[2]] = true;
        if (maze[left + dy[2]][right + dx[2]] === '0') {
            que.unshift(`${left + dy[2]}_${right + dx[2]}`)
            distanceArrays[left + dy[2]][right + dx[2]] = distance;
        }
        else if (maze[left + dy[2]][right + dx[2]] === '1') {
            que.push(`${left + dy[2]}_${right + dx[2]}`)
            distanceArrays[left + dy[2]][right + dx[2]] = distance + 1;
        }
    }
    // bottom
    if (left + dy[3] < M && !checkArrays[left + dy[3]][right + dx[3]]) {
        checkArrays[left + dy[3]][right + dx[3]] = true;
        if (maze[left + dy[3]][right + dx[3]] === '0') {
            que.unshift(`${left + dy[3]}_${right + dx[3]}`)
            distanceArrays[left + dy[3]][right + dx[3]] = distance;
        }
        else if (maze[left + dy[3]][right + dx[3]] === '1') {
            que.push(`${left + dy[3]}_${right + dx[3]}`)
            distanceArrays[left + dy[3]][right + dx[3]] = distance + 1;
        }
    }
    return que;
}

function solution() {
    // console.log({ N, M, maze })
    let que = [];
    que.push(`0_0`);
    checkArrays[0][0] = true;

    while (que.length !== 0) {

        let node = que.shift();
        let [left, right] = node.split("_").map(Number);
        if (left === M - 1 && right === N - 1) {
            console.log(distanceArrays[left][right]);
            isFind = true;
            break;
        }
        checkArrays[left][right] = true;
        let distance = distanceArrays[left][right];
        // console.log({ node, que, distance })
        que = checkWalls(left, right, distance, que);
    }
    // console.log({ distanceArrays })
}
solution();