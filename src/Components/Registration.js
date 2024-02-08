import React, { useState } from 'react';
import axios from "axios";

function Registration(props) {
    const [click, setClick] = useState(false);
    const [response, setResponse] = useState(false);
    const [valid, setValid] = useState(false);
    const [validResponse, setValidResponse] = useState(false);
    const [alreadyExist, setAlreadyExist] = useState(false);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: '',
        age: '',
        height: '',
        permanent_address: '',
        current_address: '',
        email: '',
        phone: '',
        password: '',
        profession: '',
        facebook_link: '',
        instagram_link: '',
        image: null,
        gender: '',
        dob: '',
        marital_status: '',
        account_for: ''
    });

    const dataChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;

        setData(prevData => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const validateForm = () => {
        const errors = {};
        Object.keys(data).forEach(key => {
            if (!data[key]) {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitToBackend = (e) => {
        e.preventDefault();
        setResponse(false);
        setClick(true);
        if (validateForm()) {
            console.log(data);
            setValid(true);
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            axios.post('http://localhost:8000/api/create/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res.data);
                    setResponse(true);
                    setAlreadyExist(false);
                    setValidResponse(true);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 400) {
                        setAlreadyExist(true);
                        setResponse(true);
                        setValidResponse(false);
                    } else {
                        console.error('Error:', error);
                        setResponse(true);
                        setValidResponse(false);
                    }
                });
        } else {
            console.log(errors);
            setValid(false);
            setResponse(false);
        }
    };

    return (
        <div className="container">
            <form className="form-horizontal" role="form">
                <h2>Registration</h2>
                <div className="form-group">
                    <label htmlFor="name" className="col-sm-3 control-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text"  onChange={dataChange} id="name" name="name" placeholder="Name" className="form-control" autoFocus/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="col-sm-3 control-label">Age</label>
                    <div className="col-sm-9">
                        <input type="text" name="age" onChange={dataChange} id="age" placeholder="Age" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="height" className="col-sm-3 control-label">Height</label>
                    <div className="col-sm-9">
                        <input type="text" name="height" onChange={dataChange} id="height" placeholder="Height" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="permanent_address" className="col-sm-3 control-label">Permanent Address</label>
                    <div className="col-sm-9">
                        <input type="text" name="permanent_address" onChange={dataChange} id="permanent_address" placeholder="Permanent Address" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="cAddress" className="col-sm-3 control-label">Current Address</label>
                    <div className="col-sm-9">
                        <input type="text" name="current_address" onChange={dataChange} id="cAddress" placeholder="Current Address" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-sm-3 control-label">Email</label>
                    <div className="col-sm-9">
                        <input type="email" id="email" onChange={dataChange} placeholder="Email" className="form-control" name="email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="col-sm-3 control-label">Phone</label>
                    <div className="col-sm-9">
                        <input type="tel" id="phone" onChange={dataChange} placeholder="Phone" className="form-control" name="phone" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="col-sm-3 control-label">Password</label>
                    <div className="col-sm-9">
                        <input type="password" name="password" onChange={dataChange} id="password" placeholder="Password" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="profession" className="col-sm-3 control-label">Profession</label>
                    <div className="col-sm-9">
                        <input type="text" name="profession" onChange={dataChange} id="profession" placeholder="Profession" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="fLink" className="col-sm-3 control-label">Facebook Link</label>
                    <div className="col-sm-9">
                        <input type="text" name="facebook_link" onChange={dataChange} id="fLink" placeholder="Facebook Link" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="iLink" className="col-sm-3 control-label">Instagram Link</label>
                    <div className="col-sm-9">
                        <input type="text" name="instagram_link" onChange={dataChange} id="iLink" placeholder="Instagram Link" required className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="image" className="col-sm-3 control-label">Upload an image</label>
                    <div className="col-sm-9">
                        <input type="file" name="image" onChange={dataChange} id="image" placeholder="Upload an image" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Gender</label>
                    <div className="col-sm-9">
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onClick={dataChange} id="femaleRadio" value="Female" name="gender" /> Female
                        </label>
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onChange={dataChange} id="maleRadio" value="Male" name="gender" /> Male
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth</label>
                    <div className="col-sm-9">
                        <input type="date" name="dob" onChange={dataChange} id="birthDate" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Marital Status</label>
                    <div className="col-sm-9">
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onClick={dataChange} id="unMarried" value="Unmarried" name="marital_status" /> Unmarried
                        </label>
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onChange={dataChange} id="married" value="Married" name="marital_status" /> Married
                        </label>
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onChange={dataChange} id="divorced" value="Divorced" name="marital_status" /> Divorced
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Account For</label>
                    <div className="col-sm-9">
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onClick={dataChange} id="self" value="self" name="account_for" /> Self
                        </label>
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onChange={dataChange} id="child" value="child" name="account_for" /> Child
                        </label>
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onChange={dataChange} id="parents" value="parents" name="account_for" /> Parents
                        </label>
                        <label className="radio-inline">
                            <input className="mx-3" type="radio" onChange={dataChange} id="others" value="others" name="account_for" /> Others
                        </label>
                    </div>
                </div>

                {
                    click && !valid && (
                        <div>Please fills all the fields</div>
                    )
                }
                {
                    click && !response && valid && (
                        <div>Loading...</div>
                    )
                }
                {
                    response && validResponse && (
                        <div>Registration successful</div>
                    )
                }
                {
                    alreadyExist && !validResponse && (
                        <div>User already exist please change somethings</div>
                    )
                }
                <button type="submit" className="btn btn-outline-secondary btn-lg" onClick={submitToBackend}>Register</button>
            </form>
        </div>
    );
}

export default Registration;
