import React from 'react'
import Website from './Website'
import subway from './trainpic.jpg';
import "./Website.css";

function Aboutus() {
  return (
     
    <div>
       
        <Website/> 
        <h1 className="Text">What is a Subway and How it works?</h1>
        <h2  className="Text"> Subway, also called underground, tube, or métro, underground railway system used to transport large numbers of passengers within urban and suburban areas. Subways are usually built under city streets for ease of construction, but they may take shortcuts and sometimes must pass under rivers.</h2>
       
        <img  src={subway} className='aboutus'    />
       
        </div>
  )
}

export default Aboutus