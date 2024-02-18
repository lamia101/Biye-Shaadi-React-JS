import React from 'react';
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Success from "../Components/Success";
import Footer from "../Components/Footer";

function Home(props) {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Success/>
            <Footer/>
        </div>
    );
}

export default Home;