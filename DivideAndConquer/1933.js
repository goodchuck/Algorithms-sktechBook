// 스카이라인
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// let input = `7
// 5 3 2 9 7 4 1`
let input = `8
1 11 5
2 6 7
3 13 9
12 7 16
14 3 25
19 18 22
23 13 29
24 4 28`

let real = input.trim().split("\n");
let [first, ...rest] = real;
let [N, M] = first.split(" ").map(Number);


class Building {
    constructor(left, height, right) {
        this.left = left;
        this.height = height;
        this.right = right;
    }
}

class Pair {
    constructor(x, height) {
        this.x = x;
        this.height = height;
    }
}

class Result {
    constructor() {
        this.ans = [];
    }

    get(index) {
        return this.ans[index];
    }

    size() {
        return this.ans.length;
    }

    append(pair) {
        let n = this.ans.length;
        if (n > 0) {
            let last = this.ans[n - 1];
            if (last.height === pair.height) {
                return;
            }
            if (last.x === pair.x) {
                last.height = pair.height;
                this.ans.splice(n - 1, 1, last);
                return;
            }
        }
        this.ans.push(pair);
    }

    toString() {
        return this.ans.map(p => `${p.x} ${p.height}`).join(" ");
    }
}

function merge(l, r) {
    let ans = new Result();
    let h1 = 0;
    let h2 = 0;
    let i = 0;
    let j = 0;
    while (i < l.size() && j < r.size()) {
        let u = l.get(i);
        let v = r.get(j);
        if (u.x < v.x) {
            let x = u.x;
            h1 = u.height;
            let h = Math.max(h1, h2);
            ans.append(new Pair(x, h));
            i += 1;
        } else {
            let x = v.x;
            h2 = v.height;
            let h = Math.max(h1, h2);
            ans.append(new Pair(x, h));
            j += 1;
        }
    }
    while (i < l.size()) {
        ans.append(l.get(i));
        i += 1;
    }
    while (j < r.size()) {
        ans.append(r.get(j));
        j += 1;
    }
    return ans;
}

function go(a, start, end) {
    if (start === end) {
        let ans = new Result();
        ans.append(new Pair(a[start].left, a[start].height));
        ans.append(new Pair(a[start].right, 0));
        return ans;
    }
    let mid = Math.floor((start + end) / 2);
    let l = go(a, start, mid);
    let r = go(a, mid + 1, end);
    return merge(l, r);
}

// Example usage:
async function main() {

    let buildings = rest.map(row => {
        let [L, H, R] = row.split(" ").map(Number);
        return new Building(L, H, R);
    })

    buildings.sort((a, b) => a.left - b.left || a.height - b.height || a.right - b.right);

    let ans = go(buildings, 0, buildings.length - 1);
    console.log(ans.toString());
}

main();
