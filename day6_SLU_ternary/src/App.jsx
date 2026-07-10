import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import { useState } from 'react'
import Usercard from './components/Usercard'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([]);
  return (
    <div>
     {
      toggle ?
        users.map((user)=>{
          return <Usercard key={user.email} setToggle={setToggle} user={user}/>
        })
       
      :
        <Register setToggle={setToggle} setUsers={setUsers}/>
      }
    </div>
  )
}

export default App
