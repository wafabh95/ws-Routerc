import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar() {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
                <li><Link to="/AbouteUs"> AbouteUs </Link></li>
                <li><Link to="/Profil"> Profile </Link></li>
                <li> <Link to="/Products" > Products </Link> </li>
            </ul>
        </div>
    )
}

export default NavBar