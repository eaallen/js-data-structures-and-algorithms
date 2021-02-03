//------------------------------------------------
// Elijah Allen 11am section  
//-----------------------------------------------

// Good 'ol stack overflow
String.prototype.insert = function (index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substring(index);
    } return string + this;
};

class FakeArray {
    constructor() {
        this.contents = ''
        this.length = this.contents.length
    }

    push(byte4) {
        byte4 = byte4.toString()
        
        // array is at max     input is non number  input is float     input is too big
        if (this.length >= 40 || isNaN(byte4) || byte4.includes('.') || byte4.length > 4) {
            return null
        }

        while (byte4.length < 4) {
            if (byte4[0] === '-') {
                byte4 = byte4.insert(1, '0')
            } else {
                byte4 = '0' + byte4
            }
        }

        this.contents += byte4
        this.length = this.contents.length

        return true
    }

    pop() {
        // array is empty
        if (this.length < 4) {
            return null
        }

        let popped = ''
        for (let i = this.length - 1; i > this.length - 5; i--) {
            popped = this.contents[i] + popped
        }

        this.contents = this.contents.substring(0, this.length - 4)
        this.length = this.contents.length

        return popped
    }

    get(index) {
        if (index < 0 || index * 4 > this.length - 4) {
            return null
        }

        return parseInt(this.contents.substring(index * 4, (index * 4) + 4))
    }

}

const array = new FakeArray()


// for (let i = 0; i < 10; i++) {
//     array.push(12)
// }
array.push(1)
array.push(1)
array.pop()

array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.push(2)
array.pop()

array.push(-3)
array.push(-3)
array.pop()


console.log(array.contents)
console.log(array.get(0))
console.log(array.get(1))
console.log(array.get(2))
console.log(array.get(3))

console.log('-------------------')


console.log(array.get(3))

