import React from 'react';
import NavBar from "../Components/NavBar";
import Candidate from "../Components/Candidate";
import Footer from "../Components/Footer";
import {useLocation} from "react-router-dom";

function CandidatePage(props) {

    const location = useLocation();
    const data = location.state;
    console.log(data);

    return (
        <div>
            <NavBar/>
            <Candidate data={data}/>
            <Footer/>
        </div>
    );
}

export default CandidatePage;