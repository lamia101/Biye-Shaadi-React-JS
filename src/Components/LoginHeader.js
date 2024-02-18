import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function LoginHeader(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login/', { email, password });
            console.log(response.data);
            localStorage.setItem("isLogin","true");
            navigate("/candidate", { state: response.data });
        } catch (error) {
            console.log('Login failed:', error.message);
        }
    };

    return (
        <header className="page-header header container-fluid">
            <div className="overlay"></div>
            <div className="login">
                <form className="container1" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit" className="btn btn-outline-light">Login</button>
                </form>
            </div>
        </header>
    );
}

export default LoginHeader;
