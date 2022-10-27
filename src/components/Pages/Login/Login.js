import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../Context/AuthProvider";
import { useState } from "react";

const Login = () => { 
  const { signIn} =useContext(AuthContext);
  const [error,setError]=useState('');
  const location=useLocation();
  const navigate=useNavigate();

  const from=location.state?.from?.pathname || '/'

  const handleSubmit =(event) =>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
   

    signIn(email,password)
    .then(result =>{
      const user=result.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from ,{replace:true})
    })
    .catch(error=>{
      console.error(error);
     setError(error.message)
    })
  }
  return (
    <div className="form-container">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
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
          <Button variant="primary" type="submit">Login</Button>
        <p className="mt-">
        New to ema-john? <Link to="/register">Create a new account</Link>
      </p>
      <p className="text-danger">{error}</p>
          
         
         
          
         
        </Form>
      </div>
  );
};

export default Login;
