class DoublyLinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	head = null;
	tail = null;
	size = 0;

	isEmpty() {
		return this.size == 0;
	}

	insertAtHead(value) {
		if (this.head === null) { //If first node
			this.head = new DoublyLinkedListNode(value);
			this.tail = this.head;
		} else {
			var temp = new DoublyLinkedListNode(value);
			temp.next = this.head;
			this.head.prev = temp;
			this.head = temp;
		}
		this.size++;
	}

	insertAtTail(value) {
		if (this.tail === null) { //If first node
			this.tail = new DoublyLinkedListNode(value);
			this.head = this.tail;
		} else {
			var temp = new DoublyLinkedListNode(value);
			temp.prev = this.tail;
			this.tail.next = temp;
			this.tail = temp;
		}
		this.size++;
	}

	deleteAtHead() {
		var toReturn = null;

		if (this.head !== null) {
			toReturn = this.head.data;

			if (this.tail === this.head) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
		}
		this.size--;
		return toReturn;
	}

	deleteAtTail() {
		var toReturn = null;

		if (this.tail !== null) {
			toReturn = this.tail.data;

			if (this.tail === this.head) {
				this.head = null;
				this.tail = null;
			} else {
				this.tail = this.tail.prev;
				this.tail.next = null;
			}
		}
		this.size--;
		return toReturn;
	}

	findStartingHead(value) {
		var currentHead = this.head;
		while (currentHead.next) {
			if (currentHead.data == value) {
				return true;
			}
			currentHead = currentHead.next;
		}
		return false;
	}

	findStartingTail(value) {
		var currentTail = this.tail;
		while (currentTail.prev) {
			if (currentTail.data == value) {
				return true;
			}
			currentTail = currentTail.prev;
		}
		return false;
	}

	//---------------------- Util Methods ------------------------
	detectloop() {
		let slow = this.head
		let fast = this.head
		while (slow !== null && fast !== null && fast.next !== null) {
			fast = fast.next.next
			slow = slow.next
			if (fast === slow) {
				return 'loop detected'
			}
		}
		return 'there is no loop here'
	}

}