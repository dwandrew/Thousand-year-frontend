import React, { Component } from 'react'
import ImmortalList from '../immortals/ImmortalList'
import { connect } from 'react-redux'
 
export class Dashboard extends Component {
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

export default connect(mapStateToProps)(Dashboard)
