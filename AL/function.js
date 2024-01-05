// 대문자 반환해주는 함수
function printUppercaseAlphabet() {
    let result = '';
    for (let i = 0; i < 26; i++) {
        let uppercaseChar = String.fromCharCode(65 + i);
        result += uppercaseChar + ' ';
    }
    return result.trim();
}

function getPositionOfAlphabets(str) {
    const lowercaseStr = str.toLowerCase();
    const startingCharCode = 'a'.charCodeAt(0); // 'a'의 유니코드 코드 포인트 값

    for (let i = 0; i < lowercaseStr.length; i++) {
        const char = lowercaseStr.charAt(i);
        const charCode = char.charCodeAt(0);

        // 알파벳 소문자인 경우에만 위치(인덱스) 출력
        if (char >= 'a' && char <= 'z') {
            const position = charCode - startingCharCode + 1;
            console.log(`'${char}'의 위치는 ${position}입니다.`);
        } else {
            console.log(`'${char}'는 알파벳이 아닙니다.`);
        }
    }
}


// 약수들을 찾아주는 함수 정렬포함
function getFactors(num) {
    let factors = [];
    for (let i = num; i >= 1; i--) {
        // factors.push(N % i);
        if (num % i === 0) {
            if (!factors.find((o) => o === Math.floor(num / i))) {
                factors.push(Math.floor(num / i));
            }

        }
    }
    return factors.sort((a, b) => a - b);
}

// 유클리드 호제법
const getGCD = (a, b) => {
    if (a % b === 0) return b;
    return getGCD(b, a % b);
};