class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this._root = null
    }

    /*--------------------------------------------
        Tree Traversal:
        the following are 4 different ways to
        traverse a tree. they each take similar
        approches, however, since these are 
        recursive methods the position of the 
        console.log is what determins in what 
        order the nodes are viewed
    ---------------------------------------------*/
    traversePreOrder() {
        const traversePreOrderHelper = (node) => {
            if (!node) return
            console.log(node.value)
            traversePreOrderHelper(node.left)
            traversePreOrderHelper(node.right)
        }
        traversePreOrderHelper(this._root)
    }

    traverseInOrder() {
        const traverseInOrderHelper = (node) => {
            if (!node) return
            traverseInOrderHelper(node.left)
            console.log(node.value)
            traverseInOrderHelper(node.right)
        }
        traverseInOrderHelper(this._root)
    }

    traversePostOrder() {
        const traversePostOrderHelper = (node) => {
            if (node.left)
                traversePostOrderHelper(node.left)
            if (node.right)
                traversePostOrderHelper(node.right)
            console.log(node.value)
        }
        traversePostOrderHelper(this._root)
    }

    // Iterative approche
    traverseLevelOrder() {
        let root = this._root
        const queue = []

        if (!root) return

        queue.push(root)
        while (queue.length) {
            let temp = queue.shift()
            console.log(temp)
            if (temp.left) queue.push(temp.left)
            if (temp.right) queue.push(temp.right)
        }
    }

    /*------------------------------------------
        Insertion
    ------------------------------------------*/

    insert(value) {
        const node = new BinaryTreeNode(value)
        if (!this._root) {
            this._root = node
        } else {
            let current_root = this._root
            let in_search = true
            while (in_search) {
                if (current_root.value > value) {
                    if (current_root.left !== null) {
                        // go to next left node
                        current_root = current_root.left
                    } else {
                        current_root.left = node
                        in_search = false
                    }
                } else if (current_root.value < value) {
                    if (current_root.right !== null) {
                        // go to next right node
                        current_root = current_root.right
                    } else {
                        current_root.right = node
                        in_search = false
                    }

                } else in_search = false // we found a duplicate
            }
        }
    }

    // Remove 
    remove(value) {
        const findMin = (root) => {
            while (root.left) {
                root = root.left
            }
            return root
        }
        const deleteRecursively = (root, value) => {
            if (!root) {
                return null
            } else if (value < root.value) {
                // go left
                root.left = deleteRecursively(root.left, value)
            } else if (value > root.value) {
                // go right
                root.right = deleteRecursively(root.right, value)
            } else {
                // we found the value
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
            return root
        }
        return deleteRecursively(this._root, value)
    }

    search(value){
        let current_root = this._root
        let found = false
        while(current_root){
            if(current_root.value > value){
                current_root = current_root.left
            }else if(current_root.value <value){
                current_root = current_root.right
            }else{
                found = true
                break
            }
        }
        return found
    }

}

const tree = new BinaryTree()
tree.insert(1)
tree.insert(3)
tree.insert(21)
tree.insert(12)
tree.insert(43)
tree.insert(39)
console.log(tree.traverseLevelOrder())


