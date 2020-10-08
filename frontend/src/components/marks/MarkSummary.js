import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateMark from './CreateMark'

export class MarkSummary extends Component{
    state = {
        editing: false
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){    
       let { mark } = this.props
       if (!this.state.editing){

    return (
            <li>
                <div key= {mark.id} >
                    <p>Mark: {mark.name}</p>
                    <p>Description: {mark.description}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateMark editing ={this.state.editing} editData={ mark } handleParentEdit = {this.handleEdit} />
    }
    }
}

export default connect()(MarkSummary)
