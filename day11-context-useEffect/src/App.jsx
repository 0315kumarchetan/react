import React, { useContext, useEffect, useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import { MyStore } from './context/MyContext'
import axios from "axios";

const App = () => {

  /* let {count,setCount} = useContext(MyStore); */
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false)
  const [apiData, setApiData] = useState(null);
  console.log(apiData);

   useEffect(()=>{
    console.log("App rendering");
 },[toggle])

  let apiDt =async ()=>{
    let res = await axios.get("https://fakestoreapi.com/products");
/*     console.log(res);  */
    setApiData(res.data);
  }

  useEffect(()=>{
     apiDt();
     
  },[])
 
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1 onClick={()=>{setToggle(prev=>prev=!prev)}}>toggle : {toggle}</h1>
      <p onClick={()=>{setCount(count+1)}}>Increment</p>
     {/*  
      <Home /> */}
      {
        toggle?<About />: <Contact />
      }
     
    </div>
  )
}

export default App
