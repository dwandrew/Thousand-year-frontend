import React, { Component } from 'react'
import ImmortalList from '../immortals/ImmortalList'

export class Dashboard extends Component {
    render() {
        return (
            <div className = "dashboard">
                <div className = 'dash_row_left'><ImmortalList/></div>
                <div className = 'dash_row_right'></div>
            </div>
        )
    }
}

export default Dashboard
