import React, { useState } from 'react';
import Logo from '../../assets/hayadata.png'
import './Main.css'
import Slider from '@material-ui/core/Slider';


const Main = () => {
  return (
    <div className="main-container">
      <img style={{width: "400px", marginTop: '100px'}} src={Logo} alt="logo" />
    </div>
  );
}

export default Main;

// const Main = () => {

//   const [imageWidth, setImageWidth] = useState("400px")

//   return (
//     <div className="main-container">
//       <div style={{width: '200px', marginTop: '100px', marginLeft: 'auto', marginRight: 'auto'}}>
//         <Slider
//           defaultValue={400}
//           getAriaValueText={(value) => `${value}`}
//           aria-labelledby="discrete-slider-small-steps"
//           step={10}
//           min={100}
//           max={1000}
//           valueLabelDisplay="on"
//           onChange={(event, value) => setImageWidth(`${value}px`)}
//         />
//       </div>
//       <img style={{width: imageWidth, marginTop: '100px'}} src={Logo} alt="logo" />
//     </div>
//   );
// }

// export default Main;
