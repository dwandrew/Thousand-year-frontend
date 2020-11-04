import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateJournal from './CreateJournal'

export class JournalSummary extends Component{
    state = {
        editing: false
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){    
       let { journal } = this.props
       if (!this.state.editing){

    return (
            <li>
                <div key= {journal.id} className = 'card' >
                    <p>journal: {journal.entry}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateJournal editing ={this.state.editing} editData={ journal } handleParentEdit = {this.handleEdit} />
    }
    }
}

export default connect()(JournalSummary)
