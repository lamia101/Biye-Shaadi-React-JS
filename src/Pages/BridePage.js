import React from 'react';
import NavBar from "../Components/NavBar";
import Bridelist from "../Components/BrideList";
import Footer from "../Components/Footer";

function BridePage(props) {
    return (
        <div>
            <NavBar/>
            <Bridelist/>
            <Footer/>
        </div>
    );
}

export default BridePage;