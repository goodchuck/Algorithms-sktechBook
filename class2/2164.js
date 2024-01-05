var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
let input = `4`
let real = input.trim().split(" ");
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node("head");
        this.tail = null;
    }

    append(newElement) {
        let newNode = new Node(newElement); //새로운 노드 생성
        let current = this.head; // 시작 노드
        if (!this.tail) {
            current.next = newNode;
        } else {
            this.tail.next = newNode;

        }
        this.tail = newNode;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement); //새로운 노드 생성
        let current = this.find(item); // 삽입할 위치의 노드 찾기
        newNode.next = current.next; // 찾은 노드가 가리키는 노드를 새로은 노드가 가리키기
        current.next = newNode; // 찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
    }

    removeHead() {
        let nextNode = this.head.next;
        this.head.next = nextNode.next;
    }

    toString() {
        let array = [];
        let currNode = this.head;
        while (currNode.next !== null) {
            array.push(currNode.next.element);
            currNode = currNode.next;
        }
        return array
    }
}

function solution(real) {
    let [N, ...rest] = real.map(Number);
    // let arr = createArrayFrom1ToN(N)
    let linkedList = new LinkedList();
    for (let i = 1; i <= N; i++) {
        linkedList.append(i);
    }
    while (true) {
        let i = linkedList.head.next.element;
        let j = linkedList.head.next.next?.element;
        if (!j) {
            console.log(linkedList.toString().join(""))
            break;
        } else {
            linkedList.removeHead();
            linkedList.append(j)
            linkedList.removeHead();


        }
    }

}
solution(real);