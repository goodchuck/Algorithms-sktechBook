var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `<int><max>2147483647<long long><max>9223372036854775807`
let real = input.trim().split("\n");

async function solution(real) {
    let input = [...real[0]]
    let returns = [];
    let isSkip = false;
    let testWords = '';
    let count = 0;
    for (let word of input) {
        // console.log(word);
        if (word === '<') {
            if (testWords.length !== 0) {
                returns.push(testWords);
                testWords = '';
            }
            testWords += word;
            isSkip = true;
        }
        else if (word === '>') {
            testWords += word;
            // console.log(testWords)
            returns.push(testWords);
            testWords = '';
            isSkip = false;
        }
        else if (isSkip) {
            testWords += word;
        }
        else if (word === " ") {
            returns.push(testWords);
            returns.push(word);
            testWords = '';
        }
        else {
            testWords += word;
            if (count === input.length - 1) {
                returns.push(testWords);
            }
        }
        count++;
    }
    let returnsString = '';
    for (let r of returns) {
        // console.log(r, returns)
        if (r.indexOf("<") !== -1) {
            returnsString += r;
        }
        else {
            let newR = [...r];
            while (newR.length !== 0) {
                returnsString += newR.pop();
            }
        }

    }

    console.log(returnsString);
}
solution(real);