// create a table 
function createTableforTree(allenTree) {
    const root = document.getElementById('root')

    const arr_nodes = allenTree.traverse(allenTree.root, true)
    console.log(arr_nodes)


    // for/


    // let tds = ''

    // for(let i = 0; i< 40; i++){
    //     tds += '<td>ww</td>'
    // }
    // let data = ''
    // for(let i = 0; i < allenTree.root.depth; i++){
    //     data += `<tr> ${tds} </tr>`
    // }

    root.innerHTML = traverse(allenTree.root)

}

function traverse(root = this.root, valuesOnly = true) {
    const queue = []
    let arr = []
    let m = 1
    let counter = 0
    let html = []
    let str = ''
    if (!root) return

    queue.push(root)
    arr.push(true)
    html.push(`<div>${root.value}</div>`)

    while (queue.length) {
        let temp = queue.shift()
        if (arr.length >= m || !queue.length) {
            console.log('M:', m, 'arr:', arr.length)
            console.log('...', arr, html)
            let s = ''
            for (let i = 0; i < m; i++) {
                if (arr[i]) {
                    // display val
                    s += html.shift()
                } else {
                    // display null
                    s += '<div></div>'
                }
            }
            let row = `<div class='row'>${s}</div>`
            str += row

            m *= 2
            counter = 0
            arr = []
            html = []
        }


        if (temp.left) {
            queue.push(temp.left)
            html.push(`<div>${temp.left.value}</div>`)
            arr.push(true)
        } else arr.push(false)
        if (temp.right) {
            queue.push(temp.right)
            html.push(`<div>${temp.right.value}</div>`)
            arr.push(true)
        } else arr.push(false)

        counter += 1

    }
    return str
}

function traversePostOrder(node) {
    let html = ''
    if (node.left) {
        html += traversePostOrder(node.left)
    }
    if (node.right) {
        html += traversePostOrder(node.right)
    }
    console.log(node.value);
    html += `<div>${node.value}</div>`
    return html
}