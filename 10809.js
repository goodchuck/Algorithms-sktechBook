var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `2
I am happy today
We want to win the first prize`

let [first, ...array] = input.trim().split("\n");

function solution(array) {
    let stack = [];
    let results = [];
    array.forEach(element => {
        let words = element.split(" ");
        words = words.map((word) => {
            let wordArray = Array.from(word).reverse();
            return wordArray.join("");
        })
        console.log(words.join(" "));
    });
    // console.log(results.join("\n"));
}
solution(array);