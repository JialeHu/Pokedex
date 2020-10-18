import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Cookie from '../Cookie';

function Signup() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const csrftoken = Cookie('csrftoken');

    function submit(event) {
        event.preventDefault();
        const request = new Request("/rest-auth/registration/", {
            method: "POST",
            headers: {"X-CSRFToken": csrftoken, "Content-Type": "application/json"},
            body: JSON.stringify({"username": email, "email": email, "password1": password, "password2": password})
        });

        fetch(request, {
            method: 'POST',
            mode: 'same-origin'  // Do not send CSRF token to another domain.
        }).then(res => res.json()).then(data => {
            if (data.key) {
                sessionStorage.setItem("key", data.key);
                window.location.replace("/");
            } else {
                alert(JSON.stringify(data));
            }
        });
    }

    return (
        <Container style={{marginTop: "100px"}}>
            <Row className="justify-content-center component-padding">
                <Col md="auto" xs="auto">
                    <Form onSubmit={submit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form-control" type="email" name="email" placeholder="Enter email" value={email} onChange={val => setEmail(val.target.value)} required autoFocus/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={val => setPassword(val.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={submit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;