import React from 'react'
import './navbar.css'
import gsap from 'gsap'
import Button from '../../base/Button/Button'
import {useNavigate} from 'react-router-dom'

function Navbar() {
  gsap.from('.container' , {y:'-100%', ease: 'bounce'})


  const clicked =() => {
    console.log("Clicked")
  }
  let navigate = useNavigate();
  


  return (
    
    <nav>
      <div></div>
        <div className="container">
            <p onClick={()=>navigate('/home')}>Browse</p>
            <p onClick={()=>navigate('/create')}>Create</p>
        </div>
        <div className="sign-in-log-in-btns">
        <Button name={"Log In"}/>
        <Button name={"Sign In"} clickFunction={()=>navigate('/signup')}/>
        </div>
    </nav>
  )
}


export default Navbar