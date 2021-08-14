class DirectedGraph {
  constructor() {
    this.edges = {}
  }

  addVertex(vertex) {
    this.edges[vertex] = {}
  }

  addEdge(start_vertex, end_vertex, weight = 0) {
    this.edges[start_vertex][end_vertex] = weight
  }

  removeEdge(start_vertex, end_vertex) {
    console.log(start_vertex, end_vertex)
    if (this.edges[start_vertex] && this.edges[start_vertex][end_vertex] !== undefined) {
      delete this.edges[start_vertex][end_vertex]
    }
  }

  removeVertex(vertex) {
    // remove this vertex node from other edges
    for (const adjacent_vertex in this.edges[vertex]) {
      this.removeEdge(adjacent_vertex, vertex)
    }
    delete this.edges[vertex]
  }

  // Breadth First Search
  traverseBFS(vertex, fn) {
    let queue = [], visited = {};
    queue.push(vertex)
    while (queue.length) {
      vertex = queue.shift()
      if (!visited[vertex]) {
        visited[vertex] = true
        fn(vertex)
        for (const adjacent_vertex in this.edges[vertex]) {
          queue.push(adjacent_vertex)
        }
      }
    }
  }

  // Depth First Search
  traversDFS(vertex, fn) {
    function _dfs(vertex, visited, fn) {
      visited[vertex] = true
      fn(vertex)
      for (const adjacent_vertex in this.edges[vertex]) {
        if (!visited[adjacent_vertex]) {
          _dfs(adjacent_vertex, visited, fn)
        }
      }
    }

    const visited = {}
    _dfs(vertex, visited, fn)
  }

  _isEmpty(obj) {
    return Object.keys(obj).length === 0
  }

  _extractMin(Q, dist) {
    let min_dist = Infinity
    let node_with_min_dist = null
    // find the smalled node
    for (const node in Q) {
      if (dist[node] <= min_dist) { // first comapre to Infinity so this will always be true the forst time around
        min_dist = dist[node]
        node_with_min_dist = node
      }
    }
    return node_with_min_dist
  }

  dijkstra(source) {
    const Q = {}, dist = {}
    for (const vertex in this.edges) {
      dist[vertex] = Infinity // dont know what the distance is so we make it infinity

      Q[vertex] = this.edges[vertex]
    }

    dist[source] = 0

    while (!this._isEmpty(Q)) {
      let u = this._extractMin(Q, dist) // get the min distance

      delete Q[u]

      for (const neighbor in this.edges[u]) {
        let alt = dist[u] + this.edges[u][neighbor]

        // a shorter path has been found
        if (alt < dist[neighbor]) {
          dist[neighbor] = alt
        }
      }
    }
    return dist
  }



}

const digraph1 = new DirectedGraph();
// digraph1.addVertex("A");
// digraph1.addVertex("B");
// digraph1.addVertex("C");
// digraph1.addVertex("Z");
// digraph1.addEdge("A", "B", 1);
// digraph1.addEdge("A", "Z", 1);
// digraph1.addEdge("B", "C", 2);
// digraph1.addEdge("C", "A", 3);

// digraph1.removeVertex("C")

// console.log(digraph1)

// digraph1.traverseBFS("A", (x) => console.log(x))

digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("B", "D", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 3);

console.log(digraph1);

console.log(digraph1.dijkstra("A"))