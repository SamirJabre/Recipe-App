import React from 'react'
import '../Styles/navbar.css'
import gsap from 'gsap'

function Navbar() {
  gsap.from('.container' , {y:'-100%', ease: 'bounce'})

  return (
    <nav>
      <div></div>
        <div className="container">
            <p>Browse</p>
            <p>Create</p>
        </div>
        <div className="sign-in-log-in-btns">
        <button>Log In</button>
        <button>Sign Up</button>
        </div>
    </nav>
  )
}


export default Navbar