import React from 'react';
import NavBar from "../Components/NavBar";
import RegiHeader from "../Components/RegiHeader";
import Registration from "../Components/Registration";
import Footer from "../Components/Footer";

function Regi(props) {
    return (
        <div>
            <NavBar/>
            <RegiHeader/>
            <Registration/>
            <Footer/>
        </div>
    );
}

export default Regi;