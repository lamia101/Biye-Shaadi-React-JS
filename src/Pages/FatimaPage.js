import React from 'react';
import NavBar from "../Components/NavBar";
import Lamia from "../Components/Lamia";
import Footer from "../Components/Footer";
import Fatima from "../Components/Fatima";

function FatimaPage(props) {
    return (
        <div>
            <NavBar/>
            <Fatima />
            <Footer/>
        </div>
    );
}

export default FatimaPage;