import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from '../../Pages/Images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      className="mb-5 py-3"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href=""><img src={logo} alt="logo" className="logo-img" /></Navbar.Brand>
        <Navbar.Brand href="">CSE Basic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to='/' className='link-item px-2'>Home</Link>
          <Link to='/courses' className='link-item px-2'>Courses</Link>

            {/* <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <div>
                {
                    courses.map(course => <NavDropdown.Item>
                      <Link to={`/course/${course.id}`}>{course.name}</Link>
                      </NavDropdown.Item>)
                }
            </div>
              
            </NavDropdown> */}
            <Link to='/blog' className='link-item px-2'>Blog</Link>
            <Link to='/faq' className='link-item px-2'>FAQ</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
