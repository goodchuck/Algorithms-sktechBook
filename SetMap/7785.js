var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4
Baha enter
Askar enter
Baha leave
Artem enter
`
let real = input.trim().split("\n");
async function solution(real) {
    let [first, ...arr] = real;
    let setE = new Set();
    let sorArr = arr.sort((a, b) => {
        let [name1, o1] = a.split(" ");
        let [name2, o2] = b.split(" ");
        return name1.localeCompare(name2);

    })
    // console.log(sorArr)
    for (let r of sorArr) {
        let [name, o] = r.split(" ");
        if (o === 'enter') {
            setE.add(name);
        } else {
            if (setE.has(name)) {
                setE.delete(name);
            }
        }
    }

    // console.log(arrEnter, setE, arrLeave, setL);
    let dif = [...setE].sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        if (a === b) return 0;
    });
    console.log(dif.join('\n'));

}
solution(real);