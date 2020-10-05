import React, { Component } from 'react'
import ImmortalList from '../immortals/ImmortalList'
import { connect } from 'react-redux'
import { getImmortals } from '../../actions/ImmortalActions'
 
export class Dashboard extends Component {
    
    componentDidMount(){
        this.props.getImmortals()
    }
    
    
    
    render() {
        const { immortals } = this.props
        return (
            <div className = "dashboard">
                <div className = 'dash_row_left'><ImmortalList immortals = {immortals}/></div>
                <div className = 'dash_row_right'></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        immortals: state.immortal.immortals
    }
}

const mapDispatchToProps =  (dispatch) => {
    return{
        getImmortals: () => dispatch(getImmortals())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
