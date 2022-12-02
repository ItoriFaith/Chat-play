import React from 'react'
import logo from "../assets/icon.png"
import contact from "../assets/contact.png"
import github from "../assets/github.png"

import "../styles/mine.css"
function Navbar() {
  return (
    <div className='nav-bar'>
       <div className='nav-left'> 
        <img id= "logo" src={logo} alt="l" />
        <h1>Chat With Fefe</h1> 
        </div>
        <div className='nav-right'>
        <img  id= "images"src={contact} alt="l" />
        <img id= "images"src={github} alt="l" />
        </div>

    </div>
    
  ) 
}

export default Navbar