import React, { Component } from 'react'
import ImmortalList from '../immortals/ImmortalList'
import { connect } from 'react-redux'
import { getImmortals } from '../../actions/ImmortalActions'
 
export class Dashboard extends Component {
    state = {
        current_user:''
    }
    
    componentDidMount(){
       
    }

    componentDidUpdate(){
        if (this.state.current_user === '' && this.props.state.auth.logged_in){
        this.setState({
            current_user: this.props.state.auth.user.user.id
        }
        )
        this.props.getImmortals(this.props.state.auth.user.user.id)
    }
    }
    
    render() {
        const { immortals } = this.props.state.immortal
        let content
        if (this.props.state.auth.logged_in && this.props.state.immortal.loading ){
        let user_id =  this.props.state.auth.user.user.id
        return content =  
        <div className = "dashboard">
            <div className = 'dash_row_left'><ImmortalList user_id = {user_id} immortals = {immortals}/></div>
            <div className = 'dash_row_right'></div>
        </div>
        }
        else if(this.props.state.auth.logged_in && !this.props.state.immortal.loading ){
            return content =
            <div>
                <p>Loading Content....</p>
            </div>
        }
        else { return content = 
        <div>
            <p>
                Log In to View Immortals
            </p>
        </div>}

        return (
           {content}
        )
    }
}

const mapStateToProps = (state) => {
    return {state
    }
}

const mapDispatchToProps =  (dispatch) => {
    return{
        getImmortals: (user_id) => dispatch(getImmortals(user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
