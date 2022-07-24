import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import {LoginContext} from '../../Context/Login/LoginContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {setUser} = React.useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const body = {
      email,
      password
    }
    // console.log(body);
    try {
      let data = await fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      let response = await data.json();
      // console.log(token);
      alert('login success');
      let token = response.token;
      localStorage.setItem('token', token);
      setUser(token);
        navigate('/');
      

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='loginBox'>
      
      <form onSubmit={handleLogin} className='login-form'>
        <h3>Login</h3>
        <label>Email:<input type="text" name="username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></label>
        <label>Password:<input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
        <div>
        <Link to='/register'>Create an Account</Link>
        <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login