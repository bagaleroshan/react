/* import React from 'react'

const Info = (props) => {
    //props={name:"roshan",age:23,address:"ktm"}
    console.log(props)
  return (
    <div>
      <p>Name is {props.name}</p>
      <p>Age is {props.age}</p>
      <p>Address is {props.address}</p>
    </div>
  )
}

export default Info
 */

import React from 'react'

const Info = ({name,age,address}) => {
  return (
    <div>
      <p className='success'>name is {name}</p>
      <p>age is {age}</p>
      <p>address is {address}</p>
    </div>
  )
}

export default Info
