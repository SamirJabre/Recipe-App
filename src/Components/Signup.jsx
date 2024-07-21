import React, { useState } from 'react';
import '../Styles/signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

    const handleInput = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost/Recipe-Backend/API/signup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log('ERROR YA EBN L MARA', err);
        }
    };

    return (
        <div className="sign-up-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder="Enter Your First Name"
                    name="firstName"
                    onChange={handleInput}
                    id="signin-inputs"
                    required
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    name="lastName"
                    onChange={handleInput}
                    id="signin-inputs"
                    required
                />
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Enter Your Username"
                    name="username"
                    onChange={handleInput}
                    id="signin-inputs"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleInput}
                    id="signin-inputs"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleInput}
                    id="signin-inputs"
                    required
                />
                <button type="submit" id="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
