import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Assets/Css/Bprofile.css';

// Define the image paths
import img9 from '../Assets/Images/Totinee.JPG';
import img10 from '../Assets/Images/Yumna.JPG';
import img11 from '../Assets/Images/Subarna.JPG';
import img12 from '../Assets/Images/Ahona.JPG';
import img13 from '../Assets/Images/suraiya.jpg';
import img14 from '../Assets/Images/Lamiaaa.jpg';
import img15 from '../Assets/Images/Fatima.JPG';
import img16 from '../Assets/Images/Shanjida.JPG';
import img1 from "../Assets/Images/Abrar.JPG";

function Totinee(props) {
    return (

    <section id="bride1" className="section-b1">
        <h2>Find your soul mate here (BRIDE)</h2>
        <div className="pro-container">
            {/*<Link to="/totinee" className="pro">*/}
            {/*    <Link to="/BrideProfile.html"><img src={img9} alt="Totinee" /> </Link>*/}
            {/*    <h5> <Link to="/BrideProfile.html">Hasneen Tamanna Totinee</Link></h5>*/}
            {/*    <p>"I just find myself happy with the simple things. Appreciating the blessings God gave me."</p>*/}
            {/*</Link>*/}

            {/*<Link to="/totinee" className="pro">*/}
            {/*</Link>*/}
                <Link to="/totinee" className="pro">
                    <a href="GroomProfile.html"><img src={img9} alt="totinee" /> </a>
                    <h5>Hasneen Tamanna Totinee</h5>
                    <p>"Some days are just bad days, that's all. You have to experience sadness to know happiness."</p>
                </Link>

            <Link to="/yumna" className="pro">
                <a href="GroomProfile.html"><img src={img10} alt="yumna" /> </a>
                <h5>Yumna Tasneem</h5>
                <p>"I just find myself happy with the simple things. Appreciating the blessings God gave me."</p>
            </Link>




            <Link to="/subarna" className="pro">
                <a href="GroomProfile.html"><img src={img11} alt="subarna" /> </a>
                <h5> Subarna Saha</h5>
                <p>"I restore myself when I'm alone."</p>
            </Link>

            <Link to="/ahona" className="pro">
                <a href="GroomProfile.html"><img src={img12} alt="subarna" /> </a>
                <h5> Irtifa Haider Ahona</h5>
                <p>"I'm having fun. I'm being myself. I'm doing what I love. That's all that matters."</p>
            </Link>


            <Link to="/suraiya" className="pro">
                <a href="GroomProfile.html"><img src={img13} alt="subarna" /> </a>
                <h5> Suraiya Mahmuda</h5>
                <p>"I'm a blessing to whoever gets to really know me."</p>
            </Link>

            <Link to="/lamia" className="pro">
                <a href="GroomProfile.html"><img src={img14} alt="lamia" /> </a>
                <h5> Lamia Binta Latif</h5>
                <p>"Being real is what keeps me humble."</p>
            </Link>

            <Link to="/fatima" className="pro">
                <a href="GroomProfile.html"><img src={img15} alt="fatima" /> </a>
                <h5> Fatima Binta Aziz</h5>
                <p>"The way I see it if you want a rainbow, you have to put up with the rain."</p>
            </Link>

            <Link to="/Shanjida" className="pro">
                <a href="GroomProfile.html"><img src={img16} alt="fatima" /> </a>
                <h5> Shanjida Alam</h5>
                <p>"I'm not trying to be different. To me, I'm just being myself."</p>
            </Link>



        </div>
    </section>
);
}

export default Totinee;
