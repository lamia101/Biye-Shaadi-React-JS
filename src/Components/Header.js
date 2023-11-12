import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className="page-header header container-fluid">
            <div className="overlay">
                <div className="description">
                    <h1>Biye Shaadi</h1>
                    <p>Biye Shaadi is a project developed by Suraiya Mahmuda, Lamia Binta Latif & Fatima Binta Aziz.
                        which helps you to find your life partner and spread love.
                        Click on the button and find your soulmate.
                    </p>
                    <Link to="/profile" className="btn btn-outline-secondary btn-lg">Profiles</Link>

                </div>
            </div>

        </header>
    );
}

export default Header;