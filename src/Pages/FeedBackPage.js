import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Bridelist from "../Components/BrideList";
import Footer from "../Components/Footer";
import FeedBacks from "../Components/FeedBacks";

function FeedBackPage(props) {
    return (
       <Fragment>
           <NavBar/>
           <FeedBacks/>
           <Footer/>
       </Fragment>
    );
}

export default FeedBackPage;

