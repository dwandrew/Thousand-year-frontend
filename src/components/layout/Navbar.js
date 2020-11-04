import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export class NavBar extends Component {
    render(){
        let links
        this.props.state.auth.logged_in ?  links = <SignedInLinks/> :  links = <SignedOutLinks/>
    return (
        <nav >
            <div>
                {links}
            </div>
        </nav>
    )
    }
}
    const mapStateToProps = (state) => {
        return {state}
    }   

export default connect(mapStateToProps)(NavBar)