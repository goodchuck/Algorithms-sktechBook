var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`
let real = input.trim().split("\n");

const binarySearch = (list, target, left, right) => {
    let mid = 0;

    while (left <= right) {
        // 가운데 인덱스
        mid = Math.floor((left + right) / 2);

        if (list[mid].split(" ")[0] === target) {
            return mid;
        }

        // 대소 비교로 범위 지정
        if (list[mid].split(" ")[0] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

function solution(real) {
    let [first, ...rest] = real
    let [N, M] = first.trim().split(" ").map(Number);
    let [arr1, arr2] = [rest.slice(0, N).sort(), rest.slice(N, N + M)];
    // console.log(arr1, arr2);
    let arr1Length = arr1.length;
    let returns = [];
    for (let row of arr2) {
        let findIndex = binarySearch(arr1, row, 0, arr1Length);
        if (findIndex > -1) {
            returns.push(arr1[findIndex].split(" ")[1]);
            continue;
        }

    }
    console.log(returns.join('\n'));
}
solution(real);