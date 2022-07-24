import React from 'react'
import {Link} from 'react-router-dom';
import LoginContext from '../../Context/Login/LoginContext';
import './Navbar.css'

function Navbar() {
    const {user, setUser} = React.useContext(LoginContext);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
    }
  return (
    <div className='navbar'>
        <Link className='linkTag' to='/' >HOMEPAGE</Link>
        {
            user ? <button className='logoutBtn' onClick={handleLogout}>LOGOUT</button> : <Link className='linkTag' to='/login' >LOGIN</Link>
        }
    </div>
  )
}

export default Navbar