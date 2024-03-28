// Z
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10 512 512`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, r, c] = first.split(" ").map(Number);



async function solution() {

    function power(k) {
        return (1 << k);
    }

    // function go(n, x, y, order) {
    //     if (n === 0) {

    //         if (x === c && y === r) {
    //             console.log(order);
    //             return;
    //         }

    //         return;
    //     }
    //     let size = 2 ** n;
    //     for (let i = 0; i < 2; i++) {
    //         for (let j = 0; j < 2; j++) {
    //             if (i === 0 && j === 0) {
    //                 go(n - 1, x, y, order);
    //             }

    //             if (i === 0 && j === 1) {
    //                 go(n - 1, x + size / 2, y, order + power(2 * n - 2));
    //             }
    //             if (i === 1 && j === 0) {
    //                 go(n - 1, x, y + size / 2, order + 2 * power(2 * n - 2));
    //             }
    //             if (i === 1 && j === 1) {
    //                 go(n - 1, x + size / 2, y + size / 2, order + 3 * power(2 * n - 2));
    //             }
    //         }
    //     }
    // }
    // go(N, 0, 0, 0);

    function go(n, x, y) {
        if (n === 1) {
            // console.log({ n, x, y }, 2 * x + y)
            return 2 * x + y;
        }
        else {
            if (x < power(n - 1)) {
                if (y < power(n - 1)) {
                    return go(n - 1, x, y);
                }
                else {
                    return go(n - 1, x, y - power(n - 1)) + power(2 * n - 2);
                }
            }
            else {
                if (y < power(n - 1)) {
                    return go(n - 1, x - power(n - 1), y) + power(2 * n - 2) * 2
                }
                else {
                    return go(n - 1, x - power(n - 1), y - power(n - 1)) + power(2 * n - 2) * 3
                }
            }

        }
    }
    console.log(go(N, r, c));
}

solution();
