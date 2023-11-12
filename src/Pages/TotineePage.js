import React from 'react';
import NavBar from "../Components/NavBar";
import Toufiq from "../Components/Toufiq";
import Footer from "../Components/Footer";
import Totinee from "../Components/Totinee";

function TotineePage(props) {
    return (
        <div>
            <NavBar/>
            <Totinee />
            <Footer/>
        </div>
    );
}

export default TotineePage;