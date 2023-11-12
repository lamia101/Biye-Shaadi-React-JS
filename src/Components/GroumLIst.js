import React from 'react';
import '../Assets/Css/list.css'
import img1 from '../Assets/Images/Abrar.JPG';
import img2 from '../Assets/Images/Adnan.JPG';
import img3 from '../Assets/Images/Jakey.JPG';
import img4 from '../Assets/Images/Jubaer.JPG';
import img5 from '../Assets/Images/Hasan.JPG';
import img6 from '../Assets/Images/Tamjid.JPG';
import img7 from '../Assets/Images/Taufiq.JPG';
import img8 from '../Assets/Images/Rubayed.JPG';
import {Link} from "react-router-dom";

function GroomList(props) {
    return (
        <div>
            <section id="bride" className="section-b1">
            </section>
            <section id="bride1" className="section-b1">
                <h2>Find your soul mate here (GROOM)</h2>
                <div className="pro-container">
                    <Link to="/abrar" className="pro">
                        <a href="GroomProfile.html"><img src={img1} alt="Abrar" /> </a>
                        <h5>Abrar Hamim</h5>
                        <p>"Some days are just bad days, that's all. You have to experience sadness to know happiness."</p>
                    </Link>

                    <Link to="/adnan" className="pro">
                        <a href="Groomprofile1.html"><img src={img2} alt="Adnan" /> </a>
                        <h5> <a href="Groomprofile1.html">S.I.M Adnan</a></h5>
                        <p>"I am who I am, and I'm proud of myself."</p>
                    </Link>

                    <Link to="/jaky" className="pro">

                        <a href="Groomprofile2.html"><img src={img3} alt="Jakey" /> </a>
                        <h5> <a href="Groomprofile2.html">Ali Jakey Shahriar</a></h5>
                        <p>"I look in the mirror and see a few scars, but I like myself."</p>
                    </Link>

                    <Link to="/jubayer" className="pro">

                        <a href="Groomprofile3.html"><img src={img4} alt="Jubaer" /> </a>
                        <h5> <a href="Groomprofile3.html">Jubaer Ahmed Khan</a></h5>
                        <p>"Every master was once a disaster."</p>
                    </Link>

                    <Link to="/hassan" className="pro">
                        <a href="Groomprofile4.html"><img src={img5} alt="Hasan" /> </a>
                        <h5> <a href="GroomProfile4.html">Hasan Al Mamun</a></h5>
                        <p>"I'm just myself. That's the best way to put it."</p>

                    </Link>

                    <Link to="/toufiq" className="pro">
                        <a href="Groomprofile5.html"><img src={img7} alt="Taufiq" /> </a>
                        <h5> <a href="GroomProfile5.html">Taufiq Islam</a></h5>
                        <p>"Life is what you make out of it."</p>
                    </Link>

                    <Link to="/tamzid" className="pro">
                        <a href="GroomProfile6.html"><img src={img6} alt="Tamjid" /> </a>
                        <h5> <a href="Groomprofile6.html">Tamjid Islam</a></h5>
                        <p>"Everything has BEAUTY, but not everyone sees it."</p>

                    </Link>

                    <Link to="/Rubayed" className="pro">
                        <a href="Groomprofile7.html"><img src={img8} alt="Rubayed" /> </a>
                        <h5> <a href="Groomprofile7.html">Rubayed Islam</a></h5>
                        <p>"Opportunities don’t happen, you create them."</p>
                    </Link>

                </div>
            </section>
        </div>
    );
}

export default GroomList;
