import React from 'react';
import NavBar from "../Components/NavBar";
import LoginHeader from "../Components/LoginHeader";
import Footer from "../Components/Footer";

function LoginPage(props) {
    return (
        <div>
            <NavBar/>
            <LoginHeader/>
            <Footer/>
        </div>
    );
}

export default LoginPage;