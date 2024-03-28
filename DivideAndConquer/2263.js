// 트리의 순회
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7
4 2 5 1 6 3 7
4 5 2 6 7 3 1`

// let input = `3
// 1 2 3
// 1 3 2`
let real = input.trim().split("\n");
let [N, ...rest] = real;
N = Number(N);

/**
 * N개의 정점을 갖는 이진 트리의 정점 1부터 N까지 번호가 중복없음
 * 프리오더 루 L R
 * 인오더 L 루 R
 * 포스트오더 L R 루
 * 프리오더 : 1 2 4 5 7 3 6
 * 인오더 : 4 2 7 5 1 3 6
 * 포스트오더 : 4 7 5 2 6 3 1
 */
async function solution() {
    let inOrder = rest[0].split(" ").map(Number);
    let postOrder = rest[1].split(" ").map(Number);
    let answer = [];

    function go(n, inOrderStartIndex, inOrderEndIndex, postOrderStartIndex, postOrderEndIndex, isTest = 'null') {
        if (inOrderStartIndex > inOrderEndIndex || postOrderStartIndex > postOrderEndIndex) return;
        // 루트가 필요함
        let root = postOrder[postOrderEndIndex];
        const index = inOrder.indexOf(root);
        answer.push(root);
        // console.log({ n, root, index, inOrderStartIndex, inOrderEndIndex, postOrderStartIndex, postOrderEndIndex, isTest })
        go(n - 1, inOrderStartIndex, index - 1, postOrderStartIndex, postOrderStartIndex + index - inOrderStartIndex - 1, 'left');
        go(n - 1, index + 1, inOrderEndIndex, postOrderStartIndex + index - inOrderStartIndex, postOrderEndIndex - 1, 'right');
    }
    go(N, 0, N - 1, 0, N - 1);
    console.log(answer.join(" "));
}

solution();
