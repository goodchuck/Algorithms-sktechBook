var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3 3
a
b
c
a
a
a`
let real = input.trim().split("\n");
const binarySearch = async (list, target, left, right) => {
    let mid = 0;

    while (left <= right) {
        // 가운데 인덱스
        mid = Math.floor((left + right) / 2);

        if (list[mid] === target) {
            return mid;
        }

        // 대소 비교로 범위 지정
        if (list[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
async function solution(real) {
    let [first, ...arr] = real;
    let [N, M] = first.split(" ").map(Number);
    let Ns = arr.slice(0, N).sort();
    let Ms = arr.slice(N, N + M);
    // console.log(Ns, Ms)
    let count = 0;
    for (let m of Ms) {
        let find = await binarySearch(Ns, m, 0, Ns.length)
        if (find !== -1) {
            count++;
        }
    }
    console.log(count)

}
solution(real);