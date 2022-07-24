import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      name: name,
      image: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"
    }

    try {
      let data = await fetch('http://localhost:8080/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      let response = await data.json();
      // console.log(response);
      if(response.message){
        alert(response.message);
      }
      else{
        alert("Registration Successful");
        navigate('/login');
      }

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='registerBox'>
      <form className='register-form' onSubmit={handleRegister}>
        <h3>Register</h3>
        <label>Name:<input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/></label>
        <label>Email:<input type="text" name="username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></label>
        <label>Password:<input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
        <div>
        <Link to='/login'>Already have an Account</Link>
        <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}

export default Register