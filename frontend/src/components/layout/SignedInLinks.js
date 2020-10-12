import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { destroySession } from '../../actions/userActions'

export class SingedInLinks extends Component {
    
    logout = () =>{
        this.props.destroySession()
    }
    render(){
    return (
            <ul className = 'navbar'>
                <li><NavLink to='/'>Dash</NavLink> </li>
                <li><NavLink to='/create'> New Chronicle </NavLink> </li>
                <li><NavLink to='/'> Current Chronicles </NavLink> </li>
                <li><NavLink to='/' onClick={this.logout}> Logout </NavLink> </li>
            </ul>
    )
    }
}


const mapDispatchToProps =  (dispatch) => {
    return{
        destroySession: () => dispatch(destroySession())
    }
}



export default connect(null, mapDispatchToProps)(SingedInLinks)