import React from 'react';
import abrar from "../Assets/Images/Abrar.JPG"
import '../Assets/Css/Gprofile.css';

function Candidate({data}) {
    return (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={`http://localhost:8000${data.image}`} alt={data.name} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>{data.name}</h5>
                            <h6>{data.profession}</h6>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>SOCIAL ACCOUNT</p>
                            <a href={data.facebook_link} target="_blank" rel="noreferrer">Facebook</a><br/>
                            <a href={data.instagram_link} target="_blank" rel="noreferrer">Instagram</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Age</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.age}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Height</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.height}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Permanent Address</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.permanent_address}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Current Address</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.current_address}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.phone}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.profession}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Date of Birth</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.dob}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Marital Status</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.marital_status}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Account for</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{data.account_for}</p>
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

export default Candidate;
