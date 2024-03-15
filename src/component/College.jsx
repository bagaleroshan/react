import React from 'react'

const College = ({name,address,fee}) => {
  return (
    <div>
      <p>Name is{name}.</p>
      <p>Address is {address}.</p>
      <p>Fee is {fee}.</p>
    </div>
  )
}

export default College
