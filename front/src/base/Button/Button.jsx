import React from 'react'
import './button.css'


function 
Button({name , clickFunction}) {
  return (
    <button id='base-btn' onClick={clickFunction}>{name}</button>
  )
}


export default Button