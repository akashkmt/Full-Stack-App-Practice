import React from 'react'
import {Link} from 'react-router-dom';
import LoginContext from '../../Context/Login/LoginContext';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const {user, setUser} = React.useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    }
  return (
    <div className='navbar'>
        <Link className='linkTag' to='/' >HOMEPAGE</Link>
        {
          user ? <Link className='linkTag' to='/todos'>TODOS</Link> : null
        }
        {
            user ? <button className='logoutBtn' onClick={handleLogout}>LOGOUT</button> : <Link className='linkTag' to='/login' >LOGIN</Link>
        }
    </div>
  )
}

export default Navbar