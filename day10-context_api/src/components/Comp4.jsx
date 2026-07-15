import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Comp4 = () => {
   let data=  useContext(MyStore);
  return (
    <div>
      <h1>Inside comp4- {data}</h1>
    </div>
  )
}

export default Comp4
