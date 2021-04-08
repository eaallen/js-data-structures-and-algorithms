class AVLTree {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
        this.depth = 1
    }

    getDepthBasedOnChildren() {
        if (this === null) {
            this.depth = 0
        } else {
            this.depth = 1
        }

        if (this.left !== null) {
            this.depth = this.left.depth + 1
        }
        if (this.right != null && this.depth <= this.right.depth) {
            this.depth = this.right.depth + 1
        }
    }

    rotateLeft() {
        const value_before = this.value
        const right_before = this.right
        this.value = this.left.value

        this.right = this.left
        this.left = this.left.left
        this.right.left = this.right.right
        this.right.right = right_before
        this.right.value = value_before

        this.right.getDepthBasedOnChildren()
        this.getDepthBasedOnChildren()
    }

    rotateRight() {
        const value_before = this.value
        const left_before = this.left

        this.left = this.right
        this.right = this.right.right
        this.left.right = this.left.left
        this.left.left = left_before
        this.left.value = value_before

        this.left.getDepthBasedOnChildren()
        this.getDepthBasedOnChildren()
    }

    /*----------------------------------------------------
        Balancing:
        when left is bigger than right, call rotateLeft
        when right is bigger than left, call rotateRight
    ----------------------------------------------------*/
    balence() {
        let l_depth = this.left === null ? 0 : this.left.depth
        let r_depth = this.right === null ? 0 : this.right.depth

        if (l_depth > r_depth + 1) {
            // rotate right or left
            let rr_depth = this.right.right === null ? 0 : this.right.right.depth
            let lr_depth = this.left.left === null ? 0 : this.left.left.depth
            if (lr_depth > rr_depth) {
                this.right.rotateLeft()
            }
            this.rotateRight()
        }
    }

    insert(value) {
        let child_inserted = false
        if (value === this.value) {
            return false // they should all be unique
        } else if (value < this.value) {
            if (this.left === null) {
                this.left = new AVLTree(value)
                child_inserted = true
            } else {
                child_inserted = this.left.insert(value) // recursion
                if (child_inserted) this.balence()
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new AVLTree(value)
                child_inserted = true
            } else {
                child_inserted = this.right.insert(value) // recursion 
                if (child_inserted) this.balence()
            }
        }
        if (child_inserted === true) this.getDepthBasedOnChildren()
        return child_inserted
    }

    remove(value) {
        const findMin = (root) =>{
            while(root.left) root = root.left
            return root
        }

        const deleteRecursively = (root, value) => {
            if (!root) {
                return null
            } else if (value < root.value) {
                root.left = deleteRecursively(root.left, value)
            } else if (value > root.value) {
                root.right = deleteRecursively(root.right, value)
            } else {
                // no child
                if (!root.left && !root.right) {
                    return null
                } else if (!root.left) {
                    root = root.right
                    return root
                } else if (!root.right) {
                    root = root.left
                    return root
                } else {
                    let temp = findMin(root.right)
                    root.value = temp.value
                    root.right = deleteRecursively(root.right, temp.value)
                    return root
                }
            }
            root.getDepthBasedOnChildren()
            return root
        }
        return deleteRecursively(this, value)
    }
}


// time to test my AVLTree

const avl = new AVLTree(1)

avl.insert(4345)
avl.insert(23674)
avl.insert(234678)
avl.insert(12)
avl.insert(796)
avl.insert(457)
avl.insert(789)
avl.insert(426)
avl.insert(65443)
avl.insert(546)
avl.insert(6785)
avl.insert(76)

console.log(avl)