import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Cookie from '../Cookie';

function Header(props) {
  
  function logout() {
    const csrftoken = Cookie('csrftoken');
    const request = new Request("/rest-auth/logout/", {
      method: "POST",
      headers: {"X-CSRFToken": csrftoken, "Content-Type": "application/json"},
    });

    fetch(request, {method: "POST"}).then(res => {
      if (res.status === 200) {
        sessionStorage.removeItem("key");
        window.location.replace("/");
      } else {
        res.json().then(data => alert(JSON.stringify(data)));
      }
    });
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" >
      <Navbar.Brand as={Link} to="/">Pokedex</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {!props.isLoggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          {!props.isLoggedIn && <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>}
          {props.isLoggedIn && <Nav.Link as={Link} to="/pokemon">My Pokemon</Nav.Link>}
          {props.isLoggedIn && <Nav.Link onClick={logout}>Logout</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
