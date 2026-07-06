import React, { useState } from 'react'

const Counter = () => {
   
     console.log("counter is rendering.... ");
    let [count,setCount] = useState(0);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={()=>{
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
      }} >increment</button>
    </div>
  )
}

export default Counter
