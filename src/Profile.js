import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div>
    <h2>hello</h2>
        <h3> Welcome to Your Profile </h3>   
        <Link to='settings'> update your profile </Link> 
        <Outlet/>
    
        
    </div>
  )
}

export default Profile
