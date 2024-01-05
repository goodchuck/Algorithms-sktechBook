var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`
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
    getSize() {
        return this.size;
    }
}

function solution(real) {
    let [T, ...rest] = real;
    let linkedList = new LinkedList();
    let returns = [];
    for (let row of rest) {
        if (row.indexOf('push_front') !== -1) {
            let [A, B] = row.trim().split(" ");
            let head = linkedList.head;
            linkedList.pushFirst(B);
        }
        else if (row.indexOf('push_back') !== -1) {
            let [A, B] = row.trim().split(" ");
            linkedList.append(B);
        }
        else if (row.indexOf('pop_front') !== -1) {
            let head = linkedList.head;
            let size = linkedList.getSize();
            if (size >= 1) {
                let pf = linkedList.removeHead();
                returns.push(pf);
            } else {
                returns.push(-1);
            }
        }
        else if (row.indexOf('pop_back') !== -1) {
            let size = linkedList.getSize();
            if (size >= 1) {
                let pf = linkedList.removeTail();
                returns.push(pf);
            } else {
                returns.push(-1);
            }
        }
        else if (row.indexOf('size') !== -1) {
            returns.push(linkedList.getSize())
        }
        else if (row.indexOf('empty') !== -1) {
            let size = linkedList.getSize();
            if (size > 0) {
                returns.push(0);
            } else {
                returns.push(1);
            }
        }
        else if (row.indexOf('front') !== -1) {
            let size = linkedList.getSize();
            if (size > 0) {
                returns.push(linkedList.head.element);
            } else {
                returns.push(-1);
            }
        }
        else if (row.indexOf('back') !== -1) {
            let size = linkedList.getSize();

            if (size > 0) {
                returns.push(linkedList.tail.element);
            } else {
                returns.push(-1);
            }
        }

        // console.log(row, linkedList.toString(), linkedList.getSize())
    }
    console.log(returns.join('\n'))
}
solution(real);