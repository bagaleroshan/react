import React, { useState } from 'react'

const LearnUseState = () => {
    // old method let age=23
let [age,setAge]=useState(23)
let [name,setName]=useState("roshan")
  return (
    <div>
{age}
{name}
<br></br>

      <button onClick={()=>{
        setAge(25)
        setName("roshan bagale")
      }}>click me</button>
    </div>
  )
}

export default LearnUseState
