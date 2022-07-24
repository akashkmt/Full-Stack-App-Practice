import React from 'react'
import {LoginContext} from '../../Context/Login/LoginContext';
import './Homepage.css'

function Homepage() {
  const {user} = React.useContext(LoginContext);
  return (
    <div>
        
        <div className='user-box'>
            {
                user ? "User Logged In" : "User Not Logged In"
            }
        </div>
    </div>
  )
}

export default Homepage