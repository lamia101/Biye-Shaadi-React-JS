import React, {useEffect, useState} from 'react';
import '../Assets/Css/list.css'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function GroomList(props) {
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/all/").then((res) => {
            setData(res.data);
        });
    }, []);

    const changePage = (info) => {
        navigate("/candidate", { state: info });
    }

    return (
        <div>
            <section id="bride" className="section-b1">
            </section>
            <section id="bride1" className="section-b1">
                <h2>Find your soul mate here (GROOM)</h2>
                <div className="pro-container">
                    {data && data.map((info, idx) => (
                            info.gender === "Male" && (
                                <div className="pro" onClick={() => changePage(info)} key={info.id}>
                                    <img src={`http://localhost:8000${info.image}`} alt={info.name} />
                                    <h5>{info.name}</h5>
                                </div>
                            ))
                    )}
                </div>
            </section>
        </div>
    );
}

export default GroomList;
