import React from "react";

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import PopupContent from './PopupContent';

function pCard(data) {
    const imgAPI = "https://pokeres.bastionbot.org/images/pokemon/" + data.id + ".png";
    const card = (
        <Col xs={6} md={4} lg={3} style={{marginTop: "20px"}} >
            <Card bg="light" className="text-center">
                <Card.Img varient="top" src={imgAPI} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );

    return (
        <Popup trigger={card} position="right center" modal key={data.id} >
            {PopupContent(data)}
        </Popup>
    );
}

export default pCard;