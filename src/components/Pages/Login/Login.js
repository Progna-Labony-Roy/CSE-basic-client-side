import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Context/AuthProvider";
import "./Login.css";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div>
          <input type="email" name="email" placeholder="email"></input>
        </div>
        <div>
          <input type="password" name="password" placeholder="password"></input>
        </div>
        <input type="submit" className="btn-submit" vlaue="login"></input>
      </form>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-primary"
          className="btn-width mt-3"
        >
          {" "}
          <FaGoogle></FaGoogle> Log In with google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Log In with github
        </Button>
      </ButtonGroup>
      <p className="mt-5">
        New to ema-john? <Link to="/register">Create a new account</Link>
      </p>
      <p className="text-danger"></p>
    </div>
  );
};

export default Login;
