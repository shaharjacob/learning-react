import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/hayadata.png'
import './Main.css'


const Main = () => {

    let history = useHistory()

    const onSubmit = () => {
        var left = document.getElementById("left-side-input")
        var right = document.getElementById("right-side-input")
        history.push(`/final-example?left=${left.value.split(/\n/g)}&right=${right.value.split(/\n/g)}`)
    }

    return (
        <div className="main-container">
            <img style={{width: "400px", marginTop: '100px'}} src={Logo} alt="logo" />
            <div className="demo-inputs">
                <span>Left side bipartite</span>
                <span>Right side bipartite</span>
                <textarea id="left-side-input" />
                <textarea id="right-side-input" />
            </div>
            <button className="button-submit" onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default Main;

