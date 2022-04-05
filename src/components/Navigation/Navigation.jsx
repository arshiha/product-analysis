import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <Navbar
        id="header-style"
        className="py-3 style-color"
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              className="navbar-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxy_hyikbgONqUSxmtyfeAoHH9_ZZzOXdTzG5yrl-OfP5PUyMdn9875aKdKHC9A0_nBY&usqp=CAU"
              alt=""
            />
            <i className="fs-3 fw-bold ">
              The Camera<span className="word-color"> Shop</span>
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto navbar-style">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
