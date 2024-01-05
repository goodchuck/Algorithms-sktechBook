var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `7
1 1 2 3 4 2 1`
let real = input.trim().split("\n");

async function solution(real) {
    let [N, sec] = real;
    N = Number(N);
    let arr = sec.split(" ");
    let stack = [];
    let arrLen = arr.length;
    let results = Array.from({ length: N }, () => -1);
    const countedValues = arr.reduce((acc, val) => {
        if (acc[val]) {
            acc[val]++;
        } else {
            acc[val] = 1;
        }
        return acc;
    }, {});
    console.log(countedValues);
    for (let i = 0; i < arrLen; i++) {

        let tar = arr[i];
        // console.log(tar, stack);
        let stLen = stack.length
        if (stack.length > 0 && countedValues[tar] >= countedValues[stack[stLen - 1].num]) {
            let j = stLen;
            // console.log({ j })
            while (stack.length > 0 && true) {
                let la = stack[j - 1];
                if (countedValues[la.num] < countedValues[tar]) {
                    let popLa = stack.pop();
                    // console.log({ popLa })
                    results[popLa.index] = tar;
                }
                else {
                    break;
                }
                j--
            }
        }
        stack.push({ num: tar, index: i });
    }
    console.log(results.join(" "));
}
solution(real);