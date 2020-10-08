import React, { Component } from 'react'
import ImmortalList from '../immortals/ImmortalList'
import { connect } from 'react-redux'
import { getImmortals } from '../../actions/ImmortalActions'
 
export class Dashboard extends Component {
    state = {
        current_user:''
    }
    
    componentDidUpdate(){
        if (this.state.current_user === '' && this.props.auth.logged_in){
            console.log(this.props)
        this.setState({
            current_user: this.props.auth.user.user.id
        }
        )
        this.props.getImmortals(this.props.auth.user.user.id)
    }
    }
    
    render() {

        const immortals = this.props.immortal.immortals
        if (this.props.auth.logged_in && this.props.immortal.loading ){
        let user_id =  this.props.auth.user.user.id
        return ( 
        <div className = "dashboard">
            <div className = 'dash_row_left'><ImmortalList user_id = {user_id} immortals = {immortals}/></div>
            <div className = 'dash_row_right'></div>
        </div>)
        }
        else if(this.props.auth.logged_in && !this.props.immortal.loading ){
            return (
            <div>
                <p>Loading Content....</p>
            </div>)
        }
        else { return (
        <div>
            <p>
                Log In to View Immortals
            </p>
        </div>
        )}
    }
}

const mapStateToProps = (state) => {
    return {...state,
        immortals: state.immortal.immortals,
        auth: state.auth
    }
}

const mapDispatchToProps =  (dispatch) => {
    return{
        getImmortals: (user_id) => dispatch(getImmortals(user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
