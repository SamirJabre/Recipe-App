import React from 'react'
import './input.css'

function Input({type , placeHolder , name , onchange}) {
  return (
    <input id="signin-inputs" type={type} placeholder={placeHolder} name={name} onChange={onchange} required></input>
  )
}

export default Input