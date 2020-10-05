import React from 'react'
import { NavLink } from 'react-router-dom'

const SingedInLinks = () => {
    return (

            <ul>
                <li><NavLink to='/create'> New Chronicle </NavLink></li>
                <li><NavLink to='/'> Current Chronicles </NavLink></li>
                <li><NavLink to='/'> Logout </NavLink></li>
            </ul>
    )
    }

export default SingedInLinks