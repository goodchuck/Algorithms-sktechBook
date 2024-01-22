// 18110
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `10
1
13
12
15
3
16
13
12
14
15`
let real = input.trim().split("\n");

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(newElement) {
        let newNode = new Node(newElement); //새로운 노드 생성
        let prevTail = this.tail;
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.tail.prev = prevTail;
        this.size++
    }

    pushFirst(newElement) {
        let newNode = new Node(newElement);
        if (!this.head) {
            this.append(newElement)
            return;
        } else {
            let prevHead = this.head;
            newNode.next = prevHead;
            prevHead.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }


    insert(newElement, item) {
        let newNode = new Node(newElement); //새로운 노드 생성
        let current = this.find(item); // 삽입할 위치의 노드 찾기
        newNode.next = current.next; // 찾은 노드가 가리키는 노드를 새로은 노드가 가리키기
        current.next = newNode; // 찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
        this.size++
    }

    remove(item) {
        let preNode = this.findPrevious(item); // 삭제할 노드를 가리키는 노드 찾기
        preNode.next = preNode.next.next; // 삭제할 노드 다음 노드를 가리키도록 하기
        this.size--
        return preNode.element;
    }

    removeHead() {
        let prevHead = this.head.element;
        if (this.size === 0) {
            return null;
        }
        if (this.size > 1) {
            let nextNode = this.head.next;
            this.head = nextNode;
        }
        else if (this.size === 1) {
            this.head = null;
            this.tail = null;
        }

        this.size--
        return prevHead;
    }

    removeTail() {
        let tail = this.tail;
        if (this.size === 0) {
            return null;
        }
        if (this.size > 1) {
            // let prev = this.findPrevious(tail.element);
            let prev = this.tail.prev;
            prev.next = null;
            this.tail = prev;
            this.size--
            if (this.size === 1) {
                this.head = this.tail;
            }
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--
        } else {

        }

        return tail.element;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next != null && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }


    toString() {
        let array = [];
        let currNode = this.head;
        if (!currNode || this.size === 0) {
            return array;
        }
        while (currNode) {
            array.push(currNode.element);
            currNode = currNode.next;
        }
        return array
    }
    getSum() {
        let sum = 0;
        // let array = [];
        let currNode = this.head;
        if (!currNode || this.size === 0) {
            return 0;
        }
        while (currNode) {
            // array.push(currNode.element);
            sum += Number(currNode.element);
            currNode = currNode.next;
        }
        return sum
    }
    getSize() {
        return this.size;
    }
}


function solution(real) {
    let [T, ...rest] = real
    T = Number(T);
    let av = Math.round(T * 15 / 100);
    let linkedList = new LinkedList();
    rest = rest.sort((a, b) => Number(a) - Number(b))
    for (let r of rest) {
        linkedList.append(r);
    }
    let index = 0;
    while (index != av) {
        linkedList.removeHead();
        linkedList.removeTail();
        index++;
    }
    if (T === 0) {
        console.log(0);
        return;
    }
    console.log(Math.round(linkedList.getSum() / (T - (2 * av))));
    // let avg =
    // console.log(linkedList.getSum(), T, 2 * av, linkedList.getSum() / (T - (2 * av)))
}
solution(real);
