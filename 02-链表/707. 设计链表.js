class Node {
    constructor(val, prev, curr) {
        this.val = val;
        this.prev = prev || null;
        this.next = curr || null;
    }
}

class MyLinkedList {
    #head = null;
    #tail = null;
    #length = 0;

    get(index) {
        if (index < 0 || index >= this.#length || !this.#head) return -1;
        let curr = this.#head,
            count = 0;
        while (count < index) {
            curr = curr.next;
            count++;
        }
        return curr.val;
    }

    addAtHead(val) {
        const node = new Node(val);
        if (this.#head) {
            node.next = this.#head;
            this.#head.prev = node;
            this.#head = node;
        } else {2
            this.#head = node;
            this.#tail = node;
        }
        this.#length++;
    }

    addAtTail(val) {
        const node = new Node(val);
        if (this.#tail) {
            this.#tail.next = node;
            node.prev = this.#tail;
            this.#tail = node;
        } else {
            this.#head = node;
            this.#tail = node;
        }
        this.#length++;
    }

    addAtIndex(index, val) {
        if (index > this.#length) return;
        if (index === this.#length) {
            this.addAtTail(val);
            return;
        }
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        let curr = this.#head,
            count = 0;
        while (count < index) {
            curr = curr.next;
            count++;
        }
        const node = new Node(val);
        node.next = curr;
        node.prev = curr.prev;
        node.prev.next = node;
        node.next.prev = node;
        this.#length++;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.#length || this.#length < 0) {
            return;
        }
        if (index === 0) {
            this.#head = this.#head.next;
            if (this.#head) this.#head.prev = null;
        } else if (index === this.#length - 1) {
            this.#tail = this.#tail.prev;
            if (this.#tail) this.#tail.next = null;
        } else {
            let curr = this.#head,
                count = 0;
            while (count < index) {
                curr = curr.next;
                count++;
            }
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
        }
        this.#length--;
    }
}