import React, { useState } from 'react'

const App = () => {
  console.log("App is rendering");
  let [count, setCount] = useState(0);
  let [user, setUser] = useState({"name":"chetan"})

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>name : {user.name}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increment</button>
      <button onClick={()=>{
        setUser({"name":"Kumar"})
      }}> changeName</button>
    </div>
  )
}

export default App
