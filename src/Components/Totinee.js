import React from 'react';

import '../Assets/Css/Bprofile.css';
import totine from "../Assets/Images/Totinee.JPG"

function Totinee(props) {
    return (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={totine} alt="Totinee" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>
                                Hasneen Tamanna Totinee
                            </h5>
                            <h6>
                                Project Manager
                            </h6>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>SOCIAL ACCOUNT</p>
                            <a href="#">Instagram</a><br />
                            <a href="#">Facebook</a><br />
                            <a href="#">Twitter</a>
                            <p>PROFESSIONAL ACCOUNT</p>
                            <a href="#">LinkedIn</a><br />
                            <a href="#">Resume</a><br />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>totinee2345</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Hasneen Tamanna Totinee</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Age</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>23</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Height</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>5'3"</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Home District</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Dhaka</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>jucse29.362@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>017xxxxxxxx</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Totinee;
