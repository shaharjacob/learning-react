import React, { useState, useEffect } from 'react';
import './Main.css'


const TalkToBackend = () => {

    const [variableToRender, setVariableToRender] = useState("")

    useEffect(() => {
        fetch('/api?param1=Hello&param2=World!').then(response => {
          if(response.ok){
            return response.json()
          }
        }).then(data => {
            setVariableToRender(data["my_string"])
        })
      },[])

    return (
        variableToRender
    );
}

export default TalkToBackend;

