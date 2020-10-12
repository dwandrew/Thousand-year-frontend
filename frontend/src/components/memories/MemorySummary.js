import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateMemory from './CreateMemory'

export class MemorySummary extends Component{
    state = {
        editing: false
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){    
       let { memory } = this.props
       if (!this.state.editing){

    return (
            <li>
                <div key= {memory.id} >
                    <h3>Memory id: {memory.id}</h3>
                    <p>Memory in diary? {memory.in_diary ? "Yes": 'No'}</p>
                    <p>Memory lost? {memory.lost ? "Yes": 'No'}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateMemory editing ={this.state.editing} editData={ memory } handleParentEdit = {this.handleEdit} />
    }
    }
}

export default connect()(MemorySummary)
