import React, { useEffect } from 'react'

const About = () => {
    
  
   let interval = setInterval(()=>{//this shows memory leak if use useEffect and dont do unmount properly
      console.log("hey i am in about ...")
    },1000)

    useEffect(()=>{
      console.log("About rendering")

      return ()=>{
        clearInterval(interval);
        console.log("het iam about to go from about page"); 
      };

    },[])
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About
