function detectloop(){
    let slow = head
    let fast = head

    let flag = 0

    while(slow !==null && fast!==null && fast.next!==null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            return 'loop detected'
        }

    }

    return 'there is no loop here'

}