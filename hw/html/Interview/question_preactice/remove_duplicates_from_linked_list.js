
class SingleLL {
  Node = class {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }
  constructor() {
    this.head = null
    this.size = 0
  }

  addHead = data => {
    this.head = this.newNode(data)
    this.size++
  }

  add = data => {
    if (this.head === null) {
      this.addHead(data)
    } else {
      const node = this.newNode(data)
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  removeFirst = () => {
    const temp = this.head
    this.head = this.head.next
    this.size--
    return temp
  }

  remove = value => {
    let current_head = this.head
    if (current_head.data === value) {
      // its in the head
      this.head = current_head.next
      this.size--
      return
    }
    let prev = current_head
    while (current_head) {
      if (current_head.data === value) {
        prev.next = current_head.next
        current_head = current_head.next
        break
      }
      prev = current_head
      current_head = current_head.next
    }
  }

  // remove = (value, occurance_index = 1, amount = 'all') =>{
  //     let value_count = 0
  //     let value_amount = 0
  //     let node = this.head
  //     let prev_node = node
  //     while(node !== null){
  //         if(value === node.data){
  //             value_count ++
  //             if(value_count >= occurance_index){
  //                 switch(amount){
  //                     case 'all':
  //                         // remove ndoe
  //                         console.log('<---', node, prev_node)
  //                         this.skip(node, prev_node)
  //                         console.log('--->', node, prev_node)
  //                         break
  //                     default:
  //                         if(value_amount <= amount){
  //                             // remove node
  //                         }
  //                         break
  //                 }
  //             }

  //         }
  //         node = node.next
  //     }
  // }

  skip = (node, prev_node) => {
    prev_node.next = node.next
    // prev_node = node
    node = node.next

  }

  newNode = data => new this.Node(data)

  isEmpty = () => {
    return this.size === 0
  }

  toArray = () => {
    let node = this.head
    const arr = []
    while (node !== null) {
      arr.push(node.data)
      node = node.next
    }
    return arr
  }

  find = value => {
    let node = this.head
    while (node) {
      if (node.data === value) {
        return node
      }
      node = node.next
    }
    return -1
  }

  includes = value => {
    let node = this.head
    while (node) {
      if (node.data === value) {
        return true
      }
      node = node.next
    }
    return false
  }

  removeDuplilcates(ll = this) {
    // have prev node
    let node = ll.head.next
    let prev_node = ll.head

    // init with head node
    const obj = { [ll.head.data]: true }

    while (node) {
      console.log('node data', node.data)
      if (obj[node.data]) {
        // remove node and continue
        console.log('going to remove', node.data)
        node = node.next
        prev_node.next = node
      } else {
        obj[node.data] = true
        // move forward
        prev_node = prev_node.next
        node = node.next
      }

    }
  }

  removeNode(value) {

  }
}
const LL = new SingleLL()
for (const i of [1, 2, 3, 4, 5, 2, 3, 4, 4]) {
  LL.add(i)
}

// console.log(LL.removeFirst())
// console.log(LL.toArray())
console.log(LL.removeDuplilcates())
console.log(LL.toArray())

