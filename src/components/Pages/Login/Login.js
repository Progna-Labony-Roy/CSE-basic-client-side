import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const [error,setError]=useState('');
  const {signIn ,setLoading}=useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();

  const from=location.state?.from?.pathname || '/'

  const handleLoginButton = (event) =>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;

    signIn(email,password)
    .then(result =>{
      setError('')
      const user=result.user;
      console.log(user);
      form.reset();
      if(user.emailVeryfied){
        navigate(from ,{replace:true})
      }
      else{
        toast.error("Please varify your emial");
      }
    })
    .catch(error=>{
      console.error(error);
      setError(error.message);
    })
    .finally( () =>{
      setLoading(false);
    })
  }
    return (
        <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLoginButton}>
          <div>
            <label className="form-control" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" placeholder="email"></input>
          </div>
          <div>
            <label className="form-control" htmlFor="password">
              Password
            </label>
            <input type="password" name="password" placeholder="password"></input>
          </div>
          <input type='submit' className='btn-submit' vlaue='login'></input>
        </form>
        <p>New to ema-john? <Link to='/register'>Create a new account</Link></p>
        <p className='text-danger'>{error}</p>
      </div>
    );
};

export default Login;