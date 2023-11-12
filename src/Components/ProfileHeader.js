import React from 'react';
import {Link} from "react-router-dom";

function ProfileHeader(props) {
    return (
        <header className="page-header header container-fluid">
            <div className="overlay"></div>
            <div className="description">
                <h1>Profiles</h1>
                <p>I'm looking for a:</p>
                <Link className="btn btn-outline-secondary btn-lg" to="/groom">Groom</Link>
                <Link className="btn btn-outline-secondary btn-lg" to="/bride">Bride</Link>
            </div>
        </header>
    );
}

export default ProfileHeader;
