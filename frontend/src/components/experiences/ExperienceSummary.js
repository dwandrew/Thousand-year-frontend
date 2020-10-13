import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateExperience from './CreateExperience'

export class ExperienceSummary extends Component{
    state = {
        editing: false
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){    
       let { experience } = this.props
       if (!this.state.editing){

    return (
            <li>
                <div key= {experience.id} >
                    <p>Experience prompt: {experience.prompt}</p>
                    <p>Description: {experience.description}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateExperience editing ={this.state.editing} editData={ experience } handleParentEdit = {this.handleEdit} />
    }
    }
}

export default connect()(ExperienceSummary)
