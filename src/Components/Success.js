import React, { Fragment, useState } from 'react';
import succ1 from '../Assets/Images/richitapu.jpg';
import succ2 from '../Assets/Images/successstory.jpg';
import axios from "axios";

function Success(props) {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const inputChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const saveMessage = (e) => {
        e.preventDefault();

        // Remove any additional properties from data
        const { message, name, email } = data;
        const sanitizedData = { message, name, email };

        if (sanitizedData.name.trim() !== "" && sanitizedData.email.trim() !== "" && sanitizedData.message.trim() !== "") {
            axios.post("http://127.0.0.1:8000/api/getInTouch/", sanitizedData)
                .then((res) => {
                    const responseData = res.data;
                    window.alert("Your feedback is recorded");
                    console.log(responseData);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            window.alert("Please fill out all the fields");
        }
    }

    return (
        <Fragment>
            <div className="container features">
                <h1 className="heading">Success Stories</h1>
                <br />
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h3 className="feature-title">Richita & Shanto</h3>
                        <img src={succ1} className="img-fluid" alt="Richita & Shanto" />
                        <p>
                            Richita & Shanto were the first couples who were engaged in Biye Shaadi (pun intended), by our platform. They both are students of Computer Science and Engineering at Jahangirnagar University, now happily married for two years and are expecting their first child.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h3 className="feature-title">Fardin & Shahanaj</h3>
                        <img src={succ2} className="img-fluid" alt="Masum & Shahanaj" />
                        <p>
                            "Talking to him was like talking to my soul mate, thank you Biye Shaadi for introducing us and making him part
                            of my life." - Shahanaj
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h3 className="feature-title">Get in Touch!</h3>
                        <div className="form-group">
                            <input type="text" onChange={inputChange} className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" onChange={inputChange} placeholder="Email Address" name="email" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" onChange={inputChange} placeholder="Your Message" rows="4" value={data.message} />
                        </div>
                        <input type="submit" onClick={saveMessage} className="btn btn-secondary btn-block" value="Send" name="submit" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Success;
