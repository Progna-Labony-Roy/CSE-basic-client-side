import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from '../../Pages/Images/logo.png';
import './Header.css';
import { FaUser } from "react-icons/fa";
import { Button, Image } from "react-bootstrap";

const Header = () => {
  const { user,logOut }=useContext(AuthContext);

  const handleLogOut =() =>{
    logOut()
    .then(() =>{})
    .catch( (error) => console.error(error))
  }
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
            <Link to='/blog' className='link-item px-2'>Blog</Link>
            <Link to='/faq' className='link-item px-2'>FAQ</Link>
          </Nav>
          <Nav>
          <Link>
            {
              user?.uid ?
              <>
              <Button variant="light" onClick={handleLogOut}>Log out</Button>
              <span>{user?.displayName}</span>
              </>
              :
              <>
              <Link className="link-item px-2" to='/login'>Login</Link>
              <Link className="link-item px-2" to='/register'>Register</Link>
              </>
            }
            </Link>
            <Nav.Link eventKey={2} href=''>
              {
                user?.photoURL ?
                <Image className="user-img" roundedCircle
                src={user.photoURL}></Image>
                :<FaUser></FaUser>
              }

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
