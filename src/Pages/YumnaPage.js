import React from 'react';
import NavBar from "../Components/NavBar";
import Totinee from "../Components/Totinee";
import Footer from "../Components/Footer";
import Yumna from "../Components/Yumna";

function YumnaPage(props) {
    return (
        <div>
            <NavBar/>
            <Yumna />
            <Footer/>
        </div>
    );
}

export default YumnaPage;