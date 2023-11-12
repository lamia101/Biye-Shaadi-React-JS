import React from 'react';
import NavBar from "../Components/NavBar";
import ProfileHeader from "../Components/ProfileHeader";
import Footer from "../Components/Footer";

function Profile(props) {
    return (
        <div>
            <NavBar/>
            <ProfileHeader/>
            <Footer/>
        </div>
    );
}

export default Profile;