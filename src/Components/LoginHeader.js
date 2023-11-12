import React from 'react';

function LoginHeader(props) {
    return (
        <header className="page-header header container-fluid">
            <div className="overlay"></div>
            <div className="login">
                <form className="container1">
                    <h1>Login</h1>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <br />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <br />

                    <button type="submit" className="btn btn-outline-light">Login</button>
                </form>
            </div>
        </header>
    );
}

export default LoginHeader;
