import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error,setError]=useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('')
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
  };

  return (
    <div className="form-container">
      <h2>SignUp</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="User name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Photo URL" name="photoURL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">terms and conditons</Link>
              </>
            }
          />
        </Form.Group>

        <p>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </p>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p className="text-danger">{error}</p>
      </Form>
    </div>
  );
};

export default Register;
