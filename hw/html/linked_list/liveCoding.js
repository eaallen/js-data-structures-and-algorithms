class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LL {
    constructor(value) {
        this.head = new Node(value)
    }
    add(value) {
        let node = new Node(value)
        let temp = this.head
        this.head = node
        this.head.next = temp
    }
}
function createLL() {
    const ll = new LL(0)
    for (let i = 1; i < 5; i++) {
        ll.add(i)
    }
    ll.add(0)
    return ll
}

function removeDuplicates(ll) {
    let node = ll.head
    const obj = { [node.value]: true }
    while (node.next) {
        if (obj[node.value]) {
            console.log('found dup', node, node.next)
            // remove dup
            node.next = node.next.next

        }
        obj[node.value] = true
        node = node.next
    }
    console.log(obj)
    console.log(ll)
}


function reversArrayInplace() {
    const arr = [1, 2, 3, 4, 5]
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp1 = arr[i]
        let temp2 = arr[arr.length - 1 - i]
        arr[i] = temp2
        arr[arr.length - 1 - i] = temp1
    }
    console.log(arr)
}

reversArrayInplace()