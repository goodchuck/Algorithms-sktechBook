var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`
let real = input.trim().split("\n");

async function solution(real) {
    let [first, ...arr] = real;
    let newArr = arr
        .map((a, i) => {
            let [age, name] = a.split(" ");
            return { age: Number(age), name, order: i };
        })
        .sort((a, b) => {
            if (a.age !== b.age) {
                return a.age - b.age
            } else {
                return a.order - b.order;
            }
        })
        .map((a) => {
            return `${a.age} ${a.name}`
        })
    console.log(newArr.join('\n'))


}
solution(real);