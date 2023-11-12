import React from 'react';
import NavBar from "../Components/NavBar";
import Jubayer from "../Components/Jubayer";
import Footer from "../Components/Footer";
import Lamia from "../Components/Lamia";

function LamiaPage(props) {
    return (
        <div>
            <NavBar/>
            <Lamia />
            <Footer/>
        </div>
    );
}

export default LamiaPage;