import React from 'react';
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <nav class="navbar navbar-expand-md">
            <a className="navbar-brand" href="main.html">Biye Shaadi</a>
            <buclassName className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span className="navbar-toggler-icon"></span>
            </buclassName>
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login"><a className="nav-link">Login</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register"><a className="nav-link">Register</a></Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;