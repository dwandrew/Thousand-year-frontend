import React from 'react'
import { NavLink } from 'react-router-dom'

const SingedOutLinks = () => {
    return (

            <ul className = 'navbar'>
                <li><NavLink to='/'>Dash</NavLink></li>
                <li><NavLink to='/signin'> Sign In </NavLink></li>
                <li><NavLink to='/signup'> Sign Up </NavLink></li>
            </ul>
    )
    }

export default SingedOutLinks