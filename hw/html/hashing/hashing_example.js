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
        while(this.keys[hashed_idx] !=null){
            hashed_idx++
            hashed_idx = hashed_idx % this.size
        }

        this.keys[hashed_idx] = key
        this.values[hashed_idx] = value
        this.limit ++
    }
    // linear
    get(key){
        let hashed_idx = this.hash(key)

        while(this.keys[hashed_idx] != key){
            hashed_idx ++
            hashed_idx = hashed_idx % this.size
        }
        return this.values[hashed_idx]
    }

    quadraticPut(key,value){
        if (this.limit >= this.size) throw 'Hash table is full'
        let hashed_idx = this.hash(key)
        let square_idx = 1
        
        while(this.keys[hashed_idx] != key){
            hashed_idx += Math.pow(square_idx,2)
            square_idx++
        }

        this.keys[hashed_idx] = key
        this.values[hashed_idx] = value
        this.limit++
    }


    quadraticGet(key){
        let hashed_idx = this.hash(key)
        let square_idx = 1
        
        while(this.keys[hashed_idx] != null){
            hashed_idx += Math.pow(square_idx,2)
            hashed_idx = hashed_idx % this.size
            square_idx++
        }
        return this.values[hashed_idx ]
    }

    hash(key){
        if(!Number.isInteger(key)) throw 'Must be an Int'
        return key % this.size
    }

    initArray(size){
        return new Array(size)
    }


}

const linearHash = new HashTable(13)
linearHash.put(7, "hi");
linearHash.put(20, "hello");
linearHash.put(33, "sunny");
linearHash.put(46, "weather");
linearHash.put(59, "wow");
linearHash.put(72, "forty");
linearHash.put(85, "happy");
linearHash.put(98, "sad");

console.log(linearHash.size)
console.log(linearHash.keys)
console.log(linearHash.values)