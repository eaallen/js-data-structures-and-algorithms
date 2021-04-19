class HashTable {
	constructor(size) {
		this.size = size
		this.keys = this.initArray(size)
		this.values = this.initArray(size)
		this.limit = 0 // increase everytime we call put()
	}

	// linear 
	put(key, value) {
		if (this.limit >= this.size) throw 'Hash table is full'

		let hashed_idx = this.hash(key)
		// linear Probing
		while (this.keys[hashed_idx] != null) {
			hashed_idx++
			hashed_idx = hashed_idx % this.size
		}

		this.keys[hashed_idx] = key
		this.values[hashed_idx] = value
		this.limit++
	}
	// linear
	get(key) {
		let hashed_idx = this.hash(key)
		while (this.keys[hashed_idx] != key) {
			hashed_idx++
			hashed_idx = hashed_idx % this.size
		}
		return this.values[hashed_idx]
	}

	quadraticPut(key, value) {
		if (this.limit >= this.size) throw 'Hash table is full'
		let hashed_idx = this.hash(key)
		let square_idx = 1

		while (this.keys[hashed_idx] != null) {
			hashed_idx += Math.pow(square_idx, 2)
			hashed_idx = hashed_idx % this.size
			square_idx++
		}

		this.keys[hashed_idx] = key
		this.values[hashed_idx] = value
		this.limit++
	}

	/**
	 * Searchs this.keys until it finds the hashed key index. Then it useses that
	 * index to find the value associated with that key.   
	 * @param {*} key look up value with this key. It is hashed to get the appopriate
	 * matching value in the this.values array  
	 * @returns matching value to key
	 */
	quadraticGet(key) {
		let hashed_idx = this.hash(key)
		let square_idx = 1

		while (this.keys[hashed_idx] != key) {
			hashed_idx += Math.pow(square_idx, 2)
			hashed_idx = hashed_idx % this.size
			square_idx++
		}
		return this.values[hashed_idx]
	}

	hash(key) {
		if (!Number.isInteger(key)) throw 'Must be an Int'
		return key % this.size
	}

	initArray(size) {
		return new Array(size)
	}
}

const linearHash = new HashTable(3)
linearHash.quadraticPut(3, "hi");
linearHash.quadraticPut(6, "hello");
linearHash.quadraticPut(9, "sunny");

console.log(linearHash.quadraticGet(3))
console.log(linearHash.quadraticGet(6))
console.log(linearHash.quadraticGet(9))