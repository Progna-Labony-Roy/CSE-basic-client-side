import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => { 
  const { signIn} =useContext(AuthContext);

  const handleSubmit =(event) =>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email)

    signIn(email,password)
    .then(result =>{
      const user=result.user;
      console.log(user);
      form.reset();
      
    })
    .catch(error=>{
      console.error(error);
     
    })
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" name="email" placeholder="email"></input>
        </div>
        <div>
          <input type="password" name="password" placeholder="password"></input>
        </div>
        <Button variant="primary" type="submit">Login</Button>
      </form>
      
      <p className="mt-5">
        New to ema-john? <Link to="/register">Create a new account</Link>
      </p>
      <p className="text-danger"></p>
    </div>
  );
};

export default Login;
