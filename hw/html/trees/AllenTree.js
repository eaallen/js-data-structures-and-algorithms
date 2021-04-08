class AllenTree {
    constructor(value) {
        this.root = null
        if (value) this.root = this.createNode(value)
    }

    createNode(value) {
        let depth = null
        if (tree) {
            // find depth 
            // this.getDepth()
        }
        return {
            value: value,
            left: null,
            right: null,
            depth: depth,
        }
    }

    getDepth(root) {
        let depth = 0
        if (root) {
            depth = Math.max(this.getDepth(root.left), this.getDepth(root.right)) + 1
            root.depth = depth
        }
        return depth
    }
    search(value) {
        const searchHelper = (node, value) => {
            if (node.value === value) {
                return node.count
            } else if (node.value > value) {
                searchHelper(node.left, value)
            } else {
                searchHelper(node.right, value)
            }
            
        }
        return searchHelper(this.root, value)
    }

    insert(value) {
        const _insert = (node, value) => {
            if (this.root === null) {
                this.root = this.createNode(value)
            } else if (value === node.value) {
                console.error('only unique values')
                return false
            } else if (value < node.value) {
                // go Left
                // check for balence
                console.log(this.nodeIsBalenced(node))
                node.is_balenced = this.nodeIsBalenced(node)
                if (node.left === null) {
                    node.left = this.createNode(value)
                    return true
                } else {
                    _insert(node.left, value) // step into next node
                }
            } else if (value > node.value) {
                // go right
                // check for balence
                console.log(this.nodeIsBalenced(node))
                node.is_balenced = this.nodeIsBalenced(node)
                if (node.right === null) {
                    node.right = this.createNode(value)
                    return true
                } else {
                    _insert(node.right, value) // step into next node
                }
            } else {
                console.error('Logic Error in AllenTree Insert Method')
            }

        }
        return _insert(this.root, value)
    }

    add(data) {
        console.log('ADD:', data)
        const _insert = (root, node) => {
            // if(node.value===70) debugger
            if (!root) {
                root = node
            } else if (node.value < root.value) {
                // go left
                root.left = _insert(root.left, node)
                if (root.left !== null && !this.nodeIsBalenced(root)) {
                    // rotation
                    console.log('left rotate')
                    if (root.left.value > node.value) { // node is on left 
                        console.log('RotateLL')
                        root = this.rotateLL(root)
                    } else {
                        console.log('rotateLR')
                        root = this.rotateLR(root)
                    }
                }
            } else if (node.value > root.value) {
                // go right
                root.right = _insert(root.right, node)
                if (root.right !== null && !this.nodeIsBalenced(root)) {
                    // rotation 
                    console.log('right rotate! Root.right:', root.right)
                    console.log('right rotate! NODE:', node)

                    if (root.right.value < node.value) { // node is on left 
                        console.log('RotateRR')
                        root = this.rotateRR(root)
                    } else {
                        console.log('rotateRL')
                        root = this.rotateRL(root)
                    }
                }
            }
            return root
        }

        const node = this.createNode(data)
        if (!this.root) {
            this.root = node
        } else {
            this.root = _insert(this.root, node)
        }
        return
    }
    rotateLL(root) {
        console.log('LL:', root)
        const z = root
        const y = root.left
        const x = root.left.left

        z.left = y.right

        y.left = x
        y.right = z

        console.log('LL 2:', y)
        return y
    }

    rotateLR(root) {
        const z = root
        const y = root.left
        const x = root.left.right

        z.left = x.right
        y.right = x.left

        x.right = z
        x.left = y
        return x
    }


    rotateRR(root) {
        console.log('RR:', root)
        const z = root
        const y = root.right
        const x = root.right.right

        z.right = y.left


        y.right = x
        y.left = z

        console.log('RR 2:', y)
        return y
    }
    rotateRL(root) {
        const z = root
        const y = root.right
        const x = root.right.left

        z.right = x.left
        y.left = x.right

        x.left = z
        x.right = y
        return x
    }

    inspect() { console.log(this) }

    getTreeHeight() {
        return this.getDepth(this.root)
    }
    /**
     * returns true if the differance of depth in 
     * node.left and node.right is less than 2
     * @param {object} node 
     * @returns {true}
     */
    nodeIsBalenced(node) {
        return Math.abs(this.getDepth(node.left) - this.getDepth(node.right)) < 2
    }

    traverse(root = this.root, valuesOnly = true) {
        // const arr = []
        // arr.push(root.value,root.left.value,root.right.value)

        const queue = []
        const arr = []
        if (!root) return

        queue.push(root)
        while (queue.length) {
            let temp = queue.shift()
            // console.log(temp)
            arr.push(valuesOnly ? temp.value : temp)
            if (temp.left) queue.push(temp.left)
            if (temp.right) queue.push(temp.right)
        }
        return arr
    }

}



