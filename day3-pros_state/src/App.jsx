import React, { useState } from 'react'
import Contact from './Contact'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
const App = () => {

  let [count,setCount] = useState(0);
  let [resetCount,setResetCount]= useState(0);

  return (
    <div>
      <h1>Count :{count}</h1>
      <h1>Reset Count :{resetCount}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>increment</button>

      <button onClick={()=>{
        setCount(0);
        setResetCount(resetCount+1);
      }}>reset</button>
    </div>
  )
}

export default App
