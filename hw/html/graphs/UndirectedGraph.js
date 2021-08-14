
class UndirectedGraph {
  constructor() {
    this.edges = {}
  }

  addVertex(vertex) {
    this.edges[vertex] = {}
  }

  addEdge(vertex1, vertex2, weight = 0) {
    this.edges[vertex1][vertex2] = weight
    this.edges[vertex2][vertex1] = weight
  }

  removeEdge(vertex1, vertex2){
    if(this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined){
      delete this.edges[vertex1][vertex2]
    }

    if(this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined){
      delete this.edges[vertex2][vertex1]
    }
  }

  removeVertex(vertex){
    // remove this vertex node from other edges
    for(const adjecent_vertex in this.edges[vertex]){
      this.removeEdge(adjecent_vertex, vertex)
    }
    delete this.edges[vertex]
  }


}

const graph1 = new UndirectedGraph();
graph1.addVertex('Eli');
graph1.addVertex('Kandin');
graph1.addVertex('Bethany');
graph1.addVertex('Kali');
graph1.addVertex('Kass');
graph1.addEdge('Eli','Kandin', 1);
graph1.addEdge('Bethany','Kandin', 3);
graph1.addEdge('Kali','Kandin', 5);
graph1.addEdge('Kass','Kandin', 0);
graph1.removeVertex('Kass')
console.log(graph1.edges);   // 1: {2: 0},  2: {1: 0}

