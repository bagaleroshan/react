import React from 'react'

const EffectOfData = () => {
 let name="roshan"
 let age=23
let isMarried=false
let tags=[<div>Hello</div>,<div>Hello2</div>,<div>Hello3</div>]
let info ={name:"roshan bagale",age:23}
let a=null//null is not shown in browser
let b= undefined//null is not shown in browser
 return (
    <div style={{background:"red"}} >
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMarried}</p>
      <p>{tags}</p>
      {/* <p>{info}</p> */}
<p>{info.name}</p>
<p>{info.age}</p>
{a}
{b}
    </div>
  )
}

export default EffectOfData
//boolean are not display in browser
//when array is placed in browser =>it place element one by one (note[] and,are not written in browser)
//we can not place object in browser (Error:Objects is not valid as react child.)