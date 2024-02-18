import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";

function FeedBacks(props) {
    const [data,setData] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/findComments/").then((res)=>{
            const comments = res.data;
            setData(comments);
        }).catch((err)=>{
            console.log(err);
        })
    });

    return (
       <Container className="container _mt-5 features">
           <Row className="mx-0">

               {data && data.map((comment, index) => (
                   <Col className="mt-5" key={index} md={4} lg={3} sm={12}>
                       <h4 className="feature-title">{comment.name}</h4>
                       <h4 className="feature-title text-lowercase">{comment.email}</h4>
                       <p>{comment.message}</p>
                   </Col>
               ))}


           </Row>
       </Container>
    );
}

export default FeedBacks;
