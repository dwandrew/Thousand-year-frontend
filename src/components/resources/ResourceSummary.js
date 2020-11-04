import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateResource from './CreateResource'

export class ResourceSummary extends Component{
    state = {
        editing: false
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){    
       let { resource } = this.props
       if (!this.state.editing){

    return (
            <li>
                <div key= {resource.id} className= {resource.lost ? 'card-bloody ':'card'}>
                    <p>Resource: {resource.name}</p>
                    <p>Stationary: {resource.stationary ? "Yes" : "No"}</p>
                    <p>Lost: {resource.lost ? "Yes" : 'No'}</p>
                    <p>Description: {resource.description}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateResource editing ={this.state.editing} editData={ resource } handleParentEdit = {this.handleEdit} />
    }
    }
}

export default connect()(ResourceSummary)
