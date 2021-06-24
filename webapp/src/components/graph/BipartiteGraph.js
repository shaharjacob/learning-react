import React from 'react';
import Graph from "react-vis-network-graph";


const BipartiteGraph = () => {

  function getGraph() {
    let nodes = []
    let edges = []

    for (let i = 0; i < 10; i++) {
      nodes.push({
        id: i, 
        label: `Node ${i}`,
        x: 200,
        y: i*30
      })
      nodes.push({
        id: i + 10, 
        label: `Node ${i + 10}`,
        x: 800,
        y: i*30
      })

      edges.push({
        from: i,
        to: i + 10,
        scaling: {
          min: 0,
          max: 2,
          label: {
            enabled: true,
            min: 8,
            max: 20,
          },
        },
        label: `${i} to ${i + 10}, value: ${(i * (i + 10)) / 100}`,
        value: (i * (i + 10)) / 100,
        width: 0.5,
        arrows: {
          from: { enabled: false },
          to: { enabled: false },
        },
      })
    }
    return {
      nodes: nodes,
      edges: edges
    }
  }
 
  const options = {
    physics: {
      enabled: false,
    },
    height: '800px'
  };
 
  return (
    <Graph
      graph={getGraph()}
      options={options}
    />
  );

}

export default BipartiteGraph;