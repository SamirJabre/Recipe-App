import React, {useState} from 'react'
import './login.css'
import Navbar from '../../Components/Navbar/Navbar'
import Input from '../../base/Input/Input'

function Login() {

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")


  return (
    <>
    <Navbar/>
    <div className="log-in-form">
    <form>
                <label htmlFor="email">Email</label>
                <Input type={"email"} placeHolder={"Enter Your Email"} name={"email"} onchange={(e)=>{setFname(e.target.value); console.log(email)}}/>
                <label htmlFor="password">Password</label>
                <Input type={"password"} placeHolder={"Enter Your Password"} name={"password"} onchange={(e)=>{setLname(e.target.value); console.log(password)}}/>
                <button type="submit" id="submit">Log In</button>
            </form>
            </div>
    </>
  )
}

export default Login