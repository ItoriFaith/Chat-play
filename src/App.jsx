import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/card'
import Chats from './Chats'
function App() {
  
const chatComponent = Chats.map((chat)=>{
  return <Card 
 {...chat}
  />
})

  return (
    <div className="App">
      <Navbar/>

     {chatComponent}
    </div>
  )
}

export default App
