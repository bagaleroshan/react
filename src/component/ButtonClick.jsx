import React from 'react'

const ButtonClick = () => {
  return (
    <div>
      <button onClick={()=>{
        console.log("button is clicked.")
      }}>
click me
      </button>
    </div>
  )
}

export default ButtonClick
