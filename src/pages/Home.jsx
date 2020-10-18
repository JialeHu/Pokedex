import React from "react";
import {Link} from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Home(props) {

    return (
        <Container style={{paddingTop: "5%"}}>
            <Jumbotron>
                <h1>Landing Page of Pokedex</h1>
                <p>
                    This is a landing page for advertising highlights of this app.
                </p>
                <p>
                    {props.isLoggedIn && <Button as={Link} to="/pokemon" variant="primary" size="lg">Go to My Pokemon</Button>}
                    {!props.isLoggedIn && <Button as={Link} to="/login" variant="primary" size="lg" style={{marginRight: "10px"}}>Login</Button>}
                    {!props.isLoggedIn && <Button as={Link} to="/signup" variant="primary" size="lg">Signup</Button>}
                </p>
            </Jumbotron>
        </Container>
    );
}

export default Home;