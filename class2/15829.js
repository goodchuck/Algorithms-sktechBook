var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
zzzzzzzzzz`
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
            return position;
        } else {
            // console.log(`'${char}'는 알파벳이 아닙니다.`);
        }
    }
}


function solution(real) {
    let [L, words] = real;
    let count = 0;
    let sum = 0;
    let pow = 1;
    for (let word of words) {
        let p = getPositionOfAlphabets(word);
        // console.log(p);
        let s = (p * pow)
        sum += s;
        pow = (pow * 31) % 1234567891;
        count++;
    }
    console.log(((sum) % (1234567891)))

}
solution(real);