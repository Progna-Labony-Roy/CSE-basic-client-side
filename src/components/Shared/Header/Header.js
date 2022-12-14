import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../Pages/Images/logo.png";
import "./Header.css";
import { FaUser } from "react-icons/fa";
import { Button, Image, Tooltip } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Navbar
      collapseOnSelect
      className="py-3"
      expand="lg"
      bg="dark"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="">
          <img src={logo} alt="logo" className="logo-img" />
        </Navbar.Brand>
        <p className="site-name">CSE Basic</p>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="link-item px-2">
              Home
            </Link>
            <Link to="/courses" className="link-item px-2">
              Courses
            </Link>
            <Link to="/blog" className="link-item px-2">
              Blog
            </Link>
            <Link to="/faq" className="link-item px-2">
              FAQ
            </Link>
            <Button
              variant="light"
              onClick={toggleTheme}
              className={`App ${theme}`}
            >
              Toggle Theme
            </Button>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <Button
                    className="mx-3 mt-2"
                    variant="light"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
                  <>
              {user?.photoURL &&
              
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
              
              }
            </>
                
                </>
              ) : (
                <>
                  <Link className="link-item px-2" to="/login">
                    Login
                  </Link>
                  <Link className="link-item px-2" to="/register">
                    Register
                  </Link>
                  <FaUser className="user-img"></FaUser>
                </>
              )}
            </>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
