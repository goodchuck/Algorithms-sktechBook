// A와 B 2
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `A
ABBA`

let real = input.trim().split("\n");
let [S, T] = real;


/**
 * 문자열 바꾸는 조건
 * 1. 문자열의 뒤에 A추가
 * 2. 문자열을 뒤에 B를 추가하고 문자열을 뒤집음
 * S의 길이 < T의 길이
 * 바꿀수있으면 1 아니면 0
 */
async function solution() {
    /**
     * 4가지 경우의 수가 있다.
     * 1. A --- A
     * 2. A --- B(불가능)
     * 3. B --- A(가능)
     * 4. B --- B
     */


    function cutAlpha(t) {
        let arrT = [...JSON.parse(JSON.stringify(t))];
        arrT.pop();
        return arrT.join("");
    }

    function reverse(t) {
        let arrT = [...JSON.parse(JSON.stringify(t))];
        arrT.reverse();
        return arrT;
    }

    /**
     * A
     * BABA
     * 
     */

    function go(S, T, i, last) {
        let arrT = [...T];
        if (S === T) {
            return true;
        }
        // console.log(S, T, i, last);
        if (T.length > 0) {
            if (arrT.at(-1) === 'A' && go(S, cutAlpha(T), i + 1, 'A')) {
                return true;
            }
            if (arrT.at(0) === 'B' && go(S, cutAlpha(reverse(T)), i + 1, 'B')) {
                return true;
            }
        }
        return false;
    }
    console.log(go(S, T, 0, null) ? 1 : 0)
}

solution();
