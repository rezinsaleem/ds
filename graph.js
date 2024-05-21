class Graph {
  constructor() {
    this.list = {}
  }

  addVertex(vertex){
    if(!this.list[vertex]){
      this.list[vertex] = new Set()
    }
  }

  addEdges(vertex1,vertex2){
    if(!this.list[vertex1]){
      this.addVertex(vertex1)
    }
    if(!this.list[vertex2]){
      this.addVertex(vertex2)
    }

    this.list[vertex1].add(vertex2)
    this.list[vertex2].add(vertex1)
  }

  removeEdges(vertex1,vertex2){
    this.list[vertex1].delete(vertex2)
    this.list[vertex2].delete(vertex1)
  }
  removeVertex(vertex){
    if(!this.list[vertex]){
      return
    }
    for( let adjVertex of this.list[vertex]){
      this.removeEdges(vertex,adjVertex)
    }
    delete this.list[vertex]
  }
   
  display(){
    for(let vertex in this.list){
      console.log(vertex + "->" +[...this.list[vertex]]);
    }
  }

  hasEdge(vertex1,vertex2){
    return this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1)
  }

  bfs(startVertex){
    let visited = new Set()
    let queue = [startVertex]
    while(queue.length>0){
      let currentVertex = queue.shift()
      if(!visited.has(currentVertex)){
        console.log(currentVertex);
        visited.add(currentVertex)

        for(let neighbor of this.list[currentVertex]){
          if(!visited.has(neighbor)){
            queue.push(neighbor)
          }
        }
      }
    }
  }

  dfs(startVertex){
    let visited = new Set()
     const dfsHelper = (vertex =>{
      console.log(vertex);
      visited.add(vertex)

      for(let neighbor of this.list[vertex]){
        if(!visited.has(neighbor)){
          dfsHelper(neighbor)
        }
      }
     })
     dfsHelper(startVertex)
  }

}

const graph = new Graph()

graph.addVertex(99)
graph.addVertex(88)
graph.addVertex(77)
graph.addVertex(66)
graph.addEdges(99,88)
graph.addEdges(77,88)
graph.addEdges(66,99)
graph.addEdges(77,99)
graph.bfs(99)
graph.display()
graph.bfs(99)
