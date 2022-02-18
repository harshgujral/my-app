import React from "react";
import { Link } from "react-router-dom";
import './header.module.css';
import { Container, Nav, Navbar  } from "react-bootstrap";

export default function Header(){
    return(
        <>
     <Navbar bg="dark" expand="lg">
           <Container>
<Navbar.Brand href = "/" className="text-light "> To-Do APP</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
    <Navbar.Collapse id="basic-navbar-nav">

  <Nav className="ms-auto name">
      <Link to="/" id="harsh" className="text-light mx-3 text-decoration-none">HOME</Link>
      <Link to="/view/about/About" className="text-light mx-3 text-decoration-none">ABOUT</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
     </Navbar>







        </>
    )
}