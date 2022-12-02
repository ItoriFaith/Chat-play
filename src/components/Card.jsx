import React from 'react'
import"../styles/mine.css"
import image from "../assets/fefe.png"

function Card(props) {
  return (
    <div className='container'>

    <div className='profile-image'>
        <img  id= "profile-pic"src={props.chat.prof_img} alt="" />
    </div>

     <div className='content'>
<div className="top-content">
    <h5>{props.chat.chat_name}</h5>
    <h6>{props.chat.chat_time}</h6>
     </div>
<div className="bottom-content">
    <p>{props.chat.chat_content}</p>
    <h6 id= "chat-number">{props.chat.chat_number}</h6>
     </div>

     </div>
    </div>




  )
}

export default Card