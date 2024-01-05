var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `5
55 185
58 183
88 186
60 175
46 155`
let real = input.trim().split("\n");

function solution(real) {
    let [L, ...rest] = real;
    let returns = [];
    for (let people of rest) {
        let [k, m] = people.split(" ").map(Number);
        // console.log(k, m)
        let rank = 1;
        rest.forEach((p) => {
            let [k2, m2] = p.split(" ").map(Number);
            if (k < k2 && m < m2) {
                rank++;
            }
        })
        // console.log(people, rank);
        returns.push(rank);
    }
    console.log(returns.join(" "));
}
solution(real);