
// 해당 x가 소수인지 판별하는함수
function isPrimeNumber(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }
    return true;
}


//에라토스 테네스의 체 구하기
function getSieveOfEratosthenes(start, end, arr) {
    for (let i = 2; i <= end; i++) {
        if (arr[i] === 0) continue;

        for (let j = i * 2; j <= end; j += i) {
            arr[j] = 0;
        }
    }

    return arr.filter(n => n !== 0 && n !== 1)
}

function getSieveOfEratosthenesNew(N) {
    let prime = []; //소수 저장
    let pn = 0; //소수의 개수
    let check = Array.from({ length: N }, false);
    console.log(check);
    for (let i = 2; i <= N; i++) {
        if (check[i] === false) {
            prime.push(i);
            for (let j = i + i; i <= N; j += i) {
                check[j] = true;
            }
        }
    }
    return prime;
}