// 사분면
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `50 12341234123412341234123412341234123412341234123412
500000 3000000000`

let real = input.trim().split("\n");
let [first, second] = real;
let [d, f] = first.split(" ");
d = Number(d);
f = BigInt(f);
let [dx, dy] = second.split(" ").map(v => BigInt(v));

/**
 * 0,0 0,1
 * 1,0 1,1
 */

async function solution() {

    function go(num, x, y, size, index) {
        if (index === d) {
            return { x, y };
        };

        let newSize = BigInt(size) / 2n;
        // console.log({ num, x, y, d }, x + newSize, y + newSize)

        if (num.charAt(index) === '1') {
            return go(num, x + newSize, y, newSize, index + 1);
        } else if (num.charAt(index) === '2') {
            return go(num, x, y, newSize, index + 1);
        }
        else if (num.charAt(index) === '3') {
            return go(num, x, y + newSize, newSize, index + 1);
        }
        else if (num.charAt(index) === '4') {
            return go(num, x + newSize, y + newSize, newSize, index + 1);
        }
    }

    function go2(r, c, size, x, y) {
        if (size === 1) {
            return '';
        }
        let newSize = (size / 2);
        // console.log({ r, c, size, newSize, x, y })
        if (x < r + newSize && y < c + newSize) {
            return "2" + go2(r, c, newSize, x, y);
        }
        else if (x >= r + (size / 2) && y < c + newSize) {
            return "1" + go2(r + newSize, c, newSize, x, y);
        }
        else if (x < r + (size / 2) && y >= c + newSize) {
            return "3" + go2(r, c + newSize, newSize, x, y);
        }
        else {
            return "4" + go2(r + newSize, c + newSize, newSize, x, y);
        }
    }

    let result = go(f.toString(), BigInt(0), BigInt(0), BigInt(2 ** d), 0);
    // console.log(result);
    let x = result.x;
    let y = result.y;
    // console.log({ x, y });

    let newX = x + dx;
    let newY = y - dy;
    // console.log(newX, newY);
    if (newX >= 0 && newX < 2 ** d && newY >= 0 && newY < 2 ** d) {
        console.log(go2(0, 0, 2 ** d, newX, newY));
    }
    else {
        console.log(-1)
    }
    return;
}

solution();
