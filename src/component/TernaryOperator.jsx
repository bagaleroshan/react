import React from 'react'

const TernaryOperator = () => {
    let age=77
  return (
    <div>
      {
        age<=18?(<div>he/she is underage</div>)
        :age>=19&&age<=60?(<div>he/she is adult.</div>)
        :age>60?(<div>he/she is old</div>)
        :null
      }
    </div>
  )
}

export default TernaryOperator
