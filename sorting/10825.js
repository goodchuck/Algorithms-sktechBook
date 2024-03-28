// 국영수
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `12
CA 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
aa 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);

async function solution() {
    let arrs = rest.map(row => {
        let [name, k, e, m] = row.split(" ");
        k = Number(k);
        e = Number(e);
        m = Number(m);
        return { name, k, e, m };
    })
    // console.log(arrs);
    console.log(arrs.sort((a, b) => {
        if (a.k !== b.k) {
            return b.k - a.k;
        }
        else {
            if (a.e !== b.e) {
                return a.e - b.e;
            }
            else {
                if (a.m !== b.m) {
                    return b.m - a.m
                }
                else {
                    if (a.name > b.name) return 1;
                    else if (a.name < b.name) return -1;
                    else return 0;
                }
            }
        }
    }).map(r => r.name).join("\n"));
}

solution();
