import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function PopupContent(data) {
    const imgAPI = "https://pokeres.bastionbot.org/images/pokemon/" + data.id + ".png";
    return (
        <Container>
            <Row>
                <Col xs={6} md={4} lg={3} >
                    <Image src={imgAPI} thumbnail/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{"Base Experience: " + data.base_experience}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{"Height: " + data.height}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{"Weight: " + data.weight}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{"Types: " + data.types.map(type => type.type.name)}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{"Abilities: " + data.abilities.map(ability => ability.ability.name)}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{"Stats: " + data.stats.map(stat => stat.stat.name + stat.base_stat)}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{"Moves: " + data.moves.map(move => move.move.name)}</Card.Subtitle>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
}

export default PopupContent;
