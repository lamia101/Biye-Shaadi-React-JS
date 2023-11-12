import React, { Fragment } from 'react';
import succ1 from '../Assets/Images/richitapu.jpg';
import succ2 from '../Assets/Images/successstory.jpg';

function Success(props) {
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
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Your Message" rows="4" />
                        </div>
                        <input type="submit" className="btn btn-secondary btn-block" value="Send" name="submit" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Success;
