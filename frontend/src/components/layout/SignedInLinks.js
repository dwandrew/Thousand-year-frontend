import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { destroySession } from '../../actions/userActions'
import { withRouter } from 'react-router-dom'
import { getAllPublishedImmortals } from '../../actions/ImmortalActions'

export class SingedInLinks extends Component {
    
    logout = () =>{
        let history = this.props.history
        this.props.destroySession(this.props.getAllPublishedImmortals, history)
    }
    render(){
    return (
            <ul className = 'navbar'>
                <li><NavLink to='/'>Home</NavLink> </li>
                <li><NavLink to='/instructions'>Instructions</NavLink> </li>
                <li><NavLink to='/create'> New Chronicle </NavLink> </li>
                <li><NavLink to='/'> Current Chronicles </NavLink> </li>
                <li onClick={this.logout}> <NavLink to='/'>Logout </NavLink> </li>
            </ul>
    )
    }
}


const mapDispatchToProps =  (dispatch) => {
    return{
        destroySession: (getAllPublishedImmortals, history) => dispatch(destroySession(getAllPublishedImmortals, history)),
        getAllPublishedImmortals: () => dispatch(getAllPublishedImmortals())
    }
}



export default withRouter(connect(null, mapDispatchToProps)(SingedInLinks))