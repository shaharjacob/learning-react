import cloneDeep from 'lodash/cloneDeep';
import React, { useState, useEffect } from 'react';
import { useLocation  } from 'react-router-dom'

import Graph from "react-vis-network-graph";
import Slider from '@material-ui/core/Slider';

import '../main/Main.css'
import './Graph.css'

// example 1
const FinalExample = () => {

    const [graph, setGraph] = useState({})

    const options = {
        physics: {
          enabled: false,
        },
        height: "800px",
        groups: {
          0: {color:{background:'orange'}, borderWidth:1},
          1: {color:{background:'cyan'}, borderWidth:1}
        }
      };

    useEffect(() => {
        fetch('/final-example').then(response => {
          if(response.ok){
            return response.json()
          }
        }).then(data => {
            setGraph(data)
        })
      },[])

    return (
        <div className="main-container">
            {graph
            ?
                <Graph
                    graph={graph}
                    options={options}
                />
            :
                <></>
            }
        </div>
    );
}

export default FinalExample;

// // example 2: slider for edges threshold
// const FinalExample = () => {

//     const [graph, setGraph] = useState({})

//     const options = {
//         physics: {
//           enabled: false,
//         },
//         height: "800px",
//         groups: {
//           0: {color:{background:'orange'}, borderWidth:1},
//           1: {color:{background:'cyan'}, borderWidth:1}
//         }
//       };

//     useEffect(() => {
//         fetch('/final-example').then(response => {
//           if(response.ok){
//             return response.json()
//           }
//         }).then(data => {
//             setGraph(data)
//         })
//       },[])
    
//     function valuetext(value) {
//         return `${value}`;
//     }

//     function onThresholdChanged(event, value) {
//         let data = cloneDeep(graph)
//         for (let i = 0; i < data["edges"].length; i++){
//           let shouldBeHide = data["edges"][i]["value"] < value
//           data["edges"][i]["hidden"] = shouldBeHide
//         }
//         setGraph(data)
//       }

//     return (
//         <div className="main-container">
//             {graph
//             ?
//             <>
//                 <div className="slider">
//                     <Slider
//                     defaultValue={0.00}
//                     getAriaValueText={valuetext}
//                     aria-labelledby="discrete-slider-small-steps"
//                     step={0.01}
//                     min={0.00}
//                     max={1.00}
//                     valueLabelDisplay="on"
//                     onChange={onThresholdChanged}
//                     />
//                     <span className="slider-title">
//                         Similarity Threshold
//                     </span>
//                 </div>
//                 <Graph
//                     graph={graph}
//                     options={options}
//                 />
//             </>
//             :
//                 <></>
//             }
//         </div>
//     );
// }

// export default FinalExample;


// // example 3: full demo
// const FinalExample = () => {

//   let location = useLocation()
//   const [graph, setGraph] = useState({})

//   const options = {
//     physics: {
//       enabled: false,
//     },
//     height: "800px",
//     groups: {
//       0: {color:{background:'orange'}, borderWidth:1},
//       1: {color:{background:'cyan'}, borderWidth:1}
//     }
//   };

//   useEffect(() => {
//     let params = new URLSearchParams(location.search)
//     fetch(`/final-example?left=${params.get('left')}&right=${params.get('right')}`).then(response => {
//       if(response.ok){
//         return response.json()
//       }
//     }).then(data => {
//         setGraph(data)
//       })
//     },[])
  
//   function valuetext(value) {
//     return `${value}`;
//   }

//   function onThresholdChanged(event, value) {
//     let data = cloneDeep(graph)
//     for (let i = 0; i < data["edges"].length; i++){
//       let shouldBeHide = data["edges"][i]["value"] < value
//       data["edges"][i]["hidden"] = shouldBeHide
//     }
//     setGraph(data)
//   }

//   return (
//     <div className="main-container">
//       {graph
//       ?
//       <>
//         <div className="slider">
//           <Slider
//           defaultValue={0.00}
//           getAriaValueText={valuetext}
//           aria-labelledby="discrete-slider-small-steps"
//           step={0.01}
//           min={0.00}
//           max={1.00}
//           valueLabelDisplay="on"
//           onChange={onThresholdChanged}
//           />
//           <span className="slider-title">
//             Similarity Threshold
//           </span>
//         </div>
//         <Graph
//           graph={graph}
//           options={options}
//         />
//       </>
//       :
//         <></>
//       }
//     </div>
//   );
// }

// export default FinalExample;