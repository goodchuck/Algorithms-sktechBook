var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4 1
3 4 7 9`

let real = input.trim().split("\n");

const getGCD = (a, b) => {
    if (a % b === 0) return b;
    return getGCD(b, a % b);
};
function solution(real) {
    let [first, rest] = real;
    let [N, S] = first.trim().split(" ").map(Number);
    let arr = rest.trim().split(" ").map(Number);

    if (arr.length === 1) {
        console.log(Math.abs(S - arr[0]))
        return;
    }
    else if (arr.length === 2) {
        let gcdOri = getGCD(Math.abs(S - arr[0]), Math.abs(S - arr[1]));
        console.log(gcdOri)
        return;
    }
    else {
        let j = 2;
        let gcd = getGCD(Math.abs(S - arr[0]), Math.abs(S - arr[1]));
        let returnMe = gcd;
        while (j !== arr.length) {

            gcd = getGCD(gcd, Math.abs(S - arr[j]));
            // console.log(arr, arr[j], j, gcd)
            returnMe = gcd;
            j++;
        }
        console.log(returnMe);
    }

}
solution(real);