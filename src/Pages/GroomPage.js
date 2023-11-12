import React from 'react';
import NavBar from "../Components/NavBar";
import GroomList from "../Components/GroumLIst";
import Footer from "../Components/Footer";

function GroomPage(props) {
    return (
        <div>
            <NavBar/>
            <GroomList/>
            <Footer/>
        </div>
    );
}

export default GroomPage;