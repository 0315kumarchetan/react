import React, { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Comp4 from './components/Comp4'
import NestedComp from './components/NestedComp'

const TestComponent = () => {
    const [data, setdata] = useState("this is thedatra")
  return (
    <div>
      <Comp1/>
    </div>
  )
}

export default TestComponent
