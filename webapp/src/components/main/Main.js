import React from 'react';
import Logo from '../../assets/hayadata.png'
import './Main.css'


const Main = () => {

  return (
    <div className="main-container">
        <img className="logo" src={Logo} alt="logo" />
    </div>
  );
}

export default Main;
