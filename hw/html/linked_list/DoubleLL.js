class DoubleLL {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    newNode = data => {
        return {
            data: data,
            next: null,
            prev: null,
        }
    }

    add = data =>{
        if(this.head === null){
            this.head = this.newNode(data)
            this.head.next = this.tail
            this.tail.prev = this.head       
        }
    }
}