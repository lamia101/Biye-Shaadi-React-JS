import React from 'react';

function Registration(props) {
    return (
        <div className="container">
            <form className="form-horizontal" role="form">
                <h2>Registration</h2>
                <div className="form-group">
                    <label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="firstName" placeholder="First Name" className="form-control" autoFocus/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="lastName" placeholder="Last Name" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-sm-3 control-label">Email</label>
                    <div className="col-sm-9">
                        <input type="email" id="email" placeholder="Email" className="form-control" name="email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="col-sm-3 control-label">Password</label>
                    <div className="col-sm-9">
                        <input type="password" id="password" placeholder="Password" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword" className="col-sm-3 control-label">Confirm Password</label>
                    <div className="col-sm-9">
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
                    <div className="col-sm-9">
                        <input type="date" id="birthDate" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="col-sm-3 control-label">Phone number</label>
                    <div className="col-sm-9">
                        <input type="tel" id="phoneNumber" placeholder="Phone number" className="form-control" />
                        <span className="help-block">Your phone number won't be disclosed anywhere</span>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="height" className="col-sm-3 control-label">Height*</label>
                    <div className="col-sm-9">
                        <input type="number" id="height" placeholder="Please write your height in centimeters" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="weight" className="col-sm-3 control-label">Weight*</label>
                    <div className="col-sm-9">
                        <input type="number" id="weight" placeholder="Please write your weight in kilograms" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Gender</label>
                    <div className="col-sm-9">
                        <label className="radio-inline">
                            <input type="radio" id="femaleRadio" value="Female" name="gender" /> Female
                        </label>
                        <label className="radio-inline">
                            <input type="radio" id="maleRadio" value="Male" name="gender" /> Male
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-9 col-sm-offset-3">
                        <span className="help-block">*Required fields</span>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-secondary btn-lg">Register</button>
            </form>
        </div>
    );
}

export default Registration;
