class LFUNode {
    constructor(key, value) {
        this.prev = null
        this.next = null
        this.key = key
        this.value = value
        this.freq_count = 1
    }
}

class LFUCache {
    constructor(capacity) {
        this.keys = {}
        this.freq = {}
        this.capacity = capacity
        this.min_freq = 0
        this.size = 0
    }

}

class LFUDoubleLinkedList {
    constructor() {
        this.head = new LFUNode('buffer head', null)
        this.tail = new LFUNode('buffer tail', null)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0
    }

    insertAtHead(node) {
        node.next = this.head.next
        this.head.next.prev = node
        node.prev = this.head
        this.head.next = node
        this.size++
    }

    insertAtTail(node) {
        node.next = this.tail
        this.tail.prev.next = node
        node.prev = this.tail.prev
        this.tail.prev = node
        this.size++
    }

    removeAtTail() {
        const removed_node = this.tail.prev
        this.tail.prev = removed_node.prev
        removed_node.prev.next = this.tail
        this.size--
        return removed_node
    }

    removeNode(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        return node
    }

}