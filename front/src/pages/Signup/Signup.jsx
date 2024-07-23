import React, { useState } from 'react';
import './signup.css';
import Navbar from '../../Components/Navbar/Navbar';
import Input from '../../base/Input/Input';

function Signup() {
    const [fname,setFname] =useState("")
    const [lname,setLname] =useState("")
    const [username,setUsername] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

    // const handleInput = (event) => {
    //     setFname(event.target.value)
    //     console.log(fname);
    // };


    const loginHandler = async () => {
        const response = await fetch("URL", {
          body: JSON.stringify({
            email: email,
            setPassword: password,
          }),
        });
    
        const data = await response.json();
    
        if (data.successful) {
          // navigate to home
        }
      };





    const handleSubmit =  () => {
        console.log("SUBMITTED")
        // event.preventDefault();
        // try {
        //     const response = await fetch('http://localhost/Recipe-Backend/API/signup.php', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
        //     });
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     const data = await response.json();
        //     console.log(data);
        // } catch (err) {
        //     console.log('ERROR YA EBN L MARA', err);
        // }
    };

    return (
        <>
        <Navbar/>
        <div className="sign-up-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <Input type={"text"} placeHolder={"Enter Your First Name"} name={"firstName"} onchange={(e)=>{setFname(e.target.value); console.log(fname)}}/>
                <label htmlFor="lastName">Last Name</label>
                <Input type={"text"} placeHolder={"Enter Your Last Name"} name={"lastName"} onchange={(e)=>{setLname(e.target.value); console.log(lname)}}/>
                <label htmlFor="username">Username</label>
                <Input type={"text"} placeHolder={"Enter Your Username"} name={"username"} onchange={(e)=>{setUsername(e.target.value); console.log(username)}}/>
                <label htmlFor="email">Email</label>
                <Input type={"email"} placeHolder={"Enter Your Email"} name={"email"} onchange={(e)=>{setEmail(e.target.value); console.log(email)}}/>
                <label htmlFor="password">Password</label>
                <Input type={"password"} placeHolder={"Enter Password"} name={"password"} onchange={(e)=>{setPassword(e.target.value); console.log(password)}}/>
                <button type="submit" id="submit">Sign Up</button>
            </form>
        </div>
        </>
    );
}

export default Signup;
