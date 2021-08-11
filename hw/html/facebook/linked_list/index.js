class LinkedList {
  Node = class {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }

  constructor() {
    this.size = 0
    this.head = null
  }

  add(data) {
    const node = new this.Node(data)
    if (!this.head) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  reverse=()=> {
    let node = this.head
    let prev = null
    let next = null

    while (node.next){
        
    }

  }
}








function main() {
  console.log('linked list practice')
  const ll = new LinkedList()

  ll.add(1)
  ll.add(2)
  ll.add(3)
  ll.add(4)

  console.log(ll)

  console.log('------')

}




function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(main)
