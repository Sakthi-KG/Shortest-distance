function dijkstra(graph, source, end) {
    const V = graph.length;
    const dist = new Array(V);
    const visited = new Array(V);
  
    for (let i = 0; i < V; i++) {
      dist[i] = Infinity;
      visited[i] = false;
    }
  
    dist[source] = 0;
  
    for (let count = 0; count < V - 1; count++) {
      const u = minDistance(dist, visited);
      visited[u] = true;
  
      for (let v = 0; v < V; v++) {
        if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
          dist[v] = dist[u] + graph[u][v];
        }
      }
    }
  
    printSolution(dist, source, end);
  }
  
  function minDistance(dist, visited) {
    const V = dist.length;
    let min = Infinity;
    let minIndex = -1;
  
    for (let v = 0; v < V; v++) {
      if (!visited[v] && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }
  
    return minIndex;
  }
  
  function printSolution(dist, source, end) {
    let ans = "";
    const V = dist.length;
    ans += `Shortest Distance from ${source} to ${end} is ${dist[end]}`;
    document.getElementById("result-viewer").innerHTML = ans;
  }
  
  let graph = [];
  
  function getUserInput() {
    const rows = parseInt(prompt("Enter the number of rows in the graph:"));
    const columns = parseInt(prompt("Enter the number of columns in the graph:"));
    graph = [];
    for (let i = 0; i < rows; i++) {
      graph[i] = [];
      for (let j = 0; j < columns; j++) {
        graph[i][j] = parseInt(prompt(`Enter the value for graph[${i}][${j}]:`));
      }
    }
  }
  
  function findShortestDistance() {
    const source = parseInt(document.getElementById('start-node').value);
    const end = parseInt(document.getElementById('end-node').value);
  
    if (!isNaN(source) && !isNaN(end) && source >= 0 && source <= 8 && end >= 0 && end <= 8) {
      dijkstra(graph, source, end);
    } else {
      const result = document.getElementById('result-viewer');
      result.style.color = 'red';
      result.innerHTML = 'Enter Valid Inputs!';
      setTimeout(() => {
        result.innerHTML = '';
        result.style.color = 'green';
      }, 2500);
    }
  }
  