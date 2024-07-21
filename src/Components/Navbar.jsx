import React from 'react'
import '../Styles/navbar.css'

function Navbar() {
  
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