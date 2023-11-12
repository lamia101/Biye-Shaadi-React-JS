import React from 'react';

function Footer(props) {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h6 className="text-uppercase font-weight-bold">Additional Information</h6>
                        <p>Biye Shaadi is a project of Web Design and Programming Laboratory-I course
                            <br />Course code: CSE-312
                            <br />Supervised by Anup Majumder
                            <br />Assistant Professor
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-13">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <p>Jahangirnagar University, Savar, Dhaka.
                            <br />biyeshaadi@gmail.com
                            <br />+880 *********
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center">Developed by Suraiya Mahmuda, Lamia Binta Latif & Fatima Binta Aziz</div>
        </footer>
    );
}

export default Footer;
