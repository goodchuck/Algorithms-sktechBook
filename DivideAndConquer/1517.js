// 버블 소트
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// let input = `7
// 5 3 2 9 7 4 1`
let input = `3
3 2 1`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);


async function solution() {
    let count = 0;
    let arr = rest[0].split(" ").map(Number);

    function go(start, end) {
        if (start === end) return 0;
        // 배열을 바꿔주는데 사용
        let b = [];

        let mid = Math.floor((start + end) / 2);
        console.log({ start, mid, end, }, arr.slice(start, end + 1))
        let ans = go(start, mid) + go(mid + 1, end);
        let i = start;
        let j = mid + 1;
        let k = 0;

        while (i <= mid || j <= end) {
            // 두의 수가 더 클때
            if (i <= mid && (j > end || arr[i] <= arr[j])) {
                console.log('1', start, end, arr[i], arr[j])
                b[k++] = arr[i++];
            }
            else {
                console.log('2', start, end, arr[i], arr[j])
                ans += (mid - i + 1)
                b[k++] = arr[j++];
            }
        }

        console.log('prev', arr, b);
        for (let i = start; i <= end; i++) {
            arr[i] = b[i - start];
        }
        console.log('after', arr);
        return ans;
    }
    count = go(0, N - 1);
    console.log(count)
}

solution();
