var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`
let real = input.trim().split("\n");

function solution(real) {
    let [T, ...rest] = real;
    let returns = [];
    for (let i = 0; i < rest.length; i += 2) {
        // console.log(rest[i], rest[i + 1]);
        let [N, M] = rest[i].split(" ").map(Number);
        let arr = rest[i + 1].split(" ").map((n, i) => { return { number: Number(n), order: i } });
        let target = arr[M]
        // console.log(N, M, arr, target);
        let count = 1;
        while (N !== 0) {
            let zero = arr[0];
            let isFind = false;
            for (let t of arr) {
                if (zero.number < t.number) {
                    isFind = true;
                }
            }
            if (isFind) {
                arr.shift();
                arr.push(zero);
            }
            else {
                if (zero.order === M) {
                    console.log(count);
                }
                arr.shift();
                N--;
                count++;
            }
        }
    }
}
solution(real);