var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `1
AA+
10
5`

let real = input.trim().split("\n");
function getPositionOfAlphabets(str) {
    const lowercaseStr = str.toLowerCase();
    const startingCharCode = 'a'.charCodeAt(0); // 'a'의 유니코드 코드 포인트 값

    for (let i = 0; i < lowercaseStr.length; i++) {
        const char = lowercaseStr.charAt(i);
        const charCode = char.charCodeAt(0);

        // 알파벳 소문자인 경우에만 위치(인덱스) 출력
        if (char >= 'a' && char <= 'z') {
            const position = charCode - startingCharCode + 1;
            // console.log(`'${char}'의 위치는 ${position}입니다.`);
            return position
        } else {
            console.log(`'${char}'는 알파벳이 아닙니다.`);
        }
    }
}

function solution(real) {
    let [first, second, ...rest] = real;
    let stack = [];
    second = [...second];
    rest = rest.map(Number);
    for (let row of second) {
        if (row === '*') {
            if (stack.length > 1) {
                let sec = stack.pop();
                let fir = stack.pop();
                stack.push(sec * fir);
            }
        }
        else if (row === '+') {
            if (stack.length > 1) {
                let sec = stack.pop();
                let fir = stack.pop();
                stack.push(sec + fir);
            }
        }
        else if (row === '/') {
            if (stack.length > 1) {
                let sec = stack.pop();
                let fir = stack.pop();
                stack.push(fir / sec);
            }
        }
        else if (row === '-') {
            if (stack.length > 1) {
                let sec = stack.pop();
                let fir = stack.pop();
                stack.push(fir - sec);
            }
        }
        else {
            let num = getPositionOfAlphabets(row);
            stack.push(rest[num - 1]);
        }
    }
    console.log(stack.pop().toFixed(2));
}
solution(real);